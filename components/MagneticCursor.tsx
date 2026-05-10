"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "dot" | "open";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("dot");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      let el = e.target as HTMLElement | null;
      let nextState: CursorState = "dot";
      while (el && el !== document.body) {
        const v = el.getAttribute?.("data-cursor");
        if (v) {
          if (v === "open" || v === "dot") {
            nextState = v as CursorState;
          }
          break;
        }
        if (el.tagName === "A" || el.tagName === "BUTTON") {
          nextState = "open";
          break;
        }
        el = el.parentElement;
      }
      setState(nextState);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;
      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-state={state}
      className="magnetic-cursor"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
    >
      <div className="magnetic-cursor__shape">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="magnetic-cursor__arrow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </div>
    </div>
  );
}
