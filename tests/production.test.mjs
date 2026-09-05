import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {setTimeout as delay} from 'node:timers/promises';
import {test} from 'node:test';

// Exercise the deployed server behavior, including Next's image optimizer.
// No production URL or credentials are used. CI runs this with external networking disabled.
test('production guides, navigation and assets work', {timeout: 60000}, async t => {
  const origin = 'http://127.0.0.1:4317';
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '4317'], {
    env: {...process.env, NEXT_TELEMETRY_DISABLED: '1'}, stdio: 'ignore',
  });
  const closed = once(server, 'close');
  t.after(async () => {
    server.kill('SIGTERM');
    const timer = setTimeout(() => server.kill('SIGKILL'), 3000);
    try { await closed; } finally { clearTimeout(timer); }
  });
  async function get(url) {
    assert.ok(url.startsWith('/') && !url.startsWith('//'), 'only local application paths');
    return fetch(origin + url, {redirect: 'error', signal: AbortSignal.timeout(10000)});
  }
  let home;
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw Error('Production server exited before it was ready');
    try { home = await get('/'); break; } catch { await delay(100); }
  }
  assert.equal(home?.status, 200, 'home page responds');
  const html = await home.text();
  assert.match(html, /<h1\b[^>]*>[\s\S]*?Coffee Guide[\s\S]*?<\/h1>/);
  const routes = [
    ['/beans/gota-blend/integrated-grinder', 'Gota Blend', 'Integrated Grinder'],
    ['/beans/gota-blend/timemore-sculptor', 'Gota Blend', 'Timemore Sculptor'],
    ['/beans/vienna-calling/integrated-grinder', 'Vienna Calling', 'Integrated Grinder'],
    ['/beans/vienna-calling/timemore-sculptor', 'Vienna Calling', 'Timemore Sculptor'],
  ];
  const assets = new Set();
  const collectAssets = body => {
    for (const match of body.matchAll(/(?:src|href)="([^"<>]+)"/g)) {
      const url = match[1].replaceAll('&amp;', '&');
      if (url.startsWith('/_next/') || url.startsWith('/images/')) assets.add(url);
    }
  };
  collectAssets(html);
  for (const [route, bean, grinder] of routes) {
    assert.ok(html.includes(`href="${route}"`), `home links to ${route}`);
    const response = await get(route);
    assert.equal(response.status, 200, route);
    const page = await response.text();
    const heading = page.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1];
    assert.ok(heading?.includes(bean) && heading.includes(grinder), `correct guide at ${route}`);
    assert.ok(page.includes('href="/"'), 'guide has a home link');
    assert.match(page, /<table\b/, 'brewing settings render');
    collectAssets(page);
  }
  assert.ok(assets.size > 3, 'styles, scripts and guide images are emitted');
  for (const asset of assets) {
    const response = await get(asset);
    assert.equal(response.status, 200, asset);
    assert.ok(!response.headers.get('content-type')?.includes('text/html'), 'assets do not return an error document');
    assert.ok((await response.arrayBuffer()).byteLength > 0, 'asset is not empty');
  }
  assert.equal((await get('/beans/missing-guide')).status, 404, 'unknown guides return 404');
});
