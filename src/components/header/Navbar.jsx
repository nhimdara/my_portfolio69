import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }, []);

  const handleEscapeKey = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project"},
    { id: "skill", label: "Skill" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
      }, 10);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
      };
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleClickOutside, handleEscapeKey]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full h-[70px] px-4 md:px-10 lg:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-cyan-500/10"
          : "bg-gray-900 shadow-2xl"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-white">
          <a
            href="#home"
            className="relative group hover:text-cyan-400 transition-colors duration-200"
            onClick={closeMobileMenu}
            aria-label="Homepage"
          >
            Nhim Dara
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:block"
          role="navigation"
          aria-label="Desktop menu"
        >
          <ul className="flex gap-6 lg:gap-10 text-white transition-all">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative group transition-all duration-200 hover:text-cyan-400"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden lg:block">
          <a
            href="tel:+855969923931"
            aria-label="Contact via phone"
            className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-3xl"
          >
            <button
              className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 py-2 md:py-3 px-4 md:px-8 rounded-3xl font-bold bg-gray-800 text-white hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 text-sm md:text-base shadow-lg hover:shadow-cyan-500/30"
              aria-label="Contact me button"
            >
              <IoCall
                className="text-white text-lg md:text-xl animate-wiggle"
                aria-hidden="true"
              />
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="menu-button text-3xl text-white p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <IoClose aria-hidden="true" />
            ) : (
              <HiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`mobile-menu lg:hidden fixed inset-0 top-[70px] bg-gray-900/95 backdrop-blur-md text-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="container mx-auto px-4 py-6 h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="flex flex-col gap-4 mb-6">
            {navItems.map((item, i) => (
              <li
                key={item.id}
                className={isOpen ? "animate-slide-in opacity-0" : "opacity-0"}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-cyan-400 hover:translate-x-2 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+855969923931"
            onClick={closeMobileMenu}
            className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-3xl block"
            aria-label="Contact via phone"
          >
            <button
              className="flex items-center justify-center gap-2 w-full py-3 px-8 rounded-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg hover:scale-[1.02] transition-transform"
              aria-label="Contact me button"
            >
              <IoCall className="text-white text-xl" aria-hidden="true" />
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <style jsx global>{`
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }
        .animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out infinite;
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
