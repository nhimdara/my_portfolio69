import React, { useState } from "react";
import {
  Inbox,
  Send,
  FileText,
  Trash2,
  Star,
  Mail,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  Paperclip,
} from "lucide-react";
import { developerInfo } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";
import { useSoundEffects } from "../../hooks/useSoundEffects";

export const MailApp = () => {
  const { showToast } = useMacOs();
  const { playAlert, playTrash } = useSoundEffects();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project Collaboration / Job Opportunity",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [activeMailbox, setActiveMailbox] = useState("compose");

  const mailboxes = [
    { id: "compose", label: "New Message", icon: Send, badge: null },
    { id: "inbox", label: "Inbox", icon: Inbox, badge: 2 },
    { id: "sent", label: "Sent", icon: FileText, badge: null },
    { id: "trash", label: "Trash", icon: Trash2, badge: null },
  ];

  const sampleInbox = [
    {
      id: 1,
      from: "Antigravity HQ",
      subject: "Welcome to Antigravity macOS Portfolio 🚀",
      date: "9:41 AM",
      preview: "Hello! Thank you for exploring the interactive portfolio. Feel free to reach out directly...",
    },
    {
      id: 2,
      from: "Nhim Dara",
      subject: "Available for Engineering Roles & Projects",
      date: "Yesterday",
      preview: "I am actively open for full-stack web engineering, API architecture, and frontend positions...",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      playAlert();
      showToast("Please fill in your name, email, and message!");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      showToast("Message sent successfully! Dara will reply promptly.");
      setFormData({
        name: "",
        email: "",
        subject: "Full-Stack Project Collaboration",
        message: "",
      });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    showToast("Email copied: " + developerInfo.email);
  };

  return (
    <div className="flex h-full w-full bg-slate-950 text-slate-200 select-none overflow-hidden">
      {/* Mailboxes Sidebar */}
      <aside className="w-48 shrink-0 border-r border-white/10 bg-slate-900/60 p-3 flex flex-col justify-between">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 font-mono">
            Mailboxes
          </span>
          <div className="space-y-0.5">
            {mailboxes.map((box) => {
              const Icon = box.icon;
              const isActive = activeMailbox === box.id;

              return (
                <button
                  key={box.id}
                  onClick={() => setActiveMailbox(box.id)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Icon size={14} className={isActive ? "text-blue-400" : "text-slate-400"} />
                    <span>{box.label}</span>
                  </div>
                  {box.badge && (
                    <span className="px-1.5 py-0.2 rounded-full bg-blue-500/40 text-[10px] text-blue-200 font-mono">
                      {box.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Direct Contacts Card */}
        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs space-y-2">
          <div>
            <span className="text-[10px] font-bold uppercase font-mono text-blue-300">
              Direct Contact
            </span>
            <p className="text-[11px] text-slate-300 truncate mt-0.5">{developerInfo.email}</p>
          </div>
          <button
            onClick={copyEmail}
            className="flex items-center justify-center gap-1.5 w-full py-1 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 text-[11px] font-semibold transition-colors border border-blue-400/30"
          >
            <Copy size={11} />
            <span>Copy Email</span>
          </button>
        </div>
      </aside>

      {/* Main Mail View */}
      <div className="flex-1 flex flex-col bg-slate-900/30 overflow-hidden">
        {activeMailbox === "compose" ? (
          /* Compose Form */
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col p-5 overflow-y-auto max-w-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <span>New Message to Nhim Dara</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Recipient: {developerInfo.email}</span>
            </div>

            <div className="space-y-3 flex-1 flex flex-col">
              {/* Sender Name */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <label className="w-16 text-xs text-slate-400 font-medium">Your Name:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins (Recruiter / Tech Lead)"
                  className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-500 font-medium"
                />
              </div>

              {/* Sender Email */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <label className="w-16 text-xs text-slate-400 font-medium">Your Email:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@company.com"
                  className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-500 font-medium"
                />
              </div>

              {/* Subject */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <label className="w-16 text-xs text-slate-400 font-medium">Subject:</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="flex-1 bg-transparent text-xs text-white focus:outline-none font-medium"
                />
              </div>

              {/* Message */}
              <div className="flex-1 pt-2 flex flex-col min-h-[140px]">
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Dara, I came across your portfolio and would like to connect regarding..."
                  className="w-full flex-1 bg-transparent text-xs text-slate-200 focus:outline-none placeholder:text-slate-500 leading-relaxed resize-none font-sans"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                <span>Open in Default Mail Client</span>
                <ExternalLink size={12} />
              </a>

              <button
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Send size={13} className={isSending ? "animate-pulse" : ""} />
                <span>{isSending ? "Sending Message..." : "Send Message"}</span>
              </button>
            </div>
          </form>
        ) : (
          /* Inbox View */
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
              Received Messages
            </h3>
            {sampleInbox.map((mail) => (
              <div
                key={mail.id}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>{mail.from}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{mail.date}</span>
                </div>
                <p className="text-xs font-semibold text-cyan-300">{mail.subject}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{mail.preview}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
