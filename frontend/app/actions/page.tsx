import ActionTracker from "@/components/ActionTracker";

export default function ActionsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="bg-white rounded border border-slate-200 shadow-2xs">
        <ActionTracker />
      </div>
    </div>
  );
}
