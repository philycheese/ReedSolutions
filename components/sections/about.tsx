export function About() {
  return (
    <section className="space-y-6">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">About</p>
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Clear ownership, senior hands</h2>
          <p className="text-muted">
            Reed Solutions is a Switzerland-based product and engineering studio for custom software. Work is
            led by Philip Reed with a tight circle of senior collaborators when the brief calls for it—keeping
            delivery focused and accountable.
          </p>
          <p className="text-muted">
            Recent builds include payroll automation, scheduling, and internal tools for operators in
            Switzerland and the UK, along with lighter engagements for teams modernising their stack.
          </p>
        </div>
        <div className="rounded-2xl border bg-white/70 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Security & reliability</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>- Infrastructure as code + least-privilege access</li>
            <li>- Monitoring hooks for uptime, jobs, and billing events</li>
            <li>- Data residency + DPIA support for Swiss and UK regulators</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
