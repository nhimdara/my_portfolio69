import React, { useEffect, useState } from "react";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  X,
  Sparkles,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

import moeysCertificate from "../../assets/images/certificates/moeys-edtech-recognition.webp";
import frontendCertificate from "../../assets/images/certificates/frontend-development.webp";
import transcript from "../../assets/images/certificates/rupp-transcript.webp";
import backendCertificate from "../../assets/images/certificates/backend-development.webp";
import frontendInternshipCertificate from "../../assets/images/certificates/frontend-internship-completion.webp";

const certificates = [
  {
    title: "Frontend Development",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "January 2026",
    image: frontendCertificate,
    description:
      "Certified mastery in responsive web architecture, semantic HTML5, CSS3, modern JavaScript ES6+, React.js, and component-driven applications.",
    glow: "cyan",
  },
  {
    title: "Backend Development",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "June 2026",
    image: backendCertificate,
    description:
      "Certified expertise in PHP, Object-Oriented Programming, MySQL relational databases, Laravel framework, authentication, and REST API development.",
    glow: "purple",
  },
  {
    title: "Frontend Development Internship",
    type: "Internship Certificate",
    issuer: "KRU IT Solution & ETEC Center",
    date: "July 15, 2026",
    image: frontendInternshipCertificate,
    description:
      "Successfully completed an intensive frontend software engineering internship, demonstrating team collaboration, code quality, and delivery of production features.",
    glow: "emerald",
  },
  {
    title: "MoEYS EdTech Project Recognition",
    type: "Official Recognition",
    issuer: "Royal University of Phnom Penh",
    date: "2025",
    image: moeysCertificate,
    description:
      "Honored for substantial technical contributions and data management support towards the Ministry of Education Youth and Sport digital education initiatives.",
    glow: "amber",
  },
  {
    title: "Academic Transcript (ITE Year 1)",
    type: "Academic Credential",
    issuer: "Royal University of Phnom Penh",
    date: "2024 - 2025",
    image: transcript,
    description:
      "Official academic transcript in Information Technology Engineering with high standing in core computing and mathematics disciplines.",
    glow: "blue",
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

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

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/3 left-10 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <ShieldCheck size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Certificates &amp;{" "}
            <span className="liquid-shimmer-text">Achievements</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Validated milestones, academic records, and industry certifications reflecting continuous learning and technical rigor.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-reveal">
          {certificates.map((cert, idx) => (
            <LiquidCard
              key={idx}
              glowColor={cert.glow}
              className="flex flex-col h-full rounded-2xl cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              {/* Document Image Showcase */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950/90 border-b border-white/10 p-3 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Type Pill */}
                <div className="absolute top-3 left-3">
                  <span className="liquid-glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold text-cyan-300">
                    <Award size={11} />
                    {cert.type}
                  </span>
                </div>

                {/* Zoom Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="liquid-glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow-xl">
                    <ZoomIn size={15} />
                    <span>Click to Inspect</span>
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2 min-h-[2.75rem]">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                      {cert.title}
                    </h3>
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                  </div>

                  <p className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 mb-3">
                    <GraduationCap size={15} />
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mb-4 line-clamp-3 min-h-[3.75rem]">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-auto pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-slate-400">
                    <CalendarDays size={13} className="text-purple-400" />
                    {cert.date}
                  </span>
                  <span className="font-bold text-cyan-300 group-hover:underline">
                    View Full Doc &rarr;
                  </span>
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>

      {/* Full-Screen Liquid Glass Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-2xl animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="liquid-glass-elevated relative max-w-4xl w-full max-h-[90vh] rounded-3xl p-6 sm:p-8 flex flex-col overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="liquid-glass-pill inline-block rounded-full px-3 py-1 text-xs font-bold text-cyan-300 mb-1">
                  {selected.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selected.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-semibold mt-0.5">
                  Issued by {selected.issuer} &bull; {selected.date}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="liquid-btn-secondary grid h-10 w-10 place-items-center rounded-full text-slate-200 hover:text-white"
                aria-label="Close document modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Document Image Preview */}
            <div className="flex-1 overflow-auto my-4 flex items-center justify-center p-2 rounded-2xl bg-black/40 border border-white/5">
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <p className="line-clamp-2 max-w-xl">{selected.description}</p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="liquid-btn-primary rounded-xl px-5 py-2.5 font-bold text-white shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
