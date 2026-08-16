import React, { useState, useEffect } from "react";
import { Phone, Send, MessageCircle, X } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const ContactFAB = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-90 pointer-events-none"
      }`}
    >
      {/* Expanded Quick Contact Floating Dock */}
      {expanded && (
        <div className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2 min-w-[190px] liquid-glass-elevated p-2.5 rounded-2xl shadow-2xl border border-white/20 animate-fade-in">
          <a
            href="https://t.me/dara_nhim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
            onClick={() => setExpanded(false)}
          >
            <FaTelegramPlane className="text-cyan-400 text-sm" />
            <span>Chat on Telegram</span>
          </a>

          <a
            href="tel:+855969923931"
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
            onClick={() => setExpanded(false)}
          >
            <Phone size={14} className="text-purple-400" />
            <span>Call (+855) 96 992 3931</span>
          </a>
        </div>
      )}

      {/* Main Liquid Glass FAB Pill */}
      <div className="relative group">
        {/* Iridescent halo */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60 blur-[6px] group-hover:opacity-100 transition-opacity animate-pulse" />

        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle contact options"
            className="liquid-btn-primary flex items-center gap-2.5 rounded-full px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {expanded ? (
              <>
                <X size={17} />
                <span>Close</span>
              </>
            ) : (
              <>
                <MessageCircle size={17} className="animate-wiggle" />
                <span>Quick Contact</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
        .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactFAB;
