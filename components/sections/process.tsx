const steps = [
  {
    title: "Discovery",
    copy: "Map business rules, integrations, and compliance requirements in collaborative working sessions.",
  },
  {
    title: "Build",
    copy: "Ship in short iterations with weekly previews covering UX, infrastructure, and quality checks.",
  },
  {
    title: "Iterate",
    copy: "Instrument critical flows, capture feedback, and prioritize improvements against business goals.",
  },
  {
    title: "Support",
    copy: "Long-term care for hosting, monitoring, and small enhancements so you stay focused on growth.",
  },
];

export function Process() {
  return (
    <section className="space-y-6">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Process</p>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step) => (
          <article key={step.title} className="rounded-2xl border bg-white/50 p-4">
            <h3 className="text-sm font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm text-muted">{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
