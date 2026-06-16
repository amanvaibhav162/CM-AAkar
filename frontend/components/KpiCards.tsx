import { KPI_METRICS } from "@/data/mockGovernanceData";

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {KPI_METRICS.map((metric) => {
        // Highlight specific numbers based on alertType
        const isCritical = metric.alertType === "critical";
        const isWarning = metric.alertType === "warning";

        let valueColor = "text-slate-800";
        if (isCritical) {
          valueColor = "text-red-600";
        } else if (isWarning || metric.label === "Pending Files") {
          valueColor = "text-gov-gold-600";
        }

        return (
          <div
            key={metric.label}
            className="bg-white border border-slate-200/80 rounded px-5 py-4 flex flex-col justify-between shadow-xs relative overflow-hidden transition-all hover:shadow-sm"
          >
            {/* Minimal left line accent for warnings/criticals */}
            {isCritical && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
            )}
            {isWarning && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gov-gold-500"></div>
            )}

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {metric.label}
              </span>
              <span className={`text-2xl font-black tracking-tight ${valueColor} block mt-2 font-sans`}>
                {metric.value}
              </span>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-500 truncate">
                {metric.change}
              </span>
              {metric.alertType && (
                <span
                  className={`h-2 w-2 rounded-full ${
                    isCritical ? "bg-red-500 animate-pulse" : "bg-gov-gold-500"
                  }`}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
