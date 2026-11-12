# Coffee Guide

A small Next.js app that lists espresso settings for each coffee bean and grinder I use. It is written to be read on a phone while the machine is warming up.

The app has no database, no API routes and no environment variables. Every page is static content in a React component.

## What it contains

The home page links to one guide per bean and grinder pair, four guides in total.

| Bean | Integrated grinder (Sage Barista Touch) | Timemore Sculptor 078s |
| --- | --- | --- |
| Gota Blend (Gota Coffee, Vienna) | `/beans/gota-blend/integrated-grinder` | `/beans/gota-blend/timemore-sculptor` |
| Vienna Calling (Wildkaffee, Vienna) | `/beans/vienna-calling/integrated-grinder` | `/beans/vienna-calling/timemore-sculptor` |

Each guide has the same parts:

- A table of starting settings for a double shot, such as dose, grind position and extraction time.
- A step-by-step dialing-in routine.
- Milk drink notes for cappuccino and latte macchiato, and a section on the Barista Touch Auto MilQ system.

The two Gota Blend guides also list adjustments for shots that run too fast, too slow, sour or bitter.

The Vienna Calling guides also list the roast and origins (El Salvador, Colombia, Rwanda).

## Stack

- Next.js ^16.4.6 with the App Router
- React ^19.3.1
- TypeScript ^6.0.3
- Tailwind CSS ^4.3.5 through `@tailwindcss/postcss`, plus hand-written keyframe animations in `app/globals.css`
- ESLint 10 with `typescript-eslint` and `eslint-config-next`

Machine photos in `public/images` go through the `next/image` component.

TypeScript is held at 6.x because `typescript-eslint` does not support TypeScript 7 yet, and `bun run lint` fails with it.

## Run it

Bun is the package manager (`bun.lock`).

```bash
bun install
bun run dev      # development server on http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
```

Other scripts:

```bash
bun run lint
bun run typecheck
bun run test
```

`bun run test` needs a production build first. The single test in `tests/production.test.mjs` starts `next start` on port 4317, then checks that the home page and all four guides return 200, that each guide has a settings table, that linked images and icons load, and that an unknown guide path returns 404.

## Deployment

`nixpacks.toml` builds the app with `bun install` and `bun run build`, and starts it with `bunx next start -H 0.0.0.0`. The repository has no other deploy configuration.

## Adding a bean

1. Copy an existing folder under `app/beans/`, for example `app/beans/gota-blend`, to `app/beans/<new-bean>`.
2. Edit the `page.tsx` file in each grinder folder with the new settings.
3. Add the two links to `app/page.tsx`.
4. Add the new routes to the list in `tests/production.test.mjs`.

## License

MIT, see `LICENSE`.
