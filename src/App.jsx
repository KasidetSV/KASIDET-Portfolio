import React from 'react';
import HUD from './components/HUD';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Real-Time Status Bar Header */}
      <HUD />

      {/* Main Core Body */}
      <main className="flex-1 w-full flex flex-col gap-6 pb-20">
        {/* 2. Professional Identity & Pitch Hero */}
        <Hero />

        {/* 3. Interactive Quant Console Simulator */}
        <Terminal />

        {/* 4. Chronological Milestones Timeline */}
        <Timeline />

        {/* 5. Deep-Dive Allocation Case Studies */}
        <CaseStudies />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/5 font-mono text-[10px] md:text-xs text-gray-500 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 KASIDET SIRIVIROTSAKUL. ALL RIGHTS RESERVED.</div>
          <div>POWERED BY COGNOS COGNITIVE ORCHESTRATION</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
