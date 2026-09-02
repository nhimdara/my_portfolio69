import React, { useState } from "react";
import {
  Award,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
} from "lucide-react";
import { certificates } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";

export const PreviewApp = () => {
  const { showToast } = useMacOs();
  const [selectedCert, setSelectedCert] = useState(certificates[0]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="flex h-full w-full bg-slate-950 text-slate-200 select-none overflow-hidden">
      {/* Thumbnails Sidebar */}
      <aside className="w-48 shrink-0 border-r border-white/10 bg-slate-900/60 p-2.5 flex flex-col overflow-y-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-2 font-mono">
          Credentials ({certificates.length})
        </span>

        <div className="space-y-2">
          {certificates.map((cert) => {
            const isSelected = selectedCert.id === cert.id;
            return (
              <div
                key={cert.id}
                onClick={() => {
                  setSelectedCert(cert);
                  setZoomLevel(1);
                }}
                className={`p-1.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? "bg-emerald-500/20 border-emerald-400/50 shadow-md ring-1 ring-emerald-400/30"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-black/40 border border-white/10 mb-1">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-[11px] font-bold text-white truncate">{cert.title}</p>
                <p className="text-[10px] text-slate-400 truncate">{cert.issuer}</p>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Preview Center */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-900/20">
        {/* Preview Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-slate-900/50 text-xs">
          <div className="flex items-center gap-2 truncate">
            <Award size={15} className="text-emerald-400 shrink-0" />
            <span className="font-bold text-white truncate">{selectedCert.title}</span>
            <span className="text-[10px] text-slate-400 font-mono">({selectedCert.type})</span>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
            <button
              onClick={handleZoomOut}
              className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
              title="Zoom out"
            >
              <ZoomOut size={13} />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300 hover:bg-white/10"
              title="Reset Zoom"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
              title="Zoom in"
            >
              <ZoomIn size={13} />
            </button>
          </div>
        </div>

        {/* Certificate Display Canvas */}
        <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-black/40">
          <div
            className="transition-transform duration-200 origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[60vh] max-w-full rounded-lg shadow-2xl border border-white/15 object-contain"
            />
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="p-3 border-t border-white/10 bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Building size={13} className="text-cyan-400" />
              {selectedCert.issuer}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-slate-400">
              <Calendar size={13} className="text-purple-400" />
              {selectedCert.date}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck size={11} />
              {selectedCert.badge}
            </span>
          </div>

          <button
            onClick={() => {
              window.open(selectedCert.image, "_blank");
              showToast("Opening original certificate in high resolution");
            }}
            className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
          >
            Open Full Resolution
          </button>
        </div>
      </div>
    </div>
  );
};
