"use client";

import { motion, useReducedMotion } from "framer-motion";
import HoverPreviewList from "@/components/HoverPreviewList";

const links = [
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
  {
    title: "Contact",
    href: "/contact/",
  },
];

type MissionBookProps = {
  showLinks: boolean;
};

export default function MissionBook({ showLinks }: MissionBookProps) {
  const reduceMotion = useReducedMotion();

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
          aria-hidden={showLinks}
          inert={showLinks ? true : undefined}
          className="flex h-full min-h-0 flex-col justify-center overflow-y-auto bg-[var(--brand-bg)] py-8 pr-1 [grid-area:1/1] md:py-12 md:pr-12 lg:pr-20"
          style={{ ...faceStyle, pointerEvents: showLinks ? "none" : "auto" }}
        >
          <h2 className="sr-only">
            Our mission
          </h2>

          <div className="space-y-5 text-[15px] leading-[1.7] text-[var(--brand-muted)] md:space-y-6 md:text-[17px] md:leading-[1.7]">
            <p className="text-[var(--brand-text)]">
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
            <p className="text-[var(--brand-soft)]">
              <span className="block">Knowledge becomes infrastructure.</span>
              <span className="block">Processes become products.</span>
              <span className="block">Work becomes executable.</span>
            </p>
            <p>
              What emerges is not simply a more efficient company, but a different kind of company. One that behaves more like technology.
            </p>
            <p>
              Your business already contains the blueprint.
            </p>
            <p className="text-[var(--brand-text)]">
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
            <HoverPreviewList items={links} variant="dark" className="w-full" />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
