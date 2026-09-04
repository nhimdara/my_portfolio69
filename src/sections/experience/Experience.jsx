import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  HeartHandshake,
  Calendar,
  Building,
  CheckCircle2,
  Route,
  Sparkles,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

export const Experience = () => {
  const [filter, setFilter] = useState("All");

  const timelineData = [
    {
      type: "Education",
      year: "2024 - Present",
      title: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      description:
        "Pursuing formal software engineering, data structures, algorithms, relational database systems, operating systems, and computer networks at Cambodia's premier university.",
      badge: "In Progress",
      tags: ["Algorithms", "Data Structures", "Relational DBs", "Software Design"],
      icon: <GraduationCap size={18} className="text-cyan-400" />,
      glow: "cyan",
    },
    {
      type: "Internship",
      year: "2025 - 2026",
      title: "Frontend Developer Trainee / Intern",
      institution: "ETEC Center & KRU IT Solution",
      description:
        "Engineered production-grade web applications utilizing React.js, Tailwind CSS, modular component state architecture, dynamic client-side routing, and seamless REST API integrations.",
      badge: "Internship / Trainee",
      tags: ["React.js", "REST APIs", "Tailwind CSS", "Team Practicums"],
      icon: <Briefcase size={18} className="text-purple-400" />,
      glow: "purple",
    },
    {
      type: "Training",
      year: "Jan - Jun 2026",
      title: "Backend Development Professional Specialization",
      institution: "ETEC Center",
      description:
        "Mastery in modern PHP 8, object-oriented design patterns, MySQL relational database management, Laravel frameworks, authentication pipelines (Sanctum/JWT), and RESTful API architecture.",
      badge: "Certified",
      tags: ["PHP 8", "Laravel", "MySQL", "REST APIs", "Sanctum"],
      icon: <Award size={18} className="text-emerald-400" />,
      glow: "emerald",
    },
    {
      type: "Training",
      year: "2025 - Jan 2026",
      title: "Frontend Web Development Specialization",
      institution: "ETEC Center",
      description:
        "Completed rigorous hands-on training in semantic HTML5, modern JavaScript ES6+, React.js component lifecycle, responsive design systems, and state management.",
      badge: "Certified",
      tags: ["React 19", "JavaScript ES6+", "Tailwind CSS", "UI/UX"],
      icon: <Award size={18} className="text-cyan-400" />,
      glow: "cyan",
    },
    {
      type: "Volunteer",
      year: "2024 - 2025",
      title: "Data Integrity & Technical Volunteer",
      institution: "MoEYS EdTech Project",
      description:
        "Handled sensitive educational datasets, verified record accuracy across central ministry databases, and supported technical workflow automation for digital education initiatives.",
      badge: "Volunteer Recognition",
      tags: ["Database Entry", "MoEYS", "Data Integrity", "Automation"],
      icon: <HeartHandshake size={18} className="text-rose-400" />,
      glow: "amber",
    },
  ];

  const categories = ["All", "Education", "Internship", "Training", "Volunteer"];

  // Calculate category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = timelineData.length;
    } else {
      acc[cat] = timelineData.filter((item) => item.type === cat).length;
    }
    return acc;
  }, {});

  const filteredData =
    filter === "All"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <div className="relative pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Route size={13} />
            <span>04 // CAREER &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Education Timeline
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            My chronological progression across engineering university studies, technical training, internships, and volunteer initiatives.
          </p>

          {/* Glass Filter Toolbar with Count Badges */}
          <div className="refero-card flex flex-wrap items-center justify-center gap-2 mt-8 p-2 rounded-2xl backdrop-blur-xl w-fit mx-auto shadow-2xl">
            {categories.map((cat) => {
              const isActive = filter === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
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
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l-2 border-white/15 ml-4 sm:ml-32 space-y-10">
          {filteredData.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Illuminated Node */}
              <div className="absolute -left-[17px] top-6 h-8 w-8 rounded-xl bg-slate-950 border border-white/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] grid place-items-center shadow-lg transition-all duration-300">
                {item.icon}
              </div>

              {/* Year label on the left for larger screens */}
              <div className="hidden sm:block absolute -left-32 top-7 w-24 text-right">
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-cyan-300 transition-colors">
                  {item.year}
                </span>
              </div>

              {/* Obsidian Glass Card Container */}
              <LiquidCard
                glowColor={item.glow}
                className="p-6 sm:p-7 border border-white/[0.08] hover:border-white/20 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="sm:hidden text-xs font-mono font-bold text-cyan-400">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/10">
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-400/25">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mt-1 mb-3">
                  <Building size={13} />
                  <span>{item.institution}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 font-sans">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 hover:border-cyan-400/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </LiquidCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
