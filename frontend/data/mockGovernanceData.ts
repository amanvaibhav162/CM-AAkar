export interface KpiMetric {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  alertType?: 'critical' | 'warning' | 'optimal';
}

export interface Recommendation {
  id: string;
  target: string;
  risk: 'HIGH' | 'MEDIUM' | 'LOW';
  recommendation: string;
  category: string;
}

export interface DistrictRanking {
  rank: number;
  name: string;
  code: string;
  score: number;
  activeProjects: number;
  delayedProjects: number;
  fundUtilization: number;
  pendingFiles: number;
}

export interface ProjectMetric {
  id: string;
  name: string;
  sector: 'Infrastructure' | 'Health' | 'Education' | 'Irrigation' | 'Digital Gov';
  budgetCr: number;
  spentCr: number;
  progress: number;
  targetDate: string;
  status: 'On Track' | 'Delayed' | 'Critical';
}

export interface OfficerPerformance {
  rank: number;
  name: string;
  designation: string;
  department: string;
  resolvedFiles: number;
  avgResolutionDays: number;
  performanceScore: number;
}

export interface AiQueryResponse {
  id: string;
  query: string;
  response: string;
  timestamp: string;
  category: string;
}

export const AI_QUERY_RESPONSES: AiQueryResponse[] = [
  {
    id: 'Q-001',
    query: 'Which districts are underperforming?',
    response: 'Imphal East (score: 72.8) and Vidisha Central (68.4) are the lowest-ranked districts. Key issues: delayed projects (14 and 9 respectively) and fund utilization below 65%. Immediate attention recommended on pending file clearance — Vidisha has 38 pending files, the highest in the state.',
    timestamp: '2026-06-16 14:30',
    category: 'Districts',
  },
  {
    id: 'Q-002',
    query: 'Show me critical projects',
    response: '1 project flagged Critical: CM Primary Health Center Upgrades (PRJ-2045) at only 38.7% progress against a ₹310 Cr budget, behind schedule with a Mar 2027 deadline. Additionally, District Ring Road Bypass DL-40 (PRJ-0982) is Delayed at 59.1% — held up by forest clearance. Recommend expediting both.',
    timestamp: '2026-06-16 13:15',
    category: 'Projects',
  },
  {
    id: 'Q-003',
    query: 'What is the fund utilization status?',
    response: 'Overall state fund utilization stands at 82.4%, up 3.2% vs Q1. Total allocated: ₹3,010 Cr, spent: ₹2,105 Cr. Digital Governance leads at 96.6%, while Health & Welfare is critically low at 38.7%. Irrigation is on track at 75.2%. Recommend reviewing Health allocation bottlenecks.',
    timestamp: '2026-06-16 11:45',
    category: 'Funds',
  },
  {
    id: 'Q-004',
    query: 'Who are the top performing officers?',
    response: 'Dr. Ramesh Iyer, IAS (Pune West) leads with a 97.5% performance score — 342 files resolved at an average of 3.4 days. Ms. Priya Sharma, IAS (Gautam Buddha Nagar) follows at 94.0% with 298 files resolved. Both maintain sub-5 day resolution averages, well above the state benchmark.',
    timestamp: '2026-06-16 10:20',
    category: 'Officers',
  },
  {
    id: 'Q-005',
    query: 'Any audit exceptions or compliance issues?',
    response: '1 active exception flagged: Forest Clearance SLA breach — 3 highway projects failed to submit environmental reports on time (AUD-02). All other protocols passed (98.2% audit score). Financial, Security, and Operational audits are clear. Pending: Irrigation sub-contractor invoice verification for Narmada grid Phase 4.',
    timestamp: '2026-06-16 09:05',
    category: 'Audits',
  },
  {
    id: 'Q-006',
    query: 'What are the current alerts?',
    response: '6 critical alerts active. Top priority: (1) District Ring Road Bypass flagged for missing forest clearance deadline — automated delay alert triggered. (2) Unusual transaction pattern detected in Rural Education fund DL-40 — AI Auditor Core flagged for review. (3) Inter-departmental pipeline easement dispute in District SK_2 pending resolution.',
    timestamp: '2026-06-15 16:00',
    category: 'Alerts',
  },
];

export interface ActionLog {
  id: string;
  timestamp: string;
  actionType: string;
  details: string;
  authority: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED' | 'PENDING';
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
}

export const KPI_METRICS: KpiMetric[] = [
  { label: 'Total Districts', value: '38', change: 'All connected', isPositive: true },
  { label: 'Active Projects', value: '1,482', change: '+24 this month', isPositive: true },
  { label: 'Delayed Projects', value: '34', change: '-5 this week', isPositive: true, alertType: 'warning' },
  { label: 'Fund Utilization %', value: '82.4%', change: '+3.2% vs Q1', isPositive: true },
  { label: 'Pending Files', value: '143', change: '42 urgent (>10 days)', isPositive: false, alertType: 'warning' },
  { label: 'Critical Alerts', value: '6', change: 'Immediate attention', isPositive: false, alertType: 'critical' },
];

