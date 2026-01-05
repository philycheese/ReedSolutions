import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export type ProcessStep = {
  title: string;
  copy: string;
};

const defaultSteps = [
  {
    title: "Pre-engagement",
    copy: "Initial assessment to understand goals, constraints, and the current system so we can propose a clear path forward.",
  },
  {
    title: "Engagement",
    copy: "We align on scope and milestones, deepen context, and keep decision-making simple with transparent communication.",
  },
  {
    title: "Operation",
    copy: "Incremental releases, monitoring, and continuous improvements—plus support and handover so the system stays healthy.",
  },
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
    "h-full rounded-lg border p-6",
    isDark ? "border-white/15 bg-white/10" : "border-line bg-white/50 shadow-hairline"
  );

  const titleClassName = cn(
    "text-base font-semibold tracking-tightish",
    isDark ? "text-canvas" : "text-ink"
  );

  const copyClassName = cn("mt-3 text-sm leading-relaxed", isDark ? "text-canvas/80" : "text-muted");

  const numberClassName = cn("text-xs font-medium", isDark ? "text-canvas/70" : "text-muted");

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6", className)}>
      {steps.map((step, idx) => (
        <Reveal key={step.title} className="md:col-span-3" delay={idx * 0.05}>
          <div className={cardClassName}>
            <div className="flex items-baseline justify-between">
              <h3 className={titleClassName}>{step.title}</h3>
              <span className={numberClassName}>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <p className={copyClassName}>{step.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

