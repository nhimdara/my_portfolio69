import React, { useEffect, useState } from "react";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  X,
  Sparkles,
} from "lucide-react";
import FloatingIcons from "../../components/ui/FloatingIcons";
import moeysCertificate from "../../assets/images/certificates/moeys-edtech-recognition.jpg";
import frontendCertificate from "../../assets/images/certificates/frontend-development.jpg";
import transcript from "../../assets/images/certificates/rupp-transcript.jpg";
import backendCertificate from "../../assets/images/certificates/backend-development.jpg";

const certificates = [
  {
    title: "Frontend Development",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "January 2026",
    image: frontendCertificate,
    description: "HTML, CSS, Bootstrap, JavaScript, React.js and project development.",
  },
  {
    title: "Backend Development",
    type: "Professional Certificate",
    issuer: "ETEC Center",
    date: "June 2026",
    image: backendCertificate,
    description: "PHP, object-oriented programming, MySQL, Laravel and project development.",
  },
  {
    title: "MoEYS EdTech Recognition",
    type: "Recognition Award",
    issuer: "Royal University of Phnom Penh",
    date: "2025",
    image: moeysCertificate,
    description: "Recognition for contributing to the MoEYS EdTech application project.",
  },
  {
    title: "Academic Transcript",
    type: "Academic Record",
    issuer: "Royal University of Phnom Penh",
    date: "2024 - 2025",
    image: transcript,
    description: "First-year academic record in Information Technology Engineering.",
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
    <div className="relative min-h-screen overflow-hidden scroll-gradient">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <FloatingIcons />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute left-1/2 top-20 z-[1] h-64 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <main className="relative z-10 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 text-center scroll-reveal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              <Sparkles size={14} /> Verified milestones
            </div>
            <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Certificates &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              Verified training, recognition, and academic milestones that reflect my continued growth in software development and IT engineering.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 scroll-reveal">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="certificate-card group flex overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(6,182,212,0.12)]"
              >
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => setSelected(certificate)}
                    className="relative h-64 w-full cursor-zoom-in overflow-hidden border-b border-gray-700/80 bg-gray-950/90 sm:h-72"
                    aria-label={`View ${certificate.title}`}
                  >
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} issued by ${certificate.issuer}`}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                      loading="lazy"
                    />
                    <span className="certificate-image-overlay absolute inset-0 flex items-center justify-center bg-gray-950/0 transition-colors duration-300 group-hover:bg-gray-950/45">
                      <span className="flex translate-y-2 items-center gap-2 rounded-lg border border-white/10 bg-gray-900/95 px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ExternalLink size={16} /> View document
                      </span>
                    </span>
                    <span className="absolute left-4 top-4 rounded-md border border-cyan-400/20 bg-gray-950/85 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                      {certificate.type}
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-cyan-300">
                        {certificate.title}
                      </h3>
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-400" size={19} aria-label="Verified" />
                    </div>
                    <p className="mb-3 flex items-center gap-2 text-sm font-medium text-cyan-400">
                      <GraduationCap size={16} /> {certificate.issuer}
                    </p>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                      {certificate.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-700/70 pt-4">
                      <span className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <CalendarDays size={15} className="text-purple-400" /> {certificate.date}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelected(certificate)}
                        className="text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} preview`}
          onClick={() => setSelected(null)}
        >
          <div className="absolute left-4 top-4 max-w-[70%] md:left-7 md:top-7">
            <p className="font-semibold text-white">{selected.title}</p>
            <p className="text-sm text-gray-400">{selected.issuer}</p>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full border border-gray-700 bg-gray-900 p-3 text-white transition-colors hover:border-cyan-400 hover:text-cyan-300 md:right-7 md:top-7"
            aria-label="Close certificate preview"
          >
            <X size={24} />
          </button>
          <img
            src={selected.image}
            alt={`${selected.title} full view`}
            className="mt-16 max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Certificates;
