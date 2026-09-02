import React, { useState } from "react";
import {
  Clock,
  Calendar as CalendarIcon,
  CloudSun,
  Activity,
  Cpu,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";

export const NotificationCenter = () => {
  const { isWidgetsOpen, setIsWidgetsOpen } = useMacOs();
  const [quickNote, setQuickNote] = useState(
    "💡 Todo: Check out Antigravity's LearnFlow and Cambodian POS showcase in Finder!"
  );

  if (!isWidgetsOpen) return null;

  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const dayNum = now.getDate();
  const monthName = now.toLocaleDateString("en-US", { month: "short" });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed right-2 top-9 bottom-20 w-80 rounded-2xl bg-slate-900/90 backdrop-blur-3xl border border-white/20 p-3.5 text-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-[9999] overflow-y-auto space-y-3.5 select-none animate-in slide-in-from-right-4 duration-150"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
          <Sparkles size={12} />
          Widgets &amp; Notifications
        </span>
        <button
          onClick={() => setIsWidgetsOpen(false)}
          className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X size={14} />
        </button>
      </div>

      {/* Calendar & Date Widget */}
      <div className="rounded-xl bg-gradient-to-br from-red-950/40 to-slate-900/80 border border-red-500/20 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-red-400">
            <CalendarIcon size={16} />
            <span className="text-xs font-bold uppercase font-mono">{monthName}</span>
          </div>
          <span className="text-xs text-slate-400">{dayName}</span>
        </div>
        <div className="mt-2 text-3xl font-black text-white">{dayNum}</div>
        <p className="mt-1 text-[11px] text-slate-300">
          Open for full-stack engineering collaborations &amp; roles.
        </p>
      </div>

      {/* Weather Widget */}
      <div className="rounded-xl bg-gradient-to-br from-blue-950/40 to-slate-900/80 border border-blue-500/20 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white">Phnom Penh</span>
          <CloudSun size={18} className="text-cyan-400" />
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-2xl font-black text-white">29°C</span>
          <span className="text-xs text-cyan-300">Clear Night</span>
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-slate-400 font-mono">
          <span>H: 33°C</span>
          <span>L: 25°C</span>
          <span>Humidity: 68%</span>
        </div>
      </div>

      {/* System Resources / Specs */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-200">
          <span className="flex items-center gap-1.5">
            <Cpu size={14} className="text-emerald-400" />
            System Performance
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">Optimal</span>
        </div>

        {/* CPU Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>CPU Usage (Apple M3 Max)</span>
            <span className="font-mono text-cyan-300">12%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full w-[12%]" />
          </div>
        </div>

        {/* Memory Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Unified Memory (36 GB)</span>
            <span className="font-mono text-purple-300">32%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-400 rounded-full w-[32%]" />
          </div>
        </div>
      </div>

      {/* Quick Scratchpad Note */}
      <div className="rounded-xl bg-amber-500/10 border border-amber-400/20 p-3 space-y-1.5">
        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-mono">
          Quick Scratchpad
        </span>
        <textarea
          value={quickNote}
          onChange={(e) => setQuickNote(e.target.value)}
          rows={3}
          className="w-full bg-transparent text-xs text-slate-200 focus:outline-none resize-none placeholder:text-slate-500 font-sans leading-relaxed"
          placeholder="Jot down notes or ideas..."
        />
      </div>
    </div>
  );
};
