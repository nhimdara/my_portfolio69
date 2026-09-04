import React, { useRef, useState } from "react";

export const LiquidCard = ({
  children,
  className = "",
  contentClassName = "",
  glowColor = "cyan",
  interactive = true,
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, active: false });
  };

  // Subtle, refined glass spotlights (reduced intensity to prevent overpowering blobs)
  const glowGradients = {
    cyan: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.08), transparent 75%)",
    purple: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.08), transparent 75%)",
    emerald: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.08), transparent 75%)",
    amber: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.08), transparent 75%)",
    blue: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent 75%)",
    rose: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), rgba(244, 63, 94, 0.08), transparent 75%)",
  };

  const borderGradients = {
    cyan: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.45), transparent 70%)",
    purple: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.45), transparent 70%)",
    emerald: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.45), transparent 70%)",
    amber: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(251, 191, 36, 0.45), transparent 70%)",
    blue: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.45), transparent 70%)",
    rose: "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(251, 113, 133, 0.45), transparent 70%)",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      }}
      className={`refero-card group relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Specular Edge Highlight on Mouse Position */}
      {interactive && (
        <div
          className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 ${
            mousePos.active ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: borderGradients[glowColor] || borderGradients.cyan,
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Internal Subtle Liquid Glass Spotlight (Only when actively hovering) */}
      {interactive && (
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${
            mousePos.active ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: glowGradients[glowColor] || glowGradients.cyan,
          }}
        />
      )}

      {/* Top Specular Bevel Line */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 h-full w-full ${
          className.includes("flex-col") ? "flex flex-col flex-1" : ""
        } ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default LiquidCard;
