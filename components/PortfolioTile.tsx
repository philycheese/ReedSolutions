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
    <Reveal className={cn(expanded ? "md:col-span-12" : "md:col-span-4")} delay={delay}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          "group w-full overflow-hidden rounded-lg border-4 bg-white/60 text-left shadow-hairline",
          "border-accent/20 transition-colors transition-shadow hover:border-accent/40 hover:shadow-lift",
        )}
      >
        <div className={cn("relative border-b", expanded ? "aspect-[16/8]" : "aspect-[16/10]", "border-accent/15")}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover grayscale-[35%] contrast-110 transition-transform duration-500 group-hover:scale-[1.02]"
            sizes={expanded ? "(min-width: 1024px) 70vw, 92vw" : "(min-width: 1024px) 30vw, 92vw"}
            priority={delay === 0}
          />
        </div>

        <div className="space-y-3 p-6">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-tightish">{project.title}</h2>
            <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-accent">
              {expanded ? "Collapse" : "Expand"}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-line bg-canvas px-2 py-1 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && detailParagraphs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden pt-4"
              >
                <div className="space-y-4 border-t border-accent/15 pt-5">
                  {detailParagraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-sm leading-relaxed text-ink/75 md:text-base md:leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </button>
    </Reveal>
  );
}


