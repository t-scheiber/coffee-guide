import Link from 'next/link'
import Image from 'next/image'

export default function GotaIntegratedGrinder() {
  return (
    <div className="container">
      <div className="mb-6">
        <Link
          href="/"
          className="text-amber-600 hover:text-amber-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center text-amber-800 mb-2">
        ☕ Gota Blend + Integrated Grinder
      </h1>
      <p className="text-center text-gray-600 mb-8 italic">
        Complete guide for dialing in your espresso with fresh Gota Blend beans using the Sage Barista Touch integrated grinder
      </p>

      <div className="mb-8 text-center">
        <div className="inline-block bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div className="image-hover overflow-hidden rounded-lg mb-3">
            <Image 
              src="/images/sage-barista-touch.avif" 
              alt="Sage Barista Touch Espresso Machine with Integrated Barazza Grinder"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold">Sage Barista Touch</p>
          <p className="text-xs md:text-sm text-gray-500">Integrated Barazza Grinder</p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🎯 Initial Settings for Your Sage Barista Touch
        </h2>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Grind Settings</h3>
        <div className="highlight-box">
          <strong>Starting Point:</strong> Set your grinder to <strong>setting 12-15</strong> (out of 30 available settings)<br />
          The Sage Barista Touch&apos;s integrated grinder is quite capable, and since you&apos;re using fresh beans from Gota Coffee, you&apos;ll likely need a slightly coarser setting initially due to degassing.
        </div>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Dose Settings</h3>
        <table className="settings-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Setting</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Target Dose</td>
              <td>18 grams</td>
              <td>For double shot (standard double basket)</td>
            </tr>
            <tr>
              <td>Grind Time</td>
              <td>18-20 seconds</td>
              <td>Adjust to consistently achieve 18g</td>
            </tr>
            <tr>
              <td>Verification</td>
              <td>Use scale</td>
              <td>Ensure consistent dosing</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Extraction Parameters</h3>
        <table className="settings-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Target</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extraction Time</td>
              <td>25-30 seconds</td>
              <td>From first drip to stop</td>
            </tr>
            <tr>
              <td>Yield Ratio</td>
              <td>1:2 (18g in → 36g out)</td>
              <td>Standard espresso ratio</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>93°C</td>
              <td>Default is usually good for medium roasts</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🔧 Step-by-Step Dialing In Process
        </h2>

        <div className="step">
          <span className="step-number">Step 1:</span> <strong>Initial Setup</strong>
          <ul className="mt-2 ml-4">
            <li>Purge the grinder with a few beans to clear any old grounds</li>
            <li>Set grind size to 14 (middle range)</li>
            <li>Program dose time to deliver 18g</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 2:</span> <strong>First Shot Test</strong>
          <ul className="mt-2 ml-4">
            <li>Grind 18g directly into portafilter</li>
            <li>Level and use the assisted tamping feature</li>
            <li>Place scale under cup and tare</li>
            <li>Run extraction, timing from first drip</li>
            <li>Stop at 36g output</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 3:</span> <strong>Adjustment Guide</strong>
          <ul className="mt-2 ml-4">
            <li><strong>If extraction &lt; 25 seconds:</strong> Make grind <strong>1-2 steps finer</strong></li>
            <li><strong>If extraction &gt; 30 seconds:</strong> Make grind <strong>1-2 steps coarser</strong></li>
            <li><strong>If sour/acidic:</strong> Grind finer or increase yield slightly</li>
            <li><strong>If bitter/harsh:</strong> Grind coarser or decrease yield slightly</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🌱 Special Considerations for Fresh Gota Blend
        </h2>
        <div className="warning">
          <strong>Fresh Bean Characteristics:</strong>
          <ul className="mt-2 ml-4">
            <li>Fresh beans release more CO2, which can cause faster extraction initially</li>
            <li>You might need to start slightly coarser (setting 15-16)</li>
            <li>As beans age over the next week, you may need to gradually go finer</li>
            <li>Fresh beans often produce more crema but can be harder to dial in</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🥛 For Your Daily Cappuccino/Latte Macchiato
        </h2>
        <p>Once your espresso is dialed in:</p>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Milk Settings</h3>
        <ul className="ml-4">
          <li><strong>Temperature:</strong> 60-65°C for optimal sweetness</li>
          <li><strong>Cappuccino:</strong> Use less milk, more microfoam (1:1:1 ratio espresso:milk:foam)</li>
          <li><strong>Latte Macchiato:</strong> Use more milk, less foam, pour milk first then espresso through foam</li>
        </ul>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Auto MilQ System</h3>
        <ul className="ml-4">
          <li>The Barista Touch&apos;s automatic milk texturing is excellent</li>
          <li>Select your drink type and it will texture accordingly</li>
          <li>For work transport, consider using a good thermal travel mug</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          💡 Pro Tips
        </h2>
        <div className="tip">
          <ul className="ml-4">
            <li><strong>Keep a Log:</strong> Note your settings for each adjustment - this helps you learn your beans</li>
            <li><strong>Single Dosing:</strong> For ultimate freshness, weigh beans for each shot rather than filling the hopper</li>
            <li><strong>WDT Tool:</strong> Consider using a distribution tool for even extraction</li>
            <li><strong>Puck Prep:</strong> The machine&apos;s assisted tamping is good, but ensure the coffee bed is level first</li>
            <li><strong>Weekly Adjustments:</strong> As beans age, you&apos;ll typically need to go 1-2 clicks finer each week</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          ⚡ Typical Workflow for Daily Use
        </h2>
        <div className="workflow">
          <h3 className="text-xl font-medium text-blue-600 mb-3">Daily Espresso Routine</h3>
          <ol className="ml-4">
            <li>Turn on machine (it heats up quickly)</li>
            <li>Weigh 18g beans</li>
            <li>Grind into portafilter</li>
            <li>Level and tamp</li>
            <li>Extract 36g in 25-30 seconds</li>
            <li>Steam milk using Auto MilQ</li>
            <li>Combine and enjoy!</li>
          </ol>
        </div>
      </section>

      <div className="highlight-box text-center">
        <strong>Remember:</strong> Start with these settings and make small adjustments based on taste. The Gota Blend from Vienna should produce excellent results - they&apos;re known for quality roasting. Once you find your sweet spot, you can save it as a preset on the Barista Touch for consistent daily results!
      </div>

      <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500">
        <p>Happy brewing! ☕</p>
      </footer>
    </div>
  )
}
