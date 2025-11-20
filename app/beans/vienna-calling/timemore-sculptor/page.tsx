import Link from 'next/link'
import Image from 'next/image'

export default function ViennaCallingTimemoreGuide() {
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
        ☕ Vienna Calling + Timemore Sculptor 078s
      </h1>
      <p className="text-center text-gray-600 mb-8 italic">
        Complete guide for dialing in your espresso with Vienna Calling beans (Wildkaffee Vienna) using the Timemore Sculptor 078s grinder
      </p>

      <div className="mb-8 text-center">
        <div className="inline-block bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div className="image-hover overflow-hidden rounded-lg mb-3">
            <Image 
              src="/images/timemore-sculptor-078s-black.webp" 
              alt="Timemore Sculptor 078S Black Coffee Grinder"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="text-sm md:text-base text-gray-700 font-semibold">Timemore Sculptor 078s (Black)</p>
          <p className="text-xs md:text-sm text-gray-500">External Grinder - 78mm Flat Burrs</p>
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
          🎯 Initial Settings for Timemore Sculptor 078s
        </h2>

        <h3 className="text-xl font-medium text-purple-600 mb-3">Grind Settings</h3>
        <div className="highlight-box">
          <strong>Starting Point:</strong> Set your grinder to <strong>setting 7-9</strong> (on the micro-adjustment dial)<br />
          Vienna Calling is a medium-dark roast, which requires a slightly coarser grind than lighter roasts. The darker roast makes the beans more brittle and easier to extract. Start coarser and adjust finer as needed.
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
              <td>Grind Method</td>
              <td>Single dosing</td>
              <td>Weigh 18g beans, pour into hopper</td>
            </tr>
            <tr>
              <td>Retention</td>
              <td>~0.2g</td>
              <td>Very low retention, use bellows</td>
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
          <span className="step-number">Step 1:</span> <strong>Preparation</strong>
          <ul className="mt-2 ml-4">
            <li>Weigh exactly 18g of Vienna Calling beans</li>
            <li>Set Timemore grinder to position 8 on the dial</li>
            <li>Ensure hopper and chamber are clean</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 2:</span> <strong>Grinding</strong>
          <ul className="mt-2 ml-4">
            <li>Pour 18g beans into hopper</li>
            <li>Grind into portafilter or dosing cup</li>
            <li>Use bellows to purge remaining grounds (~0.2g retention)</li>
            <li>Transfer to portafilter if using dosing cup</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 3:</span> <strong>Puck Preparation</strong>
          <ul className="mt-2 ml-4">
            <li>Use WDT tool to break up clumps and distribute evenly</li>
            <li>Level the coffee bed</li>
            <li>Tamp with consistent pressure</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 4:</span> <strong>Extraction</strong>
          <ul className="mt-2 ml-4">
            <li>Lock portafilter into Barista Touch</li>
            <li>Place scale under cup and tare</li>
            <li>Start extraction, timing from first drip</li>
            <li>Stop at 36g output</li>
          </ul>
        </div>

        <div className="step">
          <span className="step-number">Step 5:</span> <strong>Adjustment Guide</strong>
          <ul className="mt-2 ml-4">
            <li><strong>If extraction &lt; 25 seconds:</strong> Adjust grinder <strong>finer by small increments</strong></li>
            <li><strong>If extraction &gt; 30 seconds:</strong> Adjust grinder <strong>coarser by small increments</strong></li>
            <li><strong>If too bitter:</strong> Grind coarser or lower temperature</li>
            <li><strong>If lacking sweetness:</strong> Ensure proper extraction time (not too fast)</li>
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
            <li><strong>Complexity:</strong> Multi-origin blend provides depth and complexity</li>
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
          <li>The medium-dark roast cuts through milk perfectly</li>
          <li>Perfect for cappuccinos and latte macchiatos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-l-4 border-purple-700 pl-4">
          💡 Pro Tips for Timemore Sculptor
        </h2>
        <div className="tip">
          <ul className="ml-4">
            <li><strong>Single Dosing:</strong> The Sculptor is designed for single dosing - always weigh your beans</li>
            <li><strong>Bellows:</strong> Use the bellows to purge any retention between shots</li>
            <li><strong>Consistency:</strong> The 078s produces very consistent particle distribution</li>
            <li><strong>WDT Essential:</strong> Always use WDT tool for even extraction</li>
            <li><strong>Grind Setting Log:</strong> Note your exact dial position for repeatability</li>
            <li><strong>Medium-Dark Roast:</strong> Less prone to channeling than lighter roasts</li>
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
            <li>Turn on Barista Touch (heats up quickly)</li>
            <li>Weigh 18g Vienna Calling beans</li>
            <li>Pour beans into Timemore Sculptor hopper</li>
            <li>Grind into portafilter</li>
            <li>Use bellows to purge remaining grounds</li>
            <li>WDT and distribute grounds evenly</li>
            <li>Level and tamp</li>
            <li>Extract 36g in 25-30 seconds</li>
            <li>Steam milk using Auto MilQ</li>
            <li>Combine and enjoy the chocolatey goodness!</li>
          </ol>
        </div>
      </section>

      <div className="highlight-box text-center">
        <strong>Remember:</strong> The Timemore Sculptor 078s offers exceptional grind quality. Vienna Calling&apos;s medium-dark roast is forgiving and produces rich, chocolatey espresso perfect for milk drinks!
      </div>

      <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500">
        <p>Happy brewing! ☕</p>
      </footer>
    </div>
  )
}
