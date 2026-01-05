import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Integrations — Reed Solutions",
  description:
    "We connect your existing software so work moves through the business without constant manual steps, copy and paste, or fragile workarounds.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Integrations</p>
            <h1 className="mt-4 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              Connect systems. Simplify work.
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              Businesses rarely lack tools. They lack flow.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              We help bring your existing software together so work moves through the business without constant manual steps,
              copy and paste, or fragile workarounds.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              The goal is simple. Fewer systems to babysit. Clearer workflows. Automation that removes friction rather than
              adding it.
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
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-brand-yellow/90"
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What we do</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Integrations that reduce fragmentation.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We focus on joining pre-existing systems into a coherent workflow. Instead of replacing what you already
                  use, we connect it in a way that feels intentional and dependable.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  That means less manual coordination, fewer mistakes, and a setup that scales as the business grows.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">How we approach integrations</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Designed for real operations.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We design integrations with real operations in mind. Reliability, security, and visibility are considered
                  from the start so automation behaves predictably under everyday conditions.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  When something changes upstream, it should be obvious what happened and how to respond.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Typical integration work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">What we build</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Workflow automation</span>
                    <span className="text-ink/80"> — Trigger actions across systems to remove manual steps and handoffs.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">API integration</span>
                    <span className="text-ink/80"> — Clean, well-defined connections between systems with clear ownership.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Webhooks and events</span>
                    <span className="text-ink/80"> — Reliable processing with retries and safe handling when things fail.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Data synchronisation</span>
                    <span className="text-ink/80"> — Keep systems aligned through scheduled or near real-time updates.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Security</span>
                    <span className="text-ink/80"> — Appropriate access controls and careful handling of credentials.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Observability</span>
                    <span className="text-ink/80"> — Logs and metrics that make automated workflows understandable.</span>
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What you will notice</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                The best integrations disappear.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Successful integrations fade into the background. Teams spend less time moving data around and more time
                  doing meaningful work.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Workflows become easier to reason about. Errors surface earlier. Changes stop feeling risky.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Automation should reduce complexity, not move it somewhere else.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}