export const AI_GOVERNANCE_SUMMARY = {
  executiveSummary: `Overall state governance index stands at 84.6/100, showing a 1.2% improvement. Fund utilization is on track, but bottlenecks are detected in three primary areas: (1) Infrastructure clearance delays in Eastern Districts, (2) High pending file duration in the Department of Irrigation, and (3) Budget under-utilization in Digital Governance projects. Automated threat vectors indicate low cyber risk but flags high transaction density anomalies in District MH_20.`,
  recommendations: [
    {
      id: 'REC-001',
      target: 'District DL_40_004',
      risk: 'HIGH',
      recommendation: 'Fast-track environment approvals for highway bypass projects.',
      category: 'Infrastructure',
    },
    {
      id: 'REC-002',
      target: 'District MH_201_003',
      risk: 'MEDIUM',
      recommendation: 'Audit fund allocations for rural digital-learning connectivity centers.',
      category: 'Funds',
    },
    {
      id: 'REC-003',
      target: 'District MN_3_005',
      risk: 'LOW',
      recommendation: 'Deploy state-level technical review committee to resolve project blockages.',
      category: 'Projects',
    },
    {
      id: 'REC-004',
      target: 'District SK_2_004',
      risk: 'MEDIUM',
      recommendation: 'Resolve inter-departmental file disputes on drinking water pipeline grids.',
      category: 'Inter-Dept',
    },
  ] as Recommendation[],
};

export const DISTRICT_RANKINGS: DistrictRanking[] = [
  { rank: 1, name: 'Pune West', code: 'MH_201_003', score: 94.2, activeProjects: 142, delayedProjects: 2, fundUtilization: 88.5, pendingFiles: 4 },
  { rank: 2, name: 'Gautam Buddha Nagar', code: 'DL_40_004', score: 91.0, activeProjects: 118, delayedProjects: 5, fundUtilization: 92.1, pendingFiles: 12 },
  { rank: 3, name: 'Sikkim East', code: 'SK_2_004', score: 86.5, activeProjects: 64, delayedProjects: 4, fundUtilization: 79.8, pendingFiles: 8 },
  { rank: 4, name: 'Imphal East', code: 'MN_3_005', score: 72.8, activeProjects: 45, delayedProjects: 9, fundUtilization: 64.2, pendingFiles: 21 },
  { rank: 5, name: 'Vidisha Central', code: 'MP_1_021', score: 68.4, activeProjects: 78, delayedProjects: 14, fundUtilization: 58.0, pendingFiles: 38 },
];

export const MAJOR_PROJECTS: ProjectMetric[] = [
  { id: 'PRJ-1021', name: 'Narmada Valley Irrigation Grid', sector: 'Irrigation', budgetCr: 1250, spentCr: 940, progress: 75.2, targetDate: '2026-12-15', status: 'On Track' },
  { id: 'PRJ-1402', name: 'CM Digital School Hub Phase II', sector: 'Education', budgetCr: 420, spentCr: 380, progress: 90.5, targetDate: '2026-08-01', status: 'On Track' },
  { id: 'PRJ-0982', name: 'District Ring Road Bypass (DL-40)', sector: 'Infrastructure', budgetCr: 880, spentCr: 520, progress: 59.1, targetDate: '2026-11-30', status: 'Delayed' },
  { id: 'PRJ-2045', name: 'CM Primary Health Center Upgrades', sector: 'Health', budgetCr: 310, spentCr: 120, progress: 38.7, targetDate: '2027-03-15', status: 'Critical' },
  { id: 'PRJ-1889', name: 'State Portal & Citizen Services Core', sector: 'Digital Gov', budgetCr: 150, spentCr: 145, progress: 96.6, targetDate: '2026-06-30', status: 'On Track' },
];

export const OFFICER_LEADERBOARD: OfficerPerformance[] = [
  { rank: 1, name: 'Dr. Ramesh Iyer, IAS', designation: 'Collector', department: 'Pune West', resolvedFiles: 342, avgResolutionDays: 3.4, performanceScore: 97.5 },
  { rank: 2, name: 'Ms. Priya Sharma, IAS', designation: 'Collector', department: 'Gautam Buddha Nagar', resolvedFiles: 298, avgResolutionDays: 4.1, performanceScore: 94.0 },
  { rank: 3, name: 'Shri T. K. Sangma, IAS', designation: 'District Magistrate', department: 'Sikkim East', resolvedFiles: 184, avgResolutionDays: 5.6, performanceScore: 88.2 },
  { rank: 4, name: 'Ms. Nemcha Kipgen, MCS', designation: 'Deputy Commissioner', department: 'Imphal East', resolvedFiles: 112, avgResolutionDays: 9.2, performanceScore: 75.0 },
];

export const ACTION_LOGS: ActionLog[] = [
  { id: 'ACT-9081', timestamp: '2026-06-16 13:42', actionType: 'Fund Release Approved', details: 'Released ₹12.5 Cr for Primary Health upgrades in Imphal East', authority: 'Finance Secretary', status: 'SUCCESS', riskLevel: 'LOW' },
  { id: 'ACT-9080', timestamp: '2026-06-16 12:15', actionType: 'Delay Flag Raised', details: 'District Ring Road Bypass flagged for missing forest clearance deadline', authority: 'Automated Monitor', status: 'WARNING', riskLevel: 'HIGH' },
  { id: 'ACT-9079', timestamp: '2026-06-16 10:30', actionType: 'File Dispute Registered', details: 'Inter-departmental pipeline easement clash on District SK_2', authority: 'Sec. Urban Dev', status: 'PENDING', riskLevel: 'MEDIUM' },
  { id: 'ACT-9078', timestamp: '2026-06-16 09:05', actionType: 'Audit Exception Triggered', details: 'Unusual transfer pattern detected in Rural Education fund DL-40', authority: 'AI Auditor Core', status: 'FAILED', riskLevel: 'HIGH' },
];
