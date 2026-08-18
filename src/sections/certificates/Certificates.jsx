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
      "Certified expertise in PHP 8, Object-Oriented Programming, MySQL relational databases, Laravel framework, authentication, and REST API development.",
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

export const Certificates = () => {
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
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-mono">
            <Award size={14} />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Certifications &amp;{" "}
            <span className="refero-text-accent">Honors</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Officially verified credentials from ETEC Center and the Royal University of Phnom Penh.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <LiquidCard
              key={index}
              glowColor={cert.glow}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Thumbnail */}
                <div
                  onClick={() => setSelected(cert)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950 border border-white/10 cursor-pointer group/thumb"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Issuer & Date Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase tracking-wider text-amber-300">
                      {cert.type}
                    </span>
                    <span className="rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                      {cert.date}
                    </span>
                  </div>

                  {/* Zoom Overlay Trigger */}
                  <div className="absolute bottom-3 right-3 rounded-lg bg-slate-900/90 text-white p-2 text-xs font-semibold backdrop-blur-md border border-white/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center gap-1">
                    <ZoomIn size={13} />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-400">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-white/10 mt-2 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified
                </span>

                <button
                  type="button"
                  onClick={() => setSelected(cert)}
                  className="text-xs text-slate-300 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect</span>
                  <ZoomIn size={12} />
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
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelected(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl refero-card-elevated p-6 sm:p-8 shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer z-10"
            >
              <X size={18} />
            </button>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded-lg bg-amber-500/15 border border-amber-400/30 px-2.5 py-0.5 text-xs font-mono font-bold text-amber-300">
                  {selected.type}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Issued: {selected.date}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {selected.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mt-0.5">
                Authority: {selected.issuer}
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-2xl bg-slate-950 border border-white/15 mb-4">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 border-l-2 border-cyan-400/60 pl-3">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
