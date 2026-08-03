import type { Metadata } from "next";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Web development — Reed Solutions",
  description:
    "We design and build modern web applications with a pragmatic, high-quality engineering approach: TypeScript, React/Next.js, APIs, and cloud-first delivery.",
};

const principles = [
  {
    label: "User-first UI",
    body: "Accessible interfaces, clean information hierarchy, and fast interactions.",
  },
  {
    label: "Clear boundaries",
    body: "Frontend, API, and data layers that are easy to reason about.",
  },
  {
    label: "Quality by default",
    body: "Code review, automated checks, and tests where they reduce real risk.",
  },
  {
    label: "Operational readiness",
    body: "Deployments, monitoring, and sensible security from day one.",
  },
] as const;

const coreStack = [
  { label: "Frontend", body: "Next.js, React, TypeScript" },
  { label: "UI", body: "Tailwind CSS" },
  { label: "Auth", body: "Amazon Cognito" },
  { label: "API", body: "AWS AppSync (GraphQL), Amplify Data" },
  { label: "Data storage", body: "DynamoDB" },
  { label: "File storage", body: "S3, Amplify Storage" },
  { label: "Delivery", body: "AWS Amplify" },
  { label: "Quality", body: "linting, type checks, targeted tests" },
] as const;

const additions = [
  { label: "Testing", body: "Playwright (E2E), Vitest/Jest (unit)" },
  { label: "CI/CD", body: "GitHub Actions (or your existing pipeline)" },
  { label: "Observability", body: "CloudWatch, Sentry-style error tracking" },
  {
    label: "Security",
    body: "OWASP-minded hardening, dependency updates, least-privilege access patterns",
  },
  {
    label: "Integrations",
    body: "webhooks, third-party APIs, internal system connections",
  },
  {
    label: "Product needs",
    body: "payments (e.g. Stripe), email (e.g. SES), analytics, admin tooling",
  },
] as const;

export default function ProductDevelopmentPage() {
  return (
    <div className="content-page">
      <Section className="border-b border-line pt-12 pb-12 md:pt-20 md:pb-24">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Web development</p>
            <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
              Calm, modern engineering for web applications.
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  We design and build web apps that feel great to use and stay easy to own. The work is deliberate:
                  clear architecture, strong engineering hygiene, and technology choices that support long-term
                  velocity.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  If you need a customer-facing platform, internal tool, or API-backed product, we’ll help you ship
                  confidently and keep improving after launch.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">How we build</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                Simple, readable, reliable.
              </h2>
              <p className="mt-8 max-w-[44ch] text-[15px] leading-relaxed text-muted md:text-[16px]">
                We keep the implementation crisp so the product stays flexible. That means we optimise for clarity
                first, then performance, and we document decisions so the system remains understandable over time.
              </p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <ul className="border-t border-ink">
                {principles.map((item) => (
                  <li key={item.label} className="grid grid-cols-12 gap-6 border-b border-line py-6">
                    <span className="col-span-12 text-[11px] uppercase tracking-[0.18em] text-ink md:col-span-4">
                      {item.label}
                    </span>
                    <span className="col-span-12 text-[14px] leading-relaxed text-muted md:col-span-8 md:text-[15px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Technology</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                A modern stack, chosen pragmatically.
              </h2>
              <p className="mt-8 max-w-[44ch] text-[15px] leading-relaxed text-muted md:text-[16px]">
                We keep the stack modern and straightforward—proven tools, strong defaults, and a setup that’s easy
                for your team to maintain.
              </p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Core stack</p>
              <ul className="mt-4 border-t border-ink">
                {coreStack.map((item) => (
                  <li key={item.label} className="grid grid-cols-12 gap-6 border-b border-line py-5">
                    <span className="col-span-12 text-[11px] uppercase tracking-[0.18em] text-ink md:col-span-4">
                      {item.label}
                    </span>
                    <span className="col-span-12 text-[14px] leading-relaxed text-muted md:col-span-8 md:text-[15px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-12 text-[11px] uppercase tracking-[0.18em] text-muted">Common additions</p>
              <ul className="mt-4 border-t border-ink">
                {additions.map((item) => (
                  <li key={item.label} className="grid grid-cols-12 gap-6 border-b border-line py-5">
                    <span className="col-span-12 text-[11px] uppercase tracking-[0.18em] text-ink md:col-span-4">
                      {item.label}
                    </span>
                    <span className="col-span-12 text-[14px] leading-relaxed text-muted md:col-span-8 md:text-[15px]">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Also</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                Often paired with
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <p className="max-w-[60ch] text-[15px] leading-relaxed text-muted md:text-[17px]">
                Product work rarely lives in isolation. We often connect your systems and strengthen the platform so
                the app can scale with you.
              </p>
              <div className="mt-10 flex flex-col">
                <Link
                  href="/integrations"
                  className="border-t border-ink py-5 text-2xl font-medium tracking-tightish text-ink transition-colors hover:bg-ink hover:text-canvas md:text-3xl"
                >
                  <span className="flex items-center justify-between px-1">
                    <span>Integrations</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
                <Link
                  href="/ai-and-automation"
                  className="border-t border-line border-b border-b-ink py-5 text-2xl font-medium tracking-tightish text-ink transition-colors hover:bg-ink hover:text-canvas md:text-3xl"
                >
                  <span className="flex items-center justify-between px-1">
                    <span>AI & Automation</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
