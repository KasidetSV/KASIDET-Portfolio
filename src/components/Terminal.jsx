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
    <div className="w-full h-full">
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)] crt-panel">
        
        {/* Terminal Header */}
        <div className="bg-[#0b0e14]/90 px-5 py-3.5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-coral/80 animate-pulse"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-purple/80"></span>
            <span className="font-mono text-xs text-white/50 ml-2 tracking-wide">quant_terminal@kasidet: ~</span>
          </div>
          <div className="font-mono text-xs text-amber font-semibold tracking-widest">
            [SRI TARGET: 12.0%]
          </div>
        </div>

        {/* Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] bg-[#07090e]/95">
          
          {/* Left panel: simulator controls & indicators */}
          <div className="lg:col-span-5 p-6 border-r border-white/10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">// SELECT ECONOMIC REGIME</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(REGIME_DATA).map((regime) => (
                  <button
                    key={regime}
                    onClick={() => {
                      setSelectedRegime(regime);
                      setActiveTab('simulator');
                    }}
                    className={`px-3 py-2.5 font-mono text-xs font-semibold rounded-lg transition-all duration-300 border uppercase tracking-wider ${
                      selectedRegime === regime && activeTab === 'simulator'
                        ? 'bg-amber/10 border-amber text-amber border-glow-sunset font-bold scale-[1.02]'
                        : 'bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10'
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
                <h3 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">// OPTIMIZED WEIGHTS</h3>
                <span className="font-mono text-xs text-amber font-bold">
                  VaR: {(currentData.optimizedVar * 100).toFixed(2)}%
                </span>
              </div>
              <div className="space-y-3.5 font-mono text-[11px]">
                {Object.entries(currentData.optWeights).map(([asset, weight]) => (
                  <div key={asset} className="space-y-1">
                    <div className="flex justify-between text-gray-400">
                      <span className="tracking-wide">{asset.replace('_', ' ')}</span>
                      <span className="text-white font-semibold">{(weight * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden border border-white/[0.02]">
                      <div 
                        className="bg-gradient-to-r from-coral to-amber h-full rounded-full transition-all duration-500 ease-out" 
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
              className={`w-full py-3 rounded-lg font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeTab === 'audit'
                  ? 'bg-coral/10 border-coral text-coral border-glow-coral'
                  : 'bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/5 hover:border-coral/50'
              }`}
            >
              RUN COGNOS AUDIT DIAGNOSTIC
            </button>
          </div>

          {/* Right panel: Terminal data stream output */}
          <div className="lg:col-span-7 p-6 bg-[#040609]/95 flex flex-col justify-between font-mono text-xs text-gray-300">
            <div className="space-y-3 leading-relaxed">
              <div className="text-gray-500 font-semibold tracking-wider flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
                // ACTIVE STREAM DATA
              </div>
              <div className="space-y-2 mt-2">
                {consoleLogs.map((log, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-[11px]">
                    <span className="text-coral font-bold">{`>`}</span>
                    <span className={log.startsWith('>>') ? 'text-destructive font-semibold' : 'text-gray-300'}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[9px] text-gray-500 tracking-wider">
              <div>HOST CONNECTION: SECURED // MFC LAYER</div>
              <div className="flex items-center gap-1.5 text-coral font-medium animate-pulse">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-coral"></span>
                ● RECORDING TERMINAL STREAM
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
