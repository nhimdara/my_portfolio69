// Navbar.jsx - Only change the navigation part
// Remove react-router imports and usage
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle outside click
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

  // Handle escape key
  const handleEscapeKey = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  // Navigation items - keep as buttons or anchor tags with hash
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skill", label: "Skill" },
  ];

  // Lock scroll when mobile menu is open
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
      className="sticky top-0 z-50 w-full h-[70px] px-4 md:px-10 lg:px-20 bg-gray-900 shadow-2xl"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-white">
          <a
            href="#home"
            className="hover:text-cyan-400 transition-colors duration-200"
            onClick={closeMobileMenu}
            aria-label="Homepage"
          >
            Nhim Dara
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block" role="navigation" aria-label="Desktop menu">
          <ul className="flex gap-6 lg:gap-10 text-white transition-all">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:font-bold transition-all duration-200 hover:text-cyan-400"
                  onClick={closeMobileMenu}
                >
                  {item.label}
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
              className="flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform duration-200 py-2 md:py-3 px-4 md:px-8 rounded-3xl font-bold bg-gray-800 text-white hover:bg-cyan-600 text-sm md:text-base shadow-lg"
              aria-label="Contact me button"
            >
              <IoCall className="text-white text-lg md:text-xl" aria-hidden="true" />
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="menu-button text-3xl text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <IoClose aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`mobile-menu lg:hidden fixed inset-0 top-[70px] bg-gray-900 text-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="container mx-auto px-4 py-6 h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all duration-200"
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
              className="flex items-center justify-center gap-2 w-full py-3 px-8 rounded-3xl font-bold bg-gray-800 text-white hover:bg-cyan-600 shadow-lg"
              aria-label="Contact me button"
            >
              <IoCall className="text-white text-xl" aria-hidden="true" />
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;