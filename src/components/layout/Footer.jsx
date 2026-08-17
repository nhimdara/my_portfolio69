import React from "react";
import {
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Github,
  Globe,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import profilePicture from "../../assets/images/myPicture1.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane size={17} />,
      url: "https://t.me/dara_nhim",
      color: "hover:text-cyan-300 hover:border-cyan-400/50",
    },
    {
      name: "GitHub",
      icon: <Github size={17} />,
      url: "https://github.com/nhimdara",
      color: "hover:text-white hover:border-white/50",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={17} />,
      url: "https://facebook.com/dara.nhim.865637",
      color: "hover:text-blue-400 hover:border-blue-400/50",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={17} />,
      url: "https://instagram.com/ra_zee109",
      color: "hover:text-pink-400 hover:border-pink-400/50",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={17} />,
      url: "https://x.com/william57378",
      color: "hover:text-cyan-400 hover:border-cyan-400/50",
    },
  ];

  return (
    <footer className="relative mt-20 px-4 sm:px-6 lg:px-8 pb-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-full max-w-4xl rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Big Liquid Glass CTA Island */}
        <div className="liquid-glass-elevated mb-16 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden text-center shadow-2xl border border-white/20 scroll-reveal">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Sparkles size={14} className="text-amber-300 animate-pulse" />
            <span>Open for Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Have a project in mind or looking for a{" "}
            <span className="liquid-shimmer-text">Full-Stack Engineer?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
            Let&apos;s build something responsive, fast, and beautifully designed.
            Reach out directly for freelance contracts or engineering roles.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://t.me/dara_nhim"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-btn-primary inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-white shadow-xl"
            >
              <Send size={16} />
              <span>Message on Telegram</span>
            </a>

            <a
              href="tel:+855969923931"
              className="liquid-btn-secondary inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-white"
            >
              <Phone size={16} />
              <span>Call (+855) 96 992 3931</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Brand Column */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative h-13 w-13 shrink-0 rounded-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-emerald-400 shadow-lg">
                <img
                  src={profilePicture}
                  alt="Nhim Dara"
                  className="h-full w-full rounded-[14px] object-cover object-top"
                />
              </div>

              <div>
                <h3 className="text-lg font-black text-white leading-tight">
                  Nhim Dara
                </h3>
                <p className="text-xs font-semibold text-cyan-400">
                  Full-Stack Developer &bull; RUPP IT Engineer
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin size={11} className="text-purple-400" />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            {/* Quick Links in ONE line */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3.5 sm:gap-5 md:gap-6 text-xs sm:text-sm font-bold text-slate-400 whitespace-nowrap"
            >
              <a href="#home" className="hover:text-cyan-300 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-300 transition-colors">
                About
              </a>
              <a
                href="#experience"
                className="hover:text-cyan-300 transition-colors"
              >
                Experience
              </a>
              <a
                href="#project"
                className="hover:text-cyan-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="#certificates"
                className="hover:text-cyan-300 transition-colors"
              >
                Certificates
              </a>
              <a href="#skill" className="hover:text-cyan-300 transition-colors">
                Skills
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-2 shrink-0">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`grid h-9 w-9 place-items-center rounded-xl liquid-glass-pill text-slate-300 transition-all duration-300 hover:scale-110 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 px-2">
          <p className="flex items-center gap-1.5">
            <span>&copy; {currentYear} Nhim Dara. Crafted with</span>
            <Heart size={13} className="text-red-400 fill-red-400" />
            <span>in Phnom Penh, Cambodia</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="liquid-btn-secondary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-slate-300 hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
