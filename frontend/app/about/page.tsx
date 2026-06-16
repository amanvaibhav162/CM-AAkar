import { ShieldCheck, Info, Cpu, Network } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-4">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
          About AAKAR Portal
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          System summary, cryptographic specs, and developer information for the CM Governance Core.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded p-6 shadow-xs max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gov-gold-50 rounded-full border border-gov-gold-100">
            <Info className="h-6 w-6 text-gov-gold-600" />
          </div>
          <div>
            <h3 className="text-md font-bold text-slate-800">
              AAKAR CM Governance Core v1.4.2
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">
              Build ID: CM-PROD-2026.1606 // Secure Dispatch Active
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          The AAKAR CM Portal is a next-generation administrative command dashboard designed to give executive leadership real-time monitoring capabilities over district governance indices, treasury budget utilization, major infrastructure pipelines, and departmental clearance latency. Powered by an automated AI Auditor Core, the system analyzes transaction flows and reports operational bottlenecks dynamically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded flex gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-800 block">Cryptographic Assurance</span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                All directives issued from the portal carry SHA-256 digital signatures verified against central state public keys.
              </span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded flex gap-3">
            <Network className="h-5 w-5 text-gov-gold-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-800 block">District Node Sync</span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Connected via secure state intra-net links to 38 district treasury consoles and satellite progress trackers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
