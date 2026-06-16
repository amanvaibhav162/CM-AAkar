"use client";

import { useState } from "react";
import { Settings, Shield, RefreshCw, Cpu, Check } from "lucide-react";

export default function SettingsPage() {
  const [syncFreq, setSyncFreq] = useState("realtime");
  const [cryptSeal, setCryptSeal] = useState(true);
  const [aiModel, setAiModel] = useState("gov-v3");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto">
      <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden max-w-2xl">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gov-gold-500" />
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Control Panel & System Anchors
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Sync Frequency */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-slate-400" />
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Database Synchronization
              </label>
            </div>
            <p className="text-[11px] text-slate-400">
              Set the frequency for scanning district treasury files and satellite project progress logs.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-1">
              {["realtime", "hourly", "daily"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setSyncFreq(freq)}
                  className={`py-2 px-3 border rounded text-xs font-bold uppercase tracking-wider transition-all ${
                    syncFreq === freq
                      ? "bg-gov-navy-950 text-gov-gold-500 border-gov-navy-900"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Cryptographic Seal */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-slate-400" />
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Cryptographic Signature Seal
                </label>
              </div>
              <p className="text-[11px] text-slate-400 max-w-md">
                Ensure all dispatched directives require a dual signature token key bound to officer ID 254002.
              </p>
            </div>
            <button
              onClick={() => setCryptSeal(!cryptSeal)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none shrink-0 ${
                cryptSeal ? "bg-gov-gold-500" : "bg-slate-300"
              }`}
            >
              <div
                className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition-transform duration-300 ${
                  cryptSeal ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>

          <hr className="border-slate-100" />

          {/* AI Auditor Core Models */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-slate-400" />
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                AI Auditor Model Scope
              </label>
            </div>
            <p className="text-[11px] text-slate-400">
              Select which AI model processes financial risk indicators and highlights pending files.
            </p>
            <div className="space-y-2 pt-1">
              {[
                { id: "gov-v3", name: "Governance-v3 (Optimized for financial integrity)", detail: "Strict compliance filters, heavy leak alerts" },
                { id: "comp-v1", name: "Compliance-v1 (SLA and timeline focused)", detail: "Tracks project delay indicators and clearance blockages" },
              ].map((model) => (
                <div
                  key={model.id}
                  onClick={() => setAiModel(model.id)}
                  className={`p-3 border rounded-md cursor-pointer transition-all flex items-start gap-3 ${
                    aiModel === model.id
                      ? "bg-slate-50 border-gov-gold-500/50 text-slate-800"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50/50"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                      aiModel === model.id
                        ? "border-gov-gold-500 text-gov-gold-500 bg-gov-gold-50"
                        : "border-slate-300"
                    }`}
                  >
                    {aiModel === model.id && <Check className="h-2.5 w-2.5" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold">{model.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{model.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">
            System Console: v1.4.2-Secure
          </span>
          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs font-bold text-emerald-600 animate-pulse">
                Configuration applied!
              </span>
            )}
            <button
              onClick={handleSave}
              className="bg-gov-navy-950 hover:bg-gov-navy-900 border border-gov-navy-800 text-gov-gold-500 text-xs font-bold py-2 px-6 rounded tracking-wider uppercase transition-colors"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
