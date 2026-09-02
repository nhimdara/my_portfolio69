import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";
import { developerInfo } from "../../data/portfolioData";
import {
  FinderIcon,
  SafariIcon,
  TerminalIcon,
  NotesIcon,
  XcodeIcon,
  PreviewIcon,
  MailIcon,
  SettingsIcon,
  PdfDocIcon,
  MacFolderIcon,
} from "./MacIcons";

export const Launchpad = () => {
  const { isLaunchpadOpen, setIsLaunchpadOpen, openWindow, setViewMode, viewMode, showToast } =
    useMacOs();
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isLaunchpadOpen) {
      setSearch("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isLaunchpadOpen]);

  if (!isLaunchpadOpen) return null;

  const launchpadApps = [
    {
      id: "finder",
      name: "Finder",
      subtitle: "Projects Showcase",
      Component: FinderIcon,
      action: () => openWindow("finder"),
    },
    {
      id: "safari",
      name: "Safari",
      subtitle: "Web Browser",
      Component: SafariIcon,
      action: () => openWindow("safari"),
    },
    {
      id: "terminal",
      name: "Terminal",
      subtitle: "Command Line",
      Component: TerminalIcon,
      action: () => openWindow("terminal"),
    },
    {
      id: "notes",
      name: "Notes",
      subtitle: "Bio & DNA",
      Component: NotesIcon,
      action: () => openWindow("notes"),
    },
    {
      id: "skills",
      name: "Skills Matrix",
      subtitle: "Tech Radar",
      Component: XcodeIcon,
      action: () => openWindow("skills"),
    },
    {
      id: "preview",
      name: "Preview",
      subtitle: "Certificates",
      Component: PreviewIcon,
      action: () => openWindow("preview"),
    },
    {
      id: "mail",
      name: "Mail",
      subtitle: "Contact",
      Component: MailIcon,
      action: () => openWindow("mail"),
    },
    {
      id: "settings",
      name: "System Settings",
      subtitle: "Preferences",
      Component: SettingsIcon,
      action: () => openWindow("settings"),
    },
    {
      id: "resume",
      name: "Curriculum Vitae",
      subtitle: "Download PDF",
      Component: PdfDocIcon,
      action: () => {
        window.open(developerInfo.cvUrl, "_blank");
        showToast("Opening Resume PDF...");
      },
    },
  ];

  const filteredApps = search.trim()
    ? launchpadApps.filter(
        (a) =>
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.subtitle.toLowerCase().includes(search.toLowerCase())
      )
    : launchpadApps;

  return (
    <div
      onClick={() => setIsLaunchpadOpen(false)}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200 select-none p-6"
    >
      {/* Search Input */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm mb-12 flex items-center"
      >
        <Search size={16} className="absolute left-3.5 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Launchpad"
          className="w-full rounded-xl bg-white/10 border border-white/20 pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 p-0.5 text-slate-400 hover:text-white"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Grid of Realistic macOS Apps */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-12 max-w-4xl"
      >
        {filteredApps.map((app) => {
          const IconComponent = app.Component;

          return (
            <div
              key={app.id}
              onClick={() => {
                setIsLaunchpadOpen(false);
                app.action();
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-active:scale-95 drop-shadow-2xl">
                <IconComponent size="100%" className="w-full h-full" />
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-md text-center">
                {app.name}
              </span>
              <span className="text-[11px] text-slate-400 text-center -mt-1 hidden sm:inline">
                {app.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
