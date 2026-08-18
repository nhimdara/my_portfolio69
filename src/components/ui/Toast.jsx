import React from "react";
import { CheckCircle2, Sparkles, X } from "lucide-react";

export const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-slate-900/95 px-4 py-3 text-sm font-medium text-slate-100 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-500/20 text-emerald-400">
        <CheckCircle2 size={16} />
      </div>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-200 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
