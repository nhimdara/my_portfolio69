import React, { useState } from "react";
import {
  FolderKanban,
  Star,
  Search,
  Grid,
  List,
  Columns,
  LayoutGrid,
  ExternalLink,
  Github,
  Download,
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Smartphone,
  Server,
  Code,
  Globe,
  Tag,
  Share2,
  SlidersHorizontal,
  HardDrive,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import { projects } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";
import { MacFolderIcon, SafariIcon } from "../macos/MacIcons";

export const FinderApp = () => {
  const { openWindow, showToast } = useMacOs();

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list' | 'columns'
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const categories = [
    { id: "All", label: "All Projects", icon: FolderKanban, count: projects.length },
    { id: "Featured", label: "Starred / Featured", icon: Star, count: projects.filter((p) => p.featured).length },
    { id: "Full Stack", label: "Full-Stack", icon: Server, count: projects.filter((p) => p.category === "Full Stack").length },
    { id: "Frontend", label: "Frontend Apps", icon: Globe, count: projects.filter((p) => p.category === "Frontend").length },
    { id: "Mobile", label: "Mobile Apps", icon: Smartphone, count: projects.filter((p) => p.category === "Mobile" || p.apkUrl || p.mobileUrl).length },
    { id: "AI & UI/UX", label: "AI & UI/UX", icon: Sparkles, count: projects.filter((p) => p.category === "AI & UI/UX").length },
  ];

  const colorTags = [
    { name: "React 19", color: "bg-cyan-400" },
    { name: "Laravel", color: "bg-red-500" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Bakong KHQR", color: "bg-emerald-400" },
    { name: "Python", color: "bg-amber-400" },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "All"
        ? true
        : activeCategory === "Featured"
        ? p.featured
        : activeCategory === "Mobile"
        ? p.category === "Mobile" || p.apkUrl || p.mobileUrl
        : p.category === activeCategory;

    const matchesTag = selectedTag ? p.tech.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase())) : true;

    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="flex h-full w-full flex-col bg-[#1e1e24] text-slate-100 select-none overflow-hidden font-sans">
      {/* macOS Unified Toolbar */}
      <div className="flex items-center justify-between gap-2 px-3.5 py-2 border-b border-white/[0.08] bg-[#2a2a32]/80 backdrop-blur-xl">
        {/* Navigation & Directory Title */}
        <div className="flex items-center gap-3">
          {/* Segmented Back / Forward */}
          <div className="flex items-center rounded-md bg-white/[0.08] border border-white/[0.1] p-0.5 shadow-inner">
            <button
              onClick={() => showToast("Back")}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Back"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => showToast("Forward")}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Forward"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <span className="text-xs font-bold text-slate-200">
            {selectedTag ? `Tag: ${selectedTag}` : activeCategory}
          </span>
        </div>

        {/* View Mode Segmented Switcher & Tools */}
        <div className="flex items-center gap-2">
          {/* 4-Segment View Switcher */}
          <div className="flex items-center rounded-md bg-white/[0.08] border border-white/[0.1] p-0.5 shadow-inner">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-white/20 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
              title="As Icons"
            >
              <LayoutGrid size={13} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-white/20 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
              title="As List"
            >
              <List size={13} />
            </button>
            <button
              onClick={() => setViewMode("columns")}
              className={`p-1 rounded transition-colors ${
                viewMode === "columns"
                  ? "bg-white/20 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
              title="As Columns"
            >
              <Columns size={13} />
            </button>
          </div>

          {/* Group / Action */}
          <button
            onClick={() => showToast("Sorting by Project Year")}
            className="p-1.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Group by"
          >
            <SlidersHorizontal size={13} />
          </button>

          {/* Share */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              showToast("Portfolio link copied!");
            }}
            className="p-1.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Share"
          >
            <Share2 size={13} />
          </button>

          {/* Search Capsule */}
          <div className="relative flex items-center">
            <Search size={12} className="absolute left-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-32 sm:w-44 rounded-md bg-white/[0.08] border border-white/[0.1] pl-7 pr-3 py-0.5 text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 text-slate-400 hover:text-white"
              >
                <X size={11} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Split: Sidebar + Browser Body */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* macOS Sidebar */}
        <aside className="w-48 shrink-0 border-r border-white/[0.08] bg-[#1a1a20]/75 backdrop-blur-2xl p-2.5 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3.5">
            {/* Favorites Section */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 font-mono">
                Favorites
              </span>
              <div className="mt-1 space-y-0.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id && !selectedTag;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSelectedTag(null);
                      }}
                      className={`flex w-full items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white font-semibold shadow-sm"
                          : "text-slate-300 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon size={14} className={isActive ? "text-white" : "text-blue-400"} />
                        <span className="truncate">{cat.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tags Section */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 font-mono">
                Tags
              </span>
              <div className="mt-1 space-y-0.5">
                {colorTags.map((tag) => {
                  const isActive = selectedTag === tag.name;
                  return (
                    <button
                      key={tag.name}
                      onClick={() => setSelectedTag(isActive ? null : tag.name)}
                      className={`flex w-full items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white font-semibold shadow-sm"
                          : "text-slate-300 hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${tag.color} shrink-0 shadow-sm`} />
                      <span className="truncate">{tag.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Storage specs */}
          <div className="pt-3 border-t border-white/[0.08] text-[11px] text-slate-400 px-2">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <HardDrive size={13} className="text-cyan-400" />
              <span>Macintosh HD</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">42.8 GB free of 1 TB</p>
          </div>
        </aside>

        {/* Content Explorer Area */}
        <div className="flex-1 flex min-w-0 overflow-hidden divide-x divide-white/[0.08]">
          {/* Projects View */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#141418]">
            {filteredProjects.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                <Search size={32} className="text-slate-600 mb-2" />
                <p className="text-sm font-semibold text-slate-200">No matching projects found</p>
                <p className="text-xs text-slate-400 mt-1">Try another filter or search keyword.</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredProjects.map((project) => {
                  const isSelected = selectedProject?.id === project.id;
                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`group relative rounded-xl border p-3 cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "border-blue-500 bg-blue-500/15 shadow-xl ring-1 ring-blue-400/40"
                          : "border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/60 border border-white/[0.08] mb-2.5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {project.featured && (
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center gap-1 shadow-md">
                            <Star size={10} className="fill-current" />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>

                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {project.summary || project.description}
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[9px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="divide-y divide-white/[0.05]">
                {filteredProjects.map((project) => {
                  const isSelected = selectedProject?.id === project.id;
                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white font-medium shadow-sm"
                          : "hover:bg-white/[0.06] text-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-10 w-14 rounded object-cover shrink-0 border border-white/10"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold truncate">{project.title}</p>
                          <p className={`text-[10px] truncate ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                            {project.category} • {project.year}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.tech.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className="hidden sm:inline px-1.5 py-0.5 rounded bg-black/30 text-[10px] font-mono"
                          >
                            {t}
                          </span>
                        ))}
                        <ChevronRight size={14} className={isSelected ? "text-white" : "text-slate-500"} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Inspector Drawer */}
          {selectedProject && (
            <div className="hidden md:flex w-72 lg:w-80 shrink-0 flex-col justify-between bg-[#1a1a20]/90 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {selectedProject.category} • {selectedProject.year}
                    </span>
                    {selectedProject.featured && (
                      <span className="text-[10px] text-amber-400 font-semibold flex items-center gap-0.5">
                        <Star size={10} className="fill-current" /> Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mt-1">{selectedProject.title}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.highlights && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Highlights
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] leading-snug">
                          <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Technologies
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] text-[10px] font-mono text-cyan-200 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md active:scale-95"
                  >
                    <ExternalLink size={13} />
                    <span>Open Live Demo</span>
                  </a>
                )}

                <div className="flex gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-xs transition-colors border border-white/[0.08]"
                    >
                      <Github size={13} />
                      <span>{selectedProject.githubLabel || "GitHub"}</span>
                    </a>
                  )}

                  {selectedProject.backendGithubUrl && (
                    <a
                      href={selectedProject.backendGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-xs transition-colors border border-white/[0.08]"
                    >
                      <Server size={13} />
                      <span>Backend</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* macOS Path Bar & Status Bar (Bottom) */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#1a1a20] border-t border-white/[0.08] text-[11px] text-slate-400 font-sans">
        <div className="flex items-center gap-1.5 truncate">
          <HardDrive size={11} className="text-slate-500" />
          <span>Macintosh HD</span>
          <ChevronRight size={10} className="text-slate-600" />
          <span>Users</span>
          <ChevronRight size={10} className="text-slate-600" />
          <span>antigravity</span>
          <ChevronRight size={10} className="text-slate-600" />
          <span className="text-slate-200 font-semibold">{activeCategory}</span>
        </div>

        <span className="font-mono text-[10px] text-slate-500 shrink-0">
          {filteredProjects.length} items
        </span>
      </div>
    </div>
  );
};
