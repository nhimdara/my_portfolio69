import React, { useState, useEffect } from "react";
import {
  FolderGit2,
  Cpu,
  CalendarClock,
  GitCommit,
  Activity,
  Github,
} from "lucide-react";
import LiquidCard from "./LiquidCard";

export const DeveloperStats = () => {
  const [publicRepos, setPublicRepos] = useState(44); // Real GitHub count for @nhimdara

  useEffect(() => {
    fetch("https://api.github.com/users/nhimdara")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === "number") {
          setPublicRepos(data.public_repos);
        }
      })
      .catch(() => {});
  }, []);

  // Simulated mini GitHub contribution squares (12 columns x 3 rows)
  const commitGrid = [
    [1, 2, 3, 2, 3, 4, 3, 2, 4, 3, 4, 2],
    [2, 3, 4, 3, 4, 4, 2, 3, 3, 4, 3, 4],
    [1, 2, 2, 4, 3, 2, 4, 3, 2, 4, 4, 3],
  ];

  const getCommitColor = (level) => {
    switch (level) {
      case 4:
        return "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]";
      case 3:
        return "bg-emerald-500/75";
      case 2:
        return "bg-emerald-600/45";
      default:
        return "bg-emerald-900/30 border border-emerald-500/20";
    }
  };

  return (
    <div className="relative pt-4 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Real Featured Projects Completed */}
          <LiquidCard
            glowColor="cyan"
            className="p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-inner">
                  <FolderGit2 size={20} />
                </div>
                <span className="badge-cyan text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border">
                  FEATURED
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="refero-stat-number text-4xl sm:text-5xl font-black tracking-tight font-display">
                  13
                </span>
                <span className="refero-stat-unit-cyan text-xs font-mono font-semibold">
                  BUILDS
                </span>
              </div>

              <p className="text-sm font-bold text-white mt-1">
                Projects Completed
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Full-Stack Apps, Mini Apps &amp; REST APIs
              </p>
            </div>

            {/* Mini Production Waveform Sparkline */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold">100% Production Grade</span>
              </div>
              <Activity size={14} className="text-cyan-400" />
            </div>
          </LiquidCard>

          {/* Card 2: Real Technologies Mastered */}
          <LiquidCard
            glowColor="purple"
            className="p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-400 shadow-inner">
                  <Cpu size={20} />
                </div>
                <span className="badge-purple text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border">
                  TOOLCHAIN
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="refero-stat-number text-4xl sm:text-5xl font-black tracking-tight font-display">
                  17
                </span>
                <span className="refero-stat-unit-purple text-xs font-mono font-semibold">
                  SKILLS
                </span>
              </div>

              <p className="text-sm font-bold text-white mt-1">
                Core Technologies
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Frontend, Backend, Relational DBs &amp; Tools
              </p>
            </div>

            {/* Stack Chips Cluster */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              {["React 19", "Laravel 12", "TypeScript", "MySQL", "PHP 8"].map((t) => (
                <span
                  key={t}
                  className="refero-tech-pill px-2 py-0.5 rounded-md text-[10px] font-mono group-hover:border-purple-400/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </LiquidCard>

          {/* Card 3: Real Years Engineering & CS Studies */}
          <LiquidCard
            glowColor="amber"
            className="p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-400 shadow-inner">
                  <CalendarClock size={20} />
                </div>
                <span className="badge-amber text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border">
                  JOURNEY
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="refero-stat-number text-4xl sm:text-5xl font-black tracking-tight font-display">
                  2+
                </span>
                <span className="refero-stat-unit-amber text-xs font-mono font-semibold">
                  YEARS
                </span>
              </div>

              <p className="text-sm font-bold text-white mt-1">
                Engineering &amp; Building
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                RUPP ITE Track + Real Client Builds
              </p>
            </div>

            {/* Milestone Dual Track Badge */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400 font-medium">RUPP ITE Track</span>
              <span className="text-amber-400 font-bold">Class of &apos;28</span>
            </div>
          </LiquidCard>

          {/* Card 4: Real GitHub Public Repositories (Live GitHub API) */}
          <LiquidCard
            glowColor="emerald"
            className="p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 shadow-inner">
                  <Github size={20} />
                </div>
                <span className="badge-emerald text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border">
                  LIVE REPOS
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="refero-stat-number text-4xl sm:text-5xl font-black tracking-tight font-display">
                  {publicRepos}
                </span>
                <span className="refero-stat-unit-emerald text-xs font-mono font-semibold">
                  REPOSITORIES
                </span>
              </div>

              <p className="text-sm font-bold text-white mt-1">
                GitHub Repositories
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Public Codebases on @nhimdara
              </p>
            </div>

            {/* Visual GitHub Commit Heatmap Matrix */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-1">
                {commitGrid.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1 justify-between">
                    {row.map((lvl, cIdx) => (
                      <span
                        key={cIdx}
                        className={`h-2 w-2 rounded-[2px] transition-all duration-300 ${getCommitColor(
                          lvl
                        )}`}
                        title="GitHub Code Activity"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </div>
  );
};

export default DeveloperStats;
