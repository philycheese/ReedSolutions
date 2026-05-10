"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type HoverItem = {
  index: string;
  title: string;
  meta?: string;
  href?: string;
  onClick?: () => void;
  preview?: { src: string; alt: string };
};

type HoverPreviewListProps = {
  items: HoverItem[];
  className?: string;
};

export default function HoverPreviewList({ items, className }: HoverPreviewListProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHoverable(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <div
      onMouseLeave={() => setActiveIdx(null)}
      className={cn("relative", className)}
    >
      <ul className="border-t border-ink">
        {items.map((item, idx) => {
          const isActive = activeIdx === idx;
          const rowClass = cn(
            "group flex w-full items-baseline gap-6 border-b border-ink py-5 text-left transition-colors duration-300 md:py-6",
            "px-1 md:px-3",
          );
          const inner = (
            <span className="flex flex-1 items-baseline gap-6 md:gap-10">
              <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted md:inline">
                {item.index}
              </span>
              <span
                className={cn(
                  "block text-[clamp(1.25rem,2.6vw,2rem)] font-medium leading-[1.05] tracking-tightish transition-transform duration-300",
                  hoverable && isActive ? "md:translate-x-2" : "",
                )}
              >
                {item.title}
              </span>
            </span>
          );
          const tail = (
            <span className="ml-auto inline-flex items-center gap-6 self-center text-[11px] uppercase tracking-[0.18em] text-muted">
              {item.meta ? <span>{item.meta}</span> : null}
              <span aria-hidden="true">↗</span>
            </span>
          );

          if (item.href) {
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  data-cursor="open"
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={rowClass}
                >
                  {inner}
                  {tail}
                </Link>
              </li>
            );
          }
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={item.onClick}
                data-cursor="open"
                onMouseEnter={() => setActiveIdx(idx)}
                className={rowClass}
              >
                {inner}
                {tail}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
