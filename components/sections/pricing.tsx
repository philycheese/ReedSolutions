export function Pricing() {
  return (
    <section className="rounded-3xl border bg-ink text-white">
      <div className="grid gap-8 p-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Pricing</p>
          <h2 className="mt-3 text-2xl font-semibold">Clarity before code</h2>
          <p className="mt-4 text-white/80">
            Typical projects land between CHF 18k and CHF 60k depending on scope. You receive a detailed
            breakdown of assumptions, architecture, and phased delivery plan before we commit.
          </p>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-white">How quoting works</p>
            <ul className="mt-3 space-y-2">
              <li>- 60-minute working session to unpack business rules</li>
              <li>- Written scope, architecture outline, and risk notes</li>
              <li>- Phased proposal with fixed and variable components</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-white">Engagements</p>
            <ul className="mt-3 space-y-2">
              <li>- Platform build with iterative delivery</li>
              <li>- Dedicated month for roadmap acceleration</li>
              <li>- Advisory retainer for architecture + reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
