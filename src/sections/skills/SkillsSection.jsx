import React from "react";
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Wrench,
  CheckCircle,
} from "lucide-react";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiPostman,
  SiVite,
  SiTypescript,
} from "react-icons/si";
import LiquidCard from "../../components/ui/LiquidCard";

const SkillsSection = () => {
  const techIcons = [
    { name: "React 19", icon: <FaReact className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "PHP 8", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-emerald-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-slate-300" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ];

  const skillDomains = [
    {
      category: "Frontend Engineering",
      icon: Layout,
      glow: "cyan",
      description:
        "Building responsive, high-performance web applications with modern state management, component architecture, and fluid liquid design systems.",
      skills: [
        { name: "React.js / Next.js", level: 92, note: "Hooks, Context, Router" },
        { name: "Tailwind CSS & Modern CSS", level: 95, note: "Liquid Glass, Flex/Grid" },
        { name: "JavaScript (ES6+) & TypeScript", level: 88, note: "Async, DOM, Types" },
        { name: "Responsive & Adaptive UI", level: 94, note: "Mobile First, Accessible" },
        { name: "Framer Motion & Micro-animations", level: 86, note: "Smooth Physics" },
      ],
    },
    {
      category: "Backend & Database",
      icon: Server,
      glow: "purple",
      description:
        "Architecting secure RESTful endpoints, relational schemas, authentication flows, and data processing services.",
      skills: [
        { name: "PHP 8 & Object-Oriented", level: 88, note: "OOP, MVC, Design Patterns" },
        { name: "Laravel Framework", level: 90, note: "Eloquent, Sanctum, Migrations" },
        { name: "MySQL & PostgreSQL", level: 86, note: "Indexing, Joins, Transactions" },
        { name: "RESTful API Engineering", level: 92, note: "JSON, JWT, Status Codes" },
        { name: "Python / FastAPI", level: 82, note: "Pydantic, SQLAlchemy" },
      ],
    },
    {
      category: "Workflow & Engineering Tools",
      icon: Wrench,
      glow: "emerald",
      description:
        "Employing industry-standard developer toolchains for version control, continuous deployment, debugging, and API testing.",
      skills: [
        { name: "Git & GitHub Workflows", level: 90, note: "Branches, PRs, Actions" },
        { name: "Postman API Testing", level: 88, note: "Collections, Environments" },
        { name: "Vite & Build Tooling", level: 92, note: "HMR, Bundling, Optimization" },
        { name: "Figma to Code Implementation", level: 85, note: "Pixel Precision" },
        { name: "Cloud Deployment (Vercel, Render)", level: 88, note: "CI/CD & Hosting" },
      ],
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Cpu size={14} />
            <span>Tech Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Skills &amp;{" "}
            <span className="liquid-shimmer-text">Tech Matrix</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A comprehensive matrix of programming languages, frameworks, databases, and development tooling.
          </p>
        </div>

        {/* Infinite Conveyor Ribbon of Tech Badges */}
        <div className="relative mb-16 overflow-hidden rounded-2xl liquid-glass py-4 shadow-xl scroll-reveal">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techIcons, ...techIcons].map((item, idx) => (
              <div
                key={idx}
                className="liquid-glass-pill inline-flex items-center gap-2.5 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold text-slate-200 hover:border-cyan-400/50 hover:text-white transition-all cursor-default shadow-sm shrink-0"
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-reveal">
          {skillDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <LiquidCard
                key={idx}
                glowColor={domain.glow}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl liquid-glass-pill text-cyan-300 shadow-inner border border-white/20">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                        {domain.category}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400">
                        {domain.skills.length} Core Disciplines
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mb-6">
                    {domain.description}
                  </p>

                  {/* Skills Progress Meters */}
                  <div className="space-y-4">
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono font-bold text-cyan-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Liquid Progress Bar */}
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-800/80 border border-white/10 p-[1px]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <p className="text-[10px] text-slate-500 font-medium">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle size={13} />
                  <span>Applied in 11+ production projects</span>
                </div>
              </LiquidCard>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
