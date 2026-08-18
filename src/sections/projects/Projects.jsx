import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Search,
  X,
  Code2,
  Calendar,
  Layers3,
  Server,
  Maximize2,
  CheckCircle2,
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

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LearnFlow E-Learning Platform",
      image: Elearing,
      description:
        "A comprehensive full-stack e-learning platform for university students across multiple majors (ITE, IT, Math), featuring role-based dashboards for students, teachers, and admins with interactive quizzes and course material management.",
      highlights: [
        "Role-based access control (Student, Teacher, Admin)",
        "Interactive quiz engines and course submission workflows",
        "JWT-secured REST API backend with MySQL relational database",
      ],
      tech: ["React 19", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://frontend-project-practicum-e-learni.vercel.app/",
      backendUrl:
        "https://backend-project-practicum-elearning.onrender.com/api",
      githubUrl:
        "https://github.com/nhimdara/Frontend-Project-Practicum-ELearning",
      githubLabel: "Frontend Repo",
      backendGithubUrl:
        "https://github.com/nhimdara/Backend-Project-Practicum-ELearning",
      backendGithubLabel: "Backend Repo",
      featured: true,
      glow: "cyan",
    },
    {
      id: 2,
      title: "Telegram Shop Mini App",
      image: TelegramShop,
      description:
        "A full-stack Telegram Mini App storefront featuring instant Telegram OAuth verification, real-time product catalogs, cart state, inventory-checked orders, and live Bakong KHQR & ABA PayWay checkout integrations.",
      highlights: [
        "Native Telegram WebApp integration & OAuth authentication",
        "Bakong KHQR and ABA PayWay payment gateway integrations",
        "Laravel 12 REST API backend with PostgreSQL database",
      ],
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
      githubLabel: "Frontend Repo",
      backendGithubUrl:
        "https://github.com/nhimdara/bot-telegram-test-website-backend",
      backendGithubLabel: "Backend Repo",
      featured: true,
      glow: "purple",
    },
    {
      id: 3,
      title: "Culinary Admin POS & Inventory",
      image: CulinaryAdminPOS,
      description:
        "Full-stack restaurant management portal with real-time analytics dashboards for kitchen orders, table reservations, inventory tracking, categorized menus, and multi-method cashier billing.",
      highlights: [
        "Live POS cashier checkout and kitchen order routing",
        "Table reservation management & real-time inventory alerts",
        "Comprehensive visual sales reporting with Chart.js",
      ],
      tech: ["React.js", "REST API", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://mpos-seven.vercel.app/",
      backendUrl: "https://g2-sun-11-mpos-back-gjyx.onrender.com/",
      githubUrl: "https://github.com/NalenSrin123/G2_SUN_11_MPOS",
      githubLabel: "GitHub Repo",
      featured: true,
      glow: "amber",
    },
    {
      id: 4,
      title: "StayEasy Hotel Booking Platform",
      image: StayEasyHotel,
      description:
        "Full-stack hospitality booking system featuring real-time room availability search, destination filters, persistent customer wishlists, reservation workflows, and hotel manager administration panels.",
      highlights: [
        "Instant room search with dates, capacity, and price filters",
        "Laravel Sanctum session-based authentication & permissions",
        "Admin control panel for room inventory and customer records",
      ],
      tech: ["Vue 3", "Laravel 10", "Sanctum", "Tailwind CSS", "MySQL"],
      category: "Full Stack",
      year: "2026",
      liveUrl: "https://frontend-hotel-booking-ten.vercel.app/",
      backendUrl: "https://backend-hotel-booking-5.onrender.com/api",
      githubUrl: "https://github.com/nhimdara/Frontend_Hotel_Booking",
      githubLabel: "Frontend Repo",
      backendGithubUrl: "https://github.com/nhimdara/backend-hotel-booking",
      backendGithubLabel: "Backend Repo",
      featured: true,
      glow: "emerald",
    },
    {
      id: 5,
      title: "AI Chatbot Intelligent Assistant",
      image: Aichatbot,
      description:
        "Full-stack intelligent conversational assistant interface powered by Gemini API, featuring multi-turn conversation memory, code snippet syntax highlighting, prompt templates, and streaming responses.",
      highlights: [
        "Google Gemini API integration with context retention",
        "Live markdown & syntax-highlighted code generation",
        "Prompt library for engineering, summarization, and writing",
      ],
      tech: ["React.js", "Node.js", "Gemini API", "Tailwind CSS", "Express"],
      category: "AI & UI/UX",
      year: "2026",
      liveUrl: "https://ai-chatbot-frontend-kappa.vercel.app/",
      githubUrl: "https://github.com/nhimdara/Ai-chatbot-frontend",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "cyan",
    },
    {
      id: 6,
      title: "CineVault Movie Discovery Platform",
      image: CineVault,
      description:
        "High-performance cinematic web portal consuming TMDB live REST API with dynamic genre filtering, debounce search, video trailer embeds, watchlists, and responsive mobile-first UI.",
      highlights: [
        "TMDB live REST API integration with infinite scroll & search",
        "Interactive YouTube trailer modal and movie cast gallery",
        "Custom watchlists stored in local browser state",
      ],
      tech: ["React 19", "TMDB API", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      year: "2025",
      liveUrl: "https://cinevault-movies.vercel.app/",
      githubUrl: "https://github.com/nhimdara/movie-website",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "rose",
    },
    {
      id: 7,
      title: "Woods Android Hotel Booking App",
      image: WoodsAndroid,
      description:
        "Native Android mobile application for luxury hotel reservations featuring material design layouts, date picker booking engines, room tier comparisons, and local SQLite data caching.",
      highlights: [
        "Native Android SDK architecture built with Java & XML",
        "Custom booking calendar picker and room tier selector",
        "Offline-capable SQLite caching and smooth transitions",
      ],
      tech: ["Java", "XML", "Android SDK", "SQLite", "Material Design"],
      category: "Mobile",
      year: "2025",
      githubUrl: "https://github.com/nhimdara/Android-Woods-Hotel-Booking",
      githubLabel: "Android Repo",
      featured: false,
      glow: "emerald",
    },
    {
      id: 8,
      title: "IronMan Interactive Cinematic Showcase",
      image: IronManPortfolio,
      description:
        "Immersive interactive web experience featuring custom keyframe animations, audio visualizers, suit progression archives, and tactile sound design.",
      highlights: [
        "Custom CSS keyframe choreography and sound triggers",
        "Interactive Mark suit archive and technical HUD overlays",
        "Cinematic dark mode with neon arc-reactor accents",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Audio API"],
      category: "AI & UI/UX",
      year: "2025",
      liveUrl: "https://ironman-interactive.vercel.app/",
      githubUrl: "https://github.com/nhimdara/IronMan-Cinematic",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "amber",
    },
    {
      id: 9,
      title: "Multi-Vendor E-Commerce Platform",
      image: Ecommerce,
      description:
        "Modern multi-category online store with live shopping cart management, product filtering by price and rating, discount vouchers, and responsive checkout flows.",
      highlights: [
        "Complex cart state management and instant quantity adjustments",
        "Faceted category and price range filtering system",
        "Clean responsive product gallery with modal previews",
      ],
      tech: ["React.js", "Redux", "Tailwind CSS", "Vite"],
      category: "Frontend",
      year: "2025",
      liveUrl: "https://ecommerce-store-preview.vercel.app/",
      githubUrl: "https://github.com/nhimdara/ecommerce-store",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "blue",
    },
    {
      id: 10,
      title: "Campus Student Management Portal",
      image: CampusStudentManagement,
      description:
        "Educational administrative portal managing student enrollments, academic grades, attendance tracking, and printable transcript reports.",
      highlights: [
        "CRUD operations for student records and course registrations",
        "Role-based teacher and administrator authorization levels",
        "Exportable PDF report cards and attendance analytics",
      ],
      tech: ["PHP 8", "MySQL", "Bootstrap 5", "Chart.js"],
      category: "Full Stack",
      year: "2024",
      githubUrl: "https://github.com/nhimdara/student-management-system",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "purple",
    },
    {
      id: 11,
      title: "Minimal Glass Portfolio v1",
      image: Portfolio,
      description:
        "First iteration portfolio website experimenting with glassmorphism, responsive navigation grids, and smooth scroll interactions.",
      highlights: [
        "Lightweight component architecture with modern styling",
        "Interactive project filter and smooth section anchors",
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      category: "AI & UI/UX",
      year: "2025",
      liveUrl: "https://nhimdara-portfolio-v1.vercel.app/",
      githubUrl: "https://github.com/nhimdara/portfolio-v1",
      githubLabel: "GitHub Repo",
      featured: false,
      glow: "cyan",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI & UI/UX"];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeFilter === "All" || p.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/3 -left-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(59,130,246,0.15)] font-mono">
            <Layers size={14} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Engineered Projects &amp;{" "}
            <span className="refero-text-accent">Systems</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            A curated showcase of full-stack platforms, Telegram mini-apps, REST APIs, and responsive web applications.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl refero-card border border-white/10 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tech..."
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 pl-9 pr-8 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <LiquidCard
              key={project.id}
              glowColor={project.glow || "cyan"}
              className="p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                {/* Clean Header Badges Above Image */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-lg bg-cyan-500/15 border border-cyan-400/30 px-2.5 py-1 text-[11px] font-bold font-mono uppercase tracking-wider text-cyan-300">
                    {project.category}
                  </span>
                  <span className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-slate-300">
                    {project.year}
                  </span>
                </div>

                {/* Thumbnail Preview with Aspect Ratio & Action overlay */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950/20 border border-white/10 group/img cursor-pointer shadow-md mb-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />

                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="rounded-xl bg-cyan-500 text-slate-950 px-3.5 py-2 text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                      <Maximize2 size={14} />
                      <span>Inspect Project</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 px-3 py-1.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/25 transition-all shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title={project.githubLabel || "GitHub Repo"}
                    >
                      <Github size={13} />
                      <span className="hidden sm:inline text-[11px]">
                        {project.backendGithubUrl ? "Frontend" : "Code"}
                      </span>
                    </a>
                  )}

                  {project.backendGithubUrl && (
                    <a
                      href={project.backendGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title={project.backendGithubLabel || "Backend Repo"}
                    >
                      <Server size={13} className="text-purple-400" />
                      <span className="hidden sm:inline text-[11px]">Backend</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-slate-400 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </LiquidCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-400 text-sm">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Project Deep Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl refero-card-elevated p-6 sm:p-8 shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer z-10"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-lg bg-cyan-500/15 border border-cyan-400/30 px-2.5 py-0.5 text-xs font-mono font-bold text-cyan-300">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Released {selectedProject.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedProject.title}
              </h3>
            </div>

            {/* Image Preview */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-950 border border-white/10 mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Project Overview &amp; Architecture
              </h4>
              <p className="text-sm leading-relaxed text-slate-200">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              {selectedProject.highlights && (
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Features &amp; Engineering Highlights:
                  </h5>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tech Stack Matrix */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="refero-btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Platform</span>
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="refero-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white"
                >
                  <Github size={14} />
                  <span>{selectedProject.githubLabel || "View Frontend Source"}</span>
                </a>
              )}

              {selectedProject.backendGithubUrl && (
                <a
                  href={selectedProject.backendGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="refero-btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-purple-300 hover:text-purple-200"
                >
                  <Server size={14} />
                  <span>{selectedProject.backendGithubLabel || "View Backend Source"}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
