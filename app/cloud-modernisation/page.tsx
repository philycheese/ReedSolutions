import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Cloud & modernisation — Reed Solutions",
  description:
    "We modernise existing software with pragmatic upgrades: cloud migrations, performance improvements, security hardening, and better operability—without risky rewrites.",
};

export default function CloudModernisationPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Cloud & modernisation</p>
            <h1 className="mt-4 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              Upgrade the foundation, without a disruptive rewrite.
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              If you’re running on older infrastructure, carrying technical debt, or struggling with reliability, we can
              modernise your stack without a risky “big rewrite”. We focus on staged, measurable improvements.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              The result is a calmer operating model: clearer deployments, better visibility, and fewer production
              surprises.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HardLink
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
              >
                Talk about modernisation
              </HardLink>
              <HardLink
                href="/integrations"
                className="inline-flex items-center justify-center rounded-lg border border-accent bg-white px-5 py-3 text-sm font-medium text-accent shadow-hairline transition-colors hover:bg-accent hover:text-white"
              >
                Integrations
              </HardLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Outcomes</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">What you’ll notice</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Modernisation is successful when it improves day-to-day operations and customer experience—not just
                  diagrams. We choose changes that reduce risk and increase your ability to ship.
                </p>

                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Safer releases:</span> repeatable deploys, rollbacks, and fewer
                    “it works on my machine” issues.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Performance:</span> measured improvements to latency and
                    stability.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Security posture:</span> dependency upgrades, hardening, and
                    better access control.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Observability:</span> logs and metrics that make incidents
                    understandable.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Lower operational load:</span> fewer late-night surprises and
                    more time for product.
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Related</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">Product development</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Once the platform is reliable, shipping product becomes easier. We can pair modernisation work with new
                  features, new frontends, or a refreshed user experience.
                </p>
                <HardLink
                  href="/product-development"
                  className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                >
                  Explore product development <span aria-hidden="true">→</span>
                </HardLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}


