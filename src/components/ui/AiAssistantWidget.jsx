import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  User,
  Phone,
  Mail,
  ExternalLink,
  MessageSquare,
  RefreshCw,
  CheckCircle2,
  Terminal,
  Layers,
} from "lucide-react";
import { FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import avatarPic from "../../assets/images/myPicture1.webp";

// Knowledge Base about Nhim Dara
const DARA_KNOWLEDGE = {
  name: "Nhim Dara",
  role: "Full-Stack & Frontend Web Developer",
  education: "IT Engineering student at Royal University of Phnom Penh (RUPP), Class of 2028 (2024 - 2028)",
  location: "Phnom Penh, Cambodia (UTC+7)",
  email: "daracombodia54@gmail.com",
  phone: "(+855) 96 992 3931",
  telegram: "https://t.me/dara_nhim",
  github: "https://github.com/nhimdara",
  linkedin: "https://www.linkedin.com/in/nhim-dara-031a0631b/",
  availability: "Available for Full-Stack / Frontend Internships, Junior roles, and Freelance projects (Remote or Phnom Penh).",
  skills: [
    "React 19 / React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS v4",
    "Laravel 12 & PHP 8", "Node.js & Express", "Java & Spring Boot", "MySQL & PostgreSQL",
    "MongoDB", "REST APIs & JWT", "Bakong KHQR 2.0 Integration", "Git & GitHub", "Vite"
  ],
  projects: [
    { title: "LearnFlow E-Learning Platform", desc: "Enterprise University LMS with role-based dashboards, interactive quizzes, and JWT auth." },
    { title: "Telegram Shop Mini App", desc: "Full-stack Telegram Mini App with OAuth, Bakong KHQR checkout, and Laravel 12 API." },
    { title: "Cambodian SME Inventory & POS", desc: "Dual currency USD/KHR micro-retail POS with KHQR 2.0 generator & thermal receipt printing." },
    { title: "Culinary Admin POS & Inventory", desc: "Restaurant table reservation and cashier checkout management system." },
    { title: "StayEasy Hotel Booking", desc: "Full-stack hospitality engine with Vue 3 & Laravel Sanctum session auth." },
    { title: "WOOD'S Cambodia Android App", desc: "Native Android furniture catalog APK with direct social order routing." },
    { title: "RoomFinder Student Housing", desc: "Cross-platform student housing portal with Expo mobile app." }
  ],
  certificates: [
    "Frontend Development Specialization (ETEC Center)",
    "Backend Development Specialization (ETEC Center)",
    "Frontend Software Engineering Internship (KRU IT Solution)",
    "Official Academic Transcript (RUPP ITE)",
    "MoEYS EdTech Project Recognition"
  ]
};

// Quick Question Prompts
const QUICK_PROMPTS = [
  "⚡ What is Dara's primary tech stack?",
  "🎓 Tell me about his RUPP background",
  "🚀 Show me his flagship projects",
  "💼 Is Nhim Dara available for hire?",
  "💬 How can I chat with Dara directly?",
];

// Custom Inline Bold & List Parser for Clean Formatted AI Messages
const parseInlineBold = (str) => {
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-extrabold text-cyan-600 dark:text-cyan-300">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const FormattedAiMessage = ({ text }) => {
  if (!text) return null;

  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 font-sans text-xs">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Bullet point lines starting with - or *
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const content = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 py-0.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
              <div className="flex-1 leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineBold(content)}
              </div>
            </div>
          );
        }

        // Numbered list items like 1. 2.
        if (/^\d+\.\s/.test(trimmed)) {
          const content = trimmed.replace(/^\d+\.\s/, "");
          const num = trimmed.match(/^\d+/)[0];
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 py-0.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[11px] font-bold shrink-0 mt-0.5">{num}.</span>
              <div className="flex-1 leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineBold(content)}
              </div>
            </div>
          );
        }

        // Normal paragraph lines
        return (
          <p key={idx} className="leading-relaxed text-slate-800 dark:text-slate-200">
            {parseInlineBold(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

export const AiAssistantWidget = ({ isOpen: controlledIsOpen, setIsOpen: controlledSetIsOpen }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen;

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hi! I'm **Dara's AI Portfolio Assistant**.\n\nI can answer questions about Nhim Dara's tech stack, RUPP IT Engineering background, 13 featured builds, certificates, or connect you to chat with him directly!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // AI Logic Engine for responding to user queries
  const generateAiResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes("chat") || text.includes("contact") || text.includes("hire") || text.includes("connect") || text.includes("telegram") || text.includes("reach") || text.includes("phone") || text.includes("email")) {
      return {
        text: `You can connect directly with **Nhim Dara** through Telegram, phone, or email. He responds quickly!`,
        hasContactCard: true,
      };
    }

    if (text.includes("stack") || text.includes("skill") || text.includes("tech") || text.includes("react") || text.includes("laravel") || text.includes("language")) {
      return {
        text: `**Nhim Dara's Core Technical Stack:**\n\n- **Frontend:** React 19, JavaScript ES6+, TypeScript, Tailwind CSS, HTML5/CSS3\n- **Backend:** Laravel 12, PHP 8, Node.js, Express.js, Java Spring Boot\n- **Databases:** MySQL, PostgreSQL, MongoDB\n- **Specializations:** REST API design, JWT auth, Bakong KHQR 2.0 payments, Telegram WebApp SDK`,
        hasContactCard: false,
      };
    }

    if (text.includes("project") || text.includes("work") || text.includes("build") || text.includes("pos") || text.includes("elearning") || text.includes("telegram")) {
      return {
        text: `**Nhim Dara has shipped 13 production-grade projects.** Key builds include:\n\n1. **LearnFlow E-Learning Platform:** Enterprise university LMS with role-based dashboards.\n2. **Telegram Shop Mini App:** Native Telegram WebApp with KHQR checkout.\n3. **Cambodian SME POS:** USD/KHR dual currency micro-retail POS with Bakong KHQR 2.0.\n4. **StayEasy Hotel Booking:** Vue 3 & Laravel room reservation engine.\n5. **WOOD'S Cambodia Android:** Native Android furniture catalog APK.`,
        hasContactCard: false,
      };
    }

    if (text.includes("education") || text.includes("rupp") || text.includes("university") || text.includes("degree") || text.includes("school") || text.includes("background")) {
      return {
        text: `**Academic & Background Details:**\n\n- **University:** Royal University of Phnom Penh (RUPP)\n- **Degree:** B.S. in Information Technology Engineering (2024 - 2028)\n- **Location:** Phnom Penh, Cambodia (UTC+7)\n- **Honors:** MoEYS EdTech Project Technical Recognition`,
        hasContactCard: false,
      };
    }

    if (text.includes("certificate") || text.includes("diploma") || text.includes("internship") || text.includes("etec")) {
      return {
        text: `**Verified Credentials & Diplomas:**\n\n1. **Frontend Specialization** - ETEC Center\n2. **Backend Specialization** - ETEC Center\n3. **Software Engineering Internship** - KRU IT Solution\n4. **Official RUPP Academic Transcript** (ITE Year 1)\n5. **MoEYS EdTech Contribution Recognition**`,
        hasContactCard: false,
      };
    }

    if (text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("who")) {
      return {
        text: `Hello! I'm Dara's AI assistant. **Nhim Dara** is a Full-Stack Web Developer and IT Engineering student at RUPP. How can I help you today?`,
        hasContactCard: false,
      };
    }

    // Default intelligent fallback
    return {
      text: `**Nhim Dara** is a Full-Stack Web Developer in Phnom Penh specializing in React 19, Laravel 12, TypeScript, and cloud REST APIs.\n\nHe is currently open for **Internships, Junior Engineering roles, and Freelance projects**.\n\nWould you like to chat with him directly on Telegram?`,
      hasContactCard: true,
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateAiResponse(query);
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: response.text,
        hasContactCard: response.hasContactCard,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay when AI Chat is Open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 sm:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Trigger Widget Button (Bottom Left on Desktop) */}
      <div
        className="hidden sm:flex fixed bottom-6 left-6 z-40 items-center gap-3"
      >
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="refero-card-elevated group relative flex items-center gap-2 rounded-full p-1 sm:p-1.5 sm:pr-4 border border-cyan-500/40 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Open Dara AI Assistant"
          >
            {/* Ambient glowing aura */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 opacity-60 blur-[8px] group-hover:opacity-100 transition-opacity animate-pulse" />

            <div className="relative flex items-center gap-2">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-cyan-400/50 shadow-md shrink-0 bg-slate-950">
                <img src={avatarPic} alt="Nhim Dara AI" className="h-full w-full object-cover" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Ask Dara AI</span>
                  <Sparkles size={12} className="text-cyan-500 dark:text-cyan-400" />
                </div>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">● Online &amp; Ready</span>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Main AI Chat Drawer Window (Bottom Left on desktop, responsive card on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-x-3 bottom-3 top-16 sm:top-auto sm:inset-x-auto sm:bottom-6 sm:left-6 z-50 w-auto sm:w-[420px] sm:h-[600px] max-h-[85dvh] sm:max-h-[85vh] flex flex-col"
          style={{ position: "fixed" }}
        >
          <div className="refero-card-elevated relative flex flex-col h-full w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header Bar */}
            <div className="refero-card-footer px-4 py-3.5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-cyan-400/50 shadow-md shrink-0 bg-slate-950">
                  <img src={avatarPic} alt="Nhim Dara" className="h-full w-full object-cover" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Dara AI Assistant</h3>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-bold">v2.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Ask anything or connect to chat</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setMessages([messages[0]])}
                  className="refero-icon-btn p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  title="Clear conversation"
                >
                  <RefreshCw size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="refero-icon-btn p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
                  aria-label="Close assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Body Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="refero-icon-btn h-7 w-7 rounded-full text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={14} />
                    </div>
                  )}

                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "refero-btn-primary text-white rounded-tr-none shadow-md font-semibold"
                          : "refero-pill rounded-tl-none shadow-sm text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      <FormattedAiMessage text={msg.text} />
                    </div>

                    {/* Direct Contact Card inside Chat Stream */}
                    {msg.hasContactCard && (
                      <div className="refero-card p-3.5 rounded-2xl border border-cyan-500/40 shadow-xl space-y-2.5">
                        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs">
                          <Sparkles size={14} />
                          <span>Direct Chat Coordinates:</span>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          <a
                            href={DARA_KNOWLEDGE.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="refero-pill flex items-center justify-between p-2.5 rounded-xl text-cyan-700 dark:text-cyan-300 font-bold text-xs transition-all group hover:border-cyan-400/60"
                          >
                            <div className="flex items-center gap-2">
                              <FaTelegramPlane className="text-cyan-500 dark:text-cyan-400 text-sm" />
                              <span>Chat on Telegram (@dara_nhim)</span>
                            </div>
                            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>

                          <a
                            href={`tel:${DARA_KNOWLEDGE.phone}`}
                            className="refero-pill flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all hover:border-purple-400/60"
                          >
                            <Phone size={13} className="text-purple-500 dark:text-purple-400" />
                            <span>Call Direct: {DARA_KNOWLEDGE.phone}</span>
                          </a>

                          <a
                            href={`mailto:${DARA_KNOWLEDGE.email}`}
                            className="refero-pill flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all hover:border-emerald-400/60"
                          >
                            <Mail size={13} className="text-emerald-500 dark:text-emerald-400" />
                            <span>Email: {DARA_KNOWLEDGE.email}</span>
                          </a>
                        </div>
                      </div>
                    )}

                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 block text-right px-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 items-center text-slate-500 dark:text-slate-400 text-xs font-mono">
                  <div className="refero-icon-btn h-7 w-7 rounded-full text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="refero-pill flex gap-1.5 items-center px-3 py-2 rounded-2xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce delay-100" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce delay-200" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="refero-card-footer p-2.5 border-t border-slate-200/80 dark:border-white/10 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="refero-pill whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-400/50 transition-all cursor-pointer shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="refero-card-footer p-3 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask AI about Nhim Dara, skills, or projects..."
                className="refero-input flex-1 px-3.5 py-2.5 rounded-xl text-xs font-medium focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className="refero-btn-primary p-2.5 rounded-xl disabled:opacity-40 text-white transition-all cursor-pointer font-bold shrink-0 hover:scale-105 active:scale-95"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistantWidget;
