import React from 'react';
import HUD from './components/HUD';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* 1. HTML5 Canvas Mouse-Tracking Dynamic Gradient Background */}
      <InteractiveBackground />

      {/* 2. Real-Time Status Header */}
      <HUD />

      {/* Main Core Body */}
      <main className="flex-1 w-full flex flex-col gap-6 pb-20">
        
        {/* 3. Aggressive Asymmetrical Hero Pitch Section */}
        <Hero />

        {/* 4. Bento Grid Layout Section (Asymmetric columns) */}
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Quant Console (Large Asymmetric Bento) */}
          <div className="lg:col-span-7">
            <Terminal />
          </div>
          
          {/* Right Column: Chronological Evolution (Compact Asymmetric Bento) */}
          <div className="lg:col-span-5">
            <Timeline />
          </div>
        </div>

        {/* 5. Deep-Dive Allocation Case Studies (Full Width Asymmetric Bento) */}
        <CaseStudies />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/5 font-mono text-[10px] md:text-xs text-gray-500 text-center z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 KASIDET SIRIVIROTSAKUL. ALL RIGHTS RESERVED.</div>
          <div>POWERED BY COGNOS COGNITIVE ORCHESTRATION</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
