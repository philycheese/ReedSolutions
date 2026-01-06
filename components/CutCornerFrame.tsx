"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CutCornerFrameProps = React.PropsWithChildren<{
  className?: string;
  /** Corner cut size in px (true 45° diagonal regardless of aspect ratio). */
  cutPx?: number;
  /** Border color as a CSS color string. */
  borderColor?: string;
  /** Border width in px (non-scaling stroke). */
  borderWidthPx?: number;
}>;

export default function CutCornerFrame({
  className,
  cutPx = 12,
  borderColor = "#E8E5DD",
  borderWidthPx = 1,
  children,
}: CutCornerFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ w, h }, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      const nextW = Math.max(0, Math.round(r.width));
      const nextH = Math.max(0, Math.round(r.height));
      setSize((prev) => (prev.w === nextW && prev.h === nextH ? prev : { w: nextW, h: nextH }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Use the requested cut size directly (clamped to reasonable max) to ensure 45° angles
  // Don't clamp by box dimensions - we want true 45° cuts even on elongated boxes
  const cut = Math.max(0, Math.min(cutPx, 24));
  const strokeWidth = borderWidthPx;

  // Clip in px so the diagonal is always 45° on screen (same cut px for both axes = true 45°)
  const clipPath =
    w > 0 && h > 0
      ? `polygon(${cut}px 0px, ${w}px 0px, ${w}px ${h - cut}px, ${w - cut}px ${h}px, 0px ${h}px, 0px ${cut}px)`
      : undefined;

  // Outline points - use exact edge coordinates
  // Add small overflow to viewBox to prevent edge clipping that makes bottom/right appear lighter
  const overflow = 2;
  const points =
    w > 0 && h > 0
      ? `${cut},0 ${w},0 ${w},${h - cut} ${w - cut},${h} 0,${h} 0,${cut}`
      : "";

  return (
    <div ref={ref} className={cn("relative", className)} style={clipPath ? { clipPath } : undefined}>
      {children}
      {w > 0 && h > 0 ? (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            left: -overflow,
            top: -overflow,
            width: w + overflow * 2,
            height: h + overflow * 2,
          }}
          viewBox={`${-overflow} ${-overflow} ${w + overflow * 2} ${h + overflow * 2}`}
          preserveAspectRatio="none"
        >
          <polygon
            points={points}
            fill="none"
            stroke={borderColor}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            shapeRendering="auto"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
          />
        </svg>
      ) : null}
    </div>
  );
}


