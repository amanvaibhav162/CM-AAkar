"use client";

import { usePathname } from "next/navigation";
import { User, Bell, Search, ShieldCheck } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  // Map route pathnames to clean dashboard page titles
  const getPageTitle = (path: string) => {
    switch (path) {
      case "/":
      case "/dashboard":
        return "Overview";
      case "/districts":
        return "District Administration";
      case "/projects":
        return "Major Project Monitoring";
      case "/funds":
        return "Fund Allocation & Audits";
      case "/officers":
        return "Officer Performance Portal";
      case "/actions":
        return "Governance Action Tracker";
      case "/audits":
        return "Compliance & Audits";
      case "/communication-center":
        return "Communication Command Center";
      case "/settings":
        return "System Settings";
      case "/about":
        return "About AAKAR Portal";
      default:
        return "Command Center";
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      {/* Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          {getPageTitle(pathname || "/dashboard")}
        </h1>
        <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-gov-gold-50 text-gov-gold-700 border border-gov-gold-100 px-2 py-0.5 rounded uppercase tracking-wider">
          <ShieldCheck className="h-3 w-3" /> SECURE CONSOLE
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search districts, files, officers..."
            className="w-64 bg-slate-50 border border-slate-200 text-xs rounded-md pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gov-gold-500 focus:border-gov-gold-500 transition-all text-slate-700 placeholder-slate-400"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-1 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-gov-gold-500 ring-2 ring-white"></span>
        </button>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-slate-200"></div>

        {/* Admin/User Profile Badge */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider leading-none">
              ADMIN_PORTAL
            </span>
            <span className="text-[10px] font-semibold text-slate-400 font-mono mt-1">
              254002
            </span>
          </div>
          <div className="h-9 w-9 rounded bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-600 hover:bg-slate-200 hover:border-slate-300 transition-all cursor-pointer select-none">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
