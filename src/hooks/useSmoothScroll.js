import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleHashLinks = (event) => {
      const link = event.target.closest("a[href^='#']");

      if (!link) return;

      const target = document.getElementById(link.hash.slice(1));

      if (!target) return;

      event.preventDefault();
      const reduceMotion = document.documentElement.dataset.motion === "reduced";
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", link.hash);
    };

    document.addEventListener("click", handleHashLinks);
    return () => document.removeEventListener("click", handleHashLinks);
  }, []);
};

export default useSmoothScroll;
