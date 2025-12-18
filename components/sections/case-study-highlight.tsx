export function CaseStudyHighlight() {
  return (
    <section className="rounded-3xl border bg-white/70 p-8 shadow-subtle">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Case study</p>
          <h2 className="text-2xl font-semibold">Operations platform with payroll automation</h2>
          <p className="text-muted">
            Designed and built a multi-tenant care agency platform with customer accounts, PA enrollment, and
            payroll automation. Integrated deeply with PAIYROLL to eliminate manual processing and provide
            transparent, auditable runs.
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li>- Secure customer portals with onboarding flows and document collection</li>
            <li>- Automated payroll triggers hooked into bookings data and compliance checks</li>
            <li>- Operational cockpit for support teams with alerts, exports, and approvals</li>
          </ul>
        </div>
        <div className="min-w-[240px] rounded-2xl border bg-canvas/80 p-6 font-mono text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Stack</p>
          <ul className="mt-4 space-y-2">
            <li>Next.js + TypeScript</li>
            <li>tRPC APIs</li>
            <li>PostgreSQL</li>
            <li>PAIYROLL integration</li>
            <li>Background job queue</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
