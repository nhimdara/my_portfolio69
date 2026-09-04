import React, { useState } from "react";
import {
  Terminal,
  Code2,
  Play,
  CheckCircle2,
  Cpu,
  User,
  Sparkles,
} from "lucide-react";
import myPic from "../../assets/images/myPicture.webp";

export const HeroTerminal = () => {
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'architecture' | 'terminal'
  const [viewMode, setViewMode] = useState("telemetry"); // 'telemetry' | 'avatar'
  const [testOutput, setTestOutput] = useState(null);
  const [isRunningTests, setIsRunningTests] = useState(false);

  const handleRunTests = () => {
    setIsRunningTests(true);
    setTestOutput("Running engineering test suite...");
    setTimeout(() => {
      setTestOutput(
        "PASS src/__tests__/architecture.test.ts\n✓ RUPP IT Engineering Core [Pass]\n✓ Full-Stack Latency (< 80ms) [Pass]\n✓ React 19 Hydration & Smooth State [Pass]\n✓ Strict TypeScript Typing [Pass]\n\nTests: 4 passed, 4 total | Time: 0.38s"
      );
      setIsRunningTests(false);
    }, 800);
  };

  return (
    <div className="relative group max-w-xl lg:max-w-2xl w-full mx-auto max-w-full overflow-hidden">
      {/* Ambient background glow aura */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Glass Workspace Window (Dark IDE Theme) */}
      <div className="hero-terminal-window relative rounded-2xl overflow-hidden border border-white/15 bg-[#090d16] shadow-2xl backdrop-blur-2xl text-slate-100 max-w-full">
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d1220] border-b border-white/10 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-1 sm:ml-2 text-[10px] sm:text-[11px] font-mono text-slate-400 font-semibold tracking-wider truncate max-w-[105px] xs:max-w-none">
              nhim-dara<span className="hidden xs:inline">@workspace:~</span>
            </span>
          </div>

          {/* Mode Switcher: Telemetry vs Profile View */}
          <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("telemetry")}
              title="Interactive Telemetry Workspace"
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                viewMode === "telemetry"
                  ? "bg-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-400/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 size={13} />
              <span className="hidden xs:inline">Telemetry</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("avatar")}
              title="Developer Profile Card"
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer ${
                viewMode === "avatar"
                  ? "bg-purple-500/20 text-purple-300 shadow-sm border border-purple-400/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <User size={13} />
              <span className="hidden xs:inline">Profile</span>
            </button>
          </div>
        </div>

        {viewMode === "telemetry" ? (
          <div>
            {/* Editor Tabs (horizontal scrollable on narrow viewports) */}
            <div className="flex items-center border-b border-white/10 bg-[#0a0e19] text-xs font-mono overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 border-r border-white/10 transition-colors cursor-pointer shrink-0 whitespace-nowrap text-[11px] sm:text-xs ${
                  activeTab === "profile"
                    ? "text-cyan-300 bg-cyan-500/10 border-b-2 border-b-cyan-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Code2 size={13} className="text-cyan-400" />
                <span>dara.config.ts</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 border-r border-white/10 transition-colors cursor-pointer shrink-0 whitespace-nowrap text-[11px] sm:text-xs ${
                  activeTab === "architecture"
                    ? "text-purple-300 bg-purple-500/10 border-b-2 border-b-purple-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Cpu size={13} className="text-purple-400" />
                <span>architecture.sys</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 border-r border-white/10 transition-colors cursor-pointer shrink-0 whitespace-nowrap text-[11px] sm:text-xs ${
                  activeTab === "terminal"
                    ? "text-emerald-300 bg-emerald-500/10 border-b-2 border-b-emerald-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Terminal size={13} className="text-emerald-400" />
                <span>test-suite.sh</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 bg-[#090d16] min-h-[360px] sm:min-h-[380px] flex flex-col justify-between overflow-x-auto">
              {activeTab === "profile" && (
                <div className="space-y-1.5 leading-relaxed break-words">
                  <p className="text-slate-500">// Developer Profile Configuration</p>
                  <p>
                    <span className="text-purple-400">export const</span>{" "}
                    <span className="text-cyan-300 font-bold">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"Nhim Dara"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">institution:</span>{" "}
                    <span className="text-emerald-300">"Royal University of Phnom Penh"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">degree:</span>{" "}
                    <span className="text-emerald-300">"IT Engineering (2024-2028)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">"Phnom Penh, Cambodia (UTC+7)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-4 sm:pl-8 text-cyan-200 break-words">
                    "React.js", "TypeScript", "Tailwind CSS", "Laravel", "Spring Boot", "MySQL"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-400 font-bold break-all sm:break-normal">"INTERNSHIP_&amp;_FREELANCE_READY"</span>,
                  </p>
                  <p>&#125;;</p>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-3">
                  <p className="text-slate-500">// System Topology &amp; Clean Architecture</p>
                  <div className="rounded-xl border border-white/10 p-3 bg-white/[0.02] space-y-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-cyan-400 font-bold">CLIENT LAYER</span>
                      <span className="text-slate-300">React 19 • TypeScript • Tailwind</span>
                    </div>
                    <div className="h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent" />
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-purple-400 font-bold">REST &amp; AUTH SERVICE</span>
                      <span className="text-slate-300">Laravel Sanctum • Node.js • JWT</span>
                    </div>
                    <div className="h-0.5 bg-gradient-to-r from-purple-400 via-indigo-400 to-transparent" />
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-bold">DATA STORE &amp; PERSISTENCE</span>
                      <span className="text-slate-300">MySQL • PostgreSQL • MongoDB</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Resilient &amp; ACID Compliant Engineering</span>
                  </div>
                </div>
              )}

              {activeTab === "terminal" && (
                <div className="space-y-2.5">
                  <p className="text-slate-400">
                    $ <span className="text-cyan-300">vitest run</span> --suite=engineering
                  </p>
                  {testOutput ? (
                    <pre className="text-[11px] text-emerald-400 font-mono whitespace-pre-wrap leading-relaxed bg-slate-900/90 p-3 rounded-xl border border-emerald-500/30">
                      {testOutput}
                    </pre>
                  ) : (
                    <div className="py-6 text-center text-slate-500 text-xs">
                      Press below to execute automated system validation.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleRunTests}
                    disabled={isRunningTests}
                    className="refero-btn-primary mt-1 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-lg cursor-pointer"
                  >
                    <Play size={12} className={isRunningTests ? "animate-spin" : ""} />
                    <span>{isRunningTests ? "Executing..." : "Execute Test Suite ⚡"}</span>
                  </button>
                </div>
              )}

              {/* Terminal Bottom Status Bar */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-300 font-semibold">Active Node Telemetry</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-cyan-400 font-mono">main*</span>
                  <span>0 errors</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Profile Hologram Alternative (Refined Portrait Fit) */
          <div className="p-2.5 sm:p-4 bg-[#090d16]">
            <div className="relative aspect-[4/5] min-h-[340px] sm:min-h-[480px] max-h-[560px] w-full mx-auto rounded-2xl overflow-hidden bg-[#0d1220] border border-white/15 shadow-2xl">
              <img
                src={myPic}
                alt="Nhim Dara"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              {/* Vignette Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/95 via-[#090d16]/30 to-transparent pointer-events-none" />

              {/* Badges on Top */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-[#070a12]/90 backdrop-blur-md text-cyan-300 border border-white/15 shadow-md truncate">
                  RUPP IT Engineering
                </span>
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 backdrop-blur-md flex items-center gap-1.5 shrink-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Glass Details Bar at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-4 rounded-xl bg-[#090d16]/90 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-slate-100">
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">Nhim Dara</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono">Full-Stack Web Developer</p>
                </div>
                <div className="flex gap-1.5 text-xs font-mono text-cyan-300">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/10 border border-white/15 font-bold">React</span>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/10 border border-white/15 font-bold">Laravel</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTerminal;
