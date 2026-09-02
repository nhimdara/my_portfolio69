import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useWindowManager } from "../hooks/useWindowManager";
import { wallpapers } from "../data/wallpaperData";
import { soundFx } from "../hooks/useSoundEffects";

const MacOsContext = createContext(null);

export const MacOsProvider = ({ children }) => {
  const windowManager = useWindowManager();

  // Wallpaper state
  const [currentWallpaperId, setCurrentWallpaperId] = useState(() => {
    return localStorage.getItem("macos-wallpaper") || "antigravity";
  });

  const currentWallpaper = wallpapers.find((w) => w.id === currentWallpaperId) || wallpapers[0];

  const setWallpaperId = useCallback((id) => {
    setCurrentWallpaperId(id);
    localStorage.setItem("macos-wallpaper", id);
  }, []);

  // Sound effects state
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem("macos-sound");
    return saved !== null ? saved === "true" : true;
  });

  useEffect(() => {
    soundFx.setMuted(!soundEnabled);
    localStorage.setItem("macos-sound", String(soundEnabled));
  }, [soundEnabled]);

  // System modals & overlays
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [isWidgetsOpen, setIsWidgetsOpen] = useState(false);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);

  // View Mode: 'macos' (default) or 'classic' (scrollable portfolio)
  const [viewMode, setViewMode] = useState("macos");

  // Brightness slider (CSS filter)
  const [brightness, setBrightness] = useState(100);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    soundFx.alert();
    setTimeout(() => setIsToastVisible(false), 3200);
  }, []);

  // Global Keyboard Shortcuts (⌘K for Spotlight, Esc to close overlays)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // ⌘K or Ctrl+K -> Spotlight
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSpotlightOpen((prev) => !prev);
        setIsControlCenterOpen(false);
        setIsAppleMenuOpen(false);
      }
      // Escape -> close overlays
      if (e.key === "Escape") {
        setIsSpotlightOpen(false);
        setIsControlCenterOpen(false);
        setIsWidgetsOpen(false);
        setIsLaunchpadOpen(false);
        setIsAppleMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const value = {
    ...windowManager,
    wallpapers,
    currentWallpaper,
    currentWallpaperId,
    setWallpaperId,
    soundEnabled,
    setSoundEnabled,
    isSpotlightOpen,
    setIsSpotlightOpen,
    isControlCenterOpen,
    setIsControlCenterOpen,
    isWidgetsOpen,
    setIsWidgetsOpen,
    isLaunchpadOpen,
    setIsLaunchpadOpen,
    isAppleMenuOpen,
    setIsAppleMenuOpen,
    viewMode,
    setViewMode,
    brightness,
    setBrightness,
    showToast,
    toastMessage,
    isToastVisible,
  };

  return <MacOsContext.Provider value={value}>{children}</MacOsContext.Provider>;
};

export const useMacOs = () => {
  const context = useContext(MacOsContext);
  if (!context) {
    throw new Error("useMacOs must be used within a MacOsProvider");
  }
  return context;
};
