import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Integrations — Reed Solutions",
  description:
    "We connect your systems with reliable integrations: APIs, webhooks, sync jobs, and automation—built for security, observability, and long-term ownership.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Integrations</p>
            <h1 className="mt-4 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              Connect systems without adding fragility.
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              We integrate your product, internal tools, and third-party platforms so data flows cleanly—and your team stops
              babysitting manual handoffs.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              The goal is boring reliability: clear contracts, predictable failure modes, and visibility when something
              changes upstream.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HardLink
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
              >
                Discuss an integration
              </HardLink>
              <HardLink
                href="/product-development"
                className="inline-flex items-center justify-center rounded-lg border border-accent bg-white px-5 py-3 text-sm font-medium text-accent shadow-hairline transition-colors hover:bg-accent hover:text-white"
              >
                Product development
              </HardLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What we do</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Integrations that stay dependable.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We design integrations with production in mind: secure auth, retries, idempotency, and observability. When
                  the upstream changes, you should know quickly—and have a clear path to fix it.
                </p>

                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">API integration:</span> REST/JSON and clean contracts (OpenAPI).
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Webhooks & events:</span> retries, deduplication, and safe
                    processing.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Data sync:</span> batch or near-real-time with reconciliation.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Security:</span> OAuth2/OIDC, service accounts, and secrets
                    handling.
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Observability:</span> logs, metrics, and alerting that point to
                    root cause.
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">Cloud & modernisation</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Integrations run better when the platform underneath is stable. If you’re dealing with fragile deployments
                  or missing monitoring, we can modernise the foundation too.
                </p>
                <HardLink
                  href="/cloud-modernisation"
                  className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                >
                  Explore cloud & modernisation <span aria-hidden="true">→</span>
                </HardLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}


