import { useState, useCallback, useRef } from "react";
import { useSoundEffects } from "./useSoundEffects";

export const APP_REGISTRY = {
  finder: {
    id: "finder",
    title: "Finder — Projects",
    defaultTitle: "Finder",
    defaultWidth: 920,
    defaultHeight: 580,
    minWidth: 480,
    minHeight: 380,
    icon: "finder",
  },
  terminal: {
    id: "terminal",
    title: "Terminal — zsh",
    defaultTitle: "Terminal",
    defaultWidth: 720,
    defaultHeight: 460,
    minWidth: 400,
    minHeight: 300,
    icon: "terminal",
  },
  notes: {
    id: "notes",
    title: "Notes — Engineering DNA & Bio",
    defaultTitle: "Notes",
    defaultWidth: 860,
    defaultHeight: 540,
    minWidth: 450,
    minHeight: 350,
    icon: "notes",
  },
  safari: {
    id: "safari",
    title: "Safari — Web Explorer",
    defaultTitle: "Safari",
    defaultWidth: 960,
    defaultHeight: 600,
    minWidth: 480,
    minHeight: 380,
    icon: "safari",
  },
  skills: {
    id: "skills",
    title: "Xcode — Technical Matrix",
    defaultTitle: "Skills Matrix",
    defaultWidth: 880,
    defaultHeight: 560,
    minWidth: 450,
    minHeight: 350,
    icon: "skills",
  },
  mail: {
    id: "mail",
    title: "Mail — Contact Nhim Dara",
    defaultTitle: "Mail",
    defaultWidth: 840,
    defaultHeight: 520,
    minWidth: 440,
    minHeight: 340,
    icon: "mail",
  },
  preview: {
    id: "preview",
    title: "Preview — Verified Certificates",
    defaultTitle: "Preview",
    defaultWidth: 820,
    defaultHeight: 540,
    minWidth: 420,
    minHeight: 320,
    icon: "preview",
  },
  settings: {
    id: "settings",
    title: "System Settings",
    defaultTitle: "System Settings",
    defaultWidth: 780,
    defaultHeight: 500,
    minWidth: 420,
    minHeight: 340,
    icon: "settings",
  },
};

