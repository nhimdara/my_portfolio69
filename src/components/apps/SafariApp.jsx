import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Share2,
  Lock,
  Plus,
  X,
  ExternalLink,
  Globe,
  Bookmark,
  Sparkles,
} from "lucide-react";
import { projects, developerInfo } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";

export const SafariApp = () => {
  const { showToast } = useMacOs();

  const bookmarks = [
    {
      title: "LearnFlow Demo",
      url: "https://frontend-project-practicum-e-learni.vercel.app/",
    },
    {
      title: "Cambodian POS",
      url: "https://cambodian-sme-inventory-pos.vercel.app/",
    },
    {
      title: "StayEasy Hotel",
      url: "https://frontend-hotel-booking-ten.vercel.app/",
    },
    {
      title: "Culinary POS",
      url: "https://mpos-seven.vercel.app/",
    },
    {
      title: "GitHub Profile",
      url: "https://github.com/nhimdara",
    },
    {
      title: "Telegram",
      url: "https://t.me/dara_nhim",
    },
  ];

  const [currentUrl, setCurrentUrl] = useState(bookmarks[0].url);
  const [inputUrl, setInputUrl] = useState(bookmarks[0].url);
  const [tabs, setTabs] = useState([
    { id: 1, title: "LearnFlow E-Learning", url: bookmarks[0].url },
    { id: 2, title: "Cambodian POS & Inventory", url: bookmarks[1].url },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [iframeError, setIframeError] = useState(false);

  const handleNavigate = (url) => {
    let cleanUrl = url;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      cleanUrl = `https://${url}`;
    }
    setCurrentUrl(cleanUrl);
    setInputUrl(cleanUrl);
    setIframeError(false);

    setTabs((prev) =>
      prev.map((t) => (t.id === activeTabId ? { ...t, url: cleanUrl, title: cleanUrl } : t))
    );
  };

  const handleTabSelect = (tab) => {
    setActiveTabId(tab.id);
    setCurrentUrl(tab.url);
    setInputUrl(tab.url);
    setIframeError(false);
  };

  const handleNewTab = () => {
    const newId = Date.now();
    const newTab = { id: newId, title: "New Tab", url: bookmarks[0].url };
    setTabs((prev) => [...prev, newTab]);
    handleTabSelect(newTab);
  };

  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    if (tabs.length === 1) return;
    const remaining = tabs.filter((t) => t.id !== tabId);
    setTabs(remaining);
    if (activeTabId === tabId) {
      handleTabSelect(remaining[remaining.length - 1]);
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-slate-950 text-slate-200 select-none overflow-hidden">
      {/* Safari Tab Bar */}
      <div className="flex items-center px-2 pt-1.5 bg-slate-900 border-b border-white/10 gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              onClick={() => handleTabSelect(tab)}
              className={`group flex items-center justify-between gap-2 px-3 py-1.5 rounded-t-lg text-xs font-medium max-w-[200px] cursor-pointer transition-colors ${
                isActive
                  ? "bg-slate-950 text-white border-t border-x border-white/15 shadow-sm"
                  : "bg-slate-900/50 text-slate-400 hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-1.5 truncate">
                <Globe size={11} className={isActive ? "text-cyan-400" : "text-slate-500"} />
                <span className="truncate">{tab.title}</span>
              </div>
              {tabs.length > 1 && (
                <button
                  onClick={(e) => handleCloseTab(e, tab.id)}
                  className="p-0.5 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X size={11} />
                </button>
              )}
            </div>
          );
        })}

        <button
          onClick={handleNewTab}
          className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white ml-1"
          title="New Tab"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Safari Navigation Toolbar */}
      <div className="flex items-center justify-between gap-3 px-3 py-2 bg-slate-900/90 border-b border-white/10">
        {/* Nav arrows */}
        <div className="flex items-center gap-1 text-slate-400">
          <button
            onClick={() => showToast("Back navigation")}
            className="p-1 rounded hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => showToast("Forward navigation")}
            className="p-1 rounded hover:bg-white/10 hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => handleNavigate(currentUrl)}
            className="p-1 rounded hover:bg-white/10 hover:text-white ml-1"
            title="Reload"
          >
            <RotateCw size={13} />
          </button>
        </div>

        {/* Address Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNavigate(inputUrl);
          }}
          className="flex-1 max-w-xl flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-white/15 text-xs text-slate-200 focus-within:border-cyan-400/60 focus-within:ring-1 focus-within:ring-cyan-400/40"
        >
          <Lock size={11} className="text-emerald-400 shrink-0" />
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full bg-transparent focus:outline-none font-mono text-[11px]"
            placeholder="Search or enter website name"
          />
        </form>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <a
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-semibold border border-cyan-500/40 transition-colors"
            title="Open in new browser window"
          >
            <ExternalLink size={12} />
            <span className="hidden sm:inline">Launch Real Web</span>
          </a>
        </div>
      </div>

      {/* Bookmarks Bar */}
      <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/40 border-b border-white/10 text-[11px] text-slate-400 overflow-x-auto">
        <Bookmark size={11} className="text-slate-500 shrink-0" />
        {bookmarks.map((bm, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(bm.url)}
            className="px-2 py-0.5 rounded hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
          >
            {bm.title}
          </button>
        ))}
      </div>

      {/* Browser Viewport Area */}
      <div className="flex-1 relative bg-slate-950 overflow-hidden flex flex-col">
        {iframeError ? (
          <div className="h-full flex flex-col items-center justify-center p-6 text-center text-slate-300">
            <Globe size={40} className="text-cyan-400 mb-3" />
            <h3 className="text-base font-bold text-white">Live Showcase Link</h3>
            <p className="text-xs text-slate-400 max-w-md mt-1 mb-4">
              {currentUrl}
            </p>
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
            >
              <ExternalLink size={14} />
              <span>Open in New Browser Tab</span>
            </a>
          </div>
        ) : (
          <iframe
            src={currentUrl}
            title="Safari Live Browser"
            onError={() => setIframeError(true)}
            className="h-full w-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>
    </div>
  );
};
