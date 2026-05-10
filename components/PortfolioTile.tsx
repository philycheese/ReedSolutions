"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export type PortfolioProject = {
  title: string;
  summary: string;
  tags: readonly string[];
  image: { src: string; alt: string };
  details?: string;
};

export default function PortfolioTile({
  project,
  delay = 0,
}: {
  project: PortfolioProject;
  delay?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const detailParagraphs = useMemo(() => {
    if (!project.details) return [];
    return project.details
      .split(/\n\s*\n/g)
      .map((p) => p.trim())
      .filter(Boolean);
  }, [project.details]);

  return (
    <Reveal
      className={cn(expanded ? "md:col-span-8 md:-order-1" : "md:col-span-4")}
      delay={delay}
    >
      <article
        className={cn(
          "group flex h-full flex-col border border-ink bg-canvas transition-colors",
        )}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-8"
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-medium tracking-tightish md:text-2xl">
              {project.title}
            </h2>

            <p className="text-[14px] leading-relaxed text-muted">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.18em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink">
            {expanded ? "Collapse" : "Expand"}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className={cn(
                "h-3 w-3 transition-transform",
                expanded && "rotate-180",
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M5 8l5 5 5-5" />
            </svg>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden border-t border-line"
            >
              <div className="px-6 pb-6 pt-6 md:px-8 md:pb-8 md:pt-8">
                {detailParagraphs.length > 0 ? (
                  <div className="space-y-4">
                    {detailParagraphs.map((p) => (
                      <p
                        key={p.slice(0, 40)}
                        className="text-[14px] leading-relaxed text-ink/80 md:text-base md:leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 overflow-hidden border border-line bg-line">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1600}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover grayscale"
                    sizes="(min-width: 1024px) 70vw, 92vw"
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}
