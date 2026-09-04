import React, { useState } from "react";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVite,
  SiPostman,
} from "react-icons/si";
import LiquidCard from "../../components/ui/LiquidCard";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const skillsData = [
    // Frontend
    {
      name: "React.js",
      category: "Frontend",
      icon: <FaReact className="text-cyan-400" />,
      experience: "Advanced / Daily",
      percent: 95,
      description: "Hooks, Context, State Architecture, Virtual DOM & Next.js ecosystem",
      glow: "cyan",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJsSquare className="text-amber-400" />,
      experience: "Core Specialty",
      percent: 95,
      description: "ES6+, Async/Await, Event Loop, Closures, DOM Manipulation",
      glow: "amber",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript className="text-blue-400" />,
      experience: "Production Ready",
      percent: 90,
      description: "Strong Typing, Generics, Interfaces, Union Types, Rigorous Safety",
      glow: "blue",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 className="text-orange-500" />,
      experience: "Mastered",
      percent: 98,
      description: "Semantic Markups, Accessible Landmarks (ARIA), SEO Optimization",
      glow: "amber",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt className="text-sky-400" />,
      experience: "Mastered",
      percent: 95,
      description: "Flexbox, CSS Grid, Keyframe Animations, Responsive Viewports",
      glow: "cyan",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss className="text-cyan-300" />,
      experience: "Design Engine",
      percent: 95,
      description: "Utility-first design systems, modern v4, custom theme variables",
      glow: "cyan",
    },

    // Backend
    {
      name: "Laravel",
      category: "Backend",
      icon: <FaLaravel className="text-rose-500" />,
      experience: "Core Specialty",
      percent: 92,
      description: "Eloquent ORM, Middleware, Sanctum Authentication, Migrations, MVC",
      glow: "purple",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: <FaPhp className="text-indigo-400" />,
      experience: "Advanced",
      percent: 90,
      description: "Modern PHP 8+, OOP Principles, Server Lifecycle, Data Sanitization",
      glow: "purple",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs className="text-green-500" />,
      experience: "Proficient",
      percent: 85,
      description: "Non-blocking I/O runtime, NPM modules, microservice backends",
      glow: "emerald",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress className="text-slate-300" />,
      experience: "Proficient",
      percent: 88,
      description: "RESTful endpoints, error middleware, JWT auth, request routing",
      glow: "blue",
    },
    {
      name: "Java",
      category: "Backend",
      icon: <FaJava className="text-red-400" />,
      experience: "Academic Rigor",
      percent: 82,
      description: "Object-oriented structures, design patterns, robust typing",
      glow: "amber",
    },
    {
      name: "Spring Boot",
      category: "Backend",
      icon: <SiSpringboot className="text-emerald-400" />,
      experience: "Enterprise Stack",
      percent: 85,
      description: "Spring MVC, Dependency Injection, REST services, JPA Entities",
      glow: "emerald",
    },

    // Database
    {
      name: "MySQL",
      category: "Database",
      icon: <SiMysql className="text-blue-400" />,
      experience: "Core Specialty",
      percent: 90,
      description: "Schema design, relational foreign keys, indexing, normalized queries",
      glow: "blue",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <SiMongodb className="text-emerald-400" />,
      experience: "Document Store",
      percent: 82,
      description: "NoSQL document collections, BSON aggregation pipelines, Mongoose",
      glow: "emerald",
    },

    // Tools
    {
      name: "Git",
      category: "Tools",
      icon: <FaGitAlt className="text-orange-500" />,
      experience: "Daily Driver",
      percent: 92,
      description: "Branch management, rebasing, conflict resolution, version control",
      glow: "amber",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <FaGithub className="text-slate-200" />,
      experience: "Collaboration",
      percent: 94,
      description: "CI/CD Actions, Pull Requests, Code Reviews, Release Tracking",
      glow: "blue",
    },
    {
      name: "Vite",
      category: "Tools",
      icon: <SiVite className="text-purple-400" />,
      experience: "Build Tool",
      percent: 90,
      description: "Lightning HMR, optimized ESM bundling, modern dev server",
      glow: "purple",
    },
    {
      name: "REST API",
      category: "Tools",
      icon: <Server className="text-cyan-400" />,
      experience: "Architecture",
      percent: 95,
      description: "Stateless protocols, standard HTTP verbs, clean JSON payload design",
      glow: "cyan",
    },
    {
      name: "Postman",
      category: "Tools",
      icon: <SiPostman className="text-orange-400" />,
      experience: "API Testing",
      percent: 88,
      description: "Endpoint contract testing, automated test collections, auth headers",
      glow: "amber",
    },
  ];

  // Calculate skill category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = skillsData.length;
    } else {
      acc[cat] = skillsData.filter((s) => s.category === cat).length;
    }
    return acc;
  }, {});

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="relative pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Cpu size={13} />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Architectural Competencies
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            17 core technical competencies across full-stack web development, backend frameworks, relational databases, and dev toolchains.
          </p>
        </div>

        {/* Glass Category Filter Toolbar */}
        <div className="refero-card flex flex-wrap items-center justify-center gap-2 mb-12 p-2 rounded-2xl backdrop-blur-xl w-fit mx-auto shadow-2xl">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "refero-pill-active shadow-md"
                    : "refero-pill text-slate-400 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-200"
                      : "bg-white/[0.06] text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <LiquidCard
              key={`${skill.name}-${idx}`}
              glowColor={skill.glow}
              className="p-5 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border border-white/[0.08] hover:border-white/20 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 shadow-xl"
            >
              <div>
                {/* Icon Pod & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 border border-white/15 text-2xl group-hover:scale-110 group-hover:border-cyan-400/50 shadow-lg transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-400/25">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="text-lg font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Telemetry Progress Bar & Level Footer */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-slate-400 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    {skill.experience}
                  </span>
                  <span className="text-cyan-300 font-bold">{skill.percent}%</span>
                </div>

                {/* Glowing Telemetry Level Bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
