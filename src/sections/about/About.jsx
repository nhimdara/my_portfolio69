import React from "react";
import myPicture from "../../assets/images/myPicture1.webp";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code,
  Users,
  Target,
  Sparkles,
  HeartHandshake,
  Cpu,
  Compass,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

const About = () => {
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
      value: "Full-Stack Development",
      glow: "blue",
    },
  ];

  const interests = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-300" />,
      title: "Full-Stack Engineering",
      description:
        "Architecting resilient web applications from high-performance React frontends to robust Laravel & Express REST APIs.",
      glow: "cyan",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-300" />,
      title: "Modern UI/UX & Glass Craft",
      description:
        "Building tactile, accessible, and delightful digital experiences with meticulous attention to motion, typography, and visual depth.",
      glow: "purple",
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-300" />,
      title: "Problem Solving & Systems",
      description:
        "Translating complex real-world requirements into clean, scalable database models, efficient algorithms, and reliable workflows.",
      glow: "emerald",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Compass size={14} className="animate-spin-slow" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            About{" "}
            <span className="liquid-shimmer-text">Me</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Blending rigorous IT engineering foundations with practical modern web development.
          </p>
        </div>

        {/* Main Bento Profile & Narrative */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Avatar Glass Showcase */}
          <div className="lg:col-span-6 flex justify-center scroll-reveal">
            <div className="relative group w-full max-w-[420px] sm:max-w-[520px]">
              {/* Refraction ring glow */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-cyan-400/25 via-blue-500/20 to-purple-600/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="liquid-glass-elevated relative rounded-[2.2rem] p-3 shadow-2xl border border-white/20">
                <div className="relative aspect-square rounded-[1.8rem] overflow-hidden bg-slate-950">
                  <img
                    src={myPicture}
                    alt="Nhim Dara"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 liquid-glass-pill rounded-full px-5 py-2 flex items-center gap-2 border border-cyan-400/40 shadow-xl whitespace-nowrap">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-extrabold text-white">
                    IT Engineer Trainee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Info Bento */}
          <div className="lg:col-span-6 space-y-6 scroll-reveal">
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Building solutions that connect design, speed, and usability.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 mb-4">
                I am a dedicated IT Engineering student at the{" "}
                <strong className="text-cyan-300 font-semibold">
                  Royal University of Phnom Penh (RUPP)
                </strong>
                . Through structured academic coursework and intensive hands-on
                training at{" "}
                <strong className="text-purple-300 font-semibold">
                  ETEC Center
                </strong>
                , I have built real-world full-stack web applications, REST APIs, and responsive mobile interfaces.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300/90">
                My approach combines strong fundamentals in database architecture and object-oriented programming with cutting-edge UI engineering in React and Tailwind CSS.
              </p>

              {/* Quote Glass Callout */}
              <div className="mt-6 rounded-2xl liquid-glass-pill p-4 sm:p-5 border-l-4 border-cyan-400 border-t border-r border-b border-white/10">
                <p className="text-xs sm:text-sm italic text-slate-200">
                  &ldquo;Every line of code is an opportunity to craft an experience that is both functionally solid and visually inspiring.&rdquo;
                </p>
                <p className="mt-2 text-right text-xs font-bold text-cyan-400">
                  — Nhim Dara
                </p>
              </div>
            </div>

            {/* Quick Details 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {details.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <LiquidCard
                    key={idx}
                    glowColor={item.glow}
                    className="p-4 flex items-center gap-3.5"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl liquid-glass-pill text-cyan-300">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white truncate">
                        {item.value}
                      </p>
                    </div>
                  </LiquidCard>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interests & Core Pillars */}
        <div className="scroll-reveal">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Core Pillars
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              What Drives My Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, idx) => (
              <LiquidCard
                key={idx}
                glowColor={interest.glow}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl liquid-glass-pill shadow-inner border border-white/20">
                      {interest.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {interest.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Explore in Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </LiquidCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
