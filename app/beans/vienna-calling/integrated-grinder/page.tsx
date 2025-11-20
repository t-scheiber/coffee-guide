import Link from 'next/link'
import Image from 'next/image'

export default function ViennaCallingIntegratedGrinder() {
  return (
    <div className="container">
      <div className="mb-6">
        <Link
          href="/"
          className="text-purple-600 hover:text-purple-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center text-purple-800 mb-2">
        ☕ Vienna Calling + Integrated Grinder
      </h1>
      <p className="text-center text-gray-600 mb-8 italic">
        Complete guide for dialing in your espresso with Vienna Calling beans (Wildkaffee Vienna) using the Sage Barista Touch integrated grinder
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
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          🫘 About Vienna Calling Beans
        </h2>
        <div className="highlight-box">
          <ul className="ml-4">
            <li><strong>Roaster:</strong> Wildkaffee, Vienna</li>
            <li><strong>Roast Date:</strong> September 9, 2025</li>
            <li><strong>Roast Level:</strong> Medium to Dark (Mittlere bis dunkle Röstung)</li>
            <li><strong>Blend:</strong> 100% Arabica</li>
            <li><strong>Origins:</strong> El Salvador, Colombia, Rwanda</li>
            <li><strong>Farms:</strong> Coffee School, Anei Arhuaco, Community Project Coffee Rwanda</li>
            <li><strong>Varieties:</strong> Bourbon, Colombia</li>
            <li><strong>Processing:</strong> Washed, Natural</li>
            <li><strong>Flavor Profile:</strong> Chocolatey, Sweet, Berry notes</li>
            <li><strong>Suitable for:</strong> Espresso (Siebträger)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          🎯 Initial Settings for Your Sage Barista Touch
        </h2>

        <h3 className="text-xl font-medium text-purple-600 mb-3">Grind Settings</h3>
        <div className="highlight-box">
          <strong>Starting Point:</strong> Set your grinder to <strong>setting 10-13</strong> (out of 30 available settings)<br />
          Vienna Calling is a medium-dark roast, which typically requires a slightly coarser grind than lighter roasts. The darker roast makes the beans more brittle and easier to extract.
        </div>

        <h3 className="text-xl font-medium text-purple-600 mb-3">Dose Settings</h3>
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
              <td>For double shot</td>
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

        <h3 className="text-xl font-medium text-purple-600 mb-3">Extraction Parameters</h3>
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
              <td>Yield</td>
              <td>36g out</td>
              <td>1:2 ratio for milk drinks</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>92-93°C</td>
              <td>Medium-dark roast can handle slightly lower temp</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          🔧 Step-by-Step Dialing In Process
        </h2>

        <div className="step">
          <span className="step-number">Step 1:</span> <strong>Initial Setup</strong>
          <ul className="mt-2 ml-4">
            <li>Purge the grinder with a few beans to clear any old grounds</li>
            <li>Set grind size to 12 (slightly coarser for medium-dark roast)</li>
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
            <li><strong>If too bitter:</strong> Grind coarser or lower temperature to 92°C</li>
            <li><strong>If lacking body:</strong> Grind finer or increase temperature to 93°C</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          🍫 Flavor Profile Notes
        </h2>
        <div className="highlight-box">
          <strong>Expected Flavors:</strong>
          <ul className="mt-2 ml-4">
            <li><strong>Chocolate:</strong> Rich, smooth chocolate notes from the medium-dark roast</li>
            <li><strong>Sweetness:</strong> Natural sweetness from the washed and natural processing</li>
            <li><strong>Berry:</strong> Subtle berry notes, especially from the Rwanda beans</li>
            <li><strong>Body:</strong> Full body, perfect for milk-based drinks</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          🥛 Milk-Based Drinks
        </h2>
        <p>Vienna Calling is excellent for milk-based drinks:</p>

        <h3 className="text-xl font-medium text-purple-600 mb-3">Auto MilQ System</h3>
        <ul className="ml-4">
          <li><strong>Temperature:</strong> 60-65°C for optimal sweetness</li>
          <li>The chocolate and sweet notes pair beautifully with milk</li>
          <li>Select your drink type and the Barista Touch will texture accordingly</li>
          <li>Perfect for cappuccinos and latte macchiatos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          💡 Pro Tips
        </h2>
        <div className="tip">
          <ul className="ml-4">
            <li><strong>Keep a Log:</strong> Note your settings for each adjustment</li>
            <li><strong>Age Tracking:</strong> These beans are from Sept 9, 2025 - track how they evolve</li>
            <li><strong>Medium-Dark Advantage:</strong> More forgiving than light roasts, easier to dial in</li>
            <li><strong>Puck Prep:</strong> The machine&apos;s assisted tamping is good, but ensure the coffee bed is level first</li>
            <li><strong>Weekly Adjustments:</strong> As beans age, you&apos;ll typically need to go 1-2 clicks finer each week</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
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
            <li>Combine and enjoy the chocolatey, sweet flavors!</li>
          </ol>
        </div>
      </section>

      <div className="highlight-box text-center">
        <strong>Remember:</strong> Vienna Calling from Wildkaffee is a beautiful medium-dark roast blend. The chocolate and sweet notes make it perfect for milk drinks. Start with these settings and adjust to your taste!
      </div>

      <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500">
        <p>Happy brewing! ☕</p>
      </footer>
    </div>
  )
}
