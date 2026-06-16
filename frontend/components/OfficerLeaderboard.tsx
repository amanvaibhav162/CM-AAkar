import { OFFICER_LEADERBOARD } from "@/data/mockGovernanceData";
import { Users, TrendingUp } from "lucide-react";

export default function OfficerLeaderboard() {
  return (
    <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden flex flex-col h-full">
      {/* Section Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gov-gold-500" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Officer Leadership & Resolution Board
          </h3>
        </div>
        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 uppercase flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-emerald-500" /> Top Performers
        </span>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-slate-600">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-400 tracking-wider">
              <th className="py-3 px-4 text-center w-12">Rank</th>
              <th className="py-3 px-4">Officer Name</th>
              <th className="py-3 px-4">Jurisdiction</th>
              <th className="py-3 px-4 text-center">Files Resolved</th>
              <th className="py-3 px-4 text-center">Avg. Speed (Days)</th>
              <th className="py-3 px-4 text-center">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {OFFICER_LEADERBOARD.map((officer) => {
              const isFirst = officer.rank === 1;

              return (
                <tr
                  key={officer.name}
                  className={`hover:bg-slate-50/50 transition-colors ${
                    isFirst ? "bg-gov-gold-50/30" : ""
                  }`}
                >
                  {/* Rank */}
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center justify-center h-6 w-6 rounded-full font-mono font-bold text-xs ${
                        isFirst
                          ? "bg-gov-gold-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {officer.rank}
                    </span>
                  </td>

                  {/* Officer Info */}
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-800">
                      {officer.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {officer.designation}
                    </div>
                  </td>

                  {/* Jurisdiction / Dept */}
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-700">
                      {officer.department}
                    </span>
                  </td>

                  {/* Files Resolved */}
                  <td className="py-3 px-4 text-center font-mono font-bold text-slate-800">
                    {officer.resolvedFiles}
                  </td>

                  {/* Avg resolution time */}
                  <td className="py-3 px-4 text-center font-mono font-semibold">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        officer.avgResolutionDays < 4
                          ? "bg-emerald-50 text-emerald-700"
                          : officer.avgResolutionDays < 6
                          ? "bg-slate-50 text-slate-600"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {officer.avgResolutionDays} days
                    </span>
                  </td>

                  {/* Score */}
                  <td className="py-3 px-4 text-center">
                    <span className="font-mono font-black text-slate-800 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[10px]">
                      {officer.performanceScore}%
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
