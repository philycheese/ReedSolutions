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
    title: "Good automation starts with good software.",
    body: [
      "Step one is for human deployment within your team- someone there to gain understanding the workflows, the data and the logic behind operational decisions",
      "By understanding what exists, we understand what can be improved and optimised- identifying bottlenecks and overly manual processes that can be removed before translating things into software.",
      "Then we build the infrastructure that automates the heavy lifting without AI involved at all, suddenly a process that required 5 steps and half a day of work happens automatically- you could stop here and enjoy the productivity gains.",
    ],
  },
] as const;

const approachItems = [
  {
    label: "Human deployment",
    body: "An engineer works alongside your team to understand your workflows, data and operational logic before anything is automated.",
  },
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
    body: "Repeatable workflows that run the same way every time. No more guesswork, no more dropped balls, just reliable execution.",
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
    body: "Custom dashboards and command bars that let your team perform new and optimised workflows.",
  },
  {
    label: "Incident correlation",
    body: "Connecting the dots across systems so issues are spotted early and routed to the right people.",
  },
  {
    label: "AI decision-making",
    body: "AI applies your business logic to routine decisions, moving work forward automatically and surfacing only the decisions that genuinely require human judgement.",
  },
] as const;

export default function AIAndAutomationPage() {
  return (
    <div className="content-page">
      <Section className="border-b border-line pt-12 pb-12 md:pt-20 md:pb-24">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              AI & Automation
            </p>
            <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
              Teach your business to run itself.
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6 space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  Today, AI and automation can unlock enormous gains in efficiency, insight and productivity.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  But achieving meaningful results starts with laying the right groundwork. Jumping into automation
                  without clear processes, reliable data and a focused strategy can simply make existing problems
                  happen faster, without the possibility of ever really unlocking fifth gear.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                  We help you build the foundations first, identify where AI can create genuine value, and introduce
                  solutions that work for your business.
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Why it works</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                What automation feels like.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  The first few months are deliberately human. One of our engineers works alongside your team, mapping
                  workflows and building practical tools that unlock immediate productivity gains month after month.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  The result is real software that you own, built by us, that contains a tangible mapping of your
                  business logic.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  Old workflows full of manual toil, bottlenecks and pitfalls have been replaced with new workflows of
                  mostly high level decisions- the things you want an employee to decide.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  This is the moment to add Artificial Intelligence.
                </p>
                <p className="text-[15px] leading-relaxed text-muted md:text-[17px]">
                  We can embed Intelligence straight into the software- computer assisted decision making happens
                  silently in the background, workflows execute automatically, automated decisions unblock further
                  automated workflows- all of a sudden a days worth of old workflows just happened without you
                  realising- all you see is the decisions reserved for you as the result of finished work bubbles up
                  for you.
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">What this looks like</p>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                The capabilities we build into your business.
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
    </div>
  );
}
