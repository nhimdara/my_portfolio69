import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactFAB from "./components/ui/ContactFAB";
import AiAssistantWidget from "./components/ui/AiAssistantWidget";
import ScrollEffects from "./components/ui/ScrollEffects";
import LiquidBackground from "./components/ui/LiquidBackground";
import CommandPalette from "./components/ui/CommandPalette";
import Toast from "./components/ui/Toast";
import DeveloperStats from "./components/ui/DeveloperStats";
import useSmoothScroll from "./hooks/useSmoothScroll";
import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Experience from "./sections/experience/Experience";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import SkillsSection from "./sections/skills/SkillsSection";

export const App = () => {
  useSmoothScroll();

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  const handleCopyEmail = () => {
    showToast("Email address copied to clipboard!");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="app relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 pt-16 sm:pt-20">
      <LiquidBackground />
      <ScrollEffects />

      {/* Floating Glass Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Floating Action Buttons (with coordinated mobile visibility) */}
      <ContactFAB isAiOpen={isAiOpen} />
      <AiAssistantWidget isOpen={isAiOpen} setIsOpen={setIsAiOpen} />

      {/* Main Sections */}
      <main id="main-content">
        {/* 1. Hero & Tech Stack */}
        <section id="home" className="scroll-mt-24 sm:scroll-mt-28 min-h-[calc(100vh-80px)] flex flex-col justify-between" aria-label="Introduction, Hero & Tech Stack">
          <Home onCopyEmail={handleCopyEmail} />
        </section>

        {/* 2. Developer Statistics Strip */}
        <DeveloperStats />

        {/* 3. About Section */}
        <section id="about" className="scroll-mt-24 sm:scroll-mt-28" aria-label="About Nhim Dara and Engineering DNA">
          <About />
        </section>

        {/* 4. Skills Section */}
        <section id="skills" className="scroll-mt-24 sm:scroll-mt-28" aria-label="Technical Skills and Matrix">
          <SkillsSection />
        </section>

        {/* 5. Featured Projects */}
        <section id="projects" className="scroll-mt-24 sm:scroll-mt-28" aria-label="Featured Projects and Platforms">
          <Projects />
        </section>

        {/* 6. Experience & Education Timeline */}
        <section id="experience" className="scroll-mt-24 sm:scroll-mt-28" aria-label="Education and Practical Experience">
          <Experience />
        </section>

        {/* 7. Verified Professional Certificates */}
        <section id="certificates" className="scroll-mt-24 sm:scroll-mt-28" aria-label="Verified Professional Certificates">
          <Certificates />
        </section>
      </main>

      {/* 8. Contact & Footer Hub */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Global Command Palette (⌘K) Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Toast Notification Provider */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
};

export default App;
