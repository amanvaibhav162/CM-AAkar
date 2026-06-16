import { MAJOR_PROJECTS } from "@/data/mockGovernanceData";
import { FolderKanban, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

export default function ProjectMonitoring() {
  return (
    <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden flex flex-col h-full">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderKanban className="h-5 w-5 text-gov-gold-500" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Major Project Monitoring Panel
          </h3>
        </div>
        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 uppercase">
          5 Core Assets Tracked
        </span>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-slate-600">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-400 tracking-wider">
              <th className="py-3 px-4">Project Details</th>
              <th className="py-3 px-4 text-center">Sector</th>
              <th className="py-3 px-4 text-center">Budget / Spent (Cr)</th>
              <th className="py-3 px-4 text-center">Progress %</th>
              <th className="py-3 px-4 text-center">Target Date</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {MAJOR_PROJECTS.map((project) => {
              // Status Styling
              const isCritical = project.status === "Critical";
              const isDelayed = project.status === "Delayed";

              let statusBadge = "bg-green-50 text-green-700 border-green-200";
              let StatusIcon = CheckCircle;
              if (isCritical) {
                statusBadge = "bg-red-50 text-red-700 border-red-200";
                StatusIcon = AlertCircle;
              } else if (isDelayed) {
                statusBadge = "bg-amber-50 text-amber-700 border-amber-200";
                StatusIcon = AlertTriangle;
              }

              return (
                <tr key={project.id} className="hover:bg-slate-50/50 transition-colors">
                  {/* Name and ID */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800 max-w-[200px] truncate">
                      {project.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {project.id}
                    </div>
                  </td>

                  {/* Sector */}
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                      {project.sector}
                    </span>
                  </td>

                  {/* Budget & Spent */}
                  <td className="py-3.5 px-4 text-center font-mono font-medium">
                    <div className="text-slate-800 font-bold">
                      ₹{project.budgetCr} Cr
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Spent: ₹{project.spentCr} Cr
                    </div>
                  </td>

                  {/* Progress bar */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex flex-col items-center min-w-[80px]">
                      <span className="font-bold text-slate-800 font-mono">
                        {project.progress}%
                      </span>
                      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-1.5 max-w-[100px]">
                        <div
                          className={`h-full rounded-full ${
                            isCritical
                              ? "bg-red-500"
                              : isDelayed
                              ? "bg-gov-gold-500"
                              : "bg-emerald-500"
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  {/* Target Date */}
                  <td className="py-3.5 px-4 text-center font-mono font-medium text-slate-500">
                    {project.targetDate}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-black uppercase tracking-wider ${statusBadge}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {project.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
