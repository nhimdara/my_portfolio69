import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Route,
  Sparkles,
  Calendar,
  Building,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

const Experience = () => {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of IT Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      description:
        "Specializing in software engineering, database management systems, data structures & algorithms, and networked systems.",
      badge: "In Progress",
      glow: "cyan",
    },
    {
      year: "2025 - Jan 2026",
      degree: "Frontend Development Course",
      institution: "ETEC Center",
      description:
        "Completed rigorous hands-on training in semantic HTML5, CSS3, modern JavaScript (ES6+), Tailwind CSS, Bootstrap, and React.js single-page applications.",
      badge: "Certified",
      glow: "blue",
    },
    {
      year: "Jan - Jun 2026",
      degree: "Backend Development Course",
      institution: "ETEC Center",
      description:
        "Advanced training in PHP 8, object-oriented design patterns, MySQL relational database architecture, Laravel 10/11 frameworks, authentication, and REST APIs.",
      badge: "Certified",
      glow: "purple",
    },
  ];

  const experiences = [
    {
      year: "2025 - 2026",
      role: "Frontend Developer Trainee",
      company: "ETEC Center",
      description:
        "Engineered production-grade web applications utilizing React.js, Tailwind CSS, component state management, dynamic routing, and API integration with responsive cross-device layouts.",
      badge: "Traineeship",
      glow: "cyan",
    },
    {
      year: "2024 - 2025",
      role: "Data Entry Volunteer",
      company: "MoEYS EdTech Project",
      description:
        "Handled confidential educational data entry, verified record accuracy across spreadsheets and databases, and supported technical workflow automation for digital education initiatives.",
      badge: "Volunteer",
      glow: "emerald",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Route size={14} />
            <span>Milestones &amp; Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Education &amp;{" "}
            <span className="liquid-shimmer-text">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            The formal education, technical training, and practical work shaping my development expertise.
          </p>
        </div>

        {/* Dual Column Timeline */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {/* Education Column */}
          <div className="space-y-6 scroll-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-11 w-11 place-items-center rounded-2xl liquid-glass text-cyan-300 border border-cyan-400/30 shadow-lg">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Academic &amp; Training
                </h3>
                <p className="text-xs text-cyan-400 font-medium">
                  Degree &amp; Certifications
                </p>
              </div>
            </div>

            <div className="space-y-6 relative pl-6 sm:pl-8 border-l-2 border-cyan-500/25">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Glowing Node on Line */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full border-2 border-slate-900 bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                  <LiquidCard glowColor={edu.glow} className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="liquid-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-cyan-300">
                        <Calendar size={12} />
                        {edu.year}
                      </span>
                      <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
                        {edu.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 mb-3">
                      <Building size={14} className="text-cyan-400" />
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                      {edu.description}
                    </p>
                  </LiquidCard>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-6 scroll-reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-11 w-11 place-items-center rounded-2xl liquid-glass text-purple-300 border border-purple-400/30 shadow-lg">
                <BriefcaseBusiness size={22} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Practical Experience
                </h3>
                <p className="text-xs text-purple-400 font-medium">
                  Traineeships &amp; Projects
                </p>
              </div>
            </div>

            <div className="space-y-6 relative pl-6 sm:pl-8 border-l-2 border-purple-500/25">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Glowing Node on Line */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full border-2 border-slate-900 bg-purple-400 shadow-[0_0_12px_#c084fc]" />

                  <LiquidCard glowColor={exp.glow} className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="liquid-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-purple-300">
                        <Calendar size={12} />
                        {exp.year}
                      </span>
                      <span className="rounded-full bg-purple-400/10 border border-purple-400/30 px-2.5 py-0.5 text-[11px] font-bold text-purple-300">
                        {exp.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 mb-3">
                      <Building size={14} className="text-purple-400" />
                      {exp.company}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                      {exp.description}
                    </p>
                  </LiquidCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Liquid Philosophy Glass Capsule */}
        <div className="scroll-reveal">
          <div className="liquid-glass-elevated rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
            <Sparkles className="mx-auto text-amber-300 mb-4 h-6 w-6 animate-pulse" />
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-2xl font-semibold italic text-slate-200 leading-relaxed">
                &ldquo;Great digital applications are born from the harmonious union of clean engineering, fluid responsive design, and an unwavering commitment to the end user.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-extrabold text-cyan-300 uppercase tracking-widest">
                — Nhim Dara &bull; Full-Stack Developer
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
