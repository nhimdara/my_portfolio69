import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Server,
  Sparkles,
  Star,
  Code2,
  Calendar,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";
import Aichatbot from "../../assets/images/aichatbot.webp";
import Elearing from "../../assets/images/ProjectElearning.webp";
import Ecommerce from "../../assets/images/Ecommerce.webp";
import Portfolio from "../../assets/images/Portfolio.webp";
import CulinaryAdminPOS from "../../assets/images/CulinaryAdminPOS.webp";
import CineVault from "../../assets/images/CineVault.webp";
import TelegramShop from "../../assets/images/TelegramShop.webp";
import StayEasyHotel from "../../assets/images/StayEasyHotel.webp";
import WoodsAndroid from "../../assets/images/WoodsAndroid.webp";
import IronManPortfolio from "../../assets/images/IronManPortfolio.webp";
import CampusStudentManagement from "../../assets/images/CampusStudentManagement.webp";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "LearnFlow E-Learning Platform",
      image: Elearing,
      description:
        "A comprehensive full-stack e-learning platform for RUPP university students across multiple majors (ITE, IT, Math), featuring role-based dashboards for students, teachers, and admins with interactive quizzes and course material management.",
      tech: ["React 19", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
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
      glow: "cyan",
    },
    {
      id: 2,
      title: "Telegram Shop Mini App",
      image: TelegramShop,
      description:
        "A full-stack Telegram Mini App storefront featuring instant Telegram OAuth verification, real-time product catalogs, cart state, inventory-checked orders, and live Bakong KHQR & ABA PayWay checkout integrations.",
      tech: [
        "React 19",
        "Telegram SDK",
        "Laravel 12",
        "PostgreSQL",
        "Tailwind",
      ],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://t.me/my_shop67_bot/shop_nw",
      githubUrl: "https://github.com/nhimdara/bot-telegram-test-website",
      githubLabel: "Frontend",
      backendGithubUrl:
        "https://github.com/nhimdara/bot-telegram-test-website-backend",
      featured: true,
      glow: "purple",
    },
    {
      id: 3,
      title: "Culinary Admin POS & Inventory",
      image: CulinaryAdminPOS,
      description:
        "Full-stack restaurant management portal with real-time analytics dashboards for kitchen orders, table reservations, inventory tracking, categorized menus, and multi-method cashier billing.",
      tech: ["React.js", "REST API", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://mpos-seven.vercel.app/",
      backendUrl: "https://g2-sun-11-mpos-back-gjyx.onrender.com/",
      githubUrl: "https://github.com/NalenSrin123/G2_SUN_11_MPOS",
      featured: true,
      glow: "amber",
    },
    {
      id: 4,
      title: "StayEasy Hotel Booking Platform",
      image: StayEasyHotel,
      description:
        "Full-stack hospitality booking system featuring real-time room availability search, destination filters, persistent customer wishlists, reservation workflows, and hotel manager administration panels.",
      tech: ["Vue 3", "Laravel 10", "Sanctum", "Tailwind CSS", "MySQL"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://frontend-hotel-booking-ten.vercel.app/",
      backendUrl: "https://backend-hotel-booking-5.onrender.com/api",
      githubUrl: "https://github.com/nhimdara/Frontend_Hotel_Booking",
      githubLabel: "Frontend",
      backendGithubUrl: "https://github.com/nhimdara/Backend_Hotel_Booking",
      featured: true,
      glow: "emerald",
    },
    {
      id: 5,
      title: "Campus Student Management System",
      image: CampusStudentManagement,
      description:
        "Layered Python FastAPI student management system with role-based JWT authentication, full student & course CRUD, enrollment workflows, GPA calculation engines, and interactive Swagger API documentation.",
      tech: ["FastAPI", "SQLAlchemy", "Pydantic", "Alembic", "SQLite", "JWT"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://student-management-system-kjf6.onrender.com/",
      backendUrl: "https://student-management-system-kjf6.onrender.com/docs",
      githubUrl:
        "https://github.com/nhimdara/Final-Project-DSA-RUPP-ITE-Management-",
      featured: true,
      glow: "blue",
    },
    {
      id: 6,
      title: "CineVault Movie Discovery",
      image: CineVault,
      description:
        "Modern cinematic movie discovery web app with real-time search, multi-genre filtering, watchlist persistence, trailer modals, responsive layout, and theme toggling.",
      tech: ["React 19", "Vite", "TMDB API", "Tailwind CSS"],
      category: "Frontend",
      year: "2026",
      liveUrl: "https://movie-website-wct.vercel.app/",
      githubUrl: "https://github.com/nhimdara/Movie-Website-WCT",
      featured: false,
      glow: "purple",
    },
    {
      id: 7,
      title: "WOOD'S Cambodia Android App",
      image: WoodsAndroid,
      description:
        "Native Android product catalog application for WOOD'S Cambodia, featuring branded luxury product collections, responsive navigation, company information, and direct social order routing.",
      tech: ["Android Studio", "React 18", "Capacitor", "Tailwind CSS"],
      category: "Mobile",
      year: "2026",
      liveUrl: null,
      apkUrl:
        "https://raw.githubusercontent.com/nhimdara/my_portfolio69/main/downloads/woods-cambodia.apk",
      githubUrl: "https://github.com/nhimdara/Wood-s",
      featured: true,
      glow: "emerald",
    },
    {
      id: 8,
      title: "Iron Man Cinematic Portfolio",
      image: IronManPortfolio,
      description:
        "A cinematic superhero-themed developer showcase with immersive inertial scrolling, HUD liquid glass overlays, responsive credentials, and interactive micro-interactions.",
      tech: ["React", "Framer Motion", "Lenis", "Tailwind CSS"],
      category: "Frontend",
      year: "2026",
      liveUrl: "https://daranhimportfolio.vercel.app/",
      githubUrl: "https://github.com/nhimdara/IRON-MAN",
      featured: true,
      glow: "amber",
    },
    {
      id: 9,
      title: "Tech Haven Computer Shop",
      image: Ecommerce,
      description:
        "Feature-rich computer hardware ecommerce store featuring category navigation, live cart calculations, product specification drawers, and responsive cross-device shopping design.",
      tech: ["React.js", "Tailwind CSS", "Bootstrap", "LocalState"],
      category: "Frontend",
      year: "2025",
      liveUrl: "https://computer-shop-murex.vercel.app/",
      githubUrl: "https://github.com/nhimdara/ComputerShop",
      featured: false,
      glow: "cyan",
    },
    {
      id: 10,
      title: "Library Management REST API",
      image: "/portfolio/projects/LibraryManagementSwagger.svg",
      description:
        "Production-grade Spring Boot REST API for managing university book catalogues, member student profiles, borrowing schedules, and validation with interactive Swagger UI.",
      tech: ["Spring Boot", "Java 21", "MySQL", "JPA Hibernate", "Swagger"],
      category: "Backend",
      year: "2026",
      liveUrl:
        "https://api-production-f2f5.up.railway.app/swagger-ui/index.html",
      githubUrl: "https://github.com/nhimdara/Library_managment_Spring_Boot",
      featured: true,
      glow: "purple",
    },
    {
      id: 11,
      title: "Liquid Glass Portfolio 2026",
      image: Portfolio,
      description:
        "Personal developer portfolio built with a futuristic Liquid Glass design system, interactive canvas fluid caustics, and responsive layout across all device viewports.",
      tech: ["React 19", "Tailwind CSS 4", "Vite", "Canvas WebGL"],
      category: "Frontend",
      year: "2026",
      liveUrl: "https://my-portfolio69.vercel.app/",
      githubUrl: "https://github.com/nhimdara/my_portfolio69",
      featured: false,
      glow: "cyan",
    },
    {
      id: 12,
      title: "AI Chat Bot in Telegram",
      image: Aichatbot,
      description:
        "An AI-powered Telegram chatbot delivering conversational responses, context-aware replies, and interactive command handling directly inside Telegram.",
      tech: ["Node.js", "Telegram Bot API", "OpenAI API"],
      category: "Backend",
      year: "2026",
      liveUrl: "https://t.me/DaraAIChatBot",
      githubUrl: "https://github.com/nhimdara/chatbotai.git",
      featured: false,
      glow: "blue",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCount = (cat) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Selected <span className="liquid-shimmer-text">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A curated collection of full-stack platforms, client storefronts,
            REST APIs, and responsive web applications.
          </p>
        </div>

        {/* Filter Bar with Liquid Glass Pill Styling */}
        <div className="mb-12 flex justify-center scroll-reveal">
          <div className="liquid-glass-pill flex items-center gap-1.5 p-1.5 rounded-2xl max-w-full overflow-x-auto hide-scrollbar shadow-xl">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 border border-white/30 shadow-[0_2px_14px_rgba(6,182,212,0.4)]" />
                  )}
                  <span className="relative z-10">{category}</span>
                  <span
                    className={`relative z-10 rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {getCount(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-reveal">
          {filteredProjects.map((project) => (
            <LiquidCard
              key={project.id}
              glowColor={project.glow || "cyan"}
              className="flex flex-col h-full rounded-2xl"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950/80 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = Elearing;
                  }}
                />

                {/* Subtle glass gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  {project.featured ? (
                    <span className="liquid-glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold text-amber-300 border-amber-400/30">
                      <Star
                        size={11}
                        className="fill-amber-400 text-amber-400"
                      />
                      Featured
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className="liquid-glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold text-cyan-300">
                    <Layers3 size={11} />
                    {project.category}
                  </span>
                </div>

                {/* Quick Action Floating Bar on Hover */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0 sm:translate-y-2 group-hover:translate-y-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass-pill grid h-8 w-8 place-items-center rounded-xl text-cyan-300 hover:text-white hover:bg-cyan-500/50 shadow-md"
                      title="Open Live Website"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      download
                      className="liquid-glass-pill grid h-8 w-8 place-items-center rounded-xl text-emerald-300 hover:text-white hover:bg-emerald-500/50 shadow-md"
                      title="Download Android APK"
                    >
                      <Download size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass-pill grid h-8 w-8 place-items-center rounded-xl text-slate-200 hover:text-white hover:bg-purple-500/50 shadow-md"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}

                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass-pill grid h-8 w-8 place-items-center rounded-xl text-purple-300 hover:text-white hover:bg-purple-500/50 shadow-md"
                      title="View Backend API Endpoint"
                    >
                      <Server size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <span>Release</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {project.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[11px] font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Links Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  {project.apkUrl ? (
                    <a
                      href={project.apkUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Download size={14} />
                      <span>Download APK</span>
                    </a>
                  ) : project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live Preview</span>
                    </a>
                  ) : (
                    <span className="text-slate-600">Local Release</span>
                  )}

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.backendGithubUrl && (
                      <a
                        href={project.backendGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Server size={13} />
                        <span>Backend</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
