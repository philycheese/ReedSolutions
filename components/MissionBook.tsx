"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import HoverPreviewList from "@/components/HoverPreviewList";
import { contactEmail } from "@/lib/content";

const serviceLinks = [
  {
    title: "AI & Automation",
    href: "/ai-and-automation",
  },
  {
    title: "Integrations",
    href: "/integrations",
  },
  {
    title: "Web development",
    href: "/product-development",
  },
  {
    title: "See our work",
    href: "/portfolio/",
  },
];

type MissionBookProps = {
  showLinks: boolean;
};

export default function MissionBook({ showLinks }: MissionBookProps) {
  const reduceMotion = useReducedMotion();
  const [contactOpen, setContactOpen] = useState(false);
  const [copyScale, setCopyScale] = useState(1);
  const missionFaceRef = useRef<HTMLElement>(null);
  const missionCopyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const face = missionFaceRef.current;
    const copy = missionCopyRef.current;
    if (!face || !copy) return;

    const fitCopyToViewport = () => {
      const faceStyles = window.getComputedStyle(face);
      const verticalPadding =
        Number.parseFloat(faceStyles.paddingTop) +
        Number.parseFloat(faceStyles.paddingBottom);
      const availableHeight = Math.max(1, face.clientHeight - verticalPadding - 8);
      const naturalHeight = Math.max(1, copy.scrollHeight);
      const nextScale = Math.min(1, availableHeight / naturalHeight);

      setCopyScale((currentScale) =>
        Math.abs(currentScale - nextScale) < 0.002 ? currentScale : nextScale,
      );
    };

    fitCopyToViewport();
    const observer = new ResizeObserver(fitCopyToViewport);
    observer.observe(face);
    observer.observe(copy);

    return () => observer.disconnect();
  }, []);

  const faceStyle = {
    backfaceVisibility: "hidden" as const,
    WebkitBackfaceVisibility: "hidden" as const,
  };

  return (
    <div className="relative h-full overflow-visible [perspective:1800px]">
      <motion.div
        className="relative z-10 grid h-full w-full origin-center md:w-1/2 md:origin-right [transform-style:preserve-3d]"
        initial={false}
        animate={{ rotateY: showLinks ? -180 : 0 }}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <section
          ref={missionFaceRef}
          aria-hidden={showLinks}
          inert={showLinks ? true : undefined}
          className="flex h-full min-h-0 flex-col justify-center overflow-hidden bg-[var(--brand-bg)] py-6 pr-1 [grid-area:1/1] md:py-8 md:pr-12 lg:pr-20"
          style={{ ...faceStyle, pointerEvents: showLinks ? "none" : "auto" }}
        >
          <h2 className="sr-only">
            Our mission
          </h2>

          <div
            ref={missionCopyRef}
            className="origin-center space-y-5 bg-[var(--brand-text)] px-6 py-7 text-[clamp(1.05rem,1.2vw,1.25rem)] font-normal leading-[1.5] tracking-[-0.018em] [color:color-mix(in_srgb,var(--brand-bg)_74%,transparent)] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] md:space-y-6 md:px-8 md:py-9 lg:px-10 lg:py-10"
            style={{ transform: `scale(${copyScale})` }}
          >
            <p className="max-w-[15ch] text-balance text-[clamp(2rem,2.75vw,3rem)] leading-[1.03] tracking-[-0.05em] text-[var(--brand-bg)]">
              Your business is a mesh of logic.
            </p>
            <p>
              A system of decisions, instincts, rules and movement, held together by people who understand how everything connects.
            </p>
            <p>
              But a business does not have to remain trapped in its current form.
            </p>
            <p>
              We uncover the intelligence inside your organisation and turn it into something tangible: software that can think, move and scale with less friction.
            </p>
            <p>
              The familiar boundaries begin to dissolve.
            </p>
            <p className="text-[clamp(1.25rem,1.6vw,1.7rem)] font-medium leading-[1.35] tracking-[-0.03em] [color:color-mix(in_srgb,var(--brand-bg)_92%,transparent)]">
              <span className="block">Knowledge becomes infrastructure.</span>
              <span className="block">Work becomes executable.</span>
            </p>
            <p>
              What emerges is not simply a more efficient company, but a different kind of company. One that behaves more like technology.
            </p>
            <p>
              Your business already contains the blueprint.
            </p>
            <p className="text-[clamp(1.25rem,1.6vw,1.7rem)] font-medium leading-[1.3] tracking-[-0.03em] text-[var(--brand-bg)]">
              We help you build what it is becoming.
            </p>
          </div>
        </section>

        <section
          aria-hidden={!showLinks}
          inert={!showLinks ? true : undefined}
          className="flex h-full min-h-0 flex-col overflow-y-auto bg-[var(--brand-bg)] py-8 pl-1 [grid-area:1/1] [transform:rotateY(180deg)] md:py-12 md:pl-12 lg:pl-20"
          style={{ ...faceStyle, pointerEvents: showLinks ? "auto" : "none" }}
        >
          <h2 className="sr-only">
            Services and work
          </h2>

          <div className="flex flex-1 items-center">
            <div className="relative w-full">
              <HoverPreviewList
                items={serviceLinks}
                variant="dark"
                showDividers={false}
                className="w-full"
              />

              <div className="relative">
                <AnimatePresence initial={false}>
                  {contactOpen && (
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100%+138px)] md:h-[calc(100%+176px)]"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.18 } }}
                    >
                      <motion.div
                        className="absolute inset-0 origin-top bg-[var(--brand-text)]"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ delay: reduceMotion ? 0 : 0.16, duration: reduceMotion ? 0.01 : 0.48, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.span
                        className="absolute inset-x-0 top-0 h-px origin-left bg-[var(--brand-bg)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: reduceMotion ? 0.01 : 0.26, ease: "easeOut" }}
                      />
                      <motion.span
                        className="absolute bottom-0 right-0 top-0 w-px origin-top bg-[var(--brand-bg)]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: reduceMotion ? 0 : 0.23, duration: reduceMotion ? 0.01 : 0.3, ease: "easeOut" }}
                      />
                      <motion.span
                        className="absolute inset-x-0 bottom-0 h-px origin-right bg-[var(--brand-bg)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: reduceMotion ? 0 : 0.5, duration: reduceMotion ? 0.01 : 0.28, ease: "easeOut" }}
                      />
                      <motion.span
                        className="absolute bottom-0 left-0 top-0 w-px origin-bottom bg-[var(--brand-bg)]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: reduceMotion ? 0 : 0.75, duration: reduceMotion ? 0.01 : 0.22, ease: "easeOut" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setContactOpen((open) => !open)}
                  aria-controls="homepage-contact-panel"
                  aria-expanded={contactOpen}
                  data-cursor="open"
                  className={`group relative z-10 flex w-full items-center px-1 py-5 text-left transition-colors duration-300 md:px-3 md:py-6 ${contactOpen ? "text-[var(--brand-bg)]" : "text-[var(--brand-text)]"}`}
                >
                  <span className="block flex-1 text-[clamp(1.25rem,2.6vw,2rem)] font-medium leading-[1.05] tracking-tightish transition-transform duration-300 md:group-hover:translate-x-2">
                    Contact
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {contactOpen && (
                    <motion.div
                      id="homepage-contact-panel"
                      role="region"
                      aria-label="Contact Reed Solutions"
                      className="absolute inset-x-0 top-full z-10 flex h-[138px] flex-col justify-center px-5 text-[var(--brand-bg)] md:h-[176px] md:px-7"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5, transition: { duration: 0.14 } }}
                      transition={{ delay: reduceMotion ? 0 : 0.42, duration: reduceMotion ? 0.01 : 0.38 }}
                    >
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-[clamp(1.15rem,2.15vw,1.75rem)] font-light leading-none tracking-[-0.035em] transition-opacity hover:opacity-65"
                      >
                        {contactEmail}
                      </a>
                      <p className="mt-4 text-[12px] tracking-[0.04em] opacity-60 md:text-[13px]">
                        based in Switzerland
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
