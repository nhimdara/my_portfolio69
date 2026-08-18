import React from "react";
import myPicture from "../../assets/images/myPicture1.webp";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code,
  Target,
  Sparkles,
  Cpu,
  Compass,
  CheckCircle2,
  Terminal,
  FileText,
  ExternalLink,
  Layers,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

export const About = () => {
  const details = [
    {
      icon: Calendar,
      label: "Age",
      value: "21 Years Old",
      glow: "cyan",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Phnom Penh, Cambodia",
      glow: "purple",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "IT Engineering (RUPP)",
      glow: "emerald",
    },
    {
      icon: Code,
      label: "Primary Focus",
      value: "Full-Stack Web Engineering",
      glow: "blue",
    },
  ];

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-300" />,
      title: "Full-Stack Engineering",
      description:
        "Architecting resilient applications from modular React & Next.js frontends to secure Laravel & Express REST API services.",
      glow: "cyan",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-300" />,
      title: "Modern UI/UX & High Craft",
      description:
        "Building tactile, responsive digital experiences with meticulous attention to motion, typography, accessibility, and visual depth.",
      glow: "purple",
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-300" />,
      title: "Database & Clean Architecture",
      description:
        "Designing scalable relational database schemas (MySQL, PostgreSQL), normalized queries, authentication pipelines, and robust workflows.",
      glow: "emerald",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-mono">
            <Compass size={14} className="animate-spin-slow" />
            <span>ABOUT &amp; DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Engineering Foundations &amp;{" "}
            <span className="refero-text-accent">Vision</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Combining rigorous IT engineering principles from university with industry-standard web development practices.
          </p>
        </div>

        {/* Asymmetric Refero Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Bento Card 1: Visual Identity & Key Bio (7 cols) */}
          <LiquidCard glowColor="cyan" className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 group">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden ring-2 ring-cyan-400/30 bg-slate-950">
                  <img
                    src={myPicture}
                    alt="Nhim Dara"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <span className="absolute -bottom-2 -right-2 rounded-lg bg-cyan-500 text-slate-950 px-2 py-0.5 text-[10px] font-extrabold font-mono uppercase tracking-wider shadow-lg">
                  RUPP &apos;28
                </span>
              </div>

              <div className="space-y-3 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="refero-tagline text-cyan-400 text-xs">
                    BACKGROUND &amp; PHILOSOPHY
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Hi, I&apos;m <span className="refero-text-cyan">Nhim Dara</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  A software developer and 2nd-year Information Technology Engineering student at the 
                  <strong> Royal University of Phnom Penh (RUPP)</strong>. Trained in full-stack web development at 
                  <strong> ETEC Center</strong>, I focus on turning complex product concepts into clean, accessible, and high-performance digital systems.
                </p>
              </div>
            </div>

            {/* Micro Coordinates Grid */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {details.map((d, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <d.icon size={13} className="text-cyan-400" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">{d.label}</span>
                  </div>
                  <p className="text-xs font-bold text-white truncate">{d.value}</p>
                </div>
              ))}
            </div>
          </LiquidCard>

          {/* Bento Card 2: Academic Credential & University Focus (5 cols) */}
          <LiquidCard glowColor="purple" className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-purple-500/20 text-purple-400">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                    University Degree
                  </span>
                </div>
                <span className="rounded-full bg-purple-500/15 border border-purple-400/30 px-2.5 py-0.5 text-[10px] font-mono text-purple-300">
                  2024 - 2028
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Bachelor of IT Engineering
              </h3>
              <p className="text-xs text-purple-200/80 mb-4 font-medium">
                Royal University of Phnom Penh (RUPP) — Department of ITE
              </p>
              <p className="text-xs leading-relaxed text-slate-300 mb-4">
                Core coursework encompasses Data Structures &amp; Algorithms, Object-Oriented Software Design, Relational Database Management Systems (RDBMS), Computer Networks, and Cloud Systems.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Practicum Leader in Full-Stack E-Learning Project</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Consistent high academic standing across math &amp; engineering</span>
              </div>
            </div>
          </LiquidCard>
        </div>

        {/* Three Core Engineering Pillars */}
        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <LiquidCard key={idx} glowColor={p.glow} className="p-6">
              <div className="flex flex-col h-full justify-between space-y-4">
                <div className="space-y-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] border border-white/10">
                    {p.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>CORE PILLAR</span>
                  <span className="text-cyan-400 font-semibold">ACTIVE</span>
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
