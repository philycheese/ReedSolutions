"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

export default function Typewriter({
  text,
  className,
  typingSpeed = 50,
  startDelay = 300,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, typingSpeed, startDelay]);

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
