import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero Section with Animation */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <span className="coffee-icon">☕</span> Coffee Guide
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-4" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          Your comprehensive guide to perfect espresso and coffee brewing
        </p>
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full border border-amber-200" style={{ animation: 'fadeInUp 1s ease-out' }}>
          <p className="text-sm text-amber-700 font-medium">
            📱 Optimized for mobile • 🎯 Detailed brewing guides
          </p>
        </div>
      </div>

      {/* Gota Blend Section */}
      <div className="mb-12 stagger-item">
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-6 border-l-4 border-amber-700 pl-4 transition-all hover:pl-6">
          🫘 Gota Blend (Vienna)
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          <Link
            href="/beans/gota-blend/integrated-grinder"
            className="card-hover block p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl"
          >
            <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
              🔧 Integrated Grinder
              <span className="text-sm font-normal text-amber-600">→</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Sage Barista Touch built-in grinder
            </p>
            <div className="mt-4 pt-4 border-t border-amber-200">
              <span className="text-xs text-amber-700 font-medium">Perfect for beginners</span>
            </div>
          </Link>

          <Link
            href="/beans/gota-blend/timemore-sculptor"
            className="card-hover block p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl"
          >
            <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
              ⚙️ Timemore Sculptor 078s
              <span className="text-sm font-normal text-amber-600">→</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              External grinder - 78mm flat burrs
            </p>
            <div className="mt-4 pt-4 border-t border-amber-200">
              <span className="text-xs text-amber-700 font-medium">Professional setup</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Vienna Calling Section */}
      <div className="mb-12 stagger-item">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6 border-l-4 border-purple-700 pl-4 transition-all hover:pl-6">
          🫘 Vienna Calling (Wildkaffee)
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          <Link
            href="/beans/vienna-calling/integrated-grinder"
            className="card-hover block p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl"
          >
            <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
              🔧 Integrated Grinder
              <span className="text-sm font-normal text-purple-600">→</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Sage Barista Touch built-in grinder
            </p>
            <div className="mt-4 pt-4 border-t border-purple-200">
              <span className="text-xs text-purple-700 font-medium">Chocolatey & sweet</span>
            </div>
          </Link>

          <Link
            href="/beans/vienna-calling/timemore-sculptor"
            className="card-hover block p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl"
          >
            <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2 flex items-center gap-2">
              ⚙️ Timemore Sculptor 078s
              <span className="text-sm font-normal text-purple-600">→</span>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              External grinder - 78mm flat burrs
            </p>
            <div className="mt-4 pt-4 border-t border-purple-200">
              <span className="text-xs text-purple-700 font-medium">Medium-dark roast</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200" style={{ animation: 'fadeInUp 1.2s ease-out' }}>
        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
          ✨ What You&apos;ll Find Inside
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-lg">🎯</span>
            <div>
              <strong className="text-blue-900">Precise Settings</strong>
              <p className="text-gray-600 text-xs">Dialed-in grind settings</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">📊</span>
            <div>
              <strong className="text-blue-900">Extraction Guide</strong>
              <p className="text-gray-600 text-xs">Step-by-step process</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🥛</span>
            <div>
              <strong className="text-blue-900">Milk Tips</strong>
              <p className="text-gray-600 text-xs">Auto MilQ system</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">⚙️</span>
            <div>
              <strong className="text-blue-900">Pro Tips</strong>
              <p className="text-gray-600 text-xs">Expert techniques</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">📱</span>
            <div>
              <strong className="text-blue-900">Mobile First</strong>
              <p className="text-gray-600 text-xs">Kitchen-friendly</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🔄</span>
            <div>
              <strong className="text-blue-900">Daily Workflow</strong>
              <p className="text-gray-600 text-xs">Quick reference</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500" style={{ animation: 'fadeIn 1.5s ease-out' }}>
        <p className="flex items-center justify-center gap-2 text-base">
          Happy brewing! <span className="coffee-icon text-2xl">☕</span>
        </p>
        <p className="text-xs mt-2">Made with ❤️ for better espresso</p>
      </footer>
    </div>
  )
}
