
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
    <div className="w-full h-full space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-[10px] text-coral tracking-[0.2em] uppercase font-bold">// SYSTEM EVOLUTION</h3>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">Chronological Milestones</h2>
      </div>

      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-10 max-w-4xl mt-6">
        {TIMELINE_DATA.map((item, index) => (
          <div key={index} className="relative group">
            {/* Pulsing indicator node (Cosmic orange sunset) */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center bg-[#060608]">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-amber opacity-40 group-hover:opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
            </span>

            {/* Content card */}
            <div className="glass-card bento-card p-6 rounded-2xl space-y-4 hover:border-coral/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
                <span className="text-[10px] text-amber font-bold px-2.5 py-0.5 rounded-full bg-amber/5 border border-amber/15 tracking-widest uppercase">
                  {item.date}
                </span>
                <span className="text-[11px] text-gray-500 font-semibold tracking-wider">{item.company}</span>
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-amber transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-xs md:text-sm font-serif italic text-gray-300 leading-relaxed pl-3 border-l border-white/5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
