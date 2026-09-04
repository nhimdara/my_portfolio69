import React, { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
  Search,
  FileDown,
} from "lucide-react";
import profilePicture from "../../assets/images/myPicture1.webp";


const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  const cvUrl = `${import.meta.env.BASE_URL}cv/CV-Nhim-Dara.pdf`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      const activationPoint = 100 + window.innerHeight * 0.15;
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
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8">
      {/* Subtle top screen fade so scrolling content softens behind navbar */}
      <div className="navbar-top-fade pointer-events-none absolute inset-x-0 top-0 h-28 -z-10" />

      <nav
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "refero-card-elevated py-2 px-4 sm:px-6 shadow-2xl"
            : "refero-card py-2.5 px-4 sm:px-6 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Nhim Dara */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="relative">
              <img
                src={profilePicture}
                alt="Nhim Dara"
                className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20 transition-transform group-hover:scale-105 shadow-md shadow-cyan-500/10"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                Nhim Dara
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider mt-0.5">
                FULL-STACK DEVELOPER
              </span>
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
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/15 font-semibold shadow-inner border border-cyan-400/20"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Controls: Quick Search + Theme Switcher + Resume Button */}
          <div className="flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 hover:text-white hover:border-cyan-400/30 transition-all cursor-pointer"
            >
              <Search size={13} className="text-cyan-400" />
              <span className="hidden lg:inline text-[11px] text-slate-400">Search</span>
              <kbd className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-8 w-8 place-items-center rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={14} className="text-amber-300" />
              ) : (
                <Moon size={14} className="text-indigo-400" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={cvUrl}
              download="CV-Nhim-Dara.pdf"
              className="refero-btn-primary hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md cursor-pointer"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden grid h-8 w-8 place-items-center rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 rounded-2xl bg-slate-950/95 backdrop-blur-2xl p-5 border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
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

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={cvUrl}
              download="CV-Nhim-Dara.pdf"
              className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
            >
              <FileDown size={14} />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="flex items-center justify-center gap-2 rounded-xl py-2 bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
            >
              <Search size={13} className="text-cyan-400" />
              <span>Command Palette (⌘K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
