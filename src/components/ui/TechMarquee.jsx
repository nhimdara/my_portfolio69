import React from "react";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export const TechMarquee = () => {
  const technologies = [
    { name: "React.js", category: "Frontend", icon: <FaReact className="text-cyan-400" />, glow: "#22d3ee" },
    { name: "JavaScript", category: "Language", icon: <FaJsSquare className="text-amber-400" />, glow: "#f59e0b" },
    { name: "TypeScript", category: "Language", icon: <SiTypescript className="text-blue-400" />, glow: "#3b82f6" },
    { name: "Tailwind CSS", category: "Styling", icon: <SiTailwindcss className="text-sky-400" />, glow: "#38bdf8" },
    { name: "Laravel", category: "Backend", icon: <FaLaravel className="text-rose-500" />, glow: "#f43f5e" },
    { name: "PHP", category: "Backend", icon: <FaPhp className="text-indigo-400" />, glow: "#818cf8" },
    { name: "Java", category: "Backend", icon: <FaJava className="text-red-400" />, glow: "#ef4444" },
    { name: "Spring Boot", category: "Enterprise", icon: <SiSpringboot className="text-emerald-400" />, glow: "#10b981" },
    { name: "Node.js", category: "Runtime", icon: <FaNodeJs className="text-green-500" />, glow: "#22c55e" },
    { name: "Express.js", category: "REST API", icon: <SiExpress className="text-slate-300" />, glow: "#cbd5e1" },
    { name: "MySQL", category: "Database", icon: <SiMysql className="text-blue-400" />, glow: "#60a5fa" },
    { name: "Git", category: "DevOps", icon: <FaGitAlt className="text-orange-500" />, glow: "#f97316" },
  ];

  // Duplicate for infinite seamless scroll
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="tech-marquee-wrapper relative w-full py-8 overflow-hidden border-y backdrop-blur-xl">
      {/* Editorial Header Pill */}
      <div className="flex items-center justify-center gap-3 mb-6 px-4">
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-white/20" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold">
          CORE TOOLCHAIN &amp; PRODUCTION STACK
        </span>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-white/20" />
      </div>

      {/* Left and right fade gradient mask */}
      <div className="tech-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 z-10" />
      <div className="tech-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 z-10" />

      {/* Sliding Marquee Row */}
      <div className="animate-marquee flex items-center gap-3.5 sm:gap-4.5">
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="tech-marquee-pill group flex items-center gap-3 px-4.5 py-2.5 rounded-2xl hover:border-cyan-400/40 transition-all duration-300 shadow-sm cursor-default shrink-0"
          >
            <div className="text-xl group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {tech.name}
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
