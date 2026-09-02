import React, { useState } from "react";
import {
  Folder,
  FileText,
  Search,
  Pin,
  Trash2,
  Share2,
  Plus,
  Calendar,
  Sparkles,
  Download,
  CheckCircle2,
  Cpu,
  MapPin,
  SquarePen,
  ChevronRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Layers,
  Code,
  Award,
} from "lucide-react";
import { developerInfo, education, experience } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";

const NOTES_DATA = [
  {
    id: "bio",
    folder: "General",
    title: "👋 About Antigravity & Nhim Dara",
    date: "Today, 9:41 AM",
    group: "Today",
    pinned: true,
    preview: "Full-Stack Software Engineer & UI/UX Craftsman based in Phnom Penh...",
    content: (
      <div className="space-y-6 w-full max-w-full">
        {/* Header Profile Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <img
              src={developerInfo.avatar}
              alt={developerInfo.name}
              className="h-20 w-20 rounded-2xl object-cover border border-white/20 shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl font-bold text-white font-display">
                  {developerInfo.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-semibold border border-blue-500/30">
                  {developerInfo.alias}
                </span>
              </div>
              <p className="text-sm text-blue-300 font-medium mt-1">{developerInfo.title}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <MapPin size={13} className="text-red-400" />
                <span>{developerInfo.location}</span>
                <span>•</span>
                <span>{developerInfo.age} Years Old</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`mailto:${developerInfo.email}`}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors text-center shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bio & Philosophy */}
        <div className="space-y-4">
          <p className="text-sm font-medium text-slate-100 leading-relaxed bg-blue-500/10 p-4 rounded-2xl border border-blue-400/20">
            {developerInfo.bio}
          </p>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-blue-400">
              Engineering Summary
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              I specialize in architecting resilient digital applications from reactive, state-managed React and Next.js frontends to secure Laravel, Express, and FastAPI RESTful microservices. With a strong engineering background in relational database architecture, algorithms, and modular design patterns, I bring digital experiences to life.
            </p>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3 text-slate-400">
            Key Metrics &amp; Impact
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {developerInfo.stats.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center shadow-sm hover:border-blue-500/40 transition-colors"
              >
                <div className="text-2xl font-bold text-blue-400 font-mono">{st.value}</div>
                <div className="text-xs text-slate-300 font-medium mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dna",
    folder: "Engineering",
    title: "⚡ Engineering DNA & Architecture Philosophy",
    date: "Yesterday",
    group: "Previous 7 Days",
    pinned: true,
    preview: "Architectural principles, code quality, user empathy, and performance...",
    content: (
      <div className="space-y-6 w-full max-w-full">
        <div>
          <h2 className="text-xl font-bold text-white font-display">
            Engineering DNA &amp; Core Pillars
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Core principles guiding every production deployment and architectural design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/20 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-8 w-8 rounded-xl bg-blue-500/20 text-blue-400 grid place-items-center">
                <Cpu size={16} />
              </div>
              <h4 className="font-bold text-blue-300 text-sm">Full-Stack Cohesion</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep understanding across tiers — building responsive React components with optimized client state and integrating secure Laravel &amp; Node.js REST endpoints with transaction-safe schemas.
              </p>
            </div>
            <span className="text-[10px] font-mono text-blue-400/80">Tier 1 Engineering</span>
          </div>

          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-400/20 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-8 w-8 rounded-xl bg-purple-500/20 text-purple-400 grid place-items-center">
                <Sparkles size={16} />
              </div>
              <h4 className="font-bold text-purple-300 text-sm">High Craft UI / UX</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Meticulous care for typography, layout hierarchy, liquid glass styling, smooth spring physics, and zero layout shift across all viewports.
              </p>
            </div>
            <span className="text-[10px] font-mono text-purple-400/80">Pixel Perfection</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-500/20 text-emerald-400 grid place-items-center">
                <CheckCircle2 size={16} />
              </div>
              <h4 className="font-bold text-emerald-300 text-sm">Maintainability &amp; Scale</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Self-documenting code, enforcing modular component hierarchies, strict TypeScript typing, and structuring robust relational database schemas.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/80">Clean Architecture</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "education",
    folder: "Education",
    title: "🎓 Education & Academic Qualifications",
    date: "Aug 15",
    group: "Previous 30 Days",
    pinned: false,
    preview: "Bachelor of IT Engineering @ Royal University of Phnom Penh (RUPP)...",
    content: (
      <div className="space-y-6 w-full max-w-full">
        <div>
          <h2 className="text-xl font-bold text-white font-display">
            Academic Track &amp; Certified Programs
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Formal engineering foundations and certified coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-3 flex flex-col justify-between hover:border-blue-400/30 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                    {edu.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-semibold border border-blue-500/30">
                    {edu.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                <p className="text-xs text-slate-400 font-medium">{edu.institution}</p>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">{edu.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {edu.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/[0.08] text-[10px] font-mono text-cyan-200 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "experience",
    folder: "Experience",
    title: "💼 Practical Experience & Industry Roles",
    date: "Jul 30",
    group: "Previous 30 Days",
    pinned: false,
    preview: "Frontend Developer Trainee @ ETEC Center & KRU IT Solution...",
    content: (
      <div className="space-y-6 w-full max-w-full">
        <div>
          <h2 className="text-xl font-bold text-white font-display">
            Practical Experience &amp; Internships
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Real-world software development roles and team practicums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-3 flex flex-col justify-between hover:border-purple-400/30 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase">
                    {exp.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-semibold border border-purple-500/30">
                    {exp.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{exp.role}</h4>
                <p className="text-xs text-slate-400 font-medium">{exp.company}</p>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">{exp.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {exp.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/[0.08] text-[10px] font-mono text-purple-200 border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export const NotesApp = () => {
  const { showToast } = useMacOs();
  const [selectedNoteId, setSelectedNoteId] = useState(NOTES_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("All");

  const folders = [
    { id: "All", label: "All iCloud", icon: Folder },
    { id: "General", label: "Quick Notes", icon: BookOpen },
    { id: "Engineering", label: "Engineering", icon: Cpu },
    { id: "Education", label: "Education", icon: GraduationCap },
    { id: "Experience", label: "Experience", icon: Briefcase },
  ];

  const filteredNotes = NOTES_DATA.filter((n) => {
    const matchesFolder = selectedFolder === "All" || n.folder === selectedFolder;
    const matchesSearch =
      searchQuery.trim() === "" ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  const activeNote = NOTES_DATA.find((n) => n.id === selectedNoteId) || NOTES_DATA[0];

  return (
    <div className="flex h-full w-full flex-col bg-[#1e1e24] text-slate-100 select-none overflow-hidden font-sans">
      {/* macOS Notes Toolbar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-[#2a2a32]/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-2">
          {/* Create New Note Button */}
          <button
            onClick={() => showToast("Created new note")}
            className="p-1.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-amber-400 hover:text-amber-300 hover:bg-white/10 transition-colors"
            title="New Note"
          >
            <SquarePen size={14} />
          </button>
          {/* Delete Note */}
          <button
            onClick={() => showToast("Note is protected")}
            className="p-1.5 rounded-md bg-white/[0.08] border border-white/[0.1] text-slate-400 hover:text-red-400 hover:bg-white/10 transition-colors"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>

        {/* Search */}
        <div className="relative flex items-center">
          <Search size={12} className="absolute left-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all notes..."
            className="w-44 sm:w-64 rounded-md bg-white/[0.08] border border-white/[0.1] pl-7 pr-3 py-0.5 text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
        </div>

        {/* Share & Download CV */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              window.open(developerInfo.cvUrl, "_blank");
              showToast("Opening Resume PDF...");
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold border border-amber-500/40 transition-colors"
          >
            <Download size={12} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* 3-Column Body */}
      <div className="flex-1 flex min-h-0 w-full overflow-hidden divide-x divide-white/[0.08]">
        {/* Column 1: Folders Sidebar */}
        <aside className="w-48 shrink-0 border-r border-white/[0.08] bg-[#1a1a20]/80 backdrop-blur-2xl p-3 hidden md:flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 font-mono">
              iCloud Folders
            </span>
            <div className="space-y-1">
              {folders.map((f) => {
                const Icon = f.icon;
                const isActive = selectedFolder === f.id;

                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFolder(f.id)}
                    className={`flex w-full items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-amber-500/25 text-amber-300 font-semibold shadow-sm border border-amber-500/30"
                        : "text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-amber-400" : "text-amber-500/70"} />
                    <span>{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-2 text-[10px] text-slate-500 font-mono">
            {NOTES_DATA.length} Notes Saved
          </div>
        </aside>

        {/* Column 2: Notes List with Date Grouping */}
        <div className="w-64 sm:w-72 shrink-0 bg-[#16161c] flex flex-col overflow-y-auto divide-y divide-white/[0.05]">
          <div className="p-2 space-y-1">
            {filteredNotes.map((note) => {
              const isSelected = activeNote.id === note.id;
              return (
                <div
                  key={note.id}
                  onClick={() => setSelectedNoteId(note.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-amber-500/20 text-white border border-amber-400/40 shadow-sm"
                      : "hover:bg-white/[0.06] text-slate-300 border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold truncate leading-tight">{note.title}</h4>
                    {note.pinned && <Pin size={11} className="text-amber-400 shrink-0 fill-current" />}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                    <span className="font-mono text-amber-300/80 shrink-0">{note.date}</span>
                    <span className="truncate">{note.preview}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Column 3: Note Content Editor Pane (Full Width & Responsive Multi-Column) */}
        <div className="flex-1 w-full min-w-0 overflow-y-auto p-6 md:p-8 bg-[#141418]">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-6 pb-2 border-b border-white/[0.06]">
            <span>{activeNote.date}</span>
            <span className="text-amber-400 font-semibold">{activeNote.folder}</span>
          </div>

          {activeNote.content}
        </div>
      </div>
    </div>
  );
};
