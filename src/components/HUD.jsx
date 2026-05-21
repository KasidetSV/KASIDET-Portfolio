import React from 'react';

export default function HUD() {
  return (
    <header className="w-full glass-card border-b border-white/5 py-3 px-6 font-mono text-[11px] md:text-xs tracking-wider uppercase text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: System status & active indicators */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary font-bold">SYSTEM ACTIVE</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div>
            <span className="text-gray-500 mr-2">GOVERNANCE:</span>
            <span className="text-white font-medium">3 REITs // MFC FUND</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div>
            <span className="text-gray-500 mr-2">COGNITIVE RANK:</span>
            <span className="text-white font-medium">FINTECH ORCHESTRATOR</span>
          </div>
        </div>

        {/* Right Side: COGNOS systems stats */}
        <div className="flex items-center gap-6">
          <div>
            <span className="text-gray-500 mr-2">ENGINE:</span>
            <span className="text-primary font-semibold">COGNOS v2.4</span>
          </div>
          <span className="text-white/20">|</span>
          <div>
            <span className="text-gray-500 mr-2">HARNESS:</span>
            <span className="text-white font-semibold">HIGH TRANSPARENCY</span>
          </div>
        </div>
      </div>
    </header>
  );
}
