import React, { useEffect, useState } from "react";
import { Gauge, Menu, Moon, Phone, Sun, X, Sparkles } from "lucide-react";
import profilePicture from "../../assets/images/myPicture1.webp";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "skill", label: "Skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  const [motion, setMotion] = useState(
    () => document.documentElement.dataset.motion || "reduced",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "light" ? "#f8fafc" : "#030712",
    );
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
    localStorage.setItem("portfolio-motion", motion);
  }, [motion]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      const activationPoint = 80 + window.innerHeight * 0.15;
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
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-6 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? "liquid-glass-elevated py-2.5 px-4 sm:px-6 shadow-2xl"
            : "liquid-glass py-3 px-4 sm:px-6"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo / Avatar */}
          <a
            href="#home"
            className="group flex items-center gap-3.5"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              {/* Liquid glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70 blur-[5px] transition-opacity duration-300 group-hover:opacity-100 animate-pulse" />
              <div className="relative h-11 w-11 rounded-full p-[2px] bg-gradient-to-br from-cyan-400/80 via-white/50 to-purple-500/80">
                <img
                  src={profilePicture}
                  alt="Nhim Dara"
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
              {/* Online status indicator */}
              <span
                className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400 shadow-[0_0_8px_#34d399]"
                aria-label="Available for work"
                title="Available for opportunities"
              />
            </div>

            <div className="flex flex-col">
              <span className="liquid-shimmer-text text-base sm:text-lg font-extrabold tracking-tight">
                Nhim Dara
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400/90 group-hover:text-cyan-300 transition-colors">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center lg:flex">
            <ul className="flex items-center gap-1 rounded-full p-1.5 liquid-glass-pill">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative">
                    <a
                      href={`#${item.id}`}
                      className={`relative z-10 block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      {item.label}
                    </a>
                    {isActive && (
                      <span
                        className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-600/80 shadow-[0_2px_12px_rgba(6,182,212,0.5)] border border-white/30 transition-all duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action Buttons & Quick Controls */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme((c) => (c === "dark" ? "light" : "dark"))}
              className="liquid-btn-secondary inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-slate-300 hover:text-cyan-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-300" />
              ) : (
                <Moon size={15} className="text-cyan-600" />
              )}
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            {/* Motion Toggle */}
            <button
              type="button"
              onClick={() => setMotion((c) => (c === "reduced" ? "standard" : "reduced"))}
              className={`liquid-btn-secondary inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-colors ${
                motion === "standard"
                  ? "border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                  : "text-slate-400"
              }`}
              aria-pressed={motion === "standard"}
              aria-label="Toggle animations"
              title={motion === "reduced" ? "Enable full fluid animations" : "Reduce motion"}
            >
              <Gauge size={15} />
              <span>{motion === "standard" ? "Motion on" : "Smooth"}</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="tel:+855969923931"
              className="liquid-btn-primary inline-flex h-9 items-center gap-2 rounded-full px-4 text-xs font-bold text-white"
            >
              <Phone size={13} className="animate-pulse" />
              <span>Let&apos;s talk</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setTheme((c) => (c === "dark" ? "light" : "dark"))}
              className="liquid-btn-secondary h-9 w-9 rounded-full grid place-items-center text-slate-200"
              aria-label="Toggle theme"
              title="Toggle light / dark mode"
            >
              {theme === "dark" ? (
                <Sun size={16} className="text-amber-300" />
              ) : (
                <Moon size={16} className="text-cyan-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMotion((c) => (c === "reduced" ? "standard" : "reduced"))}
              className={`liquid-btn-secondary h-9 w-9 rounded-full grid place-items-center transition-colors ${
                motion === "standard"
                  ? "text-cyan-300 border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  : "text-slate-200"
              }`}
              aria-pressed={motion === "standard"}
              aria-label={motion === "reduced" ? "Enable full animations" : "Reduce motion"}
              title={motion === "reduced" ? "Enable full fluid animations" : "Reduce motion"}
            >
              <Gauge size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="liquid-btn-secondary h-9 w-9 rounded-full grid place-items-center text-slate-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Liquid Glass styling */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isOpen ? "max-h-[480px] mt-4 pt-3 border-t border-white/10 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="grid gap-1.5 pb-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles size={14} className="text-cyan-400" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => setMotion((c) => (c === "reduced" ? "standard" : "reduced"))}
              className="liquid-btn-secondary flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold text-slate-200"
            >
              <Gauge size={14} />
              <span>{motion === "standard" ? "Motion: Full" : "Motion: Reduced"}</span>
            </button>

            <a
              href="tel:+855969923931"
              className="liquid-btn-primary flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white"
            >
              <Phone size={14} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