export const useWindowManager = () => {
  const { playOpen, playMinimize, playClick } = useSoundEffects();
  const zIndexCounter = useRef(100);

  const getInitialPosition = (index, width = 880) => {
    if (typeof window === "undefined") return { x: 120, y: 70 };
    const screenW = window.innerWidth;
    const isMobile = screenW < 768;
    if (isMobile) {
      return { x: 10, y: 45 };
    }
    const offset = (index % 4) * 28;
    const targetX = Math.max(120, Math.floor((screenW - width) / 2) + offset);
    return {
      x: targetX,
      y: Math.max(45, 65 + offset),
    };
  };

  const [windows, setWindows] = useState(() => {
    const initial = {};
    let openCount = 0;

    Object.keys(APP_REGISTRY).forEach((appId) => {
      const config = APP_REGISTRY[appId];
      const isDefaultOpen = appId === "finder";
      const initialPos = getInitialPosition(openCount, config.defaultWidth);

      if (isDefaultOpen) openCount++;

      initial[appId] = {
        ...config,
        isOpen: isDefaultOpen,
        isMinimized: false,
        isMaximized: false,
        zIndex: isDefaultOpen ? 101 : 100,
        position: initialPos,
        size: {
          width: config.defaultWidth,
          height: config.defaultHeight,
        },
      };
    });

    return initial;
  });

  const [activeWindowId, setActiveWindowId] = useState("finder");

  const focusWindow = useCallback((appId) => {
    if (!appId) return;
    zIndexCounter.current += 1;
    const newZ = zIndexCounter.current;

    setWindows((prev) => {
      if (!prev[appId]) return prev;
      return {
        ...prev,
        [appId]: {
          ...prev[appId],
          zIndex: newZ,
          isMinimized: false,
        },
      };
    });
    setActiveWindowId(appId);
  }, []);

  const openWindow = useCallback(
    (appId, customProps = {}) => {
      if (!APP_REGISTRY[appId]) return;

      zIndexCounter.current += 1;
      const newZ = zIndexCounter.current;

      setWindows((prev) => {
        const current = prev[appId] || {
          ...APP_REGISTRY[appId],
          size: {
            width: APP_REGISTRY[appId].defaultWidth,
            height: APP_REGISTRY[appId].defaultHeight,
          },
        };

        const screenW = typeof window !== "undefined" ? window.innerWidth : 1200;
        const isMobile = screenW < 768;

        const defaultPos = isMobile
          ? { x: 8, y: 42 }
          : {
              x: Math.max(20, (screenW - current.size.width) / 2 + Math.random() * 40 - 20),
              y: Math.max(50, 70 + Math.random() * 30),
            };

        const next = {
          ...current,
          ...customProps,
          isOpen: true,
          isMinimized: false,
          zIndex: newZ,
          position: current.position || defaultPos,
        };

        return {
          ...prev,
          [appId]: next,
        };
      });

      setActiveWindowId(appId);
      playOpen();
    },
    [playOpen]
  );

  const closeWindow = useCallback(
    (appId) => {
      playClick();
      setWindows((prev) => {
        if (!prev[appId]) return prev;
        return {
          ...prev,
          [appId]: {
            ...prev[appId],
            isOpen: false,
            isMinimized: false,
            isMaximized: false,
          },
        };
      });

      // Shift active window to next highest zIndex window
      setWindows((currentWindows) => {
        const openWins = Object.values(currentWindows).filter(
          (w) => w.isOpen && !w.isMinimized && w.id !== appId
        );
        if (openWins.length > 0) {
          openWins.sort((a, b) => b.zIndex - a.zIndex);
          setActiveWindowId(openWins[0].id);
        } else {
          setActiveWindowId(null);
        }
        return currentWindows;
      });
    },
    [playClick]
  );

  const minimizeWindow = useCallback(
    (appId) => {
      playMinimize();
      setWindows((prev) => {
        if (!prev[appId]) return prev;
        return {
          ...prev,
          [appId]: {
            ...prev[appId],
            isMinimized: true,
          },
        };
      });

      setWindows((currentWindows) => {
        const openWins = Object.values(currentWindows).filter(
          (w) => w.isOpen && !w.isMinimized && w.id !== appId
        );
        if (openWins.length > 0) {
          openWins.sort((a, b) => b.zIndex - a.zIndex);
          setActiveWindowId(openWins[0].id);
        } else {
          setActiveWindowId(null);
        }
        return currentWindows;
      });
    },
    [playMinimize]
  );

  const maximizeWindow = useCallback(
    (appId) => {
      playClick();
      setWindows((prev) => {
        if (!prev[appId]) return prev;
        return {
          ...prev,
          [appId]: {
            ...prev[appId],
            isMaximized: !prev[appId].isMaximized,
          },
        };
      });
      focusWindow(appId);
    },
    [playClick, focusWindow]
  );

  const toggleWindow = useCallback(
    (appId) => {
      setWindows((prev) => {
        const current = prev[appId];
        if (!current || !current.isOpen) {
          openWindow(appId);
        } else if (current.isMinimized) {
          focusWindow(appId);
        } else if (activeWindowId === appId) {
          minimizeWindow(appId);
        } else {
          focusWindow(appId);
        }
        return prev;
      });
    },
    [activeWindowId, focusWindow, minimizeWindow, openWindow]
  );

  const updateWindowPosition = useCallback((appId, position) => {
    setWindows((prev) => {
      if (!prev[appId]) return prev;
      return {
        ...prev,
        [appId]: {
          ...prev[appId],
          position,
        },
      };
    });
  }, []);

  const updateWindowSize = useCallback((appId, size) => {
    setWindows((prev) => {
      if (!prev[appId]) return prev;
      return {
        ...prev,
        [appId]: {
          ...prev[appId],
          size,
        },
      };
    });
  }, []);

  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    toggleWindow,
    updateWindowPosition,
    updateWindowSize,
  };
};
