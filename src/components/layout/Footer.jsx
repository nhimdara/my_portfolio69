
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "About Me", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#project" },
    { name: "Certificates", path: "#certificates" },
    { name: "Skills", path: "#skill" },
    { name: "Contact", path: "tel:+855969923931" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/dara.nhim.865637",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "https://t.me/dara_nhim",
    },
    {
      name: "Messenger",
      icon: <FaFacebookMessenger />,
      url: "https://m.me/dara.nhim.865637",
    },
    { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/william57378" },
  ];

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top gradient border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Ambient glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
        <div className="mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/[0.06] to-purple-500/10 p-6 shadow-2xl shadow-black/20 md:flex md:items-center md:justify-between md:p-9">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"><Sparkles size={14} /> Have a project in mind?</p>
            <h2 className="text-2xl font-black text-white md:text-4xl">Let&apos;s build something meaningful.</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">I&apos;m open to internships, freelance projects, and development collaborations.</p>
          </div>
          <a href="mailto:daracombodia54@gmail.com" className="group mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-cyan-950/40 transition-all hover:-translate-y-1 hover:shadow-cyan-500/25 md:mt-0">
            Start a conversation <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Stay Connected Section */}
          <div className="space-y-4 scroll-fade-in">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Stay Connected
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Open to new opportunities, collaborations, or friendly chats.
              Reach out anytime via email or social platforms.
            </p>
          </div>

          {/* Quick Links Section */}
          <div
            className="space-y-4 scroll-fade-in"
            style={{ transitionDelay: "0.1s" }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Quick Links
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div
            className="space-y-4 scroll-fade-in"
            style={{ transitionDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Contact Info
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400 group hover:text-cyan-400 transition-colors">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">
                  Phnom Penh, Cambodia
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <FaPhone className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+855969923931"
                  className="hover:text-cyan-400 transition-colors text-sm md:text-base"
                >
                  (+855) 96 992 3931
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <FaEnvelope className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:daracombodia54@gmail.com"
                  className="hover:text-cyan-400 transition-colors text-sm md:text-base break-all"
                >
                  daracombodia54@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div
            className="space-y-4 scroll-fade-in"
            style={{ transitionDelay: "0.3s" }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Social</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full"></div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:text-gray-900 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-lg md:text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear}{" "}
            <span className="text-cyan-400 font-semibold">Nhim Dara</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
