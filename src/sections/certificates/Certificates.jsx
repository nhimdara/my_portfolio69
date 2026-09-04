import React, { useEffect, useState } from "react";
import {
  Award,
  CheckCircle2,
  X,
  ShieldCheck,
  Maximize2,
  Calendar,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

import moeysCertificate from "../../assets/images/certificates/moeys-edtech-recognition.webp";
import frontendCertificate from "../../assets/images/certificates/frontend-development.webp";
import transcript from "../../assets/images/certificates/rupp-transcript.webp";
import backendCertificate from "../../assets/images/certificates/backend-development.webp";
import frontendInternshipCertificate from "../../assets/images/certificates/frontend-internship-completion.webp";

const certificates = [
  {
    id: 1,
    title: "Frontend Development Specialization",
    category: "Specializations",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "Jan 2026",
    image: frontendCertificate,
    skills: ["React 19", "JavaScript ES6+", "Tailwind CSS", "HTML5 & CSS3"],
    description:
      "Certified mastery in responsive web architecture, semantic HTML5, CSS3, modern JavaScript ES6+, React.js, and component-driven state lifecycle.",
    glow: "cyan",
  },
  {
    id: 2,
    title: "Backend Development Specialization",
    category: "Specializations",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "Jun 2026",
    image: backendCertificate,
    skills: ["PHP 8", "Laravel 12", "MySQL", "REST APIs", "Sanctum Auth"],
    description:
      "Certified expertise in PHP 8, Object-Oriented Programming, MySQL relational database architecture, Laravel framework, authentication pipelines, and REST API development.",
    glow: "purple",
  },
  {
    id: 3,
    title: "Frontend Software Engineering Internship",
    category: "Internship",
    type: "Internship Certificate",
    issuer: "KRU IT Solution & ETEC Center",
    date: "Jul 2026",
    image: frontendInternshipCertificate,
    skills: ["React.js", "Team Practicum", "API Integration", "UI/UX"],
    description:
      "Successfully completed an intensive frontend software engineering internship, demonstrating team collaboration, production delivery, and component maintainability.",
    glow: "emerald",
  },
  {
    id: 4,
    title: "Academic Transcript (ITE Year 1)",
    category: "University",
    type: "Academic Credential",
    issuer: "Royal University of Phnom Penh",
    date: "2024 - 2025",
    image: transcript,
    skills: ["Algorithms", "Data Structures", "Database Systems", "Math"],
    description:
      "Official academic transcript in Information Technology Engineering with high standing across core computing and engineering disciplines.",
    glow: "blue",
  },
  {
    id: 5,
    title: "MoEYS EdTech Project Recognition",
    category: "University",
    type: "Official Recognition",
    issuer: "MoEYS & RUPP",
    date: "2025",
    image: moeysCertificate,
    skills: ["Data Integrity", "Database Entry", "Automation", "MoEYS"],
    description:
      "Honored for substantial technical contributions and data management support towards the Ministry of Education Youth and Sport digital education initiatives.",
    glow: "amber",
  },
];

export const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Specializations", "University", "Internship"];

  useEffect(() => {
    if (!selected) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  // Calculate category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = certificates.length;
    } else {
      acc[cat] = certificates.filter((c) => c.category === cat).length;
    }
    return acc;
  }, {});

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <div className="relative pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 font-mono mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <Award size={13} />
              <span>05 // VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Certifications &amp;{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300 bg-clip-text text-transparent">
                Honors
              </span>
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Officially verified academic transcripts and professional engineering diplomas from RUPP and ETEC Center.
            </p>
          </div>

          {/* Category Filter Toolbar with Count Badges */}
          <div className="refero-card flex flex-wrap items-center gap-2 p-1.5 rounded-2xl backdrop-blur-xl shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "refero-pill-active shadow-sm"
                      : "refero-pill text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                      isActive
                        ? "bg-amber-400/20 text-amber-200"
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCertificates.map((cert) => (
            <LiquidCard
              key={cert.id}
              glowColor={cert.glow}
              className="p-5 sm:p-6 flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300"
              contentClassName="flex flex-col h-full justify-between"
            >
              <div className="flex flex-col flex-1">
                {/* Document Display Canvas */}
                <div
                  onClick={() => setSelected(cert)}
                  className="cert-canvas-frame relative group/canvas cursor-pointer overflow-hidden rounded-2xl mb-4 aspect-[16/11] flex items-center justify-center p-3 shadow-inner border"
                >
                  {/* Subtle Canvas Blueprint Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [data-theme=light]:bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:12px_12px] opacity-50 pointer-events-none" />

                  {/* Document Thumbnail with Soft Shadow */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-auto h-full max-h-[160px] object-contain rounded-lg shadow-xl transition-transform duration-500 group-hover/canvas:scale-105"
                  />

                  {/* Hologram Verified Watermark Badge */}
                  <div className="cert-verified-badge absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md flex items-center gap-1 text-[9px] font-mono font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>VERIFIED</span>
                  </div>

                  {/* Hover Inspect Pill Overlay */}
                  <div className="cert-hover-overlay absolute inset-0 opacity-0 group-hover/canvas:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="rounded-xl bg-amber-400 text-slate-950 px-4 py-2 text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/canvas:translate-y-0 transition-transform">
                      <Maximize2 size={13} /> Inspect Credential
                    </span>
                  </div>
                </div>

                {/* Metadata Badges */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="rounded-lg bg-amber-500/10 border border-amber-400/25 px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider text-amber-300 uppercase">
                    {cert.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar size={12} className="text-slate-500" />
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold">
                    <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300/90 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Skills Chips */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> Official Document
                </span>
                <button
                  type="button"
                  onClick={() => setSelected(cert)}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs text-slate-200 hover:text-white font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Inspect</span>
                  <Maximize2 size={12} className="text-amber-400" />
                </button>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelected(null)}
          />

          <div className="refero-card-elevated relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 z-10 border border-white/20">
            {/* Top specular shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-cyan-400/40" />

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer z-20 border border-white/10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mb-5 pr-10">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="rounded-lg bg-amber-500/15 border border-amber-400/30 px-3 py-1 text-xs font-mono font-bold text-amber-300">
                  {selected.type}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar size={13} className="text-slate-500" />
                  Issued: {selected.date}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  Verified Credential
                </span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                {selected.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 font-semibold mt-1 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                Issuer: {selected.issuer}
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-2xl bg-slate-950 border border-white/15 mb-5 p-3 shadow-inner flex items-center justify-center">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto object-contain max-h-[58vh] mx-auto rounded-xl shadow-2xl"
              />
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-200 border-l-2 border-amber-400 pl-3.5">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;