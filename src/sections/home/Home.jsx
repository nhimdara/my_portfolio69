import React from "react";
import myPic from "../../assets/images/myPicture.webp";
import TextType from "../../components/ui/TextType";
import {
  Share2,
  ArrowDown,
  MapPin,
  Code2,
  Sparkles,
  Layers,
  Award,
  Terminal,
  FileText,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  const cvUrl = `${import.meta.env.BASE_URL}cv/CV-Nhim-Dara.pdf`;

  const handleLetstalk = () => {
    window.open("https://t.me/dara_nhim", "_blank");
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane size={18} />,
      url: "https://t.me/dara_nhim",
      color: "hover:text-cyan-300 hover:shadow-cyan-500/40",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={18} />,
      url: "https://facebook.com/dara.nhim.865637",
      color: "hover:text-blue-400 hover:shadow-blue-500/40",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      url: "https://instagram.com/ra_zee109",
      color: "hover:text-pink-400 hover:shadow-pink-500/40",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={18} />,
      url: "https://x.com/william57378",
      color: "hover:text-cyan-400 hover:shadow-cyan-400/40",
    },
  ];

  const metrics = [
    {
      icon: <Layers size={18} className="text-cyan-400" />,
      value: "11+",
      label: "Live Projects",
    },
    {
      icon: <Terminal size={18} className="text-purple-400" />,
      value: "Full-Stack",
      label: "React & Laravel",
    },
    {
      icon: <Award size={18} className="text-amber-400" />,
      value: "Certified",
      label: "ETEC & RUPP",
    },
    {
      icon: <Sparkles size={18} className="text-emerald-400" />,
      value: "100%",
      label: "Craft & Detail",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Ambient glass light caustics */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl w-full">
        {/* Main Hero Glass Stage */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Specular shine across top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/40 to-purple-300/40" />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 scroll-reveal">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </span>
                  Available for opportunities
                </div>

                <div className="liquid-glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-300">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>

              {/* Greeting & Name */}
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
                  Software Engineer &amp; Full-Stack Developer
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                  <span className="liquid-shimmer-text">Nhim Dara</span>
                  <span className="ml-2 inline-block h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
                </h1>
              </div>

              {/* Typing Specialty */}
              <div className="flex items-center gap-3 text-lg sm:text-2xl font-bold text-slate-200">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                  <Code2 size={20} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-medium">Specializing in</span>
                  <span className="text-cyan-300 font-bold tracking-tight">
                    <TextType
                      text={[
                        "Full-Stack Web Apps",
                        "React & Modern UI",
                        "Laravel & REST APIs",
                        "High Performance Systems",
                      ]}
                      typingSpeed={65}
                      pauseDuration={1600}
                      showCursor={true}
                    />
                  </span>
                </div>
              </div>

              {/* Bio description */}
              <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300/90 border-l-2 border-cyan-400/50 pl-4">
                IT Engineering student at RUPP and practical full-stack developer
                trained at ETEC Center. I design and engineer responsive web applications,
                secure backends, and sleek fluid interfaces with clean architecture and modern tooling.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { name: "React 19", color: "hover:border-cyan-400/60 hover:text-cyan-300" },
                  { name: "Laravel", color: "hover:border-red-400/60 hover:text-red-300" },
                  { name: "TypeScript", color: "hover:border-blue-400/60 hover:text-blue-300" },
                  { name: "PHP & MySQL", color: "hover:border-indigo-400/60 hover:text-indigo-300" },
                  { name: "Tailwind CSS", color: "hover:border-cyan-400/60 hover:text-cyan-300" },
                  { name: "FastAPI", color: "hover:border-emerald-400/60 hover:text-emerald-300" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`liquid-glass-pill rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-300 cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Actions & Socials */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                {/* Primary CTA */}
                <a
                  href={cvUrl}
                  download="CV-Nhim-Dara.pdf"
                  className="liquid-btn-primary flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-white shadow-xl text-center"
                >
                  <FileText size={17} />
                  <span>Download Resume</span>
                  <ArrowDown size={16} className="animate-bounce" />
                </a>

                {/* Secondary CTA */}
                <button
                  onClick={handleLetstalk}
                  className="liquid-btn-secondary flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-white"
                >
                  <Share2 size={16} />
                  <span>Let&apos;s Talk on Telegram</span>
                </button>

                {/* Social icons pill */}
                <div className="flex items-center justify-center gap-2 rounded-2xl p-1.5 liquid-glass-pill">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className={`grid h-9 w-9 place-items-center rounded-xl text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${s.color}`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Profile & Visual Column */}
            <div className="lg:col-span-5 flex justify-center items-center scroll-reveal">
              <div className="relative group max-w-[360px] sm:max-w-[420px] w-full">
                {/* Orbiting liquid glow rings */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-purple-500/25 to-blue-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

                {/* Glass photo frame */}
                <div className="liquid-glass-elevated relative rounded-[2.2rem] p-3 overflow-hidden shadow-2xl border border-white/20">
                  <div className="relative aspect-[4/5] rounded-[1.7rem] overflow-hidden bg-slate-950">
                    <img
                      src={myPic}
                      alt="Nhim Dara - Full-Stack Developer"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Glass gradient overlay on image base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Liquid Glass Badges */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-3.5 rounded-2xl liquid-glass backdrop-blur-xl border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 text-white font-bold text-xs shadow-md">
                        IT
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-white leading-tight">
                          RUPP IT Engineer
                        </p>
                        <p className="text-[10px] font-medium text-cyan-300">
                          Class of 2024 - 2028
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Active
                    </span>
                  </div>
                </div>

                {/* Satellite Floating Glass Bubble */}
                <div className="hidden sm:flex absolute -top-4 -right-4 liquid-glass-pill rounded-2xl p-3 items-center gap-2.5 shadow-xl border border-cyan-400/30 animate-bounce-slow">
                  <Sparkles size={16} className="text-amber-300" />
                  <span className="text-xs font-bold text-slate-100">
                    Full-Stack Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liquid Metrics Pods Bar */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 scroll-reveal">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-cyan-400/40"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl liquid-glass-pill border border-white/15 shadow-inner">
                {m.icon}
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-none">
                  {m.value}
                </p>
                <p className="text-[11px] sm:text-xs font-medium text-slate-400 truncate mt-1">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
