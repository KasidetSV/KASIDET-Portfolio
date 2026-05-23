
export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-start gap-8 overflow-hidden rounded-3xl border border-white/[0.04] glass-card bg-gradient-to-br from-white/[0.01] via-transparent to-white/[0.01] my-4 shadow-2xl">
      {/* 1. Signature Anthropic "Interesting Line" SVG overlay (Dynamic bezier curves) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="spline-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cc785c" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e8a55a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9a528e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spline-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9a528e" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#cc785c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e8a55a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main sweeping spline path */}
          <path 
            d="M -50,150 C 300,50 450,350 700,200 C 850,100 950,250 1050,150" 
            stroke="url(#spline-gradient-1)" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
            fill="none" 
          />
          {/* Secondary parallel sweeping path */}
          <path 
            d="M -50,180 C 280,100 420,380 680,230 C 830,130 930,280 1050,180" 
            stroke="url(#spline-gradient-2)" 
            strokeWidth="1" 
            fill="none" 
          />
          {/* Thin sharp structural accent grid lines */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
          <line x1="700" y1="0" x2="700" y2="400" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        </svg>
      </div>

      {/* HUD Accent Top */}
      <div className="font-mono text-[10px] md:text-xs text-coral/80 tracking-[0.25em] uppercase flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-coral animate-pulse"></span>
        // SYSTEM_IDENTITY: ACTIVE_STACK_COGNOS
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none uppercase">
          KASIDET <span className="text-gradient-sunset font-extrabold">SIRIVIROTSAKUL</span>
        </h1>
        <h2 className="text-sm md:text-lg font-mono text-amber uppercase tracking-[0.18em] font-semibold">
          AI-Powered Investment Specialist & Systems Architect
        </h2>
      </div>

      {/* Executive Narrative (Editorial Serif Quote + Humanist Sans Summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl pt-4">
        {/* Editorial Serif Callout block (Anthropic publishing feel) */}
        <div className="lg:col-span-5 border-l-2 border-coral pl-6 py-2">
          <p className="font-serif italic text-xl md:text-2xl text-gray-300 leading-relaxed">
            "Engineering the convergence of structural logic, multi-billion asset allocations, and self-governing multi-agent networks."
          </p>
        </div>

        {/* Humanist Sans Summary */}
        <div className="lg:col-span-7 text-gray-400 text-xs md:text-sm leading-relaxed space-y-4">
          <p>
            Orchestrating autonomous AI swarms, quantitative models, and defensive algorithms to govern, optimize, and scale high-stakes wealth vehicles. Currently driving operational and structural engineering across commercial real estate portfolios and yields at MFC Asset Management.
          </p>
          <p>
            Pioneering self-correcting cognitive loops that streamline property governance, execute instant macroeconomic rebalancing, and maintain absolute risk transparency.
          </p>
        </div>
      </div>

      {/* Action Buttons (Floating Hairline pills) */}
      <div className="flex flex-wrap items-center gap-4 pt-6">
        <a 
          href="https://github.com/KasidetSV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest text-black bg-gradient-to-r from-coral to-amber hover:shadow-[0_0_25px_rgba(232,165,90,0.3)] transition-all duration-300 uppercase flex items-center gap-2 border border-amber/35 hover:scale-[1.03]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          EXPLORE GITHUB
        </a>
        
        <a 
          href="https://kasidet-portfolio.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full font-mono text-xs font-bold tracking-widest text-white bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 uppercase hover:scale-[1.03] hover:border-coral/50"
        >
          LIVE PRODUCTION SITE
        </a>
      </div>
    </section>
  );
}
