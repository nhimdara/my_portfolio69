import React, { useState, useRef } from "react";
import { useMacOs } from "../../context/MacOsContext";
import { developerInfo } from "../../data/portfolioData";
import { useSoundEffects } from "../../hooks/useSoundEffects";
import {
  MacFolderIcon,
  PdfDocIcon,
  NotesIcon,
  XcodeIcon,
  TerminalIcon,
  PreviewIcon,
  MailIcon,
  SettingsIcon,
} from "./MacIcons";
import {
  Terminal,
  FileText,
  Sparkles,
  Trash2,
  Laptop,
} from "lucide-react";

const DESKTOP_SHORTCUTS = [
  {
    id: "finder",
    label: "Projects",
    Component: MacFolderIcon,
    action: "finder",
  },
  {
    id: "notes",
    label: "About Me",
    Component: NotesIcon,
    action: "notes",
  },
  {
    id: "skills",
    label: "Skills Matrix",
    Component: XcodeIcon,
    action: "skills",
  },
  {
    id: "terminal",
    label: "Terminal",
    Component: TerminalIcon,
    action: "terminal",
  },
  {
    id: "preview",
    label: "Certificates",
    Component: PreviewIcon,
    action: "preview",
  },
  {
    id: "mail",
    label: "Contact",
    Component: MailIcon,
    action: "mail",
  },
  {
    id: "resume",
    label: "Resume.pdf",
    Component: PdfDocIcon,
    external: true,
    url: developerInfo.cvUrl,
  },
];

export const Desktop = () => {
  const {
    openWindow,
    setIsAppleMenuOpen,
    setIsSpotlightOpen,
    viewMode,
    setViewMode,
    showToast,
  } = useMacOs();
  const { playClick, playTrash } = useSoundEffects();

  const [selectedIconId, setSelectedIconId] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [marquee, setMarquee] = useState(null);
  const isDraggingMarquee = useRef(false);

  const handleDesktopClick = () => {
    setSelectedIconId(null);
    setContextMenu(null);
    setIsAppleMenuOpen(false);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({
      x: Math.min(e.clientX, window.innerWidth - 220),
      y: Math.min(e.clientY, window.innerHeight - 260),
    });
  };

  const handleMouseDown = (e) => {
    if (e.target === e.currentTarget) {
      handleDesktopClick();
      isDraggingMarquee.current = true;
      setMarquee({
        startX: e.clientX,
        startY: e.clientY,
        currentX: e.clientX,
        currentY: e.clientY,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingMarquee.current && marquee) {
      setMarquee((prev) => ({
        ...prev,
        currentX: e.clientX,
        currentY: e.clientY,
      }));
    }
  };

  const handleMouseUp = () => {
    isDraggingMarquee.current = false;
    setMarquee(null);
  };

  const handleIconClick = (e, item) => {
    e.stopPropagation();
    playClick();
    setSelectedIconId(item.id);
  };

  const handleIconDoubleClick = (e, item) => {
    e.stopPropagation();
    if (item.external && item.url) {
      window.open(item.url, "_blank");
      showToast("Opening Resume PDF...");
    } else if (item.action) {
      openWindow(item.action);
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
      className="fixed inset-0 pt-12 pb-24 px-6 z-[10] overflow-hidden select-none"
    >
      {/* Selection Marquee Box */}
      {marquee && (
        <div
          className="pointer-events-none absolute border border-cyan-400/80 bg-cyan-500/20 rounded z-20"
          style={{
            left: Math.min(marquee.startX, marquee.currentX),
            top: Math.min(marquee.startY, marquee.currentY),
            width: Math.abs(marquee.currentX - marquee.startX),
            height: Math.abs(marquee.currentY - marquee.startY),
          }}
        />
      )}

      {/* Desktop Grid Icons (macOS Left Column) */}
      <div className="flex flex-col flex-wrap gap-4 items-start justify-start max-h-[80vh] w-fit">
        {DESKTOP_SHORTCUTS.map((item) => {
          const IconComponent = item.Component;
          const isSelected = selectedIconId === item.id;

          return (
            <div
              key={item.id}
              onClick={(e) => handleIconClick(e, item)}
              onDoubleClick={(e) => handleIconDoubleClick(e, item)}
              className={`group flex flex-col items-center justify-center w-[84px] p-2 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-white/20 border border-white/30 shadow-xl backdrop-blur-md"
                  : "hover:bg-white/10 border border-transparent"
              }`}
            >
              <div className="h-14 w-14 flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95 drop-shadow-lg">
                <IconComponent size={56} />
              </div>
              <span
                className={`mt-1.5 text-center text-xs font-medium tracking-tight leading-tight line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                  isSelected
                    ? "bg-blue-600 px-1.5 py-0.5 rounded text-white font-semibold shadow"
                    : "text-white"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right-Click Context Menu */}
      {contextMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed w-52 rounded-xl bg-slate-900/95 backdrop-blur-2xl border border-white/20 p-1 text-xs text-slate-200 shadow-2xl z-[9999] animate-in fade-in duration-100 select-none"
          style={{ left: contextMenu.x, top: contextMenu.y }}
        >
          <button
            onClick={() => {
              setContextMenu(null);
              openWindow("settings");
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors"
          >
            <span>Change Wallpaper...</span>
            <Sparkles size={12} className="text-cyan-400" />
          </button>
          <button
            onClick={() => {
              setContextMenu(null);
              openWindow("terminal");
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors"
          >
            <span>Open in Terminal</span>
            <Terminal size={12} />
          </button>
          <button
            onClick={() => {
              setContextMenu(null);
              openWindow("notes");
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors"
          >
            <span>New Note</span>
            <FileText size={12} />
          </button>
          <div className="my-1 border-t border-white/10" />
          <button
            onClick={() => {
              setContextMenu(null);
              setIsSpotlightOpen(true);
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors"
          >
            <span>Spotlight Search</span>
            <span className="text-[10px] text-slate-400 font-mono">⌘K</span>
          </button>
          <button
            onClick={() => {
              setContextMenu(null);
              setViewMode(viewMode === "macos" ? "classic" : "macos");
              showToast("Switched View Mode");
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors text-amber-300 font-medium"
          >
            <span>Toggle Classic View</span>
            <Laptop size={12} />
          </button>
          <div className="my-1 border-t border-white/10" />
          <button
            onClick={() => {
              setContextMenu(null);
              playTrash();
              showToast("Desktop Cleaned Up ✨");
            }}
            className="flex w-full items-center justify-between px-3 py-1.5 rounded-lg hover:bg-cyan-500/80 hover:text-white transition-colors"
          >
            <span>Clean Up Desktop</span>
            <Trash2 size={12} className="text-slate-400" />
          </button>
        </div>
      )}
    </div>
  );
};
