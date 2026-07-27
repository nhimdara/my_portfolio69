import React, { useState } from "react";
import FloatingIcons from "../../components/ui/FloatingIcons";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Server,
  Sparkles,
  Star,
} from "lucide-react";
import Elearing from "../../assets/images/ProjectElearning.png";
import Ecommerce from "../../assets/images/Ecommerce.png";
import Portfolio from "../../assets/images/Portfolio.png";
import CulinaryAdminPOS from "../../assets/images/CulinaryAdminPOS.png";
import CineVault from "../../assets/images/CineVault.webp";
import TelegramShop from "../../assets/images/TelegramShop.png";
import StayEasyHotel from "../../assets/images/StayEasyHotel.png";
import WoodsAndroid from "../../assets/images/WoodsAndroid.png";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "LearnFlow E-Learning Platform",
      image: Elearing,
      description:
        "A full-stack e-learning platform for RUPP students across multiple majors (ITE, IT, Mathematics), featuring role-based dashboards for students, teachers, and admins.",
      tech: ["React", "Express", "MySQL", "Tailwind CSS", "JWT"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://frontend-project-practicum-e-learni.vercel.app/",
      backendUrl:
        "https://backend-project-practicum-elearning.onrender.com/api",
      githubUrl:
        "https://github.com/nhimdara/Frontend-Project-Practicum-ELearning",
      githubLabel: "Frontend",
      backendGithubUrl:
        "https://github.com/nhimdara/Backend-Project-Practicum-ELearning",
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
      year: "2025",
      liveUrl: "https://computer-shop-murex.vercel.app/",
      githubUrl: "https://github.com/nhimdara/ComputerShop",
      featured: false,
    },
    {
      id: 3,
      title: "Culinary Admin POS",
      image: CulinaryAdminPOS,
      description:
        "A full-stack restaurant management portal with operational dashboards for sales, orders, inventory, tables, products, categories, and payments.",
      tech: ["POS Dashboard", "Admin Portal", "REST API"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://mpos-seven.vercel.app/",
      backendUrl: "https://g2-sun-11-mpos-back-gjyx.onrender.com/",
      githubUrl: "https://github.com/NalenSrin123/G2_SUN_11_MPOS",
      featured: true,
    },
    {
      id: 4,
      title: "CineVault Movie Website",
      image: CineVault,
      description:
        "A responsive movie discovery website with search, genre filters, catalogue sorting, persistent favourites and watchlists, demo authentication, and light and dark themes.",
      tech: ["React 19", "Vite", "Modular CSS"],
      category: "Frontend",
      year: "2026",
      liveUrl: null,
      githubUrl: "https://github.com/nhimdara/Movie-Website-WCT",
      featured: false,
    },
    {
      id: 5,
      title: "Telegram Shop Mini App",
      image: TelegramShop,
      description:
        "A full-stack Telegram Mini App storefront with verified Telegram authentication, product browsing, user carts, stock-aware orders, and Bakong KHQR and ABA PayWay payment flows.",
      tech: ["React 19", "Telegram SDK", "Laravel 12", "PostgreSQL"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://t.me/my_shop67_bot/shop_nw",
      githubUrl: "https://github.com/nhimdara/bot-telegram-test-website",
      githubLabel: "Frontend",
      backendGithubUrl:
        "https://github.com/nhimdara/bot-telegram-test-website-backend",
      featured: true,
    },
    {
      id: 6,
      title: "StayEasy Hotel Booking",
      image: StayEasyHotel,
      description:
        "A full-stack hotel booking platform with destination and date search, wishlists, room reservations, secure payments, and role-based hotel and booking management.",
      tech: ["Vue 3", "Tailwind CSS", "Laravel 10", "Sanctum"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://frontend-hotel-booking-ten.vercel.app/",
      backendUrl: "https://backend-hotel-booking-5.onrender.com/api",
      githubUrl: "https://github.com/nhimdara/Frontend_Hotel_Booking",
      githubLabel: "Frontend",
      backendGithubUrl: "https://github.com/nhimdara/Backend_Hotel_Booking",
      featured: true,
    },
    {
      id: 7,
      title: "WOOD'S Cambodia Android App",
      image: WoodsAndroid,
      description:
        "An Android product-catalog application for WOOD'S Cambodia, featuring branded product discovery, responsive navigation, company information, and direct social contact links.",
      tech: ["Android Studio", "React 18", "Capacitor", "Tailwind CSS"],
      category: "Mobile",
      year: "2026",
      liveUrl: null,
      apkUrl: "/apk/woods-cambodia.apk",
      githubUrl: "https://github.com/nhimdara/Wood-s",
      featured: true,
    },
    {
      id: 8,
      title: "Portfolio Website",
      image: Portfolio,
      description:
        "This personal portfolio site, built to showcase projects, skills, and experience with smooth scroll animations and a responsive layout.",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "Frontend",
      year: "2026",
      liveUrl: "https://my-portfolio69.vercel.app/",
      githubUrl: "https://github.com/nhimdara/my_portfolio69",
      featured: false,
    },
  ];
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
          <section className="mb-10 text-center scroll-reveal">
            <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Selected{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              A collection of things I've built while learning, training, and
              solving real problems &mdash; from full-stack platforms to focused
              tools.
            </p>
          </section>

          {/* Filter Tabs */}
          <section className="mb-12 flex justify-center scroll-reveal" aria-label="Project filters">
            <div className="flex flex-wrap justify-center gap-1.5 rounded-2xl border border-white/10 bg-gray-900/70 p-1.5 shadow-xl shadow-black/20 backdrop-blur-xl">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
                className={`cursor-pointer rounded-xl border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-900/30"
                    : "border-transparent text-gray-400 hover:bg-white/5 hover:text-cyan-300"
                }`}
              >
                {category}
              </button>
            ))}
            </div>
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 scroll-reveal">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b111b]/90 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_24px_70px_rgba(6,182,212,0.14)]"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b111b] via-transparent to-gray-950/20"></div>

                  <div className="absolute bottom-3 right-4 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-gray-950/85 text-cyan-300 backdrop-blur-md transition-colors hover:bg-cyan-400 hover:text-gray-950">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                    {project.apkUrl && (
                      <a
                        href={project.apkUrl}
                        download
                        aria-label={`Download ${project.title} APK`}
                        className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-gray-950/85 text-cyan-300 backdrop-blur-md transition-colors hover:bg-cyan-400 hover:text-gray-950"
                      >
                        <Download size={18} />
                      </a>
                    )}
                    {(project.githubUrl || project.backendUrl) && (
                      <a
                        href={project.githubUrl || project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          project.githubUrl
                            ? `Open ${project.title} source code`
                            : `Open ${project.title} backend API`
                        }
                        className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-gray-950/85 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-gray-950"
                      >
                        {project.githubUrl ? <Github size={17} /> : <Server size={17} />}
                      </a>
                    )}
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      <Star size={12} className="fill-current" />
                      Featured
                    </span>
                  )}

                  <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-gray-700 bg-gray-900/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                    <Layers3 size={12} />
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                    <span>Case study</span><span>{project.year}</span>
                  </div>
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
                  <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-700/50 pt-4">
                    {project.apkUrl ? (
                      <a
                        href={project.apkUrl}
                        download
                        className="flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        <Download size={16} />
                        Download APK
                      </a>
                    ) : project.liveUrl ? (
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
                        {project.githubLabel || "Source Code"}
                      </a>
                    ) : !project.backendUrl ? (
                      <span className="flex items-center gap-2 text-sm font-semibold text-gray-600 cursor-not-allowed">
                        <Github size={16} />
                        Source Code
                      </span>
                    ) : null}

                    {project.backendGithubUrl && (
                      <a
                        href={project.backendGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-purple-300"
                      >
                        <Server size={16} />
                        Backend
                      </a>
                    )}

                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-purple-300"
                      >
                        <Server size={16} />
                        API
                      </a>
                    )}
                  </div>
                </div>
              </article>
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

export default Projects;
