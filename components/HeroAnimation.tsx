"use client";

import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web";

type HeroAnimationProps = {
  className?: string;
  path?: string;
  ariaLabel?: string;
  loop?: boolean;
};

export default function HeroAnimation({
  className,
  path = "/images/animation.json",
  ariaLabel = "Animated hero illustration.",
  loop = true,
}: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let anim: AnimationItem | undefined;

    anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay: true,
      path,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    return () => {
      anim?.destroy();
    };
  }, [loop, path]);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={className}
      ref={containerRef}
    />
  );
}



