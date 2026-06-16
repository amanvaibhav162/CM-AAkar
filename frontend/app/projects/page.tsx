import ProjectMonitoring from "@/components/ProjectMonitoring";

export default function ProjectsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="bg-white rounded border border-slate-200 shadow-2xs">
        <ProjectMonitoring />
      </div>
    </div>
  );
}
