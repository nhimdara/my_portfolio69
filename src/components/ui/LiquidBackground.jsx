import React, { useEffect, useRef } from "react";

const LiquidBackground = () => {
  const canvasRef = useRef(null);

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

    // Liquid Blobs definition
    const blobs = [
      {
        x: width * 0.2,
        y: height * 0.3,
        vx: 0.35,
        vy: 0.25,
        radius: Math.min(width, height) * 0.35,
        color1: "rgba(6, 182, 212, 0.18)", // Cyan
        color2: "rgba(59, 130, 246, 0.04)", // Blue
        baseRadius: Math.min(width, height) * 0.35,
        pulseSpeed: 0.0015,
      },
      {
        x: width * 0.8,
        y: height * 0.4,
        vx: -0.3,
        vy: 0.3,
        radius: Math.min(width, height) * 0.4,
        color1: "rgba(147, 51, 234, 0.16)", // Purple
        color2: "rgba(236, 72, 153, 0.03)", // Pink
        baseRadius: Math.min(width, height) * 0.4,
        pulseSpeed: 0.0012,
      },
      {
        x: width * 0.5,
        y: height * 0.75,
        vx: 0.25,
        vy: -0.2,
        radius: Math.min(width, height) * 0.32,
        color1: "rgba(16, 185, 129, 0.12)", // Emerald
        color2: "rgba(6, 182, 212, 0.02)", // Cyan
        baseRadius: Math.min(width, height) * 0.32,
        pulseSpeed: 0.0018,
      },
      {
        x: width * 0.85,
        y: height * 0.85,
        vx: -0.2,
        vy: -0.25,
        radius: Math.min(width, height) * 0.28,
        color1: "rgba(245, 158, 11, 0.1)", // Amber
        color2: "rgba(239, 68, 68, 0.02)",
        baseRadius: Math.min(width, height) * 0.28,
        pulseSpeed: 0.002,
      },
    ];

    // Floating Glass Bubbles
    const bubbles = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 28 + 12,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.15,
      hue: i % 2 === 0 ? 190 : 270, // Cyan or Purple
      wobbleOffset: Math.random() * Math.PI * 2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 1;

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Check theme
      const isLight = document.documentElement.dataset.theme === "light";
      const isReduced = document.documentElement.dataset.motion === "reduced";

      // 1. Draw Liquid Fluid Metaballs
      blobs.forEach((blob, idx) => {
        if (!isReduced) {
          blob.x += blob.vx;
          blob.y += blob.vy;

          if (blob.x - blob.radius < 0 || blob.x + blob.radius > width) {
            blob.vx *= -1;
          }
          if (blob.y - blob.radius < 0 || blob.y + blob.radius > height) {
            blob.vy *= -1;
          }
        }

        // Subtly react to mouse position
        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 600);
        const offsetX = (dx * influence * 0.08);
        const offsetY = (dy * influence * 0.08);

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
          ? blob.color1.replace("0.18", "0.14").replace("0.16", "0.12").replace("0.12", "0.1")
          : blob.color1;

        gradient.addColorStop(0, c1);
        gradient.addColorStop(0.6, blob.color2);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x + offsetX, blob.y + offsetY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Floating Glass Bubbles with Specular Rim & Internal Refraction
      if (!isReduced) {
        bubbles.forEach((bubble) => {
          bubble.y += bubble.speedY;
          bubble.x += bubble.speedX + Math.sin(time * 0.02 + bubble.wobbleOffset) * 0.3;

          if (bubble.y + bubble.size < -50) {
            bubble.y = height + 50;
            bubble.x = Math.random() * width;
          }

          // Glass Bubble Outline & Shimmer
          ctx.save();
          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);

          // Glass interior tint
          ctx.fillStyle = isLight
            ? `hsla(${bubble.hue}, 80%, 65%, ${bubble.opacity * 0.25})`
            : `hsla(${bubble.hue}, 90%, 60%, ${bubble.opacity * 0.18})`;
          ctx.fill();

          // Glass specular rim
          ctx.lineWidth = 1.2;
          ctx.strokeStyle = isLight
            ? `hsla(${bubble.hue}, 90%, 50%, ${bubble.opacity * 0.45})`
            : `hsla(${bubble.hue}, 100%, 80%, ${bubble.opacity * 0.6})`;
          ctx.stroke();

          // Glass highlight crescent (specular reflection)
          ctx.beginPath();
          ctx.arc(
            bubble.x - bubble.size * 0.32,
            bubble.y - bubble.size * 0.32,
            bubble.size * 0.3,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = isLight
            ? `rgba(255, 255, 255, ${bubble.opacity * 0.8})`
            : `rgba(255, 255, 255, ${bubble.opacity * 0.75})`;
          ctx.fill();

          ctx.restore();
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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      {/* Liquid Mesh Overlay */}
      <div className="liquid-mesh-grid absolute inset-0 opacity-[0.03] pointer-events-none" />
    </div>
  );
};

export default LiquidBackground;
