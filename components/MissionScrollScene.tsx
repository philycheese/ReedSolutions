"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Section";
import MissionBook from "@/components/MissionBook";

const NAV_HEIGHT = 69;

export default function MissionScrollScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateFace = () => {
      animationFrame = 0;
      const scene = sceneRef.current;
      if (!scene) return;

      const sceneTop = scene.getBoundingClientRect().top + window.scrollY;
      const step = Math.max(1, window.innerHeight - NAV_HEIGHT);
      const turnPoint = sceneTop - NAV_HEIGHT + step * 0.5;
      setShowLinks(window.scrollY >= turnPoint);
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateFace);
      }
    };

    updateFace();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      id="mission"
      ref={sceneRef}
      className="relative z-20 h-[calc(200svh-138px)] bg-[var(--brand-bg)] shadow-[0_-32px_90px_var(--brand-shadow)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px [scroll-snap-align:start] [scroll-snap-stop:always]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100svh-69px)] h-px [scroll-snap-align:start] [scroll-snap-stop:always]"
      />

      <div className="sticky top-[69px] flex h-[calc(100svh-69px)] items-center">
        <Container className="h-full">
          <MissionBook showLinks={showLinks} />
        </Container>
      </div>
    </section>
  );
}
