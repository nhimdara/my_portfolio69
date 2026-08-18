import React, { useState } from "react";
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

export const SkillsSection = () => {
  const [selectedDomain, setSelectedDomain] = useState("All");

  const techIcons = [
    { name: "React 19", icon: <FaReact className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Laravel 12", icon: <FaLaravel className="text-red-500" /> },
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
        "Building responsive, high-performance web applications with modern state management, component architecture, and fluid design systems.",
      skills: [
        { name: "React.js / Next.js", level: 92, note: "Hooks, Context, Router, State" },
        { name: "Tailwind CSS & Modern CSS", level: 95, note: "Liquid Glass, Flex/Grid, Animations" },
        { name: "JavaScript (ES6+) & TypeScript", level: 88, note: "Async, DOM, Generics, Types" },
        { name: "Responsive & Adaptive UI", level: 94, note: "Mobile First, Accessible, Touch" },
        { name: "Framer Motion & Micro-animations", level: 86, note: "Spring Physics & Smooth Layouts" },
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
        { name: "Laravel Framework", level: 90, note: "Eloquent, Sanctum, Migrations, Policies" },
        { name: "MySQL & PostgreSQL", level: 86, note: "Schema Design, Indexing, Transactions" },
        { name: "RESTful API Engineering", level: 92, note: "JSON Schemas, JWT, Status Handlers" },
        { name: "Python / FastAPI", level: 82, note: "Pydantic, SQLAlchemy, Async Routers" },
      ],
    },
    {
      category: "Workflow & Engineering Tools",
      icon: Wrench,
      glow: "emerald",
      description:
        "Employing industry-standard developer toolchains for version control, continuous deployment, debugging, and API testing.",
      skills: [
        { name: "Git & GitHub Workflows", level: 90, note: "Branching, Pull Requests, Actions" },
        { name: "Postman API Testing", level: 88, note: "Automated Collections, Environments" },
        { name: "Vite & Build Tooling", level: 92, note: "HMR, Bundling, Asset Optimization" },
        { name: "Figma to Code Precision", level: 85, note: "Pixel-perfect Responsive Specs" },
        { name: "Cloud Deployment (Vercel, Render)", level: 88, note: "CI/CD Pipelines & Serverless" },
      ],
    },
  ];

  const filteredDomains =
    selectedDomain === "All"
      ? skillDomains
      : skillDomains.filter((d) => d.category.toLowerCase().includes(selectedDomain.toLowerCase()));

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-mono">
            <Cpu size={14} />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Skills &amp; Technology{" "}
            <span className="refero-text-accent">Stack</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A comprehensive overview of programming languages, frameworks, databases, and engineering workflows I build with daily.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techIcons.map((tech, idx) => (
            <div
              key={idx}
              className="refero-card p-3 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-cyan-400/40 transition-all hover:scale-[1.02] cursor-default"
            >
              <div className="text-xl shrink-0">{tech.icon}</div>
              <span className="text-xs font-bold text-slate-200 truncate">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Domain Filter Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl refero-card border border-white/10">
            {["All", "Frontend", "Backend", "Workflow"].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSelectedDomain(d)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedDomain === d
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Domains Breakdown Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain, idx) => (
            <LiquidCard
              key={idx}
              glowColor={domain.glow}
              className="p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-cyan-300">
                    <domain.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {domain.category}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Core Domain
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-slate-400 mb-6">
                  {domain.description}
                </p>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {domain.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[10px] font-mono text-slate-500 truncate">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED PROFICIENCY</span>
                <span className="text-cyan-400 font-bold">PRO LEVEL</span>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
