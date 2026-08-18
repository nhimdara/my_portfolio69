import React, { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
  Sparkles,
  Command,
  Search,
  Send,
  Gauge,
  Activity,
} from "lucide-react";
import profilePicture from "../../assets/images/myPicture1.webp";

const navItems = [
  { id: "home", label: "Overview" },
  { id: "about", label: "About" },
  { id: "experience", label: "Journey" },
  { id: "project", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "skill", label: "Skills" },
];

export const Navbar = ({ onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );
  const [motion, setMotion] = useState(
    () => document.documentElement.dataset.motion || "reduced"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "light" ? "#f8fafc" : "#07080d"
    );
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
    localStorage.setItem("portfolio-motion", motion);
  }, [motion]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMotion = () => {
    setMotion((prev) => (prev === "reduced" ? "full" : "reduced"));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      const activationPoint = 90 + window.innerHeight * 0.15;
      let currentSection = navItems[0].id;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationPoint) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    const onSectionScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onSectionScroll, { passive: true });
    window.addEventListener("resize", onSectionScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onSectionScroll);
      window.removeEventListener("resize", onSectionScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2 px-3 sm:py-3 sm:px-6" : "py-4 px-3 sm:px-6"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "refero-card-elevated py-2 px-4 sm:py-2.5 sm:px-6 shadow-2xl backdrop-blur-2xl"
            : "refero-card py-2.5 px-4 sm:py-3 sm:px-6 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Status Badge */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0 focus:outline-none"
          >
            <div className="relative">
              <img
                src={profilePicture}
                alt="Nhim Dara"
                className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20 transition-transform group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </span>
            </div>

            <div className="hidden sm:block text-left">
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                Nhim Dara
                <span className="text-[10px] font-mono text-cyan-400 font-normal">
                  / DEV
                </span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider">
                FULL-STACK ENGINEER
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-xl p-1 bg-white/[0.03] border border-white/[0.06]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/15 font-semibold shadow-inner border border-cyan-400/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Controls: Command Trigger + Motion Toggle + Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-2">
            {/* Search / Command Trigger Button */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              className="refero-pill flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <Search size={14} className="text-cyan-400" />
              <span className="hidden lg:inline text-[11px] text-slate-400">Search</span>
              <kbd className="inline-flex items-center gap-0.5 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Reduce Animation (Motion) Toggle Button */}
            <button
              type="button"
              onClick={toggleMotion}
              title={`Motion: ${motion === "reduced" ? "Reduced" : "Full Animation"}`}
              aria-label="Toggle reduced motion"
              className={`refero-pill grid h-8 w-8 place-items-center rounded-xl transition-all cursor-pointer ${
                motion === "reduced"
                  ? "text-amber-400 border-amber-400/30 bg-amber-500/10"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Gauge size={15} />
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle light and dark theme"
              className="refero-pill grid h-8 w-8 place-items-center rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-300" />
              ) : (
                <Moon size={15} className="text-indigo-400" />
              )}
            </button>

            {/* Direct Telegram Chat Pill */}
            <a
              href="https://t.me/dara_nhim"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all shadow-sm"
            >
              <Send size={13} />
              <span>Let&apos;s Talk</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden refero-pill grid h-9 w-9 place-items-center rounded-xl text-slate-300 hover:text-white cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-3 top-20 z-50 rounded-2xl refero-card-elevated p-5 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 font-semibold"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Theme & Motion Toggles Row */}
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={toggleTheme}
              className="refero-btn-secondary flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold text-slate-200"
            >
              {theme === "dark" ? <Sun size={14} className="text-amber-300" /> : <Moon size={14} className="text-indigo-400" />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <button
              onClick={toggleMotion}
              className="refero-btn-secondary flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold text-slate-200"
            >
              <Gauge size={14} className={motion === "reduced" ? "text-amber-400" : "text-cyan-400"} />
              <span>{motion === "reduced" ? "Motion: Off" : "Motion: On"}</span>
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="refero-btn-secondary flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold text-slate-200"
            >
              <Search size={14} className="text-cyan-400" />
              <span>Search &amp; Commands (⌘K)</span>
            </button>

            <a
              href="https://t.me/dara_nhim"
              target="_blank"
              rel="noopener noreferrer"
              className="refero-btn-primary flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white"
            >
              <Send size={14} />
              <span>Message on Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
