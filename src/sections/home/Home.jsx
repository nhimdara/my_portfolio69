import React from "react";
import myPic from "../../assets/images/myPicture.jpg";
import TextType from "../../components/ui/TextType";
import { Share2, ArrowDown, MapPin, Code2 } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import FloatingIcons from "../../components/ui/FloatingIcons";

const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = "cv/CV Nhim Dara.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Nhim-Dara.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLetstalk = () => {
    window.open("https://t.me/dara_nhim", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-950 scroll-gradient">
      <div className="relative overflow-hidden">
        {/* Floating Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcons />
        </div>

        {/* Ambient glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }}></div>
        </div>

        {/* Hero Section */}
        <section
          className="relative z-10 flex min-h-[calc(100vh-72px)] items-center px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
            {/* Left Content */}
            <div className="relative w-full text-white lg:w-1/2 scroll-reveal">
              <div className="hero-content-panel absolute -inset-6 -z-10 rounded-[2rem] border border-white/[0.06] bg-white/[0.025] backdrop-blur-[2px] sm:-inset-8"></div>

              <div className="mb-6 flex flex-wrap items-center gap-3 animate-fade-in-down opacity-0" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  Available for work
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                  <MapPin size={14} className="text-cyan-400" /> Phnom Penh, Cambodia
                </span>
              </div>

              <h1 className="mb-2 text-base font-medium text-slate-300 sm:text-lg animate-fade-in-down opacity-0" style={{ animationDelay: "0.18s" }}>
                Hello, I&apos;m <span className="text-cyan-400">—</span>
              </h1>
              <h2 className="mb-5 text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up opacity-0" style={{ animationDelay: "0.25s" }}>
                <span className="bg-gradient-to-br from-white via-cyan-50 to-cyan-300 bg-clip-text text-transparent">Nhim Dara</span>
                <span className="ml-2 inline-block h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,.9)] sm:h-4 sm:w-4"></span>
              </h2>

              <div className="mb-5 flex items-center gap-2 text-xl font-bold sm:text-2xl md:text-3xl animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <Code2 className="hidden shrink-0 text-purple-400 sm:block" size={28} />
                <span>I'm a</span>{" "}
                <span className="text-cyan-400 inline-block ml-1 relative">
                  <TextType
                    text={[
                      "Full-Stack Developer",
                      "React Specialist",
                      "Laravel Developer",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                  />
                </span>
              </div>

              <p className="max-w-xl border-l-2 border-cyan-400/50 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg animate-fade-in-up opacity-0" style={{ animationDelay: "0.55s" }}>
                A full-stack developer trained at ETEC Center with hands-on
                experience across React, Laravel, PHP, and MySQL. I build
                responsive interfaces, reliable APIs, and complete web
                applications from concept to deployment.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: "0.62s" }}>
                {["React", "Laravel", "PHP", "MySQL"].map((tech) => (
                  <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div
                className="mt-6 flex gap-3 md:gap-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: "0.7s" }}
              >
                {[
                  { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/dara.nhim.865637" },
                  { name: "Telegram", icon: <FaTelegramPlane />, url: "https://t.me/dara_nhim" },
                  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/ra_zee109" },
                  { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/william57378" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/[0.06] transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-cyan-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 md:h-12 md:w-12"
                  >
                    <span className="text-cyan-400 group-hover:text-gray-900 text-base sm:text-lg md:text-xl transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.85s" }}>
                <button
                  onClick={handleLetstalk}
                  className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/20 sm:text-base"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Let's Talk</span>
                  <Share2
                    size={18}
                    className="relative z-10 sm:w-5 sm:h-5 group-hover:rotate-12 group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 before:absolute before:inset-0 before:bg-white/0 before:transition-colors hover:-translate-y-1 hover:shadow-cyan-500/40 hover:before:bg-white/10 sm:text-base"
                >
                  <span className="relative z-10">Download CV</span>
                  <ArrowDown size={18} className="relative z-10 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative group animate-fade-in-scale opacity-0" style={{ animationDelay: "0.3s" }}>
                {/* Rotating gradient ring */}
                <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-50 blur-xl animate-spin-slow group-hover:opacity-80 transition-opacity"></div>

                <img
                  src={myPic}
                  alt="Nhim Dara Profile"
                  className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px] object-cover rounded-[2rem] shadow-2xl shadow-cyan-400/60 border-4 border-cyan-400/40 hover:shadow-cyan-400/80 hover:scale-105 transition-all duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full font-semibold shadow-lg text-white text-sm md:text-base animate-float-badge">
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex justify-center mt-16 animate-bounce-slow opacity-60">
            <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
              <span>Scroll Down</span>
              <ArrowDown size={20} className="text-cyan-400" />
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
