
export default function HUD() {
  return (
    <header className="sticky top-4 z-50 w-[calc(100%-2rem)] max-w-7xl mx-auto my-4 glass-card rounded-full py-2.5 px-6 font-mono text-[10px] md:text-[11px] tracking-wider uppercase text-gray-400 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
        {/* Left Side: System status & active indicators */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
            </span>
            <span className="text-amber font-bold tracking-widest">SYSTEM ACTIVE</span>
          </div>
          <span className="text-white/10 hidden lg:inline">|</span>
          <div>
            <span className="text-gray-500 mr-1.5">GOVERNANCE:</span>
            <span className="text-white font-semibold">3 REITs // MFC FUND</span>
          </div>
          <span className="text-white/10 hidden lg:inline">|</span>
          <div>
            <span className="text-gray-500 mr-1.5">COGNITIVE RANK:</span>
            <span className="text-coral font-semibold">FINTECH ORCHESTRATOR</span>
          </div>
        </div>

        {/* Right Side: COGNOS systems stats */}
        <div className="flex items-center gap-5">
          <div>
            <span className="text-gray-500 mr-1.5">ENGINE:</span>
            <span className="text-amber font-bold">COGNOS v2.4</span>
          </div>
          <span className="text-white/10">|</span>
          <div>
            <span className="text-gray-500 mr-1.5">HARNESS:</span>
            <span className="text-white font-medium">HIGH TRANSPARENCY</span>
          </div>
        </div>
      </div>
    </header>
  );
}
