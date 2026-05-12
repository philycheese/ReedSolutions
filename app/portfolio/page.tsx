import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";
import PortfolioTile from "@/components/PortfolioTile";
import Typewriter from "@/components/Typewriter";
import { contactEmail } from "@/lib/content";

const projects = [
  {
    title: "Indi - revolutionary personal care platform",
    summary:
      "A modern care platform that brings budget management and Personal Assistant coordination together. Indi replaces fragmented tools with clear financial oversight and simple communication. Built to grow alongside real-world care needs.",
    tags: ["Web App", "Next.js", "Serverless", "Cloud"],
    image: { src: "/images/indi.png", alt: "Abstract placeholder screenshot for an operations dashboard." },
    details:
      "Indi is an all in one personal care management platform designed to give clients with disabilities clarity, control, and confidence over their personal assistants, payroll, care budgets and support networks.\n\nThe app brings together financial oversight and human coordination in one place. Clients can track their care budget in real time, understand where money is being spent, and manage payments, payslips and HMRC compliance without barriers. At the same time, they can meet, organise, and communicate with Personal Assistants, keeping day-to-day care simple and transparent.\n\nIndi focuses on calm, readable design and practical workflows: clear budget visualisation, straightforward payment history, and intuitive contact and group management. Rather than overwhelming users with complexity, it surfaces the information that matters most, when it matters.\n\nBuilt as a foundation for long-term growth, the platform is designed to evolve alongside changing care needs- supporting ongoing development, new features, and deeper integrations without locking users into rigid systems.",
  },
  {
    title: "IP River - global connectivity platform",
    summary:
      "IP River is a global connectivity platform enabling partners to quote, provision, and manage business broadband and Ethernet services across multiple carriers worldwide.",
    tags: ["Connectivity", "API", "Automation", "AI"],
    image: { src: "/images/ipriver.png", alt: "IP River global connectivity platform dashboard." },
    details:
      "IP River is a global connectivity platform enabling partners to quote, provision, and manage business broadband and Ethernet services across multiple carriers worldwide. Through a unified portal and API-driven architecture, IP River aggregates 100+ suppliers into a single operational layer, giving wholesale and enterprise customers streamlined ordering, live tracking, diagnostics, and scalable global network deployment from one system.\n\nThrough our work with IP River, we are leading a strategic shift toward an AI-first, automation-driven operating model. We are architecting an API-centric \"automation spine,\" translating operational expertise into deterministic workflows, and layering intelligent orchestration on top to enable safe, auditable, and scalable execution. From automated supplier tracking and workflow standardisation to AI-assisted operations and custom internal tooling, our focus is on transforming manual processes into resilient, data-driven systems- positioning the business to thrive in an AI-native future.",
  }
] as const;

export default function PortfolioPage() {
  return (
    <>
      <Section className="border-b border-line pt-12 pb-12 md:pt-20 md:pb-24">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Portfolio</p>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
              <Typewriter text="Companies we're working with" />
            </h1>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-8 md:gap-x-10 md:gap-y-16">
            {projects.map((project, idx) => (
              <PortfolioTile key={project.title} project={project} delay={idx * 0.05} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-10 border-t border-ink pt-10 md:grid-cols-12 md:items-end md:pt-14">
              <div className="md:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Contact</p>
                <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.98] tracking-tighter2">
                  Want to see relevant examples?
                </h2>
                <p className="mt-8 max-w-[58ch] text-[15px] leading-relaxed text-muted md:text-base">
                  Tell us what you’re building and we’ll share the closest work we can.
                </p>
              </div>

              <div className="md:col-span-4 md:justify-self-end">
                <HardLink
                  href={`mailto:${contactEmail}?subject=Portfolio%20request`}
                  className="inline-flex items-center justify-center bg-ink px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-canvas transition-colors hover:bg-canvas hover:text-ink hover:outline hover:outline-1 hover:-outline-offset-1 hover:outline-ink"
                >
                  Email us
                </HardLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
