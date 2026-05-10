import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

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

  const ruleClassName = cn(
    "h-px w-full",
    isDark ? "bg-canvas/30" : "bg-line"
  );

  const numberClassName = cn(
    "text-[11px] uppercase tracking-[0.18em]",
    isDark ? "text-canvas/60" : "text-muted"
  );

  const titleClassName = cn(
    "mt-6 text-2xl font-medium tracking-tightish md:text-3xl",
    isDark ? "text-canvas" : "text-ink"
  );

  const copyClassName = cn(
    "mt-4 text-[14px] leading-relaxed",
    isDark ? "text-canvas/75" : "text-muted"
  );

  return (
    <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-0", className)}>
      {steps.map((step, idx) => (
        <Reveal
          key={step.title}
          className={cn(
            "md:col-span-3 md:px-6",
            idx > 0 && "md:border-l",
            isDark ? "md:border-canvas/20" : "md:border-line"
          )}
          delay={idx * 0.05}
        >
          <div className="pt-6">
            <div className={ruleClassName} aria-hidden="true" />
            <div className="mt-4 flex items-baseline justify-between">
              <span className={numberClassName}>{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <h3 className={titleClassName}>{step.title}</h3>
            <p className={copyClassName}>{step.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
