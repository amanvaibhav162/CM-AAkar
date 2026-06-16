import OfficerLeaderboard from "@/components/OfficerLeaderboard";

export default function OfficersPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-4">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
          Officer Performance Portal
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Analytics on file clearance latency, resolution indexes, and performance scores for district administrators.
        </p>
      </div>

      <div className="bg-white rounded border border-slate-200 shadow-2xs">
        <OfficerLeaderboard />
      </div>
    </div>
  );
}
