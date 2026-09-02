import React, { useState } from "react";
import {
  Settings,
  Sparkles,
  Volume2,
  SunMedium,
  Info,
  CheckCircle2,
  Laptop,
  HardDrive,
  ShieldCheck,
  User,
  ExternalLink,
  ChevronRight,
  Wifi,
} from "lucide-react";
import { wallpapers } from "../../data/wallpaperData";
import { developerInfo } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";

export const SettingsApp = () => {
  const {
    currentWallpaperId,
    setWallpaperId,
    soundEnabled,
    setSoundEnabled,
    brightness,
    setBrightness,
    viewMode,
    setViewMode,
    showToast,
  } = useMacOs();

  const [activeTab, setActiveTab] = useState("wallpaper");

  const tabs = [
    { id: "wallpaper", label: "Wallpaper", icon: Sparkles },
    { id: "sound", label: "Sound", icon: Volume2 },
    { id: "display", label: "Displays", icon: SunMedium },
    { id: "general", label: "General & About", icon: Info },
  ];

  return (
    <div className="flex h-full w-full bg-[#1e1e24] text-slate-100 select-none overflow-hidden font-sans">
      {/* Settings Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/[0.08] bg-[#1a1a20]/80 backdrop-blur-2xl p-3 flex flex-col justify-between overflow-y-auto">
        <div className="space-y-4">
          {/* Apple ID Profile Card */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <img
              src={developerInfo.avatar}
              alt={developerInfo.name}
              className="h-10 w-10 rounded-full object-cover border border-white/20 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white truncate">{developerInfo.name}</h4>
              <p className="text-[10px] text-slate-400 truncate">Antigravity Account</p>
            </div>
          </div>

          {/* Navigation Category Items */}
          <div className="space-y-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white font-semibold shadow-sm"
                      : "text-slate-300 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon size={14} className={isActive ? "text-white" : "text-blue-400"} />
                    <span>{tab.label}</span>
                  </div>
                  <ChevronRight size={12} className={isActive ? "text-white" : "text-slate-500"} />
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode Switcher */}
        <button
          onClick={() => {
            setViewMode(viewMode === "macos" ? "classic" : "macos");
            showToast(viewMode === "macos" ? "Switched to Classic Portfolio" : "Switched to macOS Desktop");
          }}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold text-xs border border-amber-400/30 transition-colors shadow-sm"
        >
          <Laptop size={14} />
          <span>{viewMode === "macos" ? "Classic View" : "macOS View"}</span>
        </button>
      </aside>

      {/* Main Settings Panel */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-[#141418] w-full">
        {activeTab === "wallpaper" && (
          <div className="space-y-6 w-full">
            <div>
              <h3 className="text-lg font-bold text-white">Wallpaper</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Choose a desktop wallpaper or activate the interactive zero-gravity particle engine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {wallpapers.map((wp) => {
                const isSelected = currentWallpaperId === wp.id;

                return (
                  <div
                    key={wp.id}
                    onClick={() => {
                      setWallpaperId(wp.id);
                      showToast(`Wallpaper set to ${wp.name}`);
                    }}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/50 shadow-xl"
                        : "bg-white/[0.04] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div
                      className={`h-32 w-full rounded-xl bg-gradient-to-br ${wp.previewGradient} border border-white/15 mb-3 relative overflow-hidden flex items-center justify-center shadow-inner`}
                    >
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 h-6 w-6 rounded-full bg-blue-500 text-white grid place-items-center shadow-md">
                          <CheckCircle2 size={15} strokeWidth={3} />
                        </div>
                      )}
                      {wp.type === "canvas" && (
                        <span className="px-2.5 py-1 rounded-full bg-black/70 text-[10px] font-mono text-cyan-300 backdrop-blur-md border border-cyan-400/30">
                          ✨ Interactive Canvas
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-white">{wp.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{wp.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "sound" && (
          <div className="space-y-6 w-full max-w-2xl">
            <div>
              <h3 className="text-lg font-bold text-white">Sound Effects</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Configure synthesized macOS desktop audio interactions.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 divide-y divide-white/[0.06]">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h4 className="text-sm font-bold text-white">User Interface Sound Effects</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Synthesized Web Audio chimes on window open, close, and trash empty.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSoundEnabled(!soundEnabled);
                    showToast(soundEnabled ? "Audio Muted" : "Audio Enabled");
                  }}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    soundEnabled ? "bg-blue-600" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      soundEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "display" && (
          <div className="space-y-6 w-full max-w-2xl">
            <div>
              <h3 className="text-lg font-bold text-white">Displays</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Adjust screen brightness and desktop rendering settings.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 space-y-4">
              <div className="flex justify-between text-xs text-slate-200">
                <span className="font-semibold text-white">Display Brightness</span>
                <span className="font-mono text-blue-400 font-bold">{brightness}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="120"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-3 rounded-full bg-slate-800 accent-blue-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        {activeTab === "general" && (
          <div className="space-y-6 w-full max-w-2xl">
            <div>
              <h3 className="text-lg font-bold text-white">About macOS Antigravity</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                System specification and developer profile.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 space-y-4 text-xs">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black text-xl shadow-md">
                  AG
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">macOS Antigravity Edition</h4>
                  <p className="text-xs text-slate-400">Version 2.0 (Build 2026.9 Tahoe)</p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Developer</span>
                  <span className="text-blue-300 font-bold">{developerInfo.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Education</span>
                  <span>{developerInfo.major} ({developerInfo.university})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-slate-400">Architecture</span>
                  <span>React 19, Tailwind CSS, Vite</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Contact</span>
                  <span className="text-blue-300">{developerInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
