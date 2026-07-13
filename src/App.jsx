import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactFAB from "./components/ui/ContactFAB";
import ScrollEffects from "./components/ui/ScrollEffects";
import useSmoothScroll from "./hooks/useSmoothScroll";
import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Experience from "./sections/experience/Experience";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import SkillsSection from "./sections/skills/SkillsSection";

const App = () => {
  useSmoothScroll();

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
        <Experience />
      </section>
      <section id="project" aria-label="Projects">
        <Projects />
      </section>
      <section id="certificates" aria-label="Certificates and achievements">
        <Certificates />
      </section>
      <section id="skill" aria-label="Technical skills">
        <SkillsSection />
      </section>
      <Footer />
    </div>
  );
};

export default App;
