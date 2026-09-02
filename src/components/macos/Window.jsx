import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Maximize2, Minimize2 } from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";

export const Window = ({ win, window: propWindow, children }) => {
  const currentWin = win || propWindow;

  const {
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    updateWindowPosition,
    updateWindowSize,
    activeWindowId,
  } = useMacOs();

  const windowRef = useRef(null);
  const [isHoveredControls, setIsHoveredControls] = useState(false);

  if (!currentWin || !currentWin.isOpen || currentWin.isMinimized) {
    return null;
  }

  const isActive = activeWindowId === currentWin.id;

  // Resizing logic for window edges
  const handleResizeStart = (e, direction) => {
    e.stopPropagation();
    e.preventDefault();
    if (currentWin.isMaximized) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = currentWin.size.width;
    const startHeight = currentWin.size.height;
    const startPosX = currentWin.position.x;
    const startPosY = currentWin.position.y;

    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newPosX = startPosX;
      let newPosY = startPosY;

      if (direction.includes("right")) {
        newWidth = Math.max(currentWin.minWidth || 380, startWidth + deltaX);
      }
      if (direction.includes("left")) {
        const potentialWidth = startWidth - deltaX;
        if (potentialWidth >= (currentWin.minWidth || 380)) {
          newWidth = potentialWidth;
          newPosX = startPosX + deltaX;
        }
      }
      if (direction.includes("bottom")) {
        newHeight = Math.max(currentWin.minHeight || 280, startHeight + deltaY);
      }
      if (direction.includes("top")) {
        const potentialHeight = startHeight - deltaY;
        if (potentialHeight >= (currentWin.minHeight || 280)) {
          newHeight = potentialHeight;
          newPosY = startPosY + deltaY;
        }
      }

      updateWindowSize(currentWin.id, { width: newWidth, height: newHeight });
      if (newPosX !== startPosX || newPosY !== startPosY) {
        updateWindowPosition(currentWin.id, { x: newPosX, y: newPosY });
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        initial={{ scale: 0.94, opacity: 0, y: 12 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 380, damping: 30 },
        }}
        exit={{ scale: 0.9, opacity: 0, y: 20, transition: { duration: 0.15 } }}
        onMouseDown={() => focusWindow(currentWin.id)}
        style={{
          zIndex: currentWin.zIndex,
          left: currentWin.isMaximized ? 0 : currentWin.position.x,
          top: currentWin.isMaximized ? 28 : currentWin.position.y,
          width: currentWin.isMaximized ? "100vw" : currentWin.size.width,
          height: currentWin.isMaximized ? "calc(100vh - 28px - 66px)" : currentWin.size.height,
          position: "fixed",
        }}
        className={`flex flex-col select-none overflow-hidden rounded-xl border ${
          isActive
            ? "border-white/20 shadow-[0_25px_65px_-10px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10"
            : "border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.65)] opacity-95"
        } backdrop-blur-3xl bg-[#1e1e24]/95 transition-shadow duration-150`}
      >
        {/* macOS Window Titlebar / Unified Top Toolbar */}
        <motion.div
          drag={!currentWin.isMaximized}
          dragMomentum={false}
          dragElastic={0.04}
          dragConstraints={{
            top: 28,
            left: 0,
            right: typeof window !== "undefined" ? Math.max(0, window.innerWidth - (currentWin.size?.width || 500)) : 800,
            bottom: typeof window !== "undefined" ? Math.max(100, window.innerHeight - 150) : 600,
          }}
          onDragEnd={(_, info) => {
            if (!currentWin.isMaximized) {
              updateWindowPosition(currentWin.id, {
                x: Math.max(0, currentWin.position.x + info.offset.x),
                y: Math.max(28, currentWin.position.y + info.offset.y),
              });
            }
          }}
          onDoubleClick={() => maximizeWindow(currentWin.id)}
          className={`relative flex h-9 w-full shrink-0 cursor-grab active:cursor-grabbing items-center justify-between border-b px-3.5 ${
            isActive
              ? "border-white/10 bg-[#25252c]/90 text-slate-200"
              : "border-white/5 bg-[#1a1a20]/80 text-slate-400"
          }`}
        >
          {/* Traffic Light Window Controls */}
          <div
            className="flex items-center gap-2 z-10 pl-0.5"
            onMouseEnter={() => setIsHoveredControls(true)}
            onMouseLeave={() => setIsHoveredControls(false)}
          >
            {/* Close Button (Red) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(currentWin.id);
              }}
              title="Close"
              className={`group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-100 ${
                isActive || isHoveredControls
                  ? "bg-[#FF5F57] border border-[#E0443E] hover:brightness-105 active:brightness-90 shadow-sm"
                  : "bg-[#4A4A4A] border border-[#3A3A3A] opacity-70"
              }`}
            >
              <X
                size={7.5}
                className={`text-[#4C0002] transition-opacity duration-75 ${
                  isHoveredControls ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>

            {/* Minimize Button (Yellow) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(currentWin.id);
              }}
              title="Minimize"
              className={`group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-100 ${
                isActive || isHoveredControls
                  ? "bg-[#FEBC2E] border border-[#D89E24] hover:brightness-105 active:brightness-90 shadow-sm"
                  : "bg-[#4A4A4A] border border-[#3A3A3A] opacity-70"
              }`}
            >
              <Minus
                size={7.5}
                className={`text-[#5C3E00] transition-opacity duration-75 ${
                  isHoveredControls ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>

            {/* Maximize / Expand Button (Green) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                maximizeWindow(currentWin.id);
              }}
              title={currentWin.isMaximized ? "Restore" : "Zoom"}
              className={`group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-100 ${
                isActive || isHoveredControls
                  ? "bg-[#28C840] border border-[#1AAB29] hover:brightness-105 active:brightness-90 shadow-sm"
                  : "bg-[#4A4A4A] border border-[#3A3A3A] opacity-70"
              }`}
            >
              <Plus
                size={7.5}
                className={`text-[#004D11] transition-opacity duration-75 ${
                  isHoveredControls ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>
          </div>

          {/* Centered Window Title */}
          <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none px-16">
            <span
              className={`text-[12px] font-semibold tracking-tight truncate max-w-[70%] ${
                isActive ? "text-slate-200" : "text-slate-500"
              }`}
            >
              {currentWin.title}
            </span>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                maximizeWindow(currentWin.id);
              }}
              title={currentWin.isMaximized ? "Restore" : "Fullscreen"}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {currentWin.isMaximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
            </button>
          </div>
        </motion.div>

        {/* Window Content Canvas */}
        <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col bg-[#18181f]">
          {children}
        </div>

        {/* 8-Direction Resizing Handles */}
        {!currentWin.isMaximized && (
          <>
            <div
              onMouseDown={(e) => handleResizeStart(e, "right")}
              className="absolute right-0 top-0 bottom-0 w-1.5 cursor-e-resize hover:bg-cyan-500/20 transition-colors"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "bottom")}
              className="absolute bottom-0 left-0 right-0 h-1.5 cursor-s-resize hover:bg-cyan-500/20 transition-colors"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "left")}
              className="absolute left-0 top-0 bottom-0 w-1.5 cursor-w-resize hover:bg-cyan-500/20 transition-colors"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "top")}
              className="absolute top-0 left-0 right-0 h-1.5 cursor-n-resize hover:bg-cyan-500/20 transition-colors"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "bottom-right")}
              className="absolute right-0 bottom-0 w-3 h-3 cursor-se-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "bottom-left")}
              className="absolute left-0 bottom-0 w-3 h-3 cursor-sw-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "top-right")}
              className="absolute right-0 top-0 w-3 h-3 cursor-ne-resize z-50"
            />
            <div
              onMouseDown={(e) => handleResizeStart(e, "top-left")}
              className="absolute left-0 top-0 w-3 h-3 cursor-nw-resize z-50"
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
