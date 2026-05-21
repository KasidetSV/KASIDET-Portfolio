import React, { useState } from 'react';

const CASE_STUDIES = [
  {
    id: "regimes",
    label: "Macro Economic Regime Shifts",
    title: "Dynamic Asset Shifting Under Regime Shifting",
    description: "Traditional portfolios suffer severe capital erosion during sudden macroeconomic transitions. By implementing a regime-aware simulation engine, we model shifts across four business cycles (Growth, Recession, Stagflation, Recovery).",
    bullets: [
      "Growth: High equity orientation (50% US, 30% Emerging) to harvest structural beta.",
      "Recession: Severe volatility reduction, shifting 55% weight to long-duration government bonds.",
      "Stagflation: Asset preservation via active inflation hedge (35% Gold, 40% Gov Bonds).",
      "Recovery: Aggressive capital recapture via 40% US and 40% Emerging market equities."
    ]
  },
  {
    id: "allocation",
    label: "Tactical Asset Allocation",
    title: "Tactical Weight optimization Modeling",
    description: "The allocation matrix is structured to dynamically protect downside risk while maintaining systematic market captures. Weights are calculated to balance yielding equities against inflation-hedging metals.",
    bullets: [
      "Dynamic ETFs: Modeled on global Equities, Emerging Markets, Government Bonds, and Gold.",
      "Zero Correlation assumption mock-ups to mathematically isolate volatility parameters.",
      "Iterative rebalancing loop triggered the moment raw asset risk deviates from limits."
    ]
  },
  {
    id: "risk",
    label: "Value-at-Risk Constraints",
    title: "99% VaR (Value-at-Risk) Risk Containment",
    description: "Mimicking the StashAway Risk Index (SRI) philosophy. The system calculates a portfolio's maximum potential loss over a 1-year horizon at a 99% confidence interval using normal distribution parameters.",
    bullets: [
      "Statistical Core: Utilizes normal distribution with an exact z-score parameter of 2.33.",
      "Threshold Enforcement: If portfolio risk rises above the SRI limit, a safety loop initiates.",
      "Bypass & Safety Audit: Active logging and human-in-the-loop triggers prevent instruction drift during sudden market shocks."
    ]
  }
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState('regimes');

  const currentStudy = CASE_STUDIES.find(s => s.id === activeTab);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-2">
        <h3 className="font-mono text-xs text-primary uppercase tracking-widest">// DEEP DIVE RESEARCH</h3>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Green Park 1 Case Study</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Vertical Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`w-full text-left p-4 font-mono text-xs rounded transition-all duration-200 border uppercase tracking-wider ${
                activeTab === study.id
                  ? 'bg-primary/10 border-primary text-primary font-bold'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {study.label}
            </button>
          ))}
        </div>

        {/* Right Side: Tab Details Display */}
        <div className="lg:col-span-8 glass-card bento-card p-8 rounded-lg space-y-6 min-h-[300px] flex flex-col justify-between border border-white/5">
          <div className="space-y-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest uppercase">// RESEARCH SEGMENT</span>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
              {currentStudy.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {currentStudy.description}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest">// CORE TAKEAWAYS</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-300">
              {currentStudy.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold font-mono">■</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
