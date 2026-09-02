import React from "react";
import finderImg from "../../assets/icons/finder.png";
import safariImg from "../../assets/icons/safari.png";
import terminalImg from "../../assets/icons/terminal.png";
import vscodeImg from "../../assets/icons/vscode.png";
import appstoreImg from "../../assets/icons/appstore.png";
import settingsSvg from "../../assets/icons/settings.svg";
import folderSvg from "../../assets/icons/folder.svg";

// Official  Apple Logo
export const AppleIcon = ({ className = "w-4 h-4 fill-current", size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 170 170"
    className={className}
    fill="currentColor"
  >
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.59-11.22-20.73-14.76-33.43-3.54-12.69-5.31-24.52-5.31-35.47 0-14.16 3.48-25.93 10.43-35.31 6.95-9.38 15.65-14.18 26.1-14.4 4.56 0 9.87 1.25 15.93 3.75 6.05 2.5 10.02 3.79 11.89 3.86 1.48 0 5.63-1.4 12.44-4.2 6.81-2.8 12.62-4.08 17.43-3.86 13.25.65 23.47 5.71 30.68 15.17-11.96 7.29-17.83 17.18-17.61 29.68.22 9.8 4.02 18.06 11.4 24.78 7.39 6.72 16.14 10.43 26.27 11.13-2.61 7.61-5.76 15.22-9.46 22.84zM119.22 31.84c0-7.39 2.66-14.46 7.99-21.2 5.33-6.74 11.96-10.64 19.89-11.71.22 1.09.33 2.18.33 3.26 0 7.39-2.83 14.79-8.48 22.18-5.65 7.39-12.45 11.42-20.4 12.07-.44-1.52-.66-3.05-.66-4.6z" />
  </svg>
);

// Official macOS Finder Icon (Real high-res 3D PNG)
export const FinderIcon = ({ size = 52, className = "" }) => (
  <img
    src={finderImg}
    alt="Finder"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official macOS Safari Icon (Real high-res 3D PNG)
export const SafariIcon = ({ size = 52, className = "" }) => (
  <img
    src={safariImg}
    alt="Safari"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official macOS Terminal Icon (Real high-res 3D PNG)
export const TerminalIcon = ({ size = 52, className = "" }) => (
  <img
    src={terminalImg}
    alt="Terminal"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official Xcode / Developer Skills Icon
export const XcodeIcon = ({ size = 52, className = "" }) => (
  <img
    src={vscodeImg}
    alt="Xcode / Code"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official macOS Launchpad / App Store Icon
export const LaunchpadIcon = ({ size = 52, className = "" }) => (
  <img
    src={appstoreImg}
    alt="Launchpad"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official macOS System Settings Icon
export const SettingsIcon = ({ size = 52, className = "" }) => (
  <img
    src={settingsSvg}
    alt="System Settings"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Official macOS 3D Blue Folder
export const MacFolderIcon = ({ size = 52, className = "" }) => (
  <img
    src={folderSvg}
    alt="Folder"
    style={{ width: size, height: size }}
    className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] select-none pointer-events-none transition-transform ${className}`}
    draggable={false}
  />
);

// Authentic macOS Apple Notes
export const NotesIcon = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
  >
    <defs>
      <linearGradient id="notesPaper" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f3f4f6" />
      </linearGradient>
      <linearGradient id="notesLeather" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22.5" fill="url(#notesPaper)" />
    <rect x="1.5" y="1.5" width="97" height="97" rx="21" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
    <path
      d="M1.5 22.5 C1.5 11 11 1.5 22.5 1.5 L77.5 1.5 C89 1.5 98.5 11 98.5 22.5 L98.5 28 L1.5 28 Z"
      fill="url(#notesLeather)"
    />
    <line x1="3" y1="28" x2="97" y2="28" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />
    <g stroke="#e2e8f0" strokeWidth="2">
      <line x1="18" y1="42" x2="82" y2="42" />
      <line x1="18" y1="56" x2="82" y2="56" />
      <line x1="18" y1="70" x2="82" y2="70" />
      <line x1="18" y1="84" x2="64" y2="84" />
    </g>
    <path
      d="M22 40 Q28 36 34 40 T46 39 T58 41 M22 54 Q30 51 40 53 T64 54 T78 52 M22 68 Q34 66 48 67"
      fill="none"
      stroke="#334155"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

// Authentic macOS Apple Mail
export const MailIcon = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
  >
    <defs>
      <linearGradient id="mailSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="mailPaper" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22.5" fill="url(#mailSky)" />
    <rect x="1.5" y="1.5" width="97" height="97" rx="21" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <g transform="translate(12, 24) rotate(-8 38 26)">
      <rect x="0" y="0" width="76" height="52" rx="6" fill="url(#mailPaper)" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M0 0 L38 30 L76 0" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <path d="M0 52 L26 26 M76 52 L50 26" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="54" y="6" width="16" height="18" rx="2" fill="#ef4444" stroke="#fca5a5" strokeWidth="1" />
      <circle cx="62" cy="15" r="4" fill="white" opacity="0.9" />
      <circle cx="48" cy="18" r="7" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2 1" />
    </g>
  </svg>
);

// Authentic macOS Preview (Photo Lens)
export const PreviewIcon = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
  >
    <defs>
      <linearGradient id="prevBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22.5" fill="url(#prevBg)" />
    <rect x="1.5" y="1.5" width="97" height="97" rx="21" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
    <g transform="translate(18, 18)">
      <rect x="0" y="0" width="64" height="54" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
      <rect x="4" y="4" width="56" height="46" rx="2" fill="url(#skyGrad)" />
      <circle cx="46" cy="14" r="5" fill="#fef08a" />
      <polygon points="4,50 24,24 40,44 48,34 60,50" fill="#047857" opacity="0.9" />
      <polygon points="20,50 36,32 52,50" fill="#065f46" />
    </g>
    <g transform="translate(46, 42)">
      <circle cx="20" cy="20" r="16" fill="rgba(255,255,255,0.4)" stroke="#475569" strokeWidth="4" />
      <circle cx="20" cy="20" r="13" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <line x1="32" y1="32" x2="48" y2="48" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

// Authentic macOS Trash Basket
export const TrashIcon = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
  >
    <defs>
      <linearGradient id="trashBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="28" rx="28" ry="8" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
    <path
      d="M22 28 L30 82 C31 87 38 90 50 90 C62 90 69 87 70 82 L78 28"
      fill="url(#trashBody)"
      stroke="#cbd5e1"
      strokeWidth="2"
    />
    <g stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
      <line x1="32" y1="32" x2="38" y2="84" />
      <line x1="41" y1="34" x2="44" y2="88" />
      <line x1="50" y1="36" x2="50" y2="90" />
      <line x1="59" y1="34" x2="56" y2="88" />
      <line x1="68" y1="32" x2="62" y2="84" />
    </g>
    <ellipse cx="50" cy="85" rx="20" ry="5" fill="none" stroke="#94a3b8" strokeWidth="2" />
  </svg>
);

// Authentic macOS PDF Document
export const PdfDocIcon = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
  >
    <defs>
      <linearGradient id="pdfPaper" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
    <path
      d="M20 12 L64 12 L84 32 L84 88 C84 92 80 96 76 96 L20 96 C16 96 12 92 12 88 L12 20 C12 16 16 12 20 12 Z"
      fill="url(#pdfPaper)"
      stroke="#cbd5e1"
      strokeWidth="1.5"
    />
    <polygon points="64,12 84,32 64,32" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="12" y="44" width="72" height="24" fill="#ef4444" />
    <text x="48" y="61" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="-apple-system, sans-serif">
      PDF
    </text>
    <line x1="22" y1="76" x2="74" y2="76" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="84" x2="56" y2="84" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Authentic macOS Control Center Icon (Dual Pill Toggles)
export const ControlCenterGlyph = ({ size = 15, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="7" rx="3.5" />
    <circle cx="7" cy="7.5" r="2" fill="currentColor" />
    <rect x="2" y="13" width="20" height="7" rx="3.5" />
    <circle cx="17" cy="16.5" r="2" fill="currentColor" />
  </svg>
);

// Authentic macOS Battery Icon
export const MacBatteryGlyph = ({ level = 100, size = 22, className = "" }) => (
  <svg
    width={size}
    height={size * 0.55}
    viewBox="0 0 26 14"
    className={`inline-block ${className}`}
  >
    <rect
      x="1"
      y="1"
      width="21"
      height="12"
      rx="3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.85"
    />
    <path
      d="M23 4.5 C24 4.5 24.5 5 24.5 6 L24.5 8 C24.5 9 24 9.5 23 9.5"
      fill="currentColor"
      opacity="0.85"
    />
    <rect
      x="2.5"
      y="2.5"
      width={18 * (level / 100)}
      height="9"
      rx="2"
      fill="#34d399"
    />
  </svg>
);
