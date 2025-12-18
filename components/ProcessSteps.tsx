import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "Discover",
    copy: "Clarify objectives, constraints, and success metrics. We map risks early and define what “done” looks like.",
  },
  {
    title: "Design",
    copy: "Architecture, interfaces, and delivery plan. We agree on tradeoffs and keep decisions visible and documented.",
  },
  {
    title: "Build",
    copy: "Incremental releases with fast feedback. Clean code, pragmatic tests, and real integration—no demo-ware.",
  },
  {
    title: "Operate",
    copy: "Monitoring, incident readiness, and continuous improvements. We help teams own the system long after launch.",
  },
] as const;

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
      {steps.map((step, idx) => (
        <Reveal key={step.title} className="md:col-span-3" delay={idx * 0.05}>
          <div className="h-full rounded-lg border border-line bg-white/50 p-6 shadow-hairline">
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold tracking-tightish">{step.title}</h3>
              <span className="text-xs font-medium text-muted">{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

