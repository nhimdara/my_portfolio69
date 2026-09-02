import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ExternalLink,
  ArrowRight,
  Code,
  Sparkles,
  X,
} from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";
import { projects, certificates, developerInfo } from "../../data/portfolioData";
import { useSoundEffects } from "../../hooks/useSoundEffects";
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

export const Spotlight = () => {
  const { isSpotlightOpen, setIsSpotlightOpen, openWindow, showToast, setWallpaperId } = useMacOs();
  const { playClick, playOpen } = useSoundEffects();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSpotlightOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSpotlightOpen]);

  // Aggregate searchable items
  const allItems = [
    // Apps
    {
      id: "app-finder",
      title: "Finder — Projects Showcase",
      category: "Applications",
      IconComponent: FinderIcon,
      description: "Browse 13+ full-stack and mobile applications.",
      action: () => openWindow("finder"),
    },
    {
      id: "app-terminal",
      title: "Terminal — Interactive CLI",
      category: "Applications",
      IconComponent: TerminalIcon,
      description: "Run custom shell commands and inspect system specs.",
      action: () => openWindow("terminal"),
    },
    {
      id: "app-notes",
      title: "Notes — Bio & Engineering DNA",
      category: "Applications",
      IconComponent: NotesIcon,
      description: "Read about Nhim Dara, IT engineering degree, and background.",
      action: () => openWindow("notes"),
    },
    {
      id: "app-skills",
      title: "Skills Matrix — Xcode Matrix",
      category: "Applications",
      IconComponent: XcodeIcon,
      description: "Inspect frontend, backend, database, and DevOps matrix.",
      action: () => openWindow("skills"),
    },
    {
      id: "app-mail",
      title: "Mail — Contact Nhim Dara",
      category: "Applications",
      IconComponent: MailIcon,
      description: "Compose a message or copy direct email contact.",
      action: () => openWindow("mail"),
    },
    {
      id: "app-preview",
      title: "Preview — Verified Certificates",
      category: "Applications",
      IconComponent: PreviewIcon,
      description: "View verified diplomas and MoEYS recognition honors.",
      action: () => openWindow("preview"),
    },
    {
      id: "app-settings",
      title: "System Settings — Preferences",
      category: "Applications",
      IconComponent: SettingsIcon,
      description: "Customize wallpaper, audio effects, and theme.",
      action: () => openWindow("settings"),
    },

    // Projects
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      title: p.title,
      category: "Projects",
      IconComponent: MacFolderIcon,
      description: `${p.category} (${p.year}) — ${p.tech.slice(0, 4).join(", ")}`,
      action: () => {
        openWindow("finder");
        showToast(`Selected project: ${p.title}`);
      },
    })),

    // Quick Actions
    {
      id: "action-cv",
      title: "Download Resume / CV (PDF)",
      category: "Quick Actions",
      IconComponent: PdfDocIcon,
      description: "Open official curriculum vitae in a new browser tab.",
      action: () => {
        window.open(developerInfo.cvUrl, "_blank");
        showToast("Opening Resume PDF...");
      },
    },
    {
      id: "action-telegram",
      title: "Direct Telegram Message",
      category: "Quick Actions",
      IconComponent: MailIcon,
      description: "Chat with Dara directly on Telegram (@dara_nhim).",
      action: () => {
        window.open(developerInfo.socials.telegram, "_blank");
      },
    },
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const current = filteredItems[selectedIndex];
      if (current) {
        setIsSpotlightOpen(false);
        playOpen();
        current.action();
      }
    }
  };

  if (!isSpotlightOpen) return null;

  const activeItem = filteredItems[selectedIndex];

  return (
    <div
      onClick={() => setIsSpotlightOpen(false)}
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-150 select-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl bg-slate-900/95 backdrop-blur-3xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
      >
        {/* Spotlight Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Search size={22} className="text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Spotlight Search: search projects, apps, skills, commands..."
            className="w-full bg-transparent text-lg text-white placeholder:text-slate-400 focus:outline-none font-medium"
          />
          <kbd className="hidden sm:inline px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[11px] font-mono text-slate-300">
            ESC
          </kbd>
        </div>

        {/* Results List & Preview Panel */}
        <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 max-h-[380px] overflow-y-auto">
          {/* Results List */}
          <div className="md:col-span-3 p-1.5 space-y-0.5 overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching results for "{query}"
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const IconComponent = item.IconComponent;
                const isSelected = selectedIndex === idx;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => {
                      setIsSpotlightOpen(false);
                      playOpen();
                      item.action();
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-cyan-500/80 text-white shadow-sm"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <div className="h-7 w-7 flex items-center justify-center shrink-0">
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate leading-tight">
                        {item.title}
                      </p>
                      <p
                        className={`text-[11px] truncate ${
                          isSelected ? "text-cyan-100" : "text-slate-400"
                        }`}
                      >
                        {item.category}
                      </p>
                    </div>
                    {isSelected && <ArrowRight size={14} className="text-white shrink-0" />}
                  </div>
                );
              })
            )}
          </div>

          {/* Result Preview Pane */}
          <div className="hidden md:flex md:col-span-2 p-4 flex-col justify-between bg-slate-950/40 text-slate-300 text-xs">
            {activeItem ? (
              <>
                <div className="space-y-3">
                  <div className="h-14 w-14 flex items-center justify-center">
                    {React.createElement(activeItem.IconComponent, { size: 56 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{activeItem.title}</h4>
                    <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-mono">
                      {activeItem.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-white">↵ Enter</kbd> to open</span>
                </div>
              </>
            ) : (
              <div className="text-center text-slate-500 my-auto">Select an item</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
