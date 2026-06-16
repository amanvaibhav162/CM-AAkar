import KpiCards from "@/components/KpiCards";
import AiSummary from "@/components/AiSummary";
import HeatmapPlaceholder from "@/components/HeatmapPlaceholder";
import DistrictRankings from "@/components/DistrictRankings";
import ProjectMonitoring from "@/components/ProjectMonitoring";
import OfficerLeaderboard from "@/components/OfficerLeaderboard";
import ActionTracker from "@/components/ActionTracker";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      {/* 1. Top KPI Row */}
      <KpiCards />

      {/* 2. Main Panel: Heatmap and AI summary */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <HeatmapPlaceholder />
        </div>
        <div className="lg:col-span-2">
          <AiSummary />
        </div>
      </div>

      {/* 3. Lower Sections: 2x2 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* District Rankings Table */}
        <DistrictRankings />

        {/* Project Monitoring Panel */}
        <ProjectMonitoring />

        {/* Officer Performance Leaderboard */}
        <OfficerLeaderboard />

        {/* Action Tracker Audit Logs */}
        <ActionTracker />
      </div>
    </div>
  );
}
