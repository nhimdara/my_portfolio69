import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMacOs } from "../../context/MacOsContext";
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
  LaunchpadIcon,
  TrashIcon,
} from "./MacIcons";

const DOCK_APPS = [
  {
    id: "finder",
    label: "Finder",
    Component: FinderIcon,
  },
  {
    id: "safari",
    label: "Safari",
    Component: SafariIcon,
  },
  {
    id: "terminal",
    label: "Terminal",
    Component: TerminalIcon,
  },
  {
    id: "notes",
    label: "Notes",
    Component: NotesIcon,
  },
  {
    id: "skills",
    label: "Skills Matrix",
    Component: XcodeIcon,
  },
  {
    id: "preview",
    label: "Preview (Certificates)",
    Component: PreviewIcon,
  },
  {
    id: "mail",
    label: "Mail",
    Component: MailIcon,
  },
  {
    id: "settings",
    label: "System Settings",
    Component: SettingsIcon,
  },
];

const DockItem = ({ app, mouseX, isTrash = false }) => {
  const ref = useRef(null);
  const { toggleWindow, windows, activeWindowId, showToast, setIsLaunchpadOpen } = useMacOs();
  const { playTrash } = useSoundEffects();
  const [isBouncing, setIsBouncing] = useState(false);

  // Distance calculation from cursor for fluid parabolic magnification
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Natural macOS spring curve
  const widthSync = useTransform(distance, [-160, 0, 160], [50, 82, 50]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 220, damping: 14 });

  const win = windows[app.id];
  const isOpen = win?.isOpen;
  const isFocused = activeWindowId === app.id && isOpen && !win?.isMinimized;

  const handleClick = () => {
    if (app.id === "launchpad") {
      setIsLaunchpadOpen(true);
      return;
    }
    if (isTrash) {
      playTrash();
      showToast("Trash is currently empty ✨");
      return;
    }

    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 900);
    toggleWindow(app.id);
  };

  const IconComponent = app.Component;

  return (
    <div className="relative flex flex-col items-center group">
      {/* Tooltip bubble on hover */}
      <div className="absolute -top-11 scale-0 group-hover:scale-100 transition-all duration-150 origin-bottom pointer-events-none z-50">
        <div className="px-3 py-1 rounded-md bg-slate-900/95 text-slate-100 text-xs font-semibold backdrop-blur-xl border border-white/20 shadow-2xl whitespace-nowrap drop-shadow">
          {app.label}
        </div>
      </div>

      {/* Dock Icon */}
      <motion.button
        ref={ref}
        onClick={handleClick}
        style={{ width, height: width }}
        animate={
          isBouncing
            ? {
                y: [0, -22, 0, -12, 0],
                transition: { duration: 0.65, ease: "easeInOut" },
              }
            : { y: 0 }
        }
        className="relative flex items-center justify-center cursor-pointer transition-transform duration-75 active:scale-95 focus:outline-none"
      >
        <IconComponent size="100%" className="w-full h-full object-contain" />
      </motion.button>

      {/* Glowing dot indicator (Apple HIG 4px dot) */}
      <div className="h-1.5 w-full flex items-center justify-center -mt-0.5">
        {isOpen && (
          <div
            className={`h-1 rounded-full transition-all duration-150 ${
              isFocused
                ? "bg-white w-2 shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                : "bg-white/60 w-1"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <footer className="fixed bottom-2 inset-x-0 z-[8000] flex justify-center pointer-events-none select-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-2 sm:gap-2.5 px-3 py-2 rounded-[22px] bg-white/[0.14] dark:bg-black/30 backdrop-blur-[36px] backdrop-saturate-[200%] border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0.5px_0.5px_rgba(255,255,255,0.4)] transition-all"
      >
        {/* Launchpad Icon */}
        <DockItem
          app={{
            id: "launchpad",
            label: "Launchpad",
            Component: LaunchpadIcon,
          }}
          mouseX={mouseX}
        />

        {/* Separator */}
        <div className="h-9 w-[0.5px] bg-white/25 my-auto mx-0.5" />

        {/* Primary macOS Apps */}
        {DOCK_APPS.map((app) => (
          <DockItem key={app.id} app={app} mouseX={mouseX} />
        ))}

        {/* Separator */}
        <div className="h-9 w-[0.5px] bg-white/25 my-auto mx-0.5" />

        {/* Trash */}
        <DockItem
          app={{
            id: "trash",
            label: "Trash",
            Component: TrashIcon,
          }}
          mouseX={mouseX}
          isTrash
        />
      </motion.div>
    </footer>
  );
};
