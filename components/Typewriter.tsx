"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
  syncParticles?: boolean;
}

export default function Typewriter({
  text,
  className,
  typingSpeed = 50,
  startDelay = 300,
  syncParticles = false,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const caretRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);

    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, typingSpeed, startDelay]);

  useEffect(() => {
    if (!syncParticles) return;

    const frame = window.requestAnimationFrame(() => {
      const bounds = caretRef.current?.getBoundingClientRect();
      window.dispatchEvent(
        new CustomEvent("reed:typewriter-progress", {
          detail: {
            active: isTyping && showCursor && Boolean(bounds),
            completed: !isTyping && displayedText.length === text.length,
            progress: displayedText.length / Math.max(1, text.length),
            x: bounds ? bounds.left + bounds.width / 2 : 0,
            y: bounds ? bounds.top + bounds.height / 2 : 0,
          },
        }),
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, [displayedText, isTyping, showCursor, syncParticles, text.length]);

  useEffect(() => {
    const hideCursorTimeout = setTimeout(() => {
      setShowCursor(false);
    }, 4000);

    return () => clearTimeout(hideCursorTimeout);
  }, []);

  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      {/* Invisible text + cursor to reserve full space */}
      <span className="invisible" aria-hidden="true">
        {text}
        <span className="inline-block w-[3px] ml-1" />
      </span>
      {/* Visible typing text positioned over the reserved space */}
      <span className="absolute inset-0">
        {displayedText}
        {showCursor && (
          <span
            ref={caretRef}
            className={`inline-block w-[3px] h-[1em] bg-current ml-1 align-middle ${
              isTyping ? "animate-blink" : "animate-blink-slow"
            }`}
            aria-hidden="true"
          />
        )}
      </span>
    </span>
  );
}
