import React, { useState } from "react";
import {
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Github,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import profilePicture from "../../assets/images/myPicture1.webp";

export const Footer = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const currentYear = new Date().getFullYear();
  const email = "nhimdara565@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onCopyEmail) onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    // Build Telegram message link or mailto
    const text = encodeURIComponent(
      `Hello Dara, I am ${formState.name} (${formState.email}).\n\nMessage: ${formState.message}`
    );
    window.open(`https://t.me/dara_nhim?text=${text}`, "_blank");
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane size={17} />,
      url: "https://t.me/dara_nhim",
      color: "hover:text-cyan-300 hover:border-cyan-400/50",
    },
    {
      name: "GitHub",
      icon: <Github size={17} />,
      url: "https://github.com/nhimdara",
      color: "hover:text-white hover:border-white/50",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={17} />,
      url: "https://facebook.com/dara.nhim.865637",
      color: "hover:text-blue-400 hover:border-blue-400/50",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={17} />,
      url: "https://instagram.com/ra_zee109",
      color: "hover:text-pink-400 hover:border-pink-400/50",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={17} />,
      url: "https://x.com/william57378",
      color: "hover:text-cyan-400 hover:border-cyan-400/50",
    },
  ];

  return (
    <footer id="contact" className="relative mt-20 px-4 sm:px-6 lg:px-8 pb-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-5xl rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Big Refero Contact Hub Card */}
        <div className="refero-card-elevated mb-16 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-white/20">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Direct CTA & Quick Reach */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)] font-mono">
                <Sparkles size={14} className="text-amber-300 animate-pulse" />
                <span>CONNECT &amp; COLLABORATE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Have a project or looking for a{" "}
                <span className="refero-text-accent">Full-Stack Engineer?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I&apos;m currently available for full-time engineering roles, freelance contracts, and software collaborations. Feel free to message me anytime!
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                    <Mail size={16} />
                  </div>
                  <span>nhimdara565@gmail.com</span>
                  <button
                    onClick={handleCopyEmail}
                    className="refero-pill rounded-lg px-2.5 py-1 text-[11px] font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 border border-white/10 text-purple-400">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+855969923931" className="hover:text-cyan-300 transition-colors">
                    +855 96 992 3931 / +855 60 762 135
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                    <MapPin size={16} />
                  </div>
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://t.me/dara_nhim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="refero-btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-xl"
                >
                  <Send size={15} />
                  <span>Message on Telegram</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="refero-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Quick Interactive Message Box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 border transition-colors bg-white/[0.03] border-white/10 [data-theme=light]:bg-slate-100/90 [data-theme=light]:border-slate-200 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare size={16} className="text-cyan-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100 [data-theme=light]:text-slate-900">
                    Direct Dispatch to Telegram
                  </span>
                </div>

                {formSent ? (
                  <div className="py-8 text-center space-y-2">
                    <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 mx-auto">
                      <Check size={24} />
                    </div>
                    <p className="text-sm font-bold text-white [data-theme=light]:text-slate-900">Opening Telegram chat...</p>
                    <p className="text-xs text-slate-400 [data-theme=light]:text-slate-600">Thank you for reaching out!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-mono font-semibold text-slate-300 [data-theme=light]:text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl px-3.5 py-2.5 text-xs text-slate-100 [data-theme=light]:text-slate-900 bg-white/[0.06] border border-white/15 [data-theme=light]:bg-white [data-theme=light]:border-slate-300 placeholder:text-slate-500 [data-theme=light]:placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none [data-theme=light]:shadow-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-semibold text-slate-300 [data-theme=light]:text-slate-700 mb-1">
                        Your Email or Contact Handle
                      </label>
                      <input
                        type="text"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="johndoe@example.com / @telegram"
                        className="w-full rounded-xl px-3.5 py-2.5 text-xs text-slate-100 [data-theme=light]:text-slate-900 bg-white/[0.06] border border-white/15 [data-theme=light]:bg-white [data-theme=light]:border-slate-300 placeholder:text-slate-500 [data-theme=light]:placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none [data-theme=light]:shadow-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-semibold text-slate-300 [data-theme=light]:text-slate-700 mb-1">
                        Message / Project Brief
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Dara, I would like to discuss a web development project..."
                        className="w-full rounded-xl px-3.5 py-2.5 text-xs text-slate-100 [data-theme=light]:text-slate-900 bg-white/[0.06] border border-white/15 [data-theme=light]:bg-white [data-theme=light]:border-slate-300 placeholder:text-slate-500 [data-theme=light]:placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none resize-none [data-theme=light]:shadow-sm transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full refero-btn-primary rounded-xl py-3 text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                    >
                      <Send size={14} />
                      <span>Send Direct Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src={profilePicture}
              alt="Nhim Dara"
              className="h-7 w-7 rounded-lg object-cover ring-1 ring-white/20"
            />
            <span>
              &copy; {currentYear} <strong>Nhim Dara</strong>. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`grid h-8 w-8 place-items-center rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-colors ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="refero-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs text-slate-300 hover:text-white cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
