import Image from "next/image";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";
import PortfolioTile from "@/components/PortfolioTile";
import { contactEmail } from "@/lib/content";

const projects = [
  {
    title: "Indi - revolutionary personal care platform",
    summary:
      "A modern care platform that brings budget management and Personal Assistant coordination together. Indi replaces fragmented tools with clear financial oversight and simple communication. Built to grow alongside real-world care needs.",
    tags: ["Web App", "Next.js", "Serverless", "Cloud"],
    image: { src: "/images/indi.png", alt: "Abstract placeholder screenshot for an operations dashboard." },
    details:
      "Indi is a personal care management platform designed to give clients clarity, control, and confidence over their care budgets and support networks.\n\nThe app brings together financial oversight and human coordination in one place. Clients can track their care budget in real time, understand where money is being spent, and manage payments without friction. At the same time, they can meet, organise, and communicate with Personal Assistants (PAs), keeping day-to-day care simple and transparent.\n\nIndi focuses on calm, readable design and practical workflows: clear budget visualisation, straightforward payment history, and intuitive contact and group management. Rather than overwhelming users with complexity, it surfaces the information that matters most, when it matters.\n\nBuilt as a foundation for long-term growth, the platform is designed to evolve alongside changing care needs — supporting ongoing development, new features, and deeper integrations without locking users into rigid systems.\n\nThis project demonstrates how thoughtful UX, robust data handling, and scalable architecture can come together to solve real, human problems through custom software.",
  }
] as const;

export default function PortfolioPage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Portfolio
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tightish md:text-6xl">
              Software we’ve built
            </h1>
            <p className="mt-6 max-w-[760px] text-sm leading-relaxed text-muted md:text-base">
             We're new here... but there's more to come.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HardLink
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-brand-yellow/90"
              >
                Get in touch
              </HardLink>
              <HardLink
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-white/80"
              >
                Back to home
              </HardLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {projects.map((project, idx) => (
              <PortfolioTile key={project.title} project={project} delay={idx * 0.05} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-line bg-white/60 p-8 shadow-hairline md:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <h2 className="text-3xl font-semibold tracking-tightish md:text-4xl">
                    Want to see relevant examples?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Tell us what you’re building and we’ll share the closest work we can.
                  </p>
                </div>

                <div className="md:col-span-4 md:justify-self-end">
                  <HardLink
                    href={`mailto:${contactEmail}?subject=Portfolio%20request`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-yellow px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-brand-yellow/90 md:w-auto"
                  >
                    Email us
                  </HardLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}


