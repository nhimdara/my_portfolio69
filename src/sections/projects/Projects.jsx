import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Layers,
  Search,
  X,
  Server,
  Maximize2,
  CheckCircle2,
  Smartphone,
  Sparkles,
  LayoutGrid,
  Lock,
} from "lucide-react";
import LiquidCard from "../../components/ui/LiquidCard";

// All 13 Project Asset Imports
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
import roomfinder from "../../assets/images/roomfinder.webp";
import CambodianSMEPOS from "../../assets/images/CambodianSMEPOS.webp";

export const Projects = () => {
  const [viewMode, setViewMode] = useState("grid"); // default to modern grid matrix
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI & UI/UX"];

  const projects = [
    {
      id: 1,
      title: "LearnFlow E-Learning Platform",
      image: Elearing,
      slug: "learnflow.edu.kh",
      tagline: "Enterprise University Learning Management System",
      description:
        "A comprehensive full-stack e-learning management platform for university courses featuring role-based dashboards, interactive quizzes, and course material workflows.",
      highlights: [
        "Role-based access control (Student, Teacher, Admin)",
        "Interactive quiz engines and course submission workflows",
        "JWT-secured REST API backend with MySQL relational database",
      ],
      tech: ["React 19", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://frontend-project-practicum-e-learni.vercel.app/",
      backendUrl: "https://backend-project-practicum-elearning.onrender.com/api",
      githubUrl: "https://github.com/nhimdara/Frontend-Project-Practicum-ELearning",
      githubLabel: "Frontend",
      backendGithubUrl: "https://github.com/nhimdara/Backend-Project-Practicum-ELearning",
      backendGithubLabel: "Backend",
      featured: true,
      glow: "cyan",
    },
    {
      id: 2,
      title: "Telegram Shop Mini App",
      image: TelegramShop,
      slug: "t.me/my_shop67_bot",
      tagline: "Next-Gen Telegram WebApp with KHQR Checkout",
      description:
        "A full-stack Telegram Mini App storefront featuring instant Telegram OAuth verification, product catalogs, cart state, and live KHQR payments.",
      highlights: [
        "Native Telegram WebApp integration & OAuth authentication",
        "Bakong KHQR and ABA PayWay payment gateway integrations",
        "Laravel 12 REST API backend with PostgreSQL database",
      ],
      tech: ["React 19", "Telegram SDK", "Laravel 12", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      year: "2026",
      isMobile: true,
      liveUrl: "https://t.me/my_shop67_bot/shop_nw",
      githubUrl: "https://github.com/nhimdara/bot-telegram-test-website",
      githubLabel: "Frontend",
      backendGithubUrl: "https://github.com/nhimdara/bot-telegram-test-website-backend",
      backendGithubLabel: "Backend",
      featured: true,
      glow: "purple",
    },
    {
      id: 3,
      title: "Cambodian SME Inventory & POS",
      image: CambodianSMEPOS,
      slug: "cambodian-pos.kh",
      tagline: "Dual-Currency Micro-Retail POS & Inventory Engine",
      description:
        "Micro-business Point of Sale & inventory system with real-time USD/KHR dual currency exchange, Bakong KHQR 2.0 payment generator, and thermal receipt printing.",
      highlights: [
        "Real-time USD & KHR dual-currency pricing engine with automated exchange rate conversion",
        "National Bakong KHQR 2.0 dynamic QR payment generator with audio confirmation triggers",
        "Intelligent low-stock buffer alerts, barcode/SKU scanner search, and thermal receipt printing",
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Bakong KHQR", "Express"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://cambodian-sme-inventory-pos.vercel.app/",
      githubUrl: "https://github.com/nhimdara/Cambodian-SME-Inventory-POS",
      githubLabel: "GitHub",
      featured: true,
      glow: "emerald",
    },
    {
      id: 4,
      title: "Culinary Admin POS & Inventory",
      image: CulinaryAdminPOS,
      slug: "mpos-kitchen.rupp.edu",
      tagline: "Restaurant Table & Kitchen Management Suite",
      description:
        "Full-stack restaurant management portal with real-time analytics dashboards for kitchen orders, table reservations, and cashier billing.",
      highlights: [
        "Live POS cashier checkout and kitchen order routing",
        "Table reservation management & real-time inventory alerts",
        "Comprehensive visual sales reporting with Chart.js",
      ],
      tech: ["React.js", "REST API", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://mpos-seven.vercel.app/",
      backendUrl: "https://g2-sun-11-mpos-back-gjyx.onrender.com/",
      githubUrl: "https://github.com/NalenSrin123/G2_SUN_11_MPOS",
      githubLabel: "GitHub",
      featured: true,
      glow: "amber",
    },
    {
      id: 5,
      title: "StayEasy Hotel Booking Platform",
      image: StayEasyHotel,
      slug: "stayeasy-hotel.com",
      tagline: "Full-Stack Hospitality & Room Reservation Engine",
      description:
        "Full-stack hospitality booking system featuring real-time room availability search, destination filters, wishlists, and manager panels.",
      highlights: [
        "Instant room search with dates, capacity, and price filters",
        "Laravel Sanctum session-based authentication & permissions",
        "Admin control panel for room inventory and customer records",
      ],
      tech: ["Vue 3", "Laravel 10", "Sanctum", "Tailwind CSS", "MySQL"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://frontend-hotel-booking-ten.vercel.app/",
      backendUrl: "https://backend-hotel-booking-5.onrender.com/api",
      githubUrl: "https://github.com/nhimdara/Frontend_Hotel_Booking",
      githubLabel: "Frontend",
      backendGithubUrl: "https://github.com/nhimdara/backend-hotel-booking",
      backendGithubLabel: "Backend",
      featured: false,
      glow: "emerald",
    },
    {
      id: 6,
      title: "AI Chatbot Intelligent Assistant",
      image: Aichatbot,
      slug: "t.me/DaraAIChatBot",
      tagline: "Gemini-Powered Multi-Turn Conversational AI",
      description:
        "Conversational assistant powered by Gemini API, featuring multi-turn memory, code syntax highlighting, prompt templates, and streaming.",
      highlights: [
        "Google Gemini API integration with context retention",
        "Live markdown & syntax-highlighted code generation",
        "Prompt library for engineering, summarization, and writing",
      ],
      tech: ["React.js", "Node.js", "Gemini API", "Tailwind CSS", "Express"],
      category: "AI & UI/UX",
      year: "2026",
      isMobile: false,
      liveUrl: "https://t.me/DaraAIChatBot",
      githubUrl: "https://github.com/nhimdara/Ai-chatbot-frontend",
      githubLabel: "GitHub",
      featured: false,
      glow: "cyan",
    },
    {
      id: 7,
      title: "CineVault Movie Discovery Platform",
      image: CineVault,
      slug: "cinevault.stream.app",
      tagline: "Cinematic Media Streaming & Exploration Portal",
      description:
        "Cinematic movie discovery web app with real-time TMDB search, multi-genre filtering, watchlist persistence, trailer modals, and responsive layout.",
      highlights: [
        "TMDB live REST API integration with infinite scroll & search",
        "Interactive YouTube trailer modal and movie cast gallery",
        "Custom watchlists stored in local browser state",
      ],
      tech: ["React 19", "TMDB API", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      year: "2026",
      isMobile: false,
      liveUrl: "https://movie-website-wct.vercel.app/",
      githubUrl: "https://github.com/nhimdara/Movie-Website-WCT",
      githubLabel: "GitHub",
      featured: false,
      glow: "rose",
    },
    {
      id: 8,
      title: "WOOD'S Cambodia Android App",
      image: WoodsAndroid,
      slug: "woods-cambodia.apk",
      tagline: "Native Luxury Furniture Android Catalog",
      description:
        "Native Android mobile product catalog application featuring luxury product collections, responsive navigation, and direct social order routing.",
      highlights: [
        "Native Android APK application with responsive mobile layouts",
        "Product catalog with high-resolution image preview & specifications",
        "Direct Telegram / Facebook order dispatch and company information",
      ],
      tech: ["Android Studio", "React 18", "Capacitor", "Tailwind CSS"],
      category: "Mobile",
      year: "2026",
      isMobile: true,
      apkUrl: `${import.meta.env.BASE_URL}downloads/woods-cambodia.apk`,
      githubUrl: "https://github.com/nhimdara/Wood-s",
      githubLabel: "Android",
      featured: false,
      glow: "emerald",
    },
    {
      id: 9,
      title: "Iron Man Cinematic Portfolio",
      image: IronManPortfolio,
      slug: "stark-hud.dara.dev",
      tagline: "Superhero Interactive HUD Developer Showcase",
      description:
        "A superhero-themed developer showcase with immersive inertial scrolling, HUD liquid glass overlays, responsive credentials, and micro-interactions.",
      highlights: [
        "Custom CSS keyframe choreography and sound triggers",
        "Interactive Mark suit archive and technical HUD overlays",
        "Cinematic dark mode with neon arc-reactor accents",
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      category: "AI & UI/UX",
      year: "2026",
      isMobile: false,
      liveUrl: "https://daranhimportfolio.vercel.app/",
      githubUrl: "https://github.com/nhimdara/IRON-MAN",
      githubLabel: "GitHub",
      featured: false,
      glow: "amber",
    },
    {
      id: 10,
      title: "Tech Haven Computer Shop",
      image: Ecommerce,
      slug: "techhaven-hardware.com",
      tagline: "Hardware Ecommerce with Dynamic Cart Pipeline",
      description:
        "Feature-rich computer hardware ecommerce store featuring category navigation, live cart calculations, product drawers, and responsive design.",
      highlights: [
        "Complex cart state management and instant quantity adjustments",
        "Faceted category and price range filtering system",
        "Clean responsive product gallery with modal previews",
      ],
      tech: ["React.js", "Tailwind CSS", "Bootstrap", "Vite"],
      category: "Frontend",
      year: "2025",
      isMobile: false,
      liveUrl: "https://computer-shop-murex.vercel.app/",
      githubUrl: "https://github.com/nhimdara/ComputerShop",
      githubLabel: "GitHub",
      featured: false,
      glow: "blue",
    },
    {
      id: 11,
      title: "Campus Student Management Portal",
      image: CampusStudentManagement,
      slug: "student-portal.rupp.edu",
      tagline: "FastAPI RESTful Student Information System",
      description:
        "FastAPI student management system with role-based JWT auth, student & course CRUD, enrollment workflows, and interactive Swagger documentation.",
      highlights: [
        "Full student & course CRUD with role-based JWT authentication",
        "Enrollment workflows and automatic GPA calculation engine",
        "Interactive Swagger UI API documentation and testing portal",
      ],
      tech: ["FastAPI", "Python", "SQLAlchemy", "SQLite", "Swagger"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://student-management-system-kjf6.onrender.com/",
      backendUrl: "https://student-management-system-kjf6.onrender.com/docs",
      githubUrl: "https://github.com/nhimdara/Final-Project-DSA-RUPP-ITE-Management-",
      githubLabel: "GitHub",
      featured: false,
      glow: "blue",
    },
    {
      id: 12,
      title: "Liquid Glass Portfolio V1",
      image: Portfolio,
      slug: "portfolio-v1.dara.dev",
      tagline: "Command Palette & Glassmorphic Personal Site",
      description:
        "Personal developer portfolio built with modern responsive architecture, interactive Command Palette (⌘K), and tactile glass card design systems.",
      highlights: [
        "Fast interactive Command Palette (⌘K) keyboard search",
        "Deep inspection project drawers and verified certificate lightboxes",
      ],
      tech: ["React 19", "Tailwind CSS", "Vite", "Framer Motion"],
      category: "AI & UI/UX",
      year: "2026",
      isMobile: false,
      liveUrl: "https://my-portfolio69.vercel.app/",
      githubUrl: "https://github.com/nhimdara/my_portfolio69",
      githubLabel: "GitHub",
      featured: false,
      glow: "cyan",
    },
    {
      id: 13,
      title: "RoomFinder - Student Housing Platform",
      image: roomfinder,
      slug: "roomfinder-kh.vercel.app",
      tagline: "Cross-Platform Real Estate & Room Booking Engine",
      description:
        "A student housing platform to explore verified, affordable student rooms near campuses with zero booking fees and direct landlord contact.",
      highlights: [
        "Verified student housing listings with direct landlord contact",
        "Multi-platform architecture with React web client & Expo mobile app",
        "Laravel REST API backend hosted on Render with PostgreSQL database",
      ],
      tech: ["React.js", "Laravel", "React Native", "PostgreSQL"],
      category: "Full Stack",
      year: "2026",
      isMobile: false,
      liveUrl: "https://room-finder-frontend-cyan.vercel.app/",
      backendUrl: "https://roomfinder-backend-ezp3.onrender.com/",
      mobileUrl:
        "https://expo.dev/accounts/nhimdara/projects/roomfinder-mobile/builds/b514a4fe-dd07-4fdc-8c34-a8b8dbb38110",
      githubUrl: "https://github.com/nhimdara",
      githubLabel: "Frontend",
      featured: false,
      glow: "cyan",
    },
  ];

  // Calculate category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = projects.length;
    } else if (cat === "Mobile") {
      acc[cat] = projects.filter(
        (p) => p.isMobile || p.mobileUrl || p.apkUrl || p.tech?.includes("React Native")
      ).length;
    } else {
      acc[cat] = projects.filter(
        (p) => p.category === cat || p.category?.toLowerCase().includes(cat.toLowerCase())
      ).length;
    }
    return acc;
  }, {});

  // Filter projects by category and search
  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeFilter === "All" ||
      p.category === activeFilter ||
      p.category?.toLowerCase().includes(activeFilter.toLowerCase()) ||
      (activeFilter === "Mobile" &&
        (p.isMobile || p.mobileUrl || p.apkUrl || p.tech?.includes("React Native")));

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.tech.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const featuredList = projects.filter((p) => p.featured);

  return (
    <div className="relative pt-32 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-8">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono mb-3">
              <Layers size={13} />
              <span>03 // PORTFOLIO REPERTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Engineering Projects
              </span>
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              13 production web applications, Telegram Mini Apps, and cloud-connected systems built with modern full-stack architectures.
            </p>
          </div>

          {/* View Mode Switcher: Showcase vs Grid Matrix */}
          <div className="refero-card flex items-center gap-1.5 p-1.5 rounded-2xl self-start md:self-auto shadow-xl">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "refero-pill-active shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={14} />
              <span>All 13 Projects</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === "showcase"
                  ? "refero-pill-active shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles size={14} />
              <span>Flagship Showcase</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            UNIFIED MODERN COMMAND & FILTER TOOLBAR
           ========================================================================= */}
        <div className="refero-card mb-10 p-3 sm:p-4 rounded-2xl backdrop-blur-2xl shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/70"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 13 projects by title, tech (e.g. Laravel, React, KHQR)..."
              className="refero-pill w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Tabs with Count Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "refero-pill-active shadow-md"
                      : "refero-pill text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-200"
                        : "bg-white/[0.06] text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status Indicator Beacon */}
          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10 text-[11px] font-mono text-slate-400 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Showing {filteredProjects.length} of 13 Projects</span>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: FULL 13-PROJECT MODERN GRID MATRIX (Default View)
           ========================================================================= */}
        {viewMode === "grid" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {filteredProjects.map((project) => (
                <LiquidCard
                  key={project.id}
                  glowColor={project.glow}
                  className="p-5 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border border-white/[0.08] hover:border-white/20 rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 shadow-xl"
                  contentClassName="flex flex-col h-full justify-between"
                >
                  <div className="flex flex-col flex-1">
                    {/* Simulated Browser Chrome & Visual Stage */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-slate-950 mb-4 shadow-2xl group/canvas transition-all"
                    >
                      {/* Browser Window Header Chrome */}
                      <div className="flex items-center justify-between px-3 py-2 bg-slate-950/95 border-b border-white/[0.08]">
                        {/* 3 Apple Traffic Lights */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                        </div>

                        {/* URL Capsule Bar */}
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-slate-300 max-w-[150px] truncate shadow-inner">
                          <Lock size={9} className="text-emerald-400 shrink-0" />
                          <span className="truncate">{project.slug}</span>
                        </div>

                        {/* Year / Status Badge */}
                        <span className="text-[10px] font-mono text-cyan-300 font-semibold">
                          {project.year}
                        </span>
                      </div>

                      {/* Display Viewport */}
                      {project.isMobile ? (
                        /* Mobile Mockup Stage (Telegram Shop & Woods Android) */
                        <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-purple-950/40 via-slate-950 to-slate-950 flex items-center justify-center p-2.5 overflow-hidden">
                          {/* Ambient radial glow */}
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />

                          {/* Smartphone Device Frame - Properly Sized & Formatted */}
                          <div className="relative h-[92%] max-h-[175px] aspect-[9/16] rounded-[18px] p-1 bg-gradient-to-b from-white/25 via-white/10 to-white/5 border border-white/20 shadow-2xl flex flex-col justify-center bg-slate-950">
                            {/* Dynamic Island Speaker Slit */}
                            <div className="w-7 h-1 bg-white/30 rounded-full mx-auto mb-1 shrink-0" />
                            <div className="rounded-[14px] overflow-hidden flex-1 bg-slate-950">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/canvas:scale-105"
                                loading="lazy"
                              />
                            </div>
                          </div>

                          {/* Floating Platform Tag */}
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/15 text-[9px] font-mono text-purple-300 flex items-center gap-1 font-semibold shadow-md">
                            <Smartphone size={10} className="text-purple-400" />
                            <span>Mini App</span>
                          </div>
                        </div>
                      ) : (
                        /* Web Platform Viewport */
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/canvas:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover/canvas:opacity-30 transition-opacity" />

                          {/* Floating Category Badge */}
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 font-semibold shadow-md">
                            {project.category}
                          </div>
                        </div>
                      )}

                      {/* Clean Bottom Hover Inspect Bar Overlay (No Middle Clutter!) */}
                      <div className="absolute inset-x-0 bottom-0 pt-8 pb-3 px-3 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent opacity-0 group-hover/canvas:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                        <span className="rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-3.5 py-1.5 text-xs font-extrabold shadow-2xl flex items-center gap-1.5 transform translate-y-2 group-hover/canvas:translate-y-0 transition-transform">
                          <Maximize2 size={13} /> Deep Dive Case Study
                        </span>
                      </div>
                    </div>

                    {/* Eyebrow & Category Track */}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {project.category}
                      </span>
                      <span className="text-slate-400 text-[10px]">
                        Release {project.year}
                      </span>
                    </div>

                    {/* Title & Arrow */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug mb-1 cursor-pointer flex items-start justify-between gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                      />
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-slate-300/80 mb-2 line-clamp-1">
                      {project.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 shadow-sm transition-all group/btn"
                          title="Launch live platform"
                        >
                          <span>Live</span>
                          <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {project.apkUrl && (
                        <a
                          href={project.apkUrl}
                          download="woods-cambodia.apk"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-400/40 hover:bg-emerald-500/30 transition-all shadow-sm"
                          title="Download Android APK"
                        >
                          <Download size={12} />
                          <span>APK</span>
                        </a>
                      )}

                      {project.mobileUrl && (
                        <a
                          href={project.mobileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-300 bg-indigo-500/20 border border-indigo-400/40 hover:bg-indigo-500/30 transition-all shadow-sm"
                          title="Launch Expo Mobile"
                        >
                          <Smartphone size={12} />
                          <span>Expo</span>
                        </a>
                      )}

                      {/* GitHub Source Code */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all shadow-sm"
                          title={project.githubLabel || "Source Code"}
                        >
                          <Github size={13} />
                        </a>
                      )}

                      {/* Backend Repo if available */}
                      {project.backendGithubUrl && (
                        <a
                          href={project.backendGithubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/40 text-purple-300 hover:text-white transition-all shadow-sm"
                          title="Backend Repository"
                        >
                          <Server size={13} />
                        </a>
                      )}
                    </div>

                    {/* Case Study Details Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-cyan-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-all cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </LiquidCard>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="py-20 text-center rounded-2xl bg-white/[0.02] border border-white/10">
                <p className="text-slate-400 text-sm mb-3">
                  No projects found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilter("All");
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            VIEW 2: LUXURY ALTERNATING ASYMMETRIC SHOWCASE (Flagship Showcase)
           ========================================================================= */}
        {viewMode === "showcase" && (
          <div className="space-y-12 sm:space-y-16">
            {featuredList.map((project, index) => {
              const isEven = index % 2 === 1;

              return (
                <LiquidCard
                  key={project.id}
                  glowColor={project.glow}
                  className="p-6 sm:p-8 lg:p-10 transition-all duration-300 group"
                >
                  <div
                    className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Mockup Column */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group-hover:border-cyan-400/40 transition-all duration-500 group/canvas">
                        {/* Browser Window Header Chrome */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono text-slate-300">
                            <Lock size={9} className="text-emerald-400 shrink-0" />
                            <span>{project.slug}</span>
                          </div>
                          <span className="text-[10px] font-mono text-cyan-300 font-bold">
                            {project.year}
                          </span>
                        </div>

                        {/* Image Canvas */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className={`relative cursor-pointer overflow-hidden ${
                            project.isMobile
                              ? "aspect-[16/10] bg-gradient-to-b from-purple-950/40 via-slate-950 to-slate-950 flex items-center justify-center p-4"
                              : "aspect-[16/10]"
                          }`}
                        >
                          {project.isMobile ? (
                            /* Smartphone Device Frame */
                            <div className="relative h-[90%] max-h-[220px] aspect-[9/16] rounded-[22px] p-1.5 bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/20 shadow-2xl flex flex-col justify-center bg-slate-950">
                              <div className="w-9 h-1 bg-white/30 rounded-full mx-auto mb-1.5 shrink-0" />
                              <div className="rounded-[16px] overflow-hidden flex-1 bg-slate-950">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/canvas:scale-105"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/canvas:scale-105"
                              loading="lazy"
                            />
                          )}

                          {/* Subtle Glass Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/canvas:opacity-40 transition-opacity" />

                          {/* Floating Category Pill */}
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300 font-semibold shadow-sm">
                            {project.category}
                          </div>

                          {/* Clean Bottom Hover Inspect Bar Overlay */}
                          <div className="absolute inset-x-0 bottom-0 pt-10 pb-4 px-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent opacity-0 group-hover/canvas:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                            <span className="rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-4 py-2 text-xs font-extrabold shadow-2xl flex items-center gap-1.5 transform translate-y-2 group-hover/canvas:translate-y-0 transition-transform">
                              <Maximize2 size={14} /> Deep Dive Case Study
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Column */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-between space-y-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                            FLAGSHIP BUILD // 0{project.id}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs font-mono text-slate-400 mt-1">
                          {project.tagline}
                        </p>

                        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Engineering Highlights */}
                        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-cyan-400 shrink-0 mt-0.5">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links & CTA Bar */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                          >
                            <span>Live Platform</span>
                            <ExternalLink size={14} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-cyan-300 border border-white/10 bg-white/[0.03] transition-colors cursor-pointer ml-auto"
                        >
                          Details ↗
                        </button>
                      </div>
                    </div>
                  </div>
                </LiquidCard>
              );
            })}

            {/* Quick Switch CTA to All Projects */}
            <div className="text-center pt-8">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-sm font-bold text-white shadow-xl transition-all cursor-pointer group"
              >
                <span>Browse All 13 Projects in Grid Matrix</span>
                <ArrowUpRight size={16} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl refero-card-elevated p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-white/20 z-10">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer z-10 border border-white/10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mb-4 pr-10">
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

            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-950 border border-white/15 mb-6 shadow-inner flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={`transition-transform duration-500 ${
                  selectedProject.isMobile
                    ? "h-full w-auto max-h-[300px] object-contain rounded-lg p-2"
                    : "h-full w-full object-cover object-top"
                }`}
              />
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Project Overview &amp; Architecture
              </h4>
              <p className="text-sm leading-relaxed text-slate-200">
                {selectedProject.description}
              </p>

              {selectedProject.highlights && (
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Features &amp; Engineering Highlights:
                  </h5>
                  {selectedProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-emerald-400 shrink-0 mt-0.5"
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {(selectedProject.tech || []).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg px-3 py-1 text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Platform</span>
                </a>
              )}

              {selectedProject.apkUrl && (
                <a
                  href={selectedProject.apkUrl}
                  download="woods-cambodia.apk"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg"
                >
                  <Download size={14} />
                  <span>Download Android APK</span>
                </a>
              )}

              {selectedProject.mobileUrl && (
                <a
                  href={selectedProject.mobileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-indigo-300 hover:text-indigo-200 border border-indigo-400/30 bg-indigo-500/10"
                >
                  <Smartphone size={14} />
                  <span>Launch Expo Mobile</span>
                </a>
              )}

              {selectedProject.backendUrl && (
                <a
                  href={selectedProject.backendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-amber-300 hover:text-amber-200 border border-amber-400/30 bg-amber-500/10"
                >
                  <Server size={14} />
                  <span>API Docs / Swagger</span>
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15"
                >
                  <Github size={14} />
                  <span>{selectedProject.githubLabel || "View Source"}</span>
                </a>
              )}

              {selectedProject.backendGithubUrl && (
                <a
                  href={selectedProject.backendGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold text-purple-300 hover:text-purple-200 border border-purple-400/30 bg-purple-500/10"
                >
                  <Server size={14} />
                  <span>{selectedProject.backendGithubLabel || "Backend Source"}</span>
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