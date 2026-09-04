import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  MapPin,
  Compass,
  Code2,
  Rocket,
  ShieldCheck,
  Clock,
  Activity,
  Radio,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";
import myPicture from "../../assets/images/myPicture1.webp";

export const About = () => {
  // Live Phnom Penh (UTC+7) clock
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Phnom_Penh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-6 pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-28">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute top-1/3 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono mb-3">
            <Compass size={13} className="animate-spin-slow" />
            <span>01 // ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering Precision Meets{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Modern Product Design
            </span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Bridging academic computer science rigor with high-impact production web development.
          </p>
        </div>

        {/* Editorial Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Personal Introduction & Academic Journey with Photo (7 cols) */}
          <LiquidCard
            glowColor="cyan"
            className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                  Profile &amp; Roots
                </span>
                <span className="text-xs text-slate-400 font-mono">RUPP • IT Engineering</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start mb-4">
                {/* Developer Profile Image Frame */}
                <div className="relative shrink-0 group mx-auto sm:mx-0">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden ring-2 ring-cyan-400/30 bg-slate-950 shadow-xl">
                    <img
                      src={myPicture}
                      alt="Nhim Dara"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <span className="absolute -bottom-2 -right-2 rounded-lg bg-cyan-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-black font-mono uppercase tracking-wider shadow-lg">
                    RUPP &apos;28
                  </span>
                </div>

                <div className="space-y-3 min-w-0 flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    Hello, I'm <span className="text-cyan-300">Nhim Dara</span>.
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                    <p>
                      I am an Information Technology Engineering student at the{" "}
                      <strong className="text-white">Royal University of Phnom Penh (RUPP)</strong> and
                      a certified Full-Stack Web Developer.
                    </p>
                    <p>
                      My engineering focus spans building reactive frontend interfaces with <span className="text-cyan-300 font-semibold">React.js &amp; TypeScript</span> and resilient backend REST APIs with <span className="text-purple-300 font-semibold">Laravel, PHP, Spring Boot, and Node.js</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 grid place-items-center text-cyan-300 font-mono text-xs font-bold shadow-inner">
                  RUPP
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Bachelor of IT Engineering</p>
                  <p className="text-[11px] text-slate-400 font-mono">Class of 2024 - 2028</p>
                </div>
              </div>

              <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Active Student &amp; Builder
              </span>
            </div>
          </LiquidCard>

          {/* Card 2: Development Philosophy (5 cols) */}
          <LiquidCard
            glowColor="purple"
            className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <ShieldCheck size={18} />
                <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
                  Development Philosophy
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                "Architecture over quick fixes. Speed as a first-class feature. Code written for humans first."
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed">
                Modern software must be more than visually attractive. It must be accessible, strictly typed, resilient to network drops, and engineered with maintainable modular structures.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5 text-xs font-mono text-slate-300">
              <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/10">
                <span className="text-purple-400 font-bold block mb-0.5">01. DRY &amp; SOLID</span>
                <span className="text-slate-400 text-[11px]">Clean maintainability</span>
              </div>
              <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/10">
                <span className="text-cyan-400 font-bold block mb-0.5">02. LATENCY</span>
                <span className="text-slate-400 text-[11px]">Sub-100ms API targets</span>
              </div>
            </div>
          </LiquidCard>

          {/* Card 3: Career Goals & Vision (5 cols) */}
          <LiquidCard
            glowColor="amber"
            className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <Rocket size={18} />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                  Career Goals
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Engineering for Scalable Impact
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                My objective is to join forward-thinking engineering teams as a Full-Stack or Frontend Software Engineer. I am deeply interested in distributed systems, real-time web applications, payment gateways, and contributing to Cambodia's rising tech ecosystem.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Primary Goal:</span>
              <span className="text-amber-300 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                Software Engineering Internship
              </span>
            </div>
          </LiquidCard>

          {/* Card 4: Location & Live Telemetry (7 cols - replaces awkward photo with high-tech live clock) */}
          <LiquidCard
            glowColor="cyan"
            className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>Base Location</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                  <Radio size={12} className="animate-pulse" />
                  <span>LIVE TELEMETRY</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Phnom Penh, Cambodia
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Coordinates: 11.5564° N, 104.9282° E
                  </p>
                </div>

                {/* Live Phnom Penh Digital Clock */}
                <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-left sm:text-right shadow-inner">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    LOCAL TIME (ICT / UTC+7)
                  </span>
                  <span className="text-base sm:text-lg font-mono font-black text-cyan-300 tracking-wider">
                    {timeString || "12:00:00 PM"}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Operating from Cambodia's capital city, collaborating across global timezones with asynchronous discipline and real-time agility.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-semibold">Ready for Remote &amp; On-Site Collaborations</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Activity size={13} className="text-cyan-400" />
                <span>Network Ping &lt; 24ms</span>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </div>
  );
};

export default About;
