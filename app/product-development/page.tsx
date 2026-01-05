import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Web development — Reed Solutions",
  description:
    "We design and build modern web applications with a pragmatic, high-quality engineering approach: TypeScript, React/Next.js, APIs, and cloud-first delivery.",
};

export default function ProductDevelopmentPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Web development</p>
            <h1 className="mt-4 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              Calm, modern engineering for web applications.
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              We design and build web apps that feel great to use and stay easy to own. The work is deliberate: clear
              architecture, strong engineering hygiene, and technology choices that support long-term velocity.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              If you need a customer-facing platform, internal tool, or API-backed product, we’ll help you ship confidently
              and keep improving after launch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HardLink
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-canvas"
              >
                Back
              </HardLink>
              <HardLink
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
              >
                Get in touch
              </HardLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">How we build</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">Simple, readable, reliable.</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We keep the implementation crisp so the product stays flexible. That means we optimise for clarity first,
                  then performance, and we document decisions so the system remains understandable over time.
                </p>

                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">User-first UI:</span> accessible interfaces, clean information
                    hierarchy, and fast interactions.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Clear boundaries:</span> frontend, API, and data layers that
                    are easy to reason about.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Quality by default:</span> code review, automated checks, and
                    tests where they reduce real risk.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Operational readiness:</span> deployments, monitoring, and
                    sensible security from day one.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                A modern stack, chosen pragmatically.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-8">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We keep the stack modern and straightforward—proven tools, strong defaults, and a setup that’s easy for your
                  team to maintain.
                </p>

                <div className="space-y-6 text-base leading-relaxed md:text-lg">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Core stack</p>
                  <p>
                    <span className="font-semibold text-ink">Frontend:</span>{" "}
                    <span className="text-ink/80">Next.js, React, TypeScript</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">UI:</span>{" "}
                    <span className="text-ink/80">Tailwind CSS</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Auth:</span>{" "}
                    <span className="text-ink/80">Amazon Cognito</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">API:</span>{" "}
                    <span className="text-ink/80">AWS AppSync (GraphQL), Amplify Data</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Data storage:</span>{" "}
                    <span className="text-ink/80">DynamoDB</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">File storage:</span>{" "}
                    <span className="text-ink/80">S3, Amplify Storage</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Delivery:</span>{" "}
                    <span className="text-ink/80">AWS Amplify</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Quality:</span>{" "}
                    <span className="text-ink/80">linting, type checks, targeted tests</span>
                  </p>
                </div>

                <div className="space-y-6 text-base leading-relaxed md:text-lg">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Common additions</p>

                  <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                    <li>
                      <span className="font-semibold text-ink">Testing:</span> Playwright (E2E), Vitest/Jest (unit)
                    </li>
                    <li>
                      <span className="font-semibold text-ink">CI/CD:</span> GitHub Actions (or your existing pipeline)
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Observability:</span> CloudWatch, Sentry-style error tracking
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Security:</span> OWASP-minded hardening, dependency updates,
                      least-privilege access patterns
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Integrations:</span> webhooks, third-party APIs, internal
                      system connections
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Product needs:</span> payments (e.g. Stripe), email (e.g.
                      SES), analytics, admin tooling
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Also</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">Often paired with</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Product work rarely lives in isolation. We often connect your systems and strengthen the platform so the
                  app can scale with you.
                </p>
                <div className="flex flex-col gap-3">
                  <HardLink
                    href="/integrations"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Integrations <span aria-hidden="true">→</span>
                  </HardLink>
                  <HardLink
                    href="/mobile-development"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Mobile development <span aria-hidden="true">→</span>
                  </HardLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}


