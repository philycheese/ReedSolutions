import Image from "next/image";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import HardLink from "@/components/HardLink";
import { contactEmail } from "@/lib/content";

const projects = [
  {
    title: "Indi - revolutionary personal care platform",
    summary:
      "A modern care platform that brings budget management and Personal Assistant coordination together. Indi replaces fragmented tools with clear financial oversight and simple communication. Built to grow alongside real-world care needs.",
    tags: ["Next.js", "Serverless", "Cloud"],
    image: { src: "/images/indi.png", alt: "Abstract placeholder screenshot for an operations dashboard." },
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
              A few example projects to show the kind of work we do. These are placeholders for now —
              we can replace them with real case studies as you share what’s okay to publish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HardLink
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
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
              <Reveal key={project.title} className="md:col-span-4" delay={idx * 0.05}>
                <div className="group overflow-hidden rounded-lg border-4 border-accent/20 bg-white/60 shadow-hairline transition-colors transition-shadow hover:border-accent/40 hover:shadow-lift">
                  <div className="relative aspect-[16/10] border-b border-accent/15">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover grayscale-[35%] contrast-110 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 30vw, 92vw"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h2 className="text-lg font-semibold tracking-tightish">{project.title}</h2>
                    <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-line bg-canvas px-2 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
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
                    Tell us what you’re building and we’ll share the closest work we can (including details
                    we don’t publish publicly).
                  </p>
                </div>

                <div className="md:col-span-4 md:justify-self-end">
                  <HardLink
                    href={`mailto:${contactEmail}?subject=Portfolio%20request`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark md:w-auto"
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


