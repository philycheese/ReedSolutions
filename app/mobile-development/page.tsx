import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Mobile development — Reed Solutions",
  description:
    "We design and build iOS and Android apps that feel fast, polished, and easy to evolve—shipping in small, low-risk steps.",
};

export default function MobileDevelopmentPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Mobile development</p>
            <div aria-hidden="true" className="mt-4 h-1.5 w-20 bg-brand-yellow" />
            <h1 className="mt-5 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              iOS and Android apps, built to ship and to last.
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              We build mobile products that are fast, accessible, and consistent with your brand. The focus is long-term quality, not
              just getting something into the app store.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              Whether starting from scratch or improving an existing app, we work in small, low-risk increments with clear milestones
              and production-ready engineering.
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

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What we deliver</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                A mobile app you can trust in production.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Mobile succeeds on details: performance, offline behaviour, edge cases, and the invisible work that keeps
                  releases calm. We sweat the fundamentals so you get a reliable product.
                </p>

                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Polished UX:</span> navigation, forms, onboarding, and
                    accessibility.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Performance:</span> fast startup, smooth lists, efficient data
                    loading.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Offline & resilience:</span> caching, retries, and graceful
                    failures.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Push & background work:</span> notifications and background sync
                    when needed.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Release confidence:</span> QA, crash reporting, and a shipping
                    process the team trusts.
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">A repeatable way of shipping</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We keep the work bounded and visible. You get working builds early, feedback loops stay short, and we keep
                  decisions documented.
                </p>

                <ol className="space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Baseline.</span> goals, constraints, users, platforms, and the
                    current state (if an app already exists).
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Build in slices.</span> small milestones, app store-ready
                    increments, and regular demos.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Handover & support.</span> documentation, analytics/crash
                    visibility, and ongoing improvements if you want them.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Modern tooling, chosen to fit the product.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We’ll recommend the right approach based on requirements, timelines, and your team’s existing skills.
                </p>

                <div className="space-y-6 text-base leading-relaxed md:text-lg">
                  <p>
                    <span className="font-semibold text-ink">Cross‑platform:</span>{" "}
                    <span className="text-ink/80">React Native, Expo</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Native:</span>{" "}
                    <span className="text-ink/80">Swift (iOS), Kotlin (Android)</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Backend & data:</span>{" "}
                    <span className="text-ink/80">APIs, authentication, and cloud services that match your stack</span>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Release & quality:</span>{" "}
                    <span className="text-ink/80">CI/CD, automated checks, device testing, crash reporting</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Also</p>
              <div aria-hidden="true" className="mt-4 h-1.5 w-20 bg-brand-yellow" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tightish md:text-4xl">Often paired with</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Mobile apps are strongest when they integrate cleanly with your systems and share the same product
                  foundations.
                </p>
                <div className="flex flex-col gap-3">
                  <HardLink
                    href="/product-development"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Web development <span aria-hidden="true">→</span>
                  </HardLink>
                  <HardLink
                    href="/integrations"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Integrations <span aria-hidden="true">→</span>
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


