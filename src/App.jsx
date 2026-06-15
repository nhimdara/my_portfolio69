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
const App = () => {
  // Handle smooth scrolling
  useEffect(() => {
    const handleHashLinks = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = e.target.getAttribute("href").substring(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleHashLinks);
    return () => document.removeEventListener("click", handleHashLinks);
  }, []);

  return (
    <div className="app bg-gray-900">
      <ScrollEffects />
      <Navbar />
      <ContactFAB />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience1 />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <Footer />
    </div>
  );
};

export default App;
