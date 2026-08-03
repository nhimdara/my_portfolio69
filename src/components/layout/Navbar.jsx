import React, { useEffect, useState } from "react";
import { Gauge, Menu, Moon, Phone, Sun, X } from "lucide-react";
import profilePicture from "../../assets/images/myPicture1.jpg";

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
    () => document.documentElement.dataset.motion || "standard",
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      // Activate a section when its top reaches the area just below the
      // sticky navbar. This prevents the following section from becoming
      // active while the current one still fills the viewport.
      const activationPoint = 72 + window.innerHeight * 0.15;
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
    <nav
      className={`sticky top-0 z-50 h-[72px] border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-gray-950/85 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-gray-950/95"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[2px] shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
            <span className="h-full w-full overflow-hidden rounded-full bg-gray-950 p-0.5">
              <img
                src={profilePicture}
                alt="Nhim Dara"
                className="h-full w-full rounded-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-[3px] border-gray-950 bg-emerald-400" aria-label="Available" />
          </span>
          <span className="max-[430px]:hidden">
            <span className="block bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-base font-bold leading-none text-transparent">
              Nhim Dara
            </span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500 group-hover:text-cyan-400">
              Full-Stack Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-transform duration-300 ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
            className="theme-toggle inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            onClick={() => setMotion((current) => current === "reduced" ? "standard" : "reduced")}
            className="motion-toggle inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            aria-pressed={motion === "reduced"}
            aria-label={`${motion === "reduced" ? "Enable" : "Reduce"} animations`}
            title={`${motion === "reduced" ? "Enable" : "Reduce"} animations`}
          >
            <Gauge size={19} />
            <span>{motion === "reduced" ? "Motion off" : "Reduce motion"}</span>
          </button>
          <a
            href="tel:+855969923931"
            className="group/contact relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/40 transition-all hover:-translate-y-0.5 hover:shadow-cyan-500/20"
          >
            <span className="absolute inset-y-0 -left-12 w-8 -skew-x-12 bg-white/25 blur-sm transition-transform duration-700 group-hover/contact:translate-x-40" />
            <Phone size={16} className="relative" /> <span className="relative">Let&apos;s talk</span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          className="theme-toggle inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <button
          type="button"
          onClick={() => setMotion((current) => current === "reduced" ? "standard" : "reduced")}
          className="motion-toggle inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          aria-pressed={motion === "reduced"}
          aria-label={`${motion === "reduced" ? "Enable" : "Reduce"} animations`}
        >
          <Gauge size={22} />
          <span>Motion</span>
        </button>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-[72px] border-b border-white/10 bg-gray-950/95 px-5 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <ul className="mx-auto grid max-w-7xl gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-3 font-medium ${
                  activeSection === item.id ? "bg-cyan-400/10 text-cyan-300" : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+855969923931"
          className="mx-auto mt-4 flex max-w-7xl items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white"
        >
          <Phone size={17} /> Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
