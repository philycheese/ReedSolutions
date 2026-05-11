import type { Metadata } from "next";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI & Automation - Reed Solutions",
  description:
    "We help businesses adopt AI and automation the right way: mapping real workflows, building reliable APIs, and layering intelligence on top of solid foundations.",
};

const sections = [
  {
    eyebrow: "How we think about it",
    title: "Automation first. AI second.",
    body: [
      "Most businesses don't need AI right away. They need their existing workflows to stop falling through the cracks. We map out your operations, identify the repetitive stuff, and turn it into reliable, automated processes.",
      "Once that foundation is solid, adding AI on top becomes straightforward. The AI decides what to do, and your automation spine does it. Deterministically, auditably, and without surprises.",
      "Get the process right first, then let the machines take over. That way, when AI is involved, it's following a playbook that already works.",
    ],
  },
] as const;

const approachItems = [
  {
    label: "Workflow mapping",
    body: "We document your real processes, not the idealised version. The messy truth is where the gold is.",
  },
  {
    label: "API spine",
    body: "We build clean internal APIs that represent each action in your workflow. This becomes the toolbox everything else plugs into.",
  },
  {
    label: "Deterministic automation",
    body: "Repeatable workflows that run the same way every time. No guesswork, no surprises, just reliable execution.",
  },
  {
    label: "AI orchestration",
    body: "When the time is right, we layer AI on top to read intent, pick the right workflow, and kick it off. With human approval where it matters.",
  },
  {
    label: "Audit trails",
    body: "Every automated action is logged. You can always see what happened, why, and who (or what) triggered it.",
  },
] as const;

const workItems = [
  {
    label: "Email ingestion",
    body: "Incoming emails get parsed, context gets extracted, and the right workflow fires automatically.",
  },
  {
    label: "Supplier tracking",
    body: "Automated polling of supplier APIs to detect status changes and update your systems without anyone lifting a finger.",
  },
  {
    label: "Customer notifications",
    body: 'Draft updates generated automatically, routed for human approval, then sent. No more "sorry, we forgot to tell you."',
  },
  {
    label: "Internal tooling",
    body: "Custom dashboards and command bars that let your team interact with workflows through natural language.",
  },
  {
    label: "Incident correlation",
    body: "Connecting the dots across systems so issues are spotted early and routed to the right people.",
  },
] as const;

export default function AIAndAutomationPage() {
  return (
    <>
      <Section className="border-b border-line pt-12 pb-12 md:pt-20 md:pb-24">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              AI & Automation
            </p>
            <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
              Teach your business to run itself (with guardrails).
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  AI is exciting. But throwing a chatbot at a messy process just gives you a faster mess.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  We start by understanding how your business actually works. The workflows, the handoffs, the things
                  people do on autopilot. Then we build the plumbing that lets automation (and eventually AI) do the
                  heavy lifting safely, predictably, and without anyone losing sleep.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  Less copy-paste. Fewer dropped balls. More time for the work that actually needs a human brain.
                </p>
              </div>
            </div>

          </Reveal>
        </Container>
      </Section>

      {sections.map((s) => (
        <Section key={s.title} className="border-b border-line">
          <Container>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{s.eyebrow}</p>
                <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                  {s.title}
                </h2>
              </Reveal>
              <Reveal className="md:col-span-7" delay={0.05}>
                <div className="space-y-6">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 30)} className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Our approach</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                From sticky notes to API spine.
              </h2>
              <p className="mt-8 max-w-[44ch] text-[15px] leading-relaxed text-muted md:text-[16px]">
                We work alongside your team as consultants to deeply understand how operations run today. Every email
                chain, manual check, and spreadsheet workaround gets documented. Then we get to work.
              </p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <ul className="border-t border-ink">
                {approachItems.map((item) => (
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">What this looks like</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                The kind of work we do
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <ul className="border-t border-ink">
                {workItems.map((item) => (
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Why it works</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                Safe, boring, brilliant.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  The best automation is the kind nobody thinks about. It just works. Orders get tracked, customers
                  get updated, tickets get logged, and your team gets to focus on the interesting problems instead.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  We keep AI on a tight leash. It proposes actions through well-defined workflows with permission
                  controls, confidence thresholds, and human-in-the-loop approvals where needed. No rogue robots.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  The result? A business that gets measurably faster today, while building the foundation for an
                  AI-native future. Win-win, really.
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
                Automation doesn't live in isolation. We often combine this work with integrations and web development
                to give your team a complete, connected experience.
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
                  href="/product-development"
                  className="border-t border-line border-b border-b-ink py-5 text-2xl font-medium tracking-tightish text-ink transition-colors hover:bg-ink hover:text-canvas md:text-3xl"
                >
                  <span className="flex items-center justify-between px-1">
                    <span>Web development</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
