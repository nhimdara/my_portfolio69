import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleHashLinks = (event) => {
      const link = event.target.closest("a[href^='#']");

      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(hash.slice(1));

      if (!target) return;

      event.preventDefault();
      const reduceMotion = document.documentElement.dataset.motion === "reduced";
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: reduceMotion ? "auto" : "smooth",
      });

      window.history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleHashLinks);
    return () => document.removeEventListener("click", handleHashLinks);
  }, []);
};

export default useSmoothScroll;
