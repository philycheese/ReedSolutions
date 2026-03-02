import type { Metadata } from "next";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";

export const metadata: Metadata = {
  title: "AI & Automation - Reed Solutions",
  description:
    "We help businesses adopt AI and automation the right way: mapping real workflows, building reliable APIs, and layering intelligence on top of solid foundations.",
};

export default function AIAndAutomationPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">AI & Automation</p>
            <div aria-hidden="true" className="mt-4 h-1.5 w-20 bg-brand-yellow" />
            <h1 className="mt-5 max-w-[980px] text-4xl font-semibold tracking-tightish md:text-6xl">
              Teach your business to run itself (with guardrails).
            </h1>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              AI is exciting. But throwing a chatbot at a messy process just gives you a faster mess.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              We start by understanding how your business actually works. The workflows, the handoffs, the things
              people do on autopilot. Then we build the plumbing that lets automation (and eventually AI) do the
              heavy lifting safely, predictably, and without anyone losing sleep.
            </p>
            <p className="mt-6 max-w-[820px] text-base leading-relaxed text-muted md:text-lg">
              Less copy-paste. Fewer dropped balls. More time for the work that actually needs a human brain.
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">How we think about it</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Automation first. AI second.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Most businesses don't need AI right away. They need their existing workflows to stop falling
                  through the cracks. We map out your operations, identify the repetitive stuff, and turn it into
                  reliable, automated processes.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Once that foundation is solid, adding AI on top becomes straightforward. The AI decides what to
                  do, and your automation spine does it. Deterministically, auditably, and without surprises.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Get the process right first, then let the machines take over. That way, when AI is involved,
                  it's following a playbook that already works.
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Our approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                From sticky notes to API spine.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We work alongside your team as consultants to deeply understand how operations run today. Every
                  email chain, manual check, and spreadsheet workaround gets documented. Then we get to work.
                </p>

                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Workflow mapping</span>
                    <span className="text-ink/80"> - We document your real processes, not the idealised version. The messy truth is where the gold is.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">API spine</span>
                    <span className="text-ink/80"> - We build clean internal APIs that represent each action in your workflow. This becomes the toolbox everything else plugs into.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Deterministic automation</span>
                    <span className="text-ink/80"> - Repeatable workflows that run the same way every time. No guesswork, no surprises, just reliable execution.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">AI orchestration</span>
                    <span className="text-ink/80"> - When the time is right, we layer AI on top to read intent, pick the right workflow, and kick it off. With human approval where it matters.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Audit trails</span>
                    <span className="text-ink/80"> - Every automated action is logged. You can always see what happened, why, and who (or what) triggered it.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What this looks like</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">The kind of work we do</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <ul className="space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
                  <li>
                    <span className="font-semibold text-ink">Email ingestion</span>
                    <span className="text-ink/80"> - Incoming emails get parsed, context gets extracted, and the right workflow fires automatically.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Supplier tracking</span>
                    <span className="text-ink/80"> - Automated polling of supplier APIs to detect status changes and update your systems without anyone lifting a finger.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Customer notifications</span>
                    <span className="text-ink/80"> - Draft updates generated automatically, routed for human approval, then sent. No more "sorry, we forgot to tell you."</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Internal tooling</span>
                    <span className="text-ink/80"> - Custom dashboards and command bars that let your team interact with workflows through natural language.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Incident correlation</span>
                    <span className="text-ink/80"> - Connecting the dots across systems so issues are spotted early and routed to the right people.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Why it works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Safe, boring, brilliant.
              </h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  The best automation is the kind nobody thinks about. It just works. Orders get tracked, customers
                  get updated, tickets get logged, and your team gets to focus on the interesting problems instead.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  We keep AI on a tight leash. It proposes actions through well-defined workflows with permission
                  controls, confidence thresholds, and human-in-the-loop approvals where needed. No rogue robots.
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  The result? A business that gets measurably faster today, while building the foundation for an
                  AI-native future. Win-win, really.
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
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Also</p>
              <div aria-hidden="true" className="mt-4 h-1.5 w-20 bg-brand-yellow" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tightish md:text-4xl">Often paired with</h2>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Automation doesn't live in isolation. We often combine this work with integrations and web
                  development to give your team a complete, connected experience.
                </p>
                <div className="flex flex-col gap-3">
                  <HardLink
                    href="/integrations"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Integrations <span aria-hidden="true">&rarr;</span>
                  </HardLink>
                  <HardLink
                    href="/product-development"
                    className="inline-flex items-center gap-2 text-base font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink md:text-lg"
                  >
                    Web development <span aria-hidden="true">&rarr;</span>
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
