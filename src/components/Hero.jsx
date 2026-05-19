import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-start gap-6">
      {/* HUD Accent Top */}
      <div className="font-mono text-xs text-primary/75 tracking-widest uppercase">
        // PROTOCOL INITIATED // IDENTITY BLOCK ACTIVE
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">
          KASIDET SIRIVIROTSAKUL
        </h1>
        <h2 className="text-base md:text-xl font-mono text-primary uppercase tracking-widest">
          AI-Powered Investment Specialist & Systems Architect
        </h2>
      </div>

      {/* Executive Summary */}
      <div className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed space-y-4">
        <p>
          Orchestrating autonomous AI agents, machine-learning logic, and quantitative engines to model, govern, and optimize multi-asset portfolios. Currently driving systems excellence in property fund allocation, commercial real estate, and high-yield REIT assets at MFC Asset Management.
        </p>
        <p>
          Pioneering the integration of self-correcting agent systems to streamline financial compliance, macroeconomic regime simulation, and portfolio risk management.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a 
          href="https://github.com/KasidetSV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wider text-black bg-primary hover:bg-primary/90 transition-colors duration-200 uppercase flex items-center gap-2 border-glow-green"
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
          className="px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wider text-white bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10 uppercase"
        >
          LIVE PRODUCTION SITE
        </a>
      </div>
    </section>
  );
}
