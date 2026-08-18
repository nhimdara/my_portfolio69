import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Route,
  Sparkles,
  Calendar,
  Building,
  CheckCircle2,
  Award,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

export const Experience = () => {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      description:
        "Pursuing formal software engineering, relational database architecture, algorithms, operating systems, and computer networks at Cambodia's premier public university.",
      badge: "In Progress",
      tags: ["Data Structures", "Algorithms", "Software Design", "Networks"],
      glow: "cyan",
    },
    {
      year: "2025 - Jan 2026",
      degree: "Frontend Development Professional Course",
      institution: "ETEC Center",
      description:
        "Completed rigorous hands-on training in semantic HTML5, CSS3, modern JavaScript ES6+, React.js architecture, component lifecycle, and responsive design systems.",
      badge: "Certified",
      tags: ["React.js", "JavaScript ES6+", "Tailwind CSS", "SPA Design"],
      glow: "blue",
    },
    {
      year: "Jan - Jun 2026",
      degree: "Backend Development Professional Course",
      institution: "ETEC Center",
      description:
        "Mastery in PHP 8, object-oriented design patterns, MySQL relational database management, Laravel 10/11 frameworks, authentication, and REST API development.",
      badge: "Certified",
      tags: ["PHP 8", "Laravel", "MySQL", "REST APIs", "Sanctum"],
      glow: "purple",
    },
  ];

  const experiences = [
    {
      year: "2025 - 2026",
      role: "Frontend Developer Trainee",
      company: "ETEC Center & KRU IT Solution",
      description:
        "Engineered production-grade web applications utilizing React.js, Tailwind CSS, component state management, dynamic routing, and API integration with responsive cross-device layouts.",
      badge: "Traineeship",
      tags: ["React 19", "API Integration", "UI/UX", "Team Practicums"],
      glow: "cyan",
    },
    {
      year: "2024 - 2025",
      role: "Data Entry & Technical Volunteer",
      company: "MoEYS EdTech Project",
      description:
        "Handled confidential educational data entry, verified record accuracy across spreadsheets and databases, and supported technical workflow automation for Ministry digital education initiatives.",
      badge: "Volunteer Recognition",
      tags: ["Data Integrity", "Database Entry", "MoEYS", "Workflow Support"],
      glow: "emerald",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)] font-mono">
            <Route size={14} />
            <span>JOURNEY &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Academic Track &amp;{" "}
            <span className="refero-text-accent">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            The formal engineering foundations, practical development courses, and real-world projects that shaped my skills.
          </p>
        </div>

        {/* Dual Column Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Academic &amp; Professional Education
                </h3>
                <p className="text-xs text-slate-400 font-mono">Formal Studies &amp; Certifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <LiquidCard key={idx} glowColor={item.glow} className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-cyan-300 font-semibold">
                      {item.year}
                    </span>
                    <span className="rounded-full bg-cyan-500/15 border border-cyan-400/30 px-2.5 py-0.5 text-[10px] font-mono text-cyan-300 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[0.03] border border-white/[0.08] px-2 py-0.5 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </LiquidCard>
              ))}
            </div>
          </div>

          {/* Practical Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-400">
                <BriefcaseBusiness size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Practical Experience &amp; Roles
                </h3>
                <p className="text-xs text-slate-400 font-mono">Traineeships &amp; Projects</p>
              </div>
            </div>

            <div className="space-y-4">
              {experiences.map((item, idx) => (
                <LiquidCard key={idx} glowColor={item.glow} className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-purple-300 font-semibold">
                      {item.year}
                    </span>
                    <span className="rounded-full bg-purple-500/15 border border-purple-400/30 px-2.5 py-0.5 text-[10px] font-mono text-purple-300 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight mb-1">
                    {item.role}
                  </h4>
                  <p className="text-xs text-purple-200 font-medium mb-3">
                    {item.company}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[0.03] border border-white/[0.08] px-2 py-0.5 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </LiquidCard>
              ))}

              {/* Career Goal Highlight Card */}
              <LiquidCard glowColor="emerald" className="p-6 border-dashed">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={18} className="text-emerald-400" />
                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                    Next Professional Chapter
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Seeking junior full-stack developer roles or freelance software contracts where I can build impactful React, Next.js, and Laravel solutions with modern engineering best practices.
                </p>
              </LiquidCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
