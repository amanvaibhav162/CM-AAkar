import { ACTION_LOGS } from "@/data/mockGovernanceData";
import { Activity, Radio, ShieldAlert } from "lucide-react";

export default function ActionTracker() {
  return (
    <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden flex flex-col h-full">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-gov-gold-500" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Real-Time Action & Audit Log
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded uppercase tracking-wider">
          <Radio className="h-3 w-3 animate-pulse" /> Live Stream
        </div>
      </div>

      {/* List content - High information density */}
      <div className="divide-y divide-slate-100 overflow-y-auto max-h-[340px]">
        {ACTION_LOGS.map((log) => {
          // Risk Level indicators
          const isHighRisk = log.riskLevel === "HIGH";
          const isMedRisk = log.riskLevel === "MEDIUM";

          let statusColor = "text-slate-500 bg-slate-100 border-slate-200";
          if (log.status === "SUCCESS") {
            statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
          } else if (log.status === "WARNING" || log.status === "PENDING") {
            statusColor = "text-amber-700 bg-amber-50 border-amber-200";
          } else if (log.status === "FAILED") {
            statusColor = "text-red-700 bg-red-50 border-red-200";
          }

          return (
            <div
              key={log.id}
              className={`p-4 hover:bg-slate-50/50 transition-colors flex items-start justify-between gap-4 ${
                isHighRisk ? "bg-red-50/5" : ""
              }`}
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {log.timestamp}
                  </span>
                  <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                    {log.actionType}
                  </span>
                  {isHighRisk && (
                    <span className="inline-flex items-center gap-0.5 text-[8px] font-black bg-red-600 text-white px-1.5 py-0.2 rounded uppercase tracking-widest font-mono">
                      <ShieldAlert className="h-2.5 w-2.5" /> CRIT
                    </span>
                  )}
                  {isMedRisk && (
                    <span className="inline-flex items-center text-[8px] font-black bg-gov-gold-500 text-white px-1.5 py-0.2 rounded uppercase tracking-widest font-mono">
                      WARN
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-slate-600 leading-normal">
                  {log.details}
                </p>

                <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                  <span className="font-bold text-slate-500 uppercase">
                    Auth: {log.authority}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="font-mono text-[9px]">ID: {log.id}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 flex flex-col items-end">
                <span
                  className={`inline-block font-mono font-bold px-2 py-0.5 rounded border text-[9px] uppercase tracking-wider ${statusColor}`}
                >
                  {log.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
