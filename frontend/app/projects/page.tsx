import ProjectMonitoring from "@/components/ProjectMonitoring";

export default function ProjectsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-4">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
          Major Project Monitoring
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Detailed telemetry on milestones, funding, spent allocations, and status for major projects.
        </p>
      </div>

      <div className="bg-white rounded border border-slate-200 shadow-2xs">
        <ProjectMonitoring />
      </div>
    </div>
  );
}
