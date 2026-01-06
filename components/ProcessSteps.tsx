import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";
import CutCornerFrame from "@/components/CutCornerFrame";

export type ProcessStep = {
  title: string;
  copy: string;
};

const defaultSteps = [
  {
    title: "Assessment",
    copy: "We start by understanding the problem space: goals, constraints, users, and existing systems. This allows us to identify risks early and define what success actually looks like."
  },
  {
    title: "Ideation",
    copy: "We translate context into a clear technical direction. Scope, milestones, and trade-offs are agreed collaboratively, with decisions documented and communication kept transparent."
  },
  {
    title: "Creation",
    copy: "Development happens in small, deliberate increments. You get regular updates, working software early, and direct access to the engineers building your system."
  },
  {
    title: "Ownership",
    copy: "We ship incrementally, monitor in production, and refine over time. When the work is done, you own the system fully—with documentation, handover, and ongoing support if needed."
  }
] as const;

type ProcessStepsProps = {
  className?: string;
  steps?: readonly ProcessStep[];
  variant?: "light" | "dark";
};

export default function ProcessSteps({
  className,
  steps = defaultSteps,
  variant = "light",
}: ProcessStepsProps) {
  const isDark = variant === "dark";

  const cardClassName = cn(
    "h-full p-6",
    isDark ? "bg-white/10" : "bg-white/50 shadow-hairline"
  );

  const titleClassName = cn(
    "text-base font-semibold tracking-tightish",
    isDark ? "text-canvas" : "text-ink"
  );

  const copyClassName = cn("mt-3 text-sm leading-relaxed", isDark ? "text-canvas/80" : "text-muted");

  const numberClassName = cn("text-xs font-medium", isDark ? "text-brand-yellow/90" : "text-muted");

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6", className)}>
      {steps.map((step, idx) => (
        <Reveal key={step.title} className="md:col-span-3" delay={idx * 0.05}>
          <CutCornerFrame
            className={cardClassName}
            cutPx={12}
            borderColor={isDark ? "rgba(255,255,255,0.18)" : "#E8E5DD"}
            borderWidthPx={1}
          >
            <div className="flex items-baseline justify-between">
              <h3 className={titleClassName}>{step.title}</h3>
              <span className={numberClassName}>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <p className={copyClassName}>{step.copy}</p>
          </CutCornerFrame>
        </Reveal>
      ))}
    </div>
  );
}

