import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";

const ContactFAB = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:+855969923931"
      aria-label="Contact via phone"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-90 pointer-events-none"
      }`}
    >
      <span className="relative flex items-center">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping-slow"></span>

        {/* Button */}
        <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-950/50 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 active:scale-95 md:px-6 md:py-4">
          <IoCall className="text-lg md:text-xl animate-wiggle" />
          <span className="hidden sm:inline">Contact Me</span>
        </span>
      </span>

      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70%,
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-15deg);
          }
          75% {
            transform: rotate(15deg);
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2.5s ease-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
};

export default ContactFAB;
