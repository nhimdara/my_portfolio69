import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { useMacOs } from "../../context/MacOsContext";
import { projects, developerInfo, certificates, education, experience } from "../../data/portfolioData";
import { useSoundEffects } from "../../hooks/useSoundEffects";

export const TerminalApp = () => {
  const { openWindow, closeWindow, setWallpaperId, showToast } = useMacOs();
  const { playTerminalKey, playAlert } = useSoundEffects();

  const [history, setHistory] = useState([
    {
      type: "banner",
      content: `Last login: ${new Date().toDateString()} on ttys001
Type 'help' to view available system commands or 'neofetch' for system specifications.`,
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    playTerminalKey();
    const parts = rawCmd.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Record command history for arrow navigation
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newHistoryEntry = {
      type: "command",
      prompt: `antigravity@dara-macbook ~ % ${rawCmd}`,
    };

    let output = null;

    switch (cmd) {
      case "help":
        output = `
Available Antigravity CLI Commands:
  help                Show this command reference
  neofetch            Display system specs & ASCII logo
  about               Developer bio & engineering summary
  projects            List showcase applications
  skills              Display technical matrix
  experience          Academic & practical background
  contact             Get contact info & social channels
  cat [file]          Print file content (e.g. 'cat resume.txt')
  open [app]          Open app window (finder, safari, notes, skills, mail, preview, settings)
  theme [name]        Switch wallpaper (antigravity, sonoma, cyber, aurora, obsidian)
  whoami              Print current user
  date                Show current timestamp
  matrix              Run zero-gravity digital code simulation
  sudo antigravity    Toggle zero-gravity quantum acceleration
  clear               Clear terminal buffer
  exit                Close terminal session
`;
        break;

      case "neofetch":
        output = `
       .---.          antigravity@dara-macbook
      /     \\         ------------------------
     | () () |        OS: macOS Sonoma 14.5 (Antigravity Edition)
      \\  _  /         Host: MacBook Pro 16" (Apple M3 Max)
       \`---\`          Kernel: Darwin 23.5.0
     /|     |\\        Uptime: 21 Years
    / |     | \\       Shell: zsh 5.9
   *  |_____|  *      Terminal: Apple Terminal.app
      /     \\         Developer: Nhim Dara (Antigravity)
     /       \\        Education: IT Engineering @ RUPP
    /         \\       Specialty: Full-Stack Web & Mobile Apps
                      Memory: 36 GB Unified RAM
                      Disk: 1 TB APFS Flash
`;
        break;

      case "about":
        output = `
Name: ${developerInfo.name} (${developerInfo.alias})
Title: ${developerInfo.title}
Location: ${developerInfo.location}
Age: ${developerInfo.age} | Degree: ${developerInfo.major} @ ${developerInfo.university}

Bio:
${developerInfo.bio}
`;
        break;

      case "projects":
        output = `
Featured Portfolio Applications (${projects.length} Total):
${projects
  .map(
    (p, i) =>
      `  [${i + 1}] ${p.title} (${p.category}, ${p.year})
      Tech: ${p.tech.join(", ")}
      Demo: ${p.liveUrl || "N/A"}`
  )
  .join("\n\n")}
`;
        break;

      case "skills":
        output = `
Technical Skill Matrix:
  • Frontend: React 19, Next.js, Vue 3, TypeScript, JavaScript ES6+, Tailwind CSS, Framer Motion
  • Backend: Laravel 12, PHP 8 OOP, Node.js, Express, Python FastAPI, RESTful APIs
  • Databases: PostgreSQL, MySQL, SQLite, Relational Schemas
  • Integrations: Bakong KHQR 2.0 Dynamic Payments, Telegram Bot SDK, Gemini AI API
  • Tooling: Git, GitHub, Docker, Postman, Vite, Vercel, Render, Figma
`;
        break;

      case "experience":
        output = `
Academic Track & Practical Roles:
  [1] Bachelor of IT Engineering (2024 - Present)
      Royal University of Phnom Penh (RUPP)
  [2] Frontend Developer Trainee (2025 - 2026)
      ETEC Center & KRU IT Solution
  [3] MoEYS EdTech Project Volunteer (2024 - 2025)
      Data Management & Technical Workflow
`;
        break;

      case "contact":
        output = `
Contact Channels:
  • Email:    ${developerInfo.email}
  • Telegram: ${developerInfo.socials.telegram}
  • GitHub:   ${developerInfo.socials.github}
  • Location: ${developerInfo.location}
`;
        break;

      case "whoami":
        output = `antigravity (Nhim Dara — Full-Stack Engineer)`;
        break;

      case "date":
        output = new Date().toString();
        break;

      case "sudo":
        if (args[0] === "antigravity") {
          output = `🚀 Quantum Anti-Gravity Engine initialized! Gravitational constant set to -9.81 m/s² ✨`;
          setWallpaperId("antigravity");
          showToast("Anti-Gravity Thrusters Engaged!");
        } else {
          output = `antigravity is not in the sudoers file. This incident will be reported.`;
        }
        break;

      case "cat":
        if (args[0] === "resume.txt" || args[0] === "cv.txt") {
          output = `
CURRICULUM VITAE — NHIM DARA
=============================
Full-Stack Software Engineer
Email: ${developerInfo.email} | Location: ${developerInfo.location}

Education:
  • Royal University of Phnom Penh — Bachelor of IT Engineering (2024-Present)
  • ETEC Center — Certified Frontend & Backend Development (2025-2026)

Key Projects:
  • LearnFlow E-Learning System (React 19, Express, MySQL)
  • Telegram Mini App Shop (Laravel 12, PostgreSQL, Bakong KHQR)
  • Cambodian SME Inventory POS (React 19, TypeScript, Bakong KHQR 2.0)
  • StayEasy Hotel Booking (Vue 3, Laravel Sanctum)
`;
        } else {
          output = `cat: ${args[0] || "file"}: No such file or directory. Try 'cat resume.txt'.`;
        }
        break;

      case "matrix":
        output = `
01000001 01101110 01110100 01101001 01100111 01110010 01100001 01110110 01101001 01110100 01111001
[MATRIX SYSTEM UNLOCKED]
Entering zero-gravity cyberspace stream...
System status: All services operational (100%).
`;
        break;

      case "open":
        const targetApp = args[0]?.toLowerCase();
        if (targetApp && ["finder", "terminal", "notes", "safari", "skills", "mail", "preview", "settings"].includes(targetApp)) {
          openWindow(targetApp);
          output = `Opening ${targetApp}.app...`;
        } else {
          output = `open: unknown app '${args[0]}'. Available: finder, notes, safari, skills, mail, preview, settings`;
        }
        break;

      case "theme":
        const targetTheme = args[0]?.toLowerCase();
        const themeMap = {
          antigravity: "antigravity",
          sonoma: "sonoma-dark",
          cyber: "cyber-nebula",
          aurora: "aurora-glow",
          obsidian: "obsidian-minimal",
        };
        if (targetTheme && themeMap[targetTheme]) {
          setWallpaperId(themeMap[targetTheme]);
          output = `Switched desktop wallpaper theme to '${targetTheme}'.`;
        } else {
          output = `theme: unknown theme. Available: antigravity, sonoma, cyber, aurora, obsidian`;
        }
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        closeWindow("terminal");
        return;

      default:
        playAlert();
        output = `zsh: command not found: ${cmd}. Type 'help' to see available commands.`;
        break;
    }

    setHistory((prev) => [...prev, newHistoryEntry, { type: "output", content: output }]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <div
      onClick={handleTerminalClick}
      className="h-full w-full bg-slate-950 p-4 font-mono text-xs text-slate-200 overflow-y-auto cursor-text selection:bg-cyan-500/40 selection:text-white"
    >
      {/* Scrollable history buffer */}
      <div className="space-y-2">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === "banner" && (
              <p className="text-slate-400 whitespace-pre-wrap">{item.content}</p>
            )}
            {item.type === "command" && (
              <p className="text-cyan-400 font-bold">{item.prompt}</p>
            )}
            {item.type === "output" && (
              <pre className="text-slate-300 font-mono whitespace-pre-wrap leading-snug">
                {item.content}
              </pre>
            )}
          </div>
        ))}

        {/* Active Command Line Input */}
        <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-cyan-400 font-bold shrink-0">
            antigravity@dara-macbook ~ %
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono caret-cyan-400"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
