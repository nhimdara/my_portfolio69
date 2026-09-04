import React from "react";
import { CheckCircle2, Sparkles, X } from "lucide-react";

export const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 sm:top-auto sm:bottom-6 sm:right-6 sm:left-auto sm:translate-x-0 z-[60] flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-cyan-400/40 bg-slate-900/95 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-slate-100 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl animate-in slide-in-from-top-2 sm:slide-in-from-bottom-5 duration-300 max-w-[calc(100vw-32px)]">
      <div className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
        <CheckCircle2 size={16} />
      </div>
      <span className="truncate">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-200 transition-colors shrink-0 cursor-pointer"
        aria-label="Dismiss message"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
