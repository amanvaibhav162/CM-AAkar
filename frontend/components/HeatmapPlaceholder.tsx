"use client";

import { useState } from "react";
import { Map, AlertCircle, CheckCircle, Info } from "lucide-react";

interface MapRegion {
  id: string;
  name: string;
  code: string;
  score: number;
  status: "Optimal" | "Warning" | "Critical";
  activeProjects: number;
  svgPath: string; // coordinates for mockup districts
}

const REGIONS: MapRegion[] = [
  {
    id: "REG-1",
    name: "Northern District",
    code: "ND_01_001",
    score: 91.2,
    status: "Optimal",
    activeProjects: 45,
    svgPath: "M 10,10 L 110,10 L 110,90 L 10,90 Z",
  },
  {
    id: "REG-2",
    name: "Central Capital District",
    code: "DL_40_004",
    score: 68.5,
    status: "Warning",
    activeProjects: 82,
    svgPath: "M 120,10 L 220,10 L 220,90 L 120,90 Z",
  },
  {
    id: "REG-3",
    name: "Eastern Border Valley",
    code: "MH_201_003",
    score: 87.8,
    status: "Optimal",
    activeProjects: 114,
    svgPath: "M 230,10 L 330,10 L 330,90 L 230,90 Z",
  },
  {
    id: "REG-4",
    name: "Western Industrial Hub",
    code: "MN_3_005",
    score: 54.0,
    status: "Critical",
    activeProjects: 38,
    svgPath: "M 10,100 L 110,100 L 110,180 L 10,180 Z",
  },
  {
    id: "REG-5",
    name: "Southern Forest Grid",
    code: "SK_2_004",
    score: 79.5,
    status: "Optimal",
    activeProjects: 62,
    svgPath: "M 120,100 L 220,100 L 220,180 L 120,180 Z",
  },
  {
    id: "REG-6",
    name: "Coastal Ports Corridor",
    code: "MP_1_021",
    score: 63.1,
    status: "Warning",
    activeProjects: 41,
    svgPath: "M 230,100 L 330,100 L 330,180 L 230,180 Z",
  },
];

export default function HeatmapPlaceholder() {
  const [selectedRegion, setSelectedRegion] = useState<MapRegion>(REGIONS[1]);

  return (
    <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden h-full flex flex-col">
      {/* Panel Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map className="h-5 w-5 text-gov-gold-500" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Governance Heatmap & Regional Status
          </h3>
        </div>
        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase border border-slate-200">
          State Overlay v1.4
        </span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
        {/* Interactive SVG Map Column */}
        <div className="lg:col-span-3 flex flex-col justify-between border border-slate-100 rounded-md p-4 bg-slate-50/50">
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
            <span>District Boundary Grid</span>
            <span className="text-gov-gold-600">Click to Select District</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center min-h-[200px]">
            {/* SVG mockup representing districts */}
            <svg
              viewBox="0 0 340 190"
              className="w-full max-w-[400px] h-auto drop-shadow-sm transition-all"
            >
              {REGIONS.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                let fillColor = "fill-slate-100 stroke-slate-300";

                if (region.status === "Optimal") {
                  fillColor = isSelected
                    ? "fill-emerald-100 stroke-emerald-600 stroke-2"
                    : "fill-emerald-50/60 hover:fill-emerald-100/80 stroke-emerald-400";
                } else if (region.status === "Warning") {
                  fillColor = isSelected
                    ? "fill-amber-100 stroke-gov-gold-600 stroke-2"
                    : "fill-amber-50/60 hover:fill-amber-100/80 stroke-amber-400";
                } else if (region.status === "Critical") {
                  fillColor = isSelected
                    ? "fill-red-100 stroke-red-600 stroke-2"
                    : "fill-red-50/60 hover:fill-red-100/80 stroke-red-400";
                }

                return (
                  <path
                    key={region.id}
                    d={region.svgPath}
                    className={`cursor-pointer transition-all duration-200 ${fillColor}`}
                    onClick={() => setSelectedRegion(region)}
                  />
                );
              })}
              {/* Text labels for districts */}
              <text x="60" y="55" textAnchor="middle" className="text-[10px] font-bold fill-slate-500 font-mono pointer-events-none">ND</text>
              <text x="170" y="55" textAnchor="middle" className="text-[10px] font-bold fill-gov-gold-700 font-mono pointer-events-none">DL-40</text>
              <text x="280" y="55" textAnchor="middle" className="text-[10px] font-bold fill-emerald-700 font-mono pointer-events-none">MH-20</text>
              <text x="60" y="145" textAnchor="middle" className="text-[10px] font-bold fill-red-700 font-mono pointer-events-none">MN-3</text>
              <text x="170" y="145" textAnchor="middle" className="text-[10px] font-bold fill-emerald-700 font-mono pointer-events-none">SK-2</text>
              <text x="280" y="145" textAnchor="middle" className="text-[10px] font-bold fill-amber-700 font-mono pointer-events-none">MP-1</text>
            </svg>
          </div>

          {/* Map Color Legend */}
          <div className="flex gap-4 border-t border-slate-100 pt-3 mt-2 text-[10px] font-bold text-slate-400 justify-center">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-xs bg-emerald-100 border border-emerald-400"></span>
              <span>Optimal (&gt;80)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-xs bg-amber-100 border border-amber-400"></span>
              <span>Warning (60-80)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-xs bg-red-100 border border-red-400"></span>
              <span>Critical (&lt;60)</span>
            </div>
          </div>
        </div>

        {/* Selected Region Information Detail Panel */}
        <div className="lg:col-span-2 border border-slate-100 rounded-md p-5 flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-100 pb-3 mb-4">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                District Focus Details
              </div>
              <h4 className="text-md font-bold text-slate-800 mt-1">
                {selectedRegion.name}
              </h4>
              <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 mt-1.5 inline-block">
                Code: {selectedRegion.code}
              </span>
            </div>

            <div className="space-y-4">
              {/* Score Metric */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1">
                  <span>Governance Score</span>
                  <span className="font-mono">{selectedRegion.score}/100</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      selectedRegion.status === "Optimal"
                        ? "bg-emerald-500"
                        : selectedRegion.status === "Warning"
                        ? "bg-gov-gold-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${selectedRegion.score}%` }}
                  ></div>
                </div>
              </div>

              {/* Status Info Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-100 rounded p-2.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    Regional Status
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    {selectedRegion.status === "Optimal" && (
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                    )}
                    {selectedRegion.status === "Warning" && (
                      <AlertCircle className="h-3.5 w-3.5 text-gov-gold-600" />
                    )}
                    {selectedRegion.status === "Critical" && (
                      <AlertCircle className="h-3.5 w-3.5 text-red-600" />
                    )}
                    <span
                      className={`text-xs font-bold ${
                        selectedRegion.status === "Optimal"
                          ? "text-emerald-700"
                          : selectedRegion.status === "Warning"
                          ? "text-gov-gold-700"
                          : "text-red-700"
                      }`}
                    >
                      {selectedRegion.status}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded p-2.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                    Active Projects
                  </span>
                  <span className="text-sm font-bold text-slate-800 block mt-1">
                    {selectedRegion.activeProjects}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 mt-4 text-[10px] text-slate-400 font-medium leading-relaxed flex gap-2">
            <Info className="h-4.5 w-4.5 text-slate-300 shrink-0" />
            <span>
              Real-time synchronization active. Updates match satellite tracking and treasury audits.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
