import React, { useState, useEffect } from 'react';

const REGIME_DATA = {
  Growth: {
    initialVar: 0.2441,
    targetSri: 0.12,
    optimizedVar: 0.1949,
    baseWeights: { Equity_US: 0.50, Equity_Emerging: 0.30, Gov_Bonds: 0.10, Gold: 0.10 },
    optWeights: { Equity_US: 0.50, Equity_Emerging: 0.00, Gov_Bonds: 0.40, Gold: 0.10 },
    log: [
      "[SYSTEM] Loading Growth economic regime weights...",
      "Initial portfolio 99% Value-at-Risk calculated: 24.41%",
      ">> WARNING: Volatility exceeds Target SRI of 12.00%",
      "Action: Commencing automated rebalancing. Selling Equity_Emerging...",
      "Reallocating 30% capital into protective Gov_Bonds...",
      "Risk optimized. Final portfolio VaR stabilized at 19.49%."
    ]
  },
  Recession: {
    initialVar: 0.0898,
    targetSri: 0.12,
    optimizedVar: 0.0898,
    baseWeights: { Equity_US: 0.20, Equity_Emerging: 0.05, Gov_Bonds: 0.55, Gold: 0.20 },
    optWeights: { Equity_US: 0.20, Equity_Emerging: 0.05, Gov_Bonds: 0.55, Gold: 0.20 },
    log: [
      "[SYSTEM] Loading Recession economic regime weights...",
      "Initial portfolio 99% Value-at-Risk calculated: 8.98%",
      "Target SRI (12.00%) constraint satisfied. No risk reallocation needed.",
      "Portfolio locked. Ready for tactical asset adjustments."
    ]
  },
  Stagflation: {
    initialVar: 0.1448,
    targetSri: 0.12,
    optimizedVar: 0.1398,
    baseWeights: { Equity_US: 0.15, Equity_Emerging: 0.10, Gov_Bonds: 0.40, Gold: 0.35 },
    optWeights: { Equity_US: 0.15, Equity_Emerging: 0.00, Gov_Bonds: 0.50, Gold: 0.35 },
    log: [
      "[SYSTEM] Loading Stagflation economic regime weights...",
      "Initial portfolio 99% Value-at-Risk calculated: 14.48%",
      ">> WARNING: Volatility exceeds Target SRI of 12.00%",
      "Action: Triggering inflation defense. Selling volatile emerging markets...",
      "Reallocating 10% capital into protective Gov_Bonds...",
      "Risk optimized. Final portfolio VaR stabilized at 13.98%."
    ]
  },
  Recovery: {
    initialVar: 0.1652,
    targetSri: 0.12,
    optimizedVar: 0.1200,
    baseWeights: { Equity_US: 0.40, Equity_Emerging: 0.40, Gov_Bonds: 0.15, Gold: 0.05 },
    optWeights: { Equity_US: 0.40, Equity_Emerging: 0.30, Gov_Bonds: 0.25, Gold: 0.05 },
    log: [
      "[SYSTEM] Loading Recovery economic regime weights...",
      "Initial portfolio 99% Value-at-Risk calculated: 16.52%",
      ">> WARNING: Volatility exceeds Target SRI of 12.00%",
      "Action: Commencing automated rebalancing. Reallocating out of equities...",
      "Shifting 10% from Equity_Emerging into Gov_Bonds...",
      "Risk optimized. Final portfolio VaR stabilized at 12.00%."
    ]
  }
};

export default function Terminal() {
  const [selectedRegime, setSelectedRegime] = useState('Growth');
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' or 'audit'

  useEffect(() => {
    // Reload logs whenever the regime shifts
    setConsoleLogs(REGIME_DATA[selectedRegime].log);
  }, [selectedRegime]);

  const triggerAuditDiagnostic = () => {
    setActiveTab('audit');
    setConsoleLogs([
      "[SYSTEM-DIAGNOSTIC] Launching COGNOS Trace Audit...",
      "Target: L0 Zero-Silence Gate verification",
      ">> System block detected: Heuristic repetition filter flagged long ASCII table.",
      "Action: Automatic platform harness bypass trigger engaged.",
      "Override command injected: [ignoring loop detection]",
      "Audit Log: Logged to Optimization-Log.md. Permanent MASTER.md guardrail updated.",
      "Status: 100% compliant. Safe execution verified."
    ]);
  };

  const currentData = REGIME_DATA[selectedRegime];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="glass-card rounded-lg overflow-hidden border border-white/5 shadow-2xl crt-panel">
        
        {/* Terminal Header */}
        <div className="bg-[#0b0e14] px-4 py-3 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-destructive/70"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-primary/70"></span>
            <span className="font-mono text-xs text-gray-500 ml-2">quant_terminal@kasidet: ~</span>
          </div>
          <div className="font-mono text-xs text-primary/75">
            [SRI TARGET: 12.0%]
          </div>
        </div>

        {/* Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] bg-[#07090e]">
          
          {/* Left panel: simulator controls & indicators */}
          <div className="lg:col-span-5 p-6 border-r border-white/5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest">// SELECT ECONOMIC REGIME</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(REGIME_DATA).map((regime) => (
                  <button
                    key={regime}
                    onClick={() => {
                      setSelectedRegime(regime);
                      setActiveTab('simulator');
                    }}
                    className={`px-4 py-2 font-mono text-xs font-semibold rounded transition-all duration-200 border uppercase tracking-wider ${
                      selectedRegime === regime && activeTab === 'simulator'
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {regime}
                  </button>
                ))}
              </div>
            </div>

            {/* Asset Allocation Weights display */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest">// OPTIMIZED WEIGHTS</h3>
                <span className="font-mono text-xs text-primary font-bold">
                  VaR: {(currentData.optimizedVar * 100).toFixed(2)}%
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                {Object.entries(currentData.optWeights).map(([asset, weight]) => (
                  <div key={asset} className="space-y-1">
                    <div className="flex justify-between text-gray-400">
                      <span>{asset.replace('_', ' ')}</span>
                      <span className="text-white">{(weight * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${weight * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Actions */}
            <button
              onClick={triggerAuditDiagnostic}
              className={`w-full py-2.5 rounded font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${
                activeTab === 'audit'
                  ? 'bg-destructive/10 border-destructive text-destructive border-glow-crimson'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              RUN COGNOS AUDIT DIAGNOSTIC
            </button>
          </div>

          {/* Right panel: Terminal data stream output */}
          <div className="lg:col-span-7 p-6 bg-[#040609] flex flex-col justify-between font-mono text-xs text-gray-300">
            <div className="space-y-3 leading-relaxed">
              <div className="text-gray-500">// ACTIVE STREAM DATA</div>
              {consoleLogs.map((log, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <span className="text-primary font-bold">{`>`}</span>
                  <span className={log.startsWith('>>') ? 'text-destructive font-semibold' : ''}>
                    {log}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-gray-500">
              <div>HOST INTERNET: SECURED</div>
              <div className="animate-pulse">● RECORDING TERMINAL STREAM</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
