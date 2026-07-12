import React, { useEffect } from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/header/Home";
import About from "./components/header/About";
import Skill from "./components/header/Skill";
import Footer from "./components/header/Footer";
import Experience1 from "./components/header/Experience1";
import ScrollEffects from "./components/assets/animtion/ScrollEffects";
import Project from "./components/header/Project";
import ContactFAB from "./components/header/ContactFAB";
import Certificates from "./components/header/Certificates";

const App = () => {
  // Handle smooth scrolling
  useEffect(() => {
    const handleHashLinks = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (link) {
        e.preventDefault();
        const id = link.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `#${id}`);
        }
      }
    };

    document.addEventListener("click", handleHashLinks);
    return () => document.removeEventListener("click", handleHashLinks);
  }, []);

  return (
    <div className="app bg-gray-950">
      <a
        href="#home"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-gray-950 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollEffects />
      <Navbar />
      <ContactFAB />
      <section id="home" aria-label="Introduction">
        <Home />
      </section>
      <section id="about" aria-label="About me">
        <About />
      </section>
      <section id="experience" aria-label="Education and experience">
        <Experience1 />
      </section>
      <section id="project" aria-label="Projects">
        <Project />
      </section>
      <section id="certificates" aria-label="Certificates and achievements">
        <Certificates />
      </section>
      <section id="skill" aria-label="Technical skills">
        <Skill />
      </section>
      <Footer />
    </div>
  );
};

export default App;
