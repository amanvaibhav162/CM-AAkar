import ActionTracker from "@/components/ActionTracker";

export default function ActionsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-4">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
          Governance Action Tracker
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Detailed real-time security alerts, policy overrides, and automated warning logs from the AI auditor core.
        </p>
      </div>

      <div className="bg-white rounded border border-slate-200 shadow-2xs">
        <ActionTracker />
      </div>
    </div>
  );
}
