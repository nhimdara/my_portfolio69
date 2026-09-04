import React, { useState } from "react";
import {
  ArrowUpRight,
  FileDown,
  Copy,
  Check,
  MapPin,
  Terminal,
} from "lucide-react";
import HeroTerminal from "../../components/hero/HeroTerminal";
import TechMarquee from "../../components/ui/TechMarquee";

export const Home = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}cv/CV-Nhim-Dara.pdf`;
  const email = "daracombodia54@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-[calc(100vh-90px)] flex flex-col justify-between pt-2 sm:pt-4">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -top-10 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/12 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[500px] w-[500px] rounded-full bg-indigo-600/12 blur-[150px]" />

      {/* Main Full-Height Viewport Container */}
      <div className="relative mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-10 flex-1 flex items-center justify-center py-6 lg:py-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Narrative & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8 text-left">
            {/* Small Badge */}
            <div className="badge-emerald inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span>Available for Internship / Freelance Opportunities</span>
            </div>

            {/* Main Full-Screen Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.08] text-white">
              Building Digital{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent animate-gradient-text">
                Experiences That Matter.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-300/90 font-normal">
              I'm <span className="text-white font-semibold">Nhim Dara</span>, an IT Engineering student and Full-Stack Web Developer focused on building modern, scalable, and user-friendly web applications.
            </p>

            {/* Location & University Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono">
              <div className="refero-pill flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm">
                <MapPin size={14} className="text-cyan-400" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="refero-pill flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm">
                <Terminal size={14} className="text-purple-400" />
                <span>RUPP IT Engineering</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="refero-btn-primary flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-sm sm:text-base font-bold text-white shadow-xl hover:shadow-cyan-500/25 transition-all"
              >
                <span>View My Work</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={cvUrl}
                download="CV-Nhim-Dara.pdf"
                className="refero-btn-secondary flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-sm sm:text-base font-bold text-slate-200 hover:text-white"
              >
                <FileDown size={18} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="refero-btn-secondary flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Terminal */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Horizontal Tech Stack Ticker (Pinned at Bottom of Viewport) */}
      <div className="w-full mt-auto pt-4 pb-2">
        <TechMarquee />
      </div>
    </div>
  );
};

export default Home;
