"use client";

import { useEffect } from "react";

export default function HeroScrollSnap() {
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.getElementById("hero");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    root.classList.add("home-native-snap");

    const handleHeroClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (event.button !== 0 || target?.closest("a, button, input, textarea, select")) {
        return;
      }

      document.getElementById("mission")?.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
    };

    hero?.addEventListener("click", handleHeroClick);

    return () => {
      root.classList.remove("home-native-snap");
      hero?.removeEventListener("click", handleHeroClick);
    };
  }, []);

  return null;
}
