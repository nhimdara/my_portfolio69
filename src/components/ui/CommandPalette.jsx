import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ArrowRight,
  Download,
  Copy,
  FolderGit2,
  Send,
  Sparkles,
  Layers,
  GraduationCap,
  Award,
  Terminal,
  X,
  Code2,
} from "lucide-react";

function applyTheme(next) {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // ignore
    }
  }
}

function applyMotion(next) {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.motion = next;
    try {
      localStorage.setItem("portfolio-motion", next);
    } catch {
      // ignore
    }
  }
}

export const CommandPalette = ({
  isOpen,
  onClose,
  onCopyEmail,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const cvUrl = `${import.meta.env.BASE_URL}cv/CV-Nhim-Dara.pdf`;

  const handleClose = () => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  };

  const handleToggleTheme = () => {
    const current = document.documentElement.dataset.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    if (onCopyEmail) onCopyEmail(`Switched to ${next} mode`);
    handleClose();
  };

  const handleToggleMotion = () => {
    const current = document.documentElement.dataset.motion || "reduced";
    const next = current === "reduced" ? "full" : "reduced";
    applyMotion(next);
    if (onCopyEmail) onCopyEmail(`Motion set to ${next}`);
    handleClose();
  };

  const commands = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home / Overview",
      category: "Navigation",
      icon: <Terminal size={16} className="text-cyan-400" />,
      action: () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    {
      id: "nav-about",
      title: "Go to About Me & DNA",
      category: "Navigation",
      icon: <Sparkles size={16} className="text-purple-400" />,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    {
      id: "nav-experience",
      title: "Go to Experience & Education",
      category: "Navigation",
      icon: <GraduationCap size={16} className="text-emerald-400" />,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: <Layers size={16} className="text-blue-400" />,
      action: () => {
        document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    {
      id: "nav-certificates",
      title: "Go to Verified Certificates",
      category: "Navigation",
      icon: <Award size={16} className="text-amber-400" />,
      action: () => {
        document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    {
      id: "nav-skills",
      title: "Go to Technical Skills",
      category: "Navigation",
      icon: <Code2 size={16} className="text-pink-400" />,
      action: () => {
        document.getElementById("skill")?.scrollIntoView({ behavior: "smooth" });
        handleClose();
      },
    },
    // Quick Actions
    {
      id: "act-toggle-theme",
      title: "Toggle Light / Dark Mode",
      category: "Quick Actions",
      icon: <Sparkles size={16} className="text-amber-300" />,
      action: handleToggleTheme,
    },
    {
      id: "act-toggle-motion",
      title: "Toggle Reduce Animation / Motion",
      category: "Quick Actions",
      icon: <Sparkles size={16} className="text-cyan-300" />,
      action: handleToggleMotion,
    },
    {
      id: "act-copy-email",
      title: "Copy Email to Clipboard",
      category: "Quick Actions",
      icon: <Copy size={16} className="text-cyan-300" />,
      action: () => {
        if (onCopyEmail) onCopyEmail("Email address copied to clipboard!");
        handleClose();
      },
    },
    {
      id: "act-download-cv",
      title: "Download Resume / CV (PDF)",
      category: "Quick Actions",
      icon: <Download size={16} className="text-emerald-300" />,
      action: () => {
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "CV-Nhim-Dara.pdf";
        link.click();
        handleClose();
      },
    },
    {
      id: "act-telegram",
      title: "Chat with Dara on Telegram",
      category: "Social & Contact",
      icon: <Send size={16} className="text-sky-400" />,
      action: () => {
        window.open("https://t.me/dara_nhim", "_blank");
        handleClose();
      },
    },
    {
      id: "act-github",
      title: "Explore GitHub Profile",
      category: "Social & Contact",
      icon: <FolderGit2 size={16} className="text-slate-300" />,
      action: () => {
        window.open("https://github.com/nhimdara", "_blank");
        handleClose();
      },
    },
  ];

  const filteredCommands = query.trim() === ""
    ? commands
    : commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(query.toLowerCase()) ||
          cmd.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredCommands.length - 1 : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Command Palette Card */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl animate-in zoom-in-95 duration-200">
        {/* Search Header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
          <Search size={18} className="text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, section, or action..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-200"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                    isSelected
                      ? "bg-cyan-500/15 text-cyan-200 border border-cyan-400/30"
                      : "text-slate-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 border border-white/10">
                      {cmd.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-200">
                        {cmd.title}
                      </p>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={14}
                    className={`transition-transform ${
                      isSelected ? "translate-x-0 opacity-100 text-cyan-400" : "-translate-x-2 opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/60 px-4 py-2.5 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">↑↓</kbd> to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span className="text-cyan-400 font-semibold flex items-center gap-1">
            <Sparkles size={12} /> Refero FastNav
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
