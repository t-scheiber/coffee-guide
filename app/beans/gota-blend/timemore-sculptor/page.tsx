import Link from 'next/link'
import Image from 'next/image'

export default function GotaTimemoreGuide() {
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
        ☕ Gota Blend + Timemore Sculptor 078s
      </h1>
      <p className="text-center text-gray-600 mb-8 italic">
        Complete guide for dialing in your espresso with fresh Gota Blend beans using the Timemore Sculptor 078s grinder
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
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🎯 Initial Settings for Timemore Sculptor 078s
        </h2>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Grind Settings</h3>
        <div className="highlight-box">
          <strong>Starting Point:</strong> Set your grinder to <strong>setting 8-10</strong> (on the micro-adjustment dial)<br />
          The Timemore Sculptor 078s is a high-precision grinder with 78mm flat burrs. For fresh Gota Blend beans, start slightly coarser due to degassing. The grinder uses a stepless adjustment system with numbered reference points.
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
              <td>Yield</td>
              <td>36g out</td>
              <td>1:2 ratio for milk drinks</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>93°C</td>
              <td>Set on Barista Touch</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🔧 Step-by-Step Dialing In Process
        </h2>

        <div className="step">
          <span className="step-number">Step 1:</span> <strong>Preparation</strong>
          <ul className="mt-2 ml-4">
            <li>Weigh exactly 18g of Gota Blend beans</li>
            <li>Set Timemore grinder to position 9 on the dial</li>
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
            <li>You might need to start slightly coarser (setting 10)</li>
            <li>As beans age over the next week, you may need to gradually go finer</li>
            <li>Fresh beans often produce more crema but can be harder to dial in</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          🥛 Milk-Based Drinks
        </h2>
        <p>Once your espresso is dialed in:</p>

        <h3 className="text-xl font-medium text-amber-600 mb-3">Auto MilQ System</h3>
        <ul className="ml-4">
          <li><strong>Temperature:</strong> 60-65°C for optimal sweetness</li>
          <li>The Barista Touch&apos;s automatic milk texturing is excellent</li>
          <li>Select your drink type and it will texture accordingly</li>
          <li>Perfect for cappuccinos and latte macchiatos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-700 pl-4">
          💡 Pro Tips for Timemore Sculptor
        </h2>
        <div className="tip">
          <ul className="ml-4">
            <li><strong>Single Dosing:</strong> The Sculptor is designed for single dosing - always weigh your beans</li>
            <li><strong>Bellows:</strong> Use the bellows to purge any retention between shots</li>
            <li><strong>Consistency:</strong> The 078s produces very consistent particle distribution</li>
            <li><strong>WDT Essential:</strong> Always use WDT tool - the fine particles can clump</li>
            <li><strong>Weekly Adjustments:</strong> As beans age, you&apos;ll typically need to go finer by small increments</li>
            <li><strong>Grind Setting Log:</strong> Note your exact dial position for repeatability</li>
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
            <li>Turn on Barista Touch (heats up quickly)</li>
            <li>Weigh 18g Gota Blend beans</li>
            <li>Pour beans into Timemore Sculptor hopper</li>
            <li>Grind into portafilter</li>
            <li>Use bellows to purge remaining grounds</li>
            <li>WDT and distribute grounds evenly</li>
            <li>Level and tamp</li>
            <li>Extract 36g in 25-30 seconds</li>
            <li>Steam milk using Auto MilQ</li>
            <li>Combine and enjoy!</li>
          </ol>
        </div>
      </section>

      <div className="highlight-box text-center">
        <strong>Remember:</strong> The Timemore Sculptor 078s offers exceptional grind quality and consistency. Start with these settings and make small adjustments based on taste. The Gota Blend from Vienna should produce excellent results with this setup!
      </div>

      <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500">
        <p>Happy brewing! ☕</p>
      </footer>
    </div>
  )
}
