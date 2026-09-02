import React, { useState, useEffect, useRef } from "react";
import {
  Wifi,
  Volume2,
  VolumeX,
  Search,
  RefreshCw,
  Lock,
  Laptop,
} from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";
import { developerInfo } from "../../data/portfolioData";
import { AppleIcon, ControlCenterGlyph, MacBatteryGlyph } from "./MacIcons";

export const MenuBar = () => {
  const {
    activeWindowId,
    windows,
    openWindow,
    soundEnabled,
    setSoundEnabled,
    isSpotlightOpen,
    setIsSpotlightOpen,
    isControlCenterOpen,
    setIsControlCenterOpen,
    isWidgetsOpen,
    setIsWidgetsOpen,
    isAppleMenuOpen,
    setIsAppleMenuOpen,
    viewMode,
    setViewMode,
    showToast,
  } = useMacOs();

  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuBarRef = useRef(null);

  // Live clock formatted as `Wed Sep 2  10:15 PM`
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const date = now.toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      setTimeStr(time);
      setDateStr(date);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuBarRef.current && !menuBarRef.current.contains(e.target)) {
        setIsAppleMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setIsAppleMenuOpen]);

  // Current active app title
  const activeApp = activeWindowId && windows[activeWindowId] ? windows[activeWindowId] : null;
  const activeAppName = activeApp ? activeApp.defaultTitle : "Finder";

  const getAppMenus = () => {
    switch (activeWindowId) {
      case "terminal":
        return [
          {
            label: "Shell",
            items: [
              { label: "New Window", shortcut: "⌘N", action: () => openWindow("terminal") },
              { label: "Clear Scrollback", shortcut: "⌘K", action: () => showToast("Terminal cleared") },
              { label: "Run Neofetch", action: () => showToast("Type 'neofetch'") },
            ],
          },
          {
            label: "Edit",
            items: [
              { label: "Copy", shortcut: "⌘C" },
              { label: "Paste", shortcut: "⌘V" },
              { label: "Select All", shortcut: "⌘A" },
            ],
          },
        ];
      case "finder":
        return [
          {
            label: "File",
            items: [
              { label: "New Window", shortcut: "⌘N", action: () => openWindow("finder") },
              { label: "Open in Safari", action: () => openWindow("safari") },
            ],
          },
          {
            label: "View",
            items: [
              { label: "as Icons", shortcut: "⌘1" },
              { label: "as List", shortcut: "⌘2" },
              { label: "as Columns", shortcut: "⌘3" },
            ],
          },
          {
            label: "Go",
            items: [
              { label: "All Projects", action: () => openWindow("finder") },
              { label: "Certificates", action: () => openWindow("preview") },
              { label: "Skills Matrix", action: () => openWindow("skills") },
            ],
          },
        ];
      default:
        return [
          {
            label: "File",
            items: [
              { label: "Browse Projects", action: () => openWindow("finder") },
              { label: "Open Terminal", action: () => openWindow("terminal") },
              { label: "Contact Nhim Dara", action: () => openWindow("mail") },
            ],
          },
          {
            label: "Edit",
            items: [
              { label: "Copy Email", action: () => {
                navigator.clipboard.writeText(developerInfo.email);
                showToast("Copied email: " + developerInfo.email);
              }},
            ],
          },
          {
            label: "Window",
            items: [
              { label: "Minimize", shortcut: "⌘M", action: () => activeWindowId && windows[activeWindowId] && openWindow(activeWindowId) },
            ],
          },
          {
            label: "Help",
            items: [
              { label: "Antigravity Help", action: () => openWindow("notes") },
              { label: "Keyboard Shortcuts", shortcut: "⌘K", action: () => setIsSpotlightOpen(true) },
            ],
          },
        ];
    }
  };

  const appMenus = getAppMenus();

  return (
    <header
      ref={menuBarRef}
      className="fixed top-0 inset-x-0 h-7 z-[9000] flex items-center justify-between px-3 text-[13px] font-medium select-none bg-[#121216]/65 backdrop-blur-[24px] border-b border-white/[0.12] text-slate-100 shadow-sm"
    >
      {/* Left Apple & Menu Items */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/*  Apple Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setIsAppleMenuOpen((prev) => !prev);
              setActiveDropdown(null);
            }}
            className={`flex items-center justify-center px-1.5 py-0.5 rounded transition-colors ${
              isAppleMenuOpen ? "bg-white/20 text-white" : "hover:bg-white/10 text-white"
            }`}
            title="Apple Menu"
          >
            <AppleIcon size={14} className="fill-current text-white drop-shadow-sm" />
          </button>

          {isAppleMenuOpen && (
            <div className="absolute left-0 top-6 w-56 rounded-xl bg-[#1e1e24]/95 backdrop-blur-3xl border border-white/20 p-1.5 text-xs text-slate-200 shadow-2xl z-50 animate-in fade-in duration-75">
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  openWindow("notes");
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <span>About This Mac (Antigravity)</span>
                <span className="text-[10px] text-slate-400">v2.0</span>
              </button>
              <div className="my-1 border-t border-white/10" />
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  openWindow("settings");
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <span>System Settings...</span>
                <span className="text-[10px] text-slate-400 font-mono">⌘,</span>
              </button>
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  setIsSpotlightOpen(true);
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <span>Spotlight Search</span>
                <span className="text-[10px] text-slate-400 font-mono">⌘K</span>
              </button>
              <div className="my-1 border-t border-white/10" />
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  setViewMode(viewMode === "macos" ? "classic" : "macos");
                  showToast(viewMode === "macos" ? "Switched to Classic Scroll View" : "Switched to macOS Desktop");
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-amber-300 font-medium"
              >
                <span>Switch to Classic View</span>
                <Laptop size={12} />
              </button>
              <div className="my-1 border-t border-white/10" />
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  window.location.reload();
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <span>Restart...</span>
                <RefreshCw size={11} className="text-slate-400" />
              </button>
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  showToast("Desktop Locked. Click anywhere to resume.");
                }}
                className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-red-300"
              >
                <span>Lock Screen</span>
                <Lock size={11} />
              </button>
            </div>
          )}
        </div>

        {/* Active Application Name (Bold) */}
        <span className="font-bold tracking-tight text-white font-display text-[13px] px-1">
          {activeAppName}
        </span>

        {/* Context Menus */}
        <div className="hidden md:flex items-center gap-0.5 text-slate-200 text-[13px]">
          {appMenus.map((menu, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => {
                  setIsAppleMenuOpen(false);
                  setActiveDropdown(activeDropdown === idx ? null : idx);
                }}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeDropdown === idx ? "bg-white/20 text-white" : "hover:bg-white/10"
                }`}
              >
                {menu.label}
              </button>

              {activeDropdown === idx && (
                <div className="absolute left-0 top-6 w-48 rounded-xl bg-[#1e1e24]/95 backdrop-blur-3xl border border-white/20 p-1 text-xs text-slate-200 shadow-2xl z-50 animate-in fade-in duration-75">
                  {menu.items.map((item, itemIdx) => (
                    <button
                      key={itemIdx}
                      onClick={() => {
                        setActiveDropdown(null);
                        if (item.action) item.action();
                      }}
                      className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-left"
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Apple System Status Tray */}
      <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-slate-200">
        {/* Sound toggle */}
        <button
          onClick={() => {
            setSoundEnabled(!soundEnabled);
            showToast(soundEnabled ? "Audio Muted" : "Audio Enabled");
          }}
          className="p-1 rounded hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
          title={soundEnabled ? "Sound: On" : "Sound: Muted"}
        >
          {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} className="text-slate-400" />}
        </button>

        {/* Wi-Fi */}
        <button
          onClick={() => showToast("Wi-Fi: Antigravity Network (Connected)")}
          className="p-1 rounded hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
          title="Wi-Fi"
        >
          <Wifi size={14} />
        </button>

        {/* Battery with internal charge */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-200" title="Battery: 100% (Power Adapter Connected)">
          <MacBatteryGlyph level={100} size={22} />
          <span className="hidden lg:inline text-[11px]">100%</span>
        </div>

        {/* Spotlight Search Icon */}
        <button
          onClick={() => {
            setIsSpotlightOpen((prev) => !prev);
            setIsControlCenterOpen(false);
          }}
          className={`p-1 rounded transition-colors ${
            isSpotlightOpen ? "bg-white/20 text-white" : "hover:bg-white/10 hover:text-white"
          }`}
          title="Spotlight Search (⌘K)"
        >
          <Search size={13} />
        </button>

        {/* Official Control Center Glyph */}
        <button
          onClick={() => {
            setIsControlCenterOpen((prev) => !prev);
            setIsSpotlightOpen(false);
            setIsWidgetsOpen(false);
          }}
          className={`p-1 rounded transition-colors ${
            isControlCenterOpen ? "bg-white/20 text-white" : "hover:bg-white/10 hover:text-white"
          }`}
          title="Control Center"
        >
          <ControlCenterGlyph size={14} />
        </button>

        {/* Live Date & Time */}
        <button
          onClick={() => {
            setIsWidgetsOpen((prev) => !prev);
            setIsControlCenterOpen(false);
          }}
          className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded transition-colors font-medium text-[12px] ${
            isWidgetsOpen ? "bg-white/20 text-white" : "hover:bg-white/10"
          }`}
          title="Widgets & Calendar"
        >
          <span className="hidden sm:inline">{dateStr}</span>
          <span className="font-mono text-[12px]">{timeStr}</span>
        </button>
      </div>
    </header>
  );
};
