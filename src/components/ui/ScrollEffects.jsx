import { useEffect } from "react";

const REVEAL_SELECTOR = ".scroll-reveal, .scroll-fade-in, .scroll-scale";

const ScrollEffects = () => {
  useEffect(() => {
    const prefersReducedMotion =
      document.documentElement.dataset.motion === "reduced" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(REVEAL_SELECTOR);

    let revealObserver;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      revealElements.forEach((element) => revealObserver.observe(element));
    }

    let progressBar = document.getElementById("scroll-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.id = "scroll-progress";
      progressBar.className =
        "fixed left-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]";
      progressBar.setAttribute("aria-hidden", "true");
      document.body.appendChild(progressBar);
    }

    const navbar = document.querySelector("nav");
    let animationFrame = 0;

    const updateScrollEffects = () => {
      animationFrame = 0;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(window.scrollY / scrollableHeight, 1)
          : 0;

      progressBar.style.transform = `scaleX(${progress})`;
      navbar?.classList.toggle("nav-scrolled", window.scrollY > 50);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      progressBar.remove();
      navbar?.classList.remove("nav-scrolled");
    };
  }, []);

  return null;
};

export default ScrollEffects;
