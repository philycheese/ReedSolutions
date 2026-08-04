"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

export type HoverItem = {
  title: string;
  href?: string;
  onClick?: () => void;
};

type HoverPreviewListProps = {
  items: HoverItem[];
  className?: string;
  variant?: "light" | "dark";
  showDividers?: boolean;
};

export default function HoverPreviewList({
  items,
  className,
  variant = "light",
  showDividers = true,
}: HoverPreviewListProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("relative", className)}>
      <ul className={cn(showDividers && "border-t", showDividers && (isDark ? "border-[var(--brand-line)]" : "border-ink"))}>
        {items.map((item) => {
          const rowClass = cn(
            "group flex w-full items-center py-5 text-left transition-colors duration-300 md:py-6",
            showDividers && "border-b",
            showDividers && (isDark ? "border-[var(--brand-line)]" : "border-ink"),
            isDark && "text-[var(--brand-text)]",
            "px-1 md:px-3",
          );
          const inner = (
            <span
              className={cn(
                "block flex-1 text-[clamp(1.25rem,2.6vw,2rem)] font-medium leading-[1.05] tracking-tightish transition-transform duration-300",
                "md:group-hover:translate-x-2",
              )}
            >
              {item.title}
            </span>
          );

          if (item.href) {
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  data-cursor="open"
                  className={rowClass}
                >
                  {inner}
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
                className={rowClass}
              >
                {inner}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
