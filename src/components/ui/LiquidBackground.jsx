import React, { useEffect, useRef, useState } from "react";

const LiquidBackground = () => {
  const canvasRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic Liquid Fluid Blobs
    const blobs = [
      {
        x: width * 0.25,
        y: height * 0.25,
        vx: 0.3,
        vy: 0.2,
        radius: Math.min(width, height) * 0.42,
        color1: "rgba(6, 182, 212, 0.14)", // Vibrant Cyan
        color2: "rgba(59, 130, 246, 0.02)",
        baseRadius: Math.min(width, height) * 0.42,
        pulseSpeed: 0.0014,
      },
      {
        x: width * 0.8,
        y: height * 0.3,
        vx: -0.25,
        vy: 0.22,
        radius: Math.min(width, height) * 0.48,
        color1: "rgba(168, 85, 247, 0.12)", // Vivid Purple
        color2: "rgba(236, 72, 153, 0.02)",
        baseRadius: Math.min(width, height) * 0.48,
        pulseSpeed: 0.0011,
      },
      {
        x: width * 0.5,
        y: height * 0.75,
        vx: 0.22,
        vy: -0.18,
        radius: Math.min(width, height) * 0.4,
        color1: "rgba(16, 185, 129, 0.09)", // Emerald Glow
        color2: "rgba(6, 182, 212, 0.01)",
        baseRadius: Math.min(width, height) * 0.4,
        pulseSpeed: 0.0016,
      },
      {
        x: width * 0.15,
        y: height * 0.85,
        vx: -0.15,
        vy: -0.2,
        radius: Math.min(width, height) * 0.35,
        color1: "rgba(99, 102, 241, 0.11)", // Indigo Accent
        color2: "rgba(147, 51, 234, 0.01)",
        baseRadius: Math.min(width, height) * 0.35,
        pulseSpeed: 0.0013,
      },
    ];

    // Constellation Particle System
    const numParticles = Math.min(45, Math.floor(width / 35));
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.35 - 0.1, // Soft upward drift
      alpha: Math.random() * 0.4 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 1;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.dataset.theme === "light";
      const isReduced = document.documentElement.dataset.motion === "reduced";

      // 1. Draw Liquid Fluid Aurora Metaballs
      blobs.forEach((blob, idx) => {
        if (!isReduced) {
          blob.x += blob.vx;
          blob.y += blob.vy;

          if (blob.x - blob.radius < -120 || blob.x + blob.radius > width + 120) {
            blob.vx *= -1;
          }
          if (blob.y - blob.radius < -120 || blob.y + blob.radius > height + 120) {
            blob.vy *= -1;
          }
        }

        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 800);
        const offsetX = dx * influence * 0.07;
        const offsetY = dy * influence * 0.07;

        const currentRadius =
          blob.baseRadius +
          Math.sin(time * blob.pulseSpeed + idx) * (blob.baseRadius * 0.1);

        const gradient = ctx.createRadialGradient(
          blob.x + offsetX,
          blob.y + offsetY,
          0,
          blob.x + offsetX,
          blob.y + offsetY,
          currentRadius
        );

        const c1 = isLight
          ? blob.color1.replace("0.14", "0.08").replace("0.12", "0.06").replace("0.09", "0.04").replace("0.11", "0.05")
          : blob.color1;

        gradient.addColorStop(0, c1);
        gradient.addColorStop(0.6, blob.color2);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x + offsetX, blob.y + offsetY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Interactive Cursor Radial Glow Canvas Bloom
      if (!isReduced && mouseX > 0 && mouseY > 0) {
        const mouseGradient = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          450
        );
        mouseGradient.addColorStop(
          0,
          isLight ? "rgba(6, 182, 212, 0.07)" : "rgba(6, 182, 212, 0.12)"
        );
        mouseGradient.addColorStop(
          0.5,
          isLight ? "rgba(99, 102, 241, 0.02)" : "rgba(99, 102, 241, 0.04)"
        );
        mouseGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 450, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Render Subtle Floating Particle Constellation
      if (!isReduced) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.03;

          // Wrap edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
          ctx.fillStyle = isLight
            ? `rgba(15, 23, 42, ${Math.max(0.05, currentAlpha * 0.4)})`
            : `rgba(186, 230, 253, ${Math.max(0.1, currentAlpha)})`;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const isLight = document.documentElement.dataset.theme === "light";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Fluid Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* 2. Cyber Tech Grid Matrix Overlay */}
      <div className={`absolute inset-0 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 ${
        isLight
          ? "bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
      }`} />

      {/* 3. Interactive Cursor Spotlight on Grid */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-60"
        style={{
          background: isLight
            ? `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(2, 132, 199, 0.08), rgba(99, 102, 241, 0.03) 40%, transparent 80%)`
            : `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(6, 182, 212, 0.12), rgba(99, 102, 241, 0.05) 40%, transparent 80%)`,
        }}
      />

      {/* 4. Film Grain Noise Texture */}
      <div className={`absolute inset-0 [background-size:16px_16px] opacity-40 ${
        isLight
          ? "bg-[radial-gradient(#0f172a08_1px,transparent_1px)]"
          : "bg-[radial-gradient(#ffffff05_1px,transparent_1px)]"
      }`} />
    </div>
  );
};

export default LiquidBackground;

