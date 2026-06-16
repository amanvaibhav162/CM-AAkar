import { DISTRICT_RANKINGS } from "@/data/mockGovernanceData";
import { Award, ShieldCheck } from "lucide-react";

export default function DistrictRankings() {
  return (
    <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden flex flex-col h-full">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-gov-gold-500" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            District Governance Index (DGI)
          </h3>
        </div>
        <span className="text-[10px] font-mono font-bold bg-gov-gold-50 text-gov-gold-700 border border-gov-gold-100 px-2 py-0.5 rounded uppercase">
          Rankings updated today
        </span>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-slate-600">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-400 tracking-wider">
              <th className="py-3 px-4 text-center w-12">Rank</th>
              <th className="py-3 px-4">District</th>
              <th className="py-3 px-4 text-center">Governance Index</th>
              <th className="py-3 px-4 text-center">Active / Delayed</th>
              <th className="py-3 px-4 text-center">Fund Utilization</th>
              <th className="py-3 px-4 text-center">Pending Files</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {DISTRICT_RANKINGS.map((district) => {
              // Row highlight for top performances
              const isTop = district.rank <= 2;
              
              return (
                <tr
                  key={district.code}
                  className={`hover:bg-slate-50/50 transition-colors ${
                    isTop ? "bg-emerald-50/10" : ""
                  }`}
                >
                  {/* Rank */}
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-flex items-center justify-center h-6 w-6 rounded-full font-bold text-xs ${
                        district.rank === 1
                          ? "bg-gov-gold-100 text-gov-gold-700 border border-gov-gold-200"
                          : district.rank === 2
                          ? "bg-slate-100 text-slate-700 border border-slate-200"
                          : "bg-slate-50 text-slate-500"
                      }`}
                    >
                      {district.rank}
                    </span>
                  </td>

                  {/* District Info */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">
                      {district.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {district.code}
                    </div>
                  </td>

                  {/* Score */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="inline-flex items-center gap-1.5 font-black text-slate-800">
                      {district.score}
                      {district.score >= 90 && (
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                      )}
                    </div>
                  </td>

                  {/* Active / Delayed */}
                  <td className="py-3.5 px-4 text-center font-mono">
                    <span className="font-bold text-slate-800">
                      {district.activeProjects}
                    </span>
                    <span className="text-slate-300 mx-1">/</span>
                    <span
                      className={`font-bold ${
                        district.delayedProjects > 5
                          ? "text-red-500"
                          : "text-slate-400"
                      }`}
                    >
                      {district.delayedProjects}
                    </span>
                  </td>

                  {/* Fund Utilization */}
                  <td className="py-3.5 px-4 text-center font-semibold">
                    <div className="flex flex-col items-center">
                      <span className="text-slate-800">{district.fundUtilization}%</span>
                      <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                        <div
                          className="h-full bg-gov-gold-500 rounded-full"
                          style={{ width: `${district.fundUtilization}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  {/* Pending Files */}
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-block font-mono font-bold px-2 py-0.5 rounded ${
                        district.pendingFiles > 20
                          ? "bg-red-50 text-red-700 border border-red-100"
                          : district.pendingFiles > 10
                          ? "bg-amber-50 text-amber-700 border border-amber-100"
                          : "bg-slate-50 text-slate-600 border border-slate-100"
                      }`}
                    >
                      {district.pendingFiles}
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
