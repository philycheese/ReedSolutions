import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case study | Reed Solutions",
  description:
    "Detailed look at a multi-tenant care platform with payroll automation, architecture, and roadmap.",
};

const architecture = [
  {
    title: "Client portals",
    detail: "Next.js app router surfaces booking, onboarding, and payroll visibility per tenant.",
  },
  {
    title: "Core services",
    detail: "tRPC + PostgreSQL store structured bookings, PA data, and compliance artifacts.",
  },
  {
    title: "Automation",
    detail: "Temporal-inspired job runner handles payroll batches, notifications, and retries.",
  },
  {
    title: "Integrations",
    detail: "PAIYROLL webhooks + REST API, GOV.UK Verify, and accounting exports.",
  },
];

const nextFeatures = [
  "Self-serve agency onboarding with verification",
  "Embedded analytics for utilisation + payroll forecasting",
  "Mobile approvals for support teams",
  "API surface for partners",
];

export default function WorkPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Case study</p>
        <h1 className="text-4xl font-semibold">Care platform with payroll automation</h1>
          <p className="max-w-3xl text-lg text-muted">
            A UK-based care operator needed to replace spreadsheets and outsourced payroll. The studio built a
            secure multi-tenant platform that manages PA onboarding, bookings, compliance, and automated payroll
            runs powered by PAIYROLL.
          </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Context & problem</h2>
          <p className="text-muted">
            Fragmented tools created delays between care bookings and payroll, exposing compliance risk and
            slowing payments to personal assistants. Support teams had no real-time visibility into payroll
            readiness.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-muted">
            Designed a unified platform covering client onboarding, PA enrollment, scheduling, and payroll
            automation. Delivered as a responsive web app with separate workspaces for agencies, clients, and
            internal support teams.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Architecture overview</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {architecture.map((item) => (
            <article key={item.title} className="rounded-2xl border bg-white/70 p-5 shadow-subtle">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Integration</p>
          <h3 className="mt-2 text-xl font-semibold">PAIYROLL</h3>
          <p className="mt-3 text-muted">
            PAIYROLL handled payroll calculations, tax, pension, and disbursement. A custom sync pushes
            structured timesheets and retrieves run statuses, exposing them directly inside agency dashboards so
            teams always know when funds will land.
          </p>
        </div>
        <div className="rounded-3xl border bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Results</p>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            <li>- Payroll ready within 24 hours of bookings closing</li>
            <li>- Compliance pack creation time cut from 3 days to 4 hours</li>
            <li>- Support inbox volume down 45% thanks to status visibility</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Tech stack</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            <li>Next.js App Router + React Server Components</li>
            <li>TypeScript everywhere</li>
            <li>tRPC + Zod for APIs and validation</li>
            <li>PostgreSQL + Prisma</li>
            <li>Cloud Run + Fly.io for workloads</li>
            <li>PAIYROLL + GOV APIs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Next features</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nextFeatures.map((feature) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
