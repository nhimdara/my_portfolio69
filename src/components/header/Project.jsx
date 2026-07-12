import React, { useEffect, useState } from "react";
import FloatingIcons from "../assets/animtion/FloatingIcons";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import Elearing from "../assets/image/ProjectElearning.png";
import Ecommerce from "../assets/image/Ecommerce.png";
import Portfolio from "../assets/image/Portfolio.png";
const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const Projects = [
    {
      id: 1,
      title: "LearnFlow E-Learning Platform",
      image: Elearing,
      description:
        "A full-stack e-learning platform for RUPP students across multiple majors (ITE, IT, Mathematics), featuring role-based dashboards for students, teachers, and admins.",
      tech: ["React", "Express", "MySQL", "Tailwind CSS", "JWT"],
      category: "Full Stack",
      liveUrl: "https://pp-deploy-zeta.vercel.app/",
      githubUrl: "https://github.com/nhimdara/PP_deploy/tree/main/Frontend",
      featured: true,
    },
    {
      id: 2,
      title: "Ecommerce",
      image: Ecommerce,
      description:
        "A modern ecommerce website with product browsing, category filtering, shopping cart features, and a responsive design built using React.js, Tailwind CSS, and Bootstrap.",
      tech: ["React js", "Tailwind", "Bootstrap"],
      category: "Frontend",
      liveUrl: "https://computer-shop-murex.vercel.app/",
      githubUrl: "https://github.com/nhimdara/ComputerShop",
      featured: false,
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: Portfolio,
      description:
        "This personal portfolio site, built to showcase projects, skills, and experience with smooth scroll animations and a responsive layout.",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "Frontend",
      liveUrl: "https://my-portfolio69.vercel.app/",
      githubUrl: "https://github.com/nhimdara/my_portfolio69",
      featured: false,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    ...new Set(Projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? Projects
      : Projects.filter((project) => project.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-gray-950 scroll-gradient">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>

      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96  rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <section className="text-center mb-12 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Selected{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A collection of things I've built while learning, training, and
              solving real problems &mdash; from full-stack platforms to focused
              tools.
            </p>
          </section>

          {/* Filter Tabs */}
          <section className="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-900/30"
                    : "bg-gray-800/40 text-gray-400 border-gray-700 hover:border-cyan-500/50 hover:text-cyan-300"
                }`}
              >
                {category}
              </button>
            ))}
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/40 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-900/30 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <Star size={12} className="fill-current" />
                      Featured
                    </span>
                  )}

                  <span className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-gray-900/70 text-cyan-300 text-xs font-semibold rounded-full border border-gray-700">
                    <Folder size={12} />
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-900/60 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-semibold text-gray-600 cursor-not-allowed">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-purple-300 transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-semibold text-gray-600 cursor-not-allowed">
                        <Github size={16} />
                        Source Code
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category yet.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Project;
