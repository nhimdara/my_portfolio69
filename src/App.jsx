import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactFAB from "./components/ui/ContactFAB";
import ScrollEffects from "./components/ui/ScrollEffects";
import LiquidBackground from "./components/ui/LiquidBackground";
import CommandPalette from "./components/ui/CommandPalette";
import Toast from "./components/ui/Toast";
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

  return (
    <div className="app relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 pt-20 sm:pt-24">
      <LiquidBackground />
      <ScrollEffects />
      
      {/* Navigation Header */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      
      {/* Floating Action Button */}
      <ContactFAB />

      {/* Main Sections */}
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

      {/* Footer & Contact Hub */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Command Palette (⌘K) Modal */}
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
