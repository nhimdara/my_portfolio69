import React from "react";
import { MacOsProvider, useMacOs } from "./context/MacOsContext";
import { MenuBar } from "./components/macos/MenuBar";
import { Desktop } from "./components/macos/Desktop";
import { Dock } from "./components/macos/Dock";
import { WindowManager } from "./components/macos/WindowManager";
import { Spotlight } from "./components/macos/Spotlight";
import { ControlCenter } from "./components/macos/ControlCenter";
import { NotificationCenter } from "./components/macos/NotificationCenter";
import { Launchpad } from "./components/macos/Launchpad";
import { WallpaperCanvas } from "./components/macos/WallpaperCanvas";
import Toast from "./components/ui/Toast";

// Classic Scrollable View Sections (for switch view capability)
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactFAB from "./components/ui/ContactFAB";
import ScrollEffects from "./components/ui/ScrollEffects";
import LiquidBackground from "./components/ui/LiquidBackground";
import CommandPalette from "./components/ui/CommandPalette";
import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Experience from "./sections/experience/Experience";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import SkillsSection from "./sections/skills/SkillsSection";
import { Sparkles, Laptop } from "lucide-react";

const MainDesktopLayout = () => {
  const {
    viewMode,
    setViewMode,
    currentWallpaper,
    brightness,
    toastMessage,
    isToastVisible,
    showToast,
    setIsSpotlightOpen,
  } = useMacOs();

  const handleCopyEmail = () => {
    showToast("Email address copied to clipboard!");
  };

  if (viewMode === "classic") {
    return (
      <div className="app relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 pt-20 sm:pt-24">
        {/* Floating Switch Back to macOS Banner */}
        <div className="fixed top-4 right-4 z-[9999]">
          <button
            onClick={() => {
              setViewMode("macos");
              showToast("Switched back to macOS Desktop ");
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-2xl transition-all hover:scale-105 active:scale-95 border border-white/20"
          >
            <Sparkles size={14} className="fill-current" />
            <span>macOS Desktop View</span>
          </button>
        </div>

        <LiquidBackground />
        <ScrollEffects />
        <Navbar onOpenCommandPalette={() => setIsSpotlightOpen(true)} />
        <ContactFAB />

        <main id="main-content">
          <section id="home" aria-label="Introduction and Overview">
            <Home onCopyEmail={handleCopyEmail} />
          </section>
          <section id="about" aria-label="About Nhim Dara and Engineering DNA">
            <About />
          </section>
          <section id="experience" aria-label="Education and Practical Experience">
            <Experience />
          </section>
          <section id="project" aria-label="Featured Projects and Platforms">
            <Projects />
          </section>
          <section id="certificates" aria-label="Verified Professional Certificates">
            <Certificates />
          </section>
          <section id="skill" aria-label="Technical Skills and Matrix">
            <SkillsSection />
          </section>
        </main>

        <Footer onCopyEmail={handleCopyEmail} />

        <Toast
          message={toastMessage}
          isVisible={isToastVisible}
          onClose={() => {}}
        />
      </div>
    );
  }

  return (
    <div
      className="relative h-screen w-screen overflow-hidden text-slate-100 select-none"
      style={{
        filter: brightness !== 100 ? `brightness(${brightness}%)` : "none",
        background: currentWallpaper.type === "gradient" ? currentWallpaper.background : "#050814",
      }}
    >
      {/* Dynamic Physics Canvas Wallpaper */}
      {currentWallpaper.type === "canvas" && <WallpaperCanvas />}

      {/* Top Menu Bar */}
      <MenuBar />

      {/* Desktop Workspace & Grid Icons */}
      <Desktop />

      {/* Window Manager (Coordinates open apps) */}
      <WindowManager />

      {/* Centered Magnification Dock */}
      <Dock />

      {/* Spotlight Global Search (⌘K) */}
      <Spotlight />

      {/* Control Center Flyout */}
      <ControlCenter />

      {/* Notification Center & Widgets */}
      <NotificationCenter />

      {/* Launchpad Fullscreen App Grid */}
      <Launchpad />

      {/* Toast Notification Provider */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => {}}
      />
    </div>
  );
};

export const App = () => {
  return (
    <MacOsProvider>
      <MainDesktopLayout />
    </MacOsProvider>
  );
};

export default App;
