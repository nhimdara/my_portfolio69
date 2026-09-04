import React, { useState } from "react";
import {
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  ArrowUp,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import LiquidCard from "../ui/LiquidCard";

export const Footer = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "daracombodia54@gmail.com";
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Build Telegram quick dispatch or mailto
      const text = encodeURIComponent(
        `Hello Dara, I am ${formData.name} (${formData.email || "No email"}).\nSubject: ${
          formData.subject || "Collaboration"
        }\n\nMessage: ${formData.message}`
      );
      window.open(`https://t.me/dara_nhim?text=${text}`, "_blank");

      setIsSubmitting(false);
      setFormSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSent(false), 4000);
    }, 600);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      url: "https://github.com/nhimdara",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      url: "https://linkedin.com",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane size={18} />,
      url: "https://t.me/dara_nhim",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={18} />,
      url: "https://facebook.com/dara.nhim.865637",
    },
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-12 border-t border-white/10 bg-slate-950/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-10 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact Header Section */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono mb-4">
            <Mail size={13} />
            <span>05 // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Have an idea?{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Let's build something great.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-400">
            Open for internships, full-stack engineering roles, and innovative freelance collaborations.
          </p>
        </div>

        {/* Contact Canvas Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Coordinates & Social Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <LiquidCard glowColor="cyan" className="p-5 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Direct Communications
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Feel free to send an email, message via Telegram, or connect on professional channels. I respond quickly.
                </p>
              </div>

              {/* Email Chip with Copy Action */}
              <div className="refero-pill p-3.5 sm:p-4 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  PRIMARY EMAIL
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-base font-mono font-bold text-cyan-400 hover:underline truncate"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="refero-icon-btn p-2 rounded-xl text-slate-300 transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="refero-pill p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 font-mono">
                <div className="refero-icon-btn grid h-10 w-10 place-items-center rounded-xl text-cyan-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">Phnom Penh, Cambodia</p>
                  <p className="text-xs text-slate-400 font-medium">UTC+7 (Indochina Time)</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                  CONNECT ACROSS PLATFORMS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="refero-icon-btn grid h-11 w-11 place-items-center rounded-xl text-slate-300 hover:scale-110 transition-all"
                      aria-label={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </LiquidCard>
          </div>

          {/* Contact Form (7 cols) */}
          <LiquidCard glowColor="purple" className="lg:col-span-7 p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sokha"
                    className="refero-input w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sokha@example.com"
                    className="refero-input w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  SUBJECT / TOPIC
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Freelance Project / Inquiry"
                  className="refero-input w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  YOUR MESSAGE *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or engineering opportunity..."
                  className="refero-input w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="refero-btn-primary flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white shadow-xl cursor-pointer w-full sm:w-auto"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "Sending..." : "Dispatch Message ⚡"}</span>
                </button>

                {formSent && (
                  <span className="text-xs font-mono text-emerald-300 flex items-center justify-center gap-1.5 animate-in fade-in">
                    <Check size={14} />
                    Message sent via Telegram!
                  </span>
                )}
              </div>
            </form>
          </LiquidCard>
        </div>

        {/* Minimal Footer */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-white text-sm">Nhim Dara</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Building Digital Experiences That Matter.</span>
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <a href="#home" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">
              Experience
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
            <span className="text-slate-600">|</span>
            <span className="font-mono">© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
