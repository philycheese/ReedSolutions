import type { Metadata } from "next";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Integrations — Reed Solutions",
  description:
    "We connect your existing software so work moves through the business without constant manual steps, copy and paste, or fragile workarounds.",
};

const buildItems = [
  {
    label: "Workflow automation",
    body: "Trigger actions across systems to remove manual steps and handoffs.",
  },
  {
    label: "API integration",
    body: "Clean, well-defined connections between systems with clear ownership.",
  },
  {
    label: "Webhooks and events",
    body: "Reliable processing with retries and safe handling when things fail.",
  },
  {
    label: "Data synchronisation",
    body: "Keep systems aligned through scheduled or near real-time updates.",
  },
  {
    label: "Security",
    body: "Appropriate access controls and careful handling of credentials.",
  },
  {
    label: "Observability",
    body: "Logs and metrics that make automated workflows understandable.",
  },
] as const;

export default function IntegrationsPage() {
  return (
    <div className="content-page">
      <Section className="border-b border-line pt-12 pb-12 md:pt-20 md:pb-24">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Integrations</p>
            <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
              Connect systems. Simplify work.
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  Businesses rarely lack tools. They lack flow.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  We help bring your existing software together so work moves through the business without constant
                  manual steps, copy and paste, or fragile workarounds.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  The goal is simple. Fewer systems to babysit. Clearer workflows. Automation that removes friction
                  rather than adding it.
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">What we do</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                Integrations that reduce fragmentation.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  We focus on joining pre-existing systems into a coherent workflow. Instead of replacing what you
                  already use, we connect it in a way that feels intentional and dependable.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  That means less manual coordination, fewer mistakes, and a setup that scales as the business grows.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">How we approach integrations</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                Designed for real operations.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  We design integrations with real operations in mind. Reliability, security, and visibility are
                  considered from the start so automation behaves predictably under everyday conditions.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  When something changes upstream, it should be obvious what happened and how to respond.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Typical integration work</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                What we build
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <ul className="border-t border-ink">
                {buildItems.map((item) => (
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">What you will notice</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                The best integrations disappear.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  Successful integrations fade into the background. Teams spend less time moving data around and more
                  time doing meaningful work.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  Workflows become easier to reason about. Errors surface earlier. Changes stop feeling risky.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  Automation should reduce complexity, not move it somewhere else.
                </p>
              </div>
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
                Integrations work best when the surrounding product experience is clear and consistent. We often pair
                this work with web development and AI-driven automation so everything feels cohesive end-to-end.
              </p>
              <div className="mt-10 flex flex-col">
                <Link
                  href="/product-development"
                  className="border-t border-ink py-5 text-2xl font-medium tracking-tightish text-ink transition-colors hover:bg-ink hover:text-canvas md:text-3xl"
                >
                  <span className="flex items-center justify-between px-1">
                    <span>Web development</span>
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
