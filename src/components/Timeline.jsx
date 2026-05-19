import React from 'react';

const TIMELINE_DATA = [
  {
    date: "PRESENT",
    title: "AI Investment Specialist & Systems Architect",
    company: "MFC Asset Management (Property Funds & REITs)",
    description: "Spearheading the integration of self-correcting agent systems to manage regulatory property compliance, optimize fee reconciliation workflows (reducing processing times from 10 hours to 10 minutes), and monitor asset allocations across active commercial real estate trusts."
  },
  {
    date: "CASE STUDY",
    title: "Quantitative Macro Regime Rebalancing Simulator",
    company: "Green Park 1 & Wealth Sandbox",
    description: "Designed a quantitative asset allocation prototype simulating StashAway's ERAA® style methodology. Engineered 99% Value-at-Risk optimization parameters that automatically rebalance portfolio capital out of emerging equities and into protective gold or bonds under recessionary regimes."
  },
  {
    date: "SYSTEM LAUNCH",
    title: "COGNOS System Architecture Deployment",
    company: "Public Shell & Private Brain",
    description: "Built and deployed the COGNOS double-loop learning framework. Formulated structured schema protocols and self-correcting logic gates that eliminate system drift, establishing high-transparency verification logs for recruiter auditing."
  }
];

export default function Timeline() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-2">
        <h3 className="font-mono text-xs text-primary uppercase tracking-widest">// SYSTEM EVOLUTION</h3>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Chronological Milestones</h2>
      </div>

      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 max-w-4xl">
        {TIMELINE_DATA.map((item, index) => (
          <div key={index} className="relative group">
            {/* Pulsing indicator node */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center bg-[#050811]">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-40 group-hover:opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>

            {/* Content card */}
            <div className="glass-card glass-card-hover p-6 rounded-lg space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 font-mono">
                <span className="text-[10px] md:text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 tracking-widest uppercase">
                  {item.date}
                </span>
                <span className="text-xs text-gray-500">{item.company}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
