import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProcessSteps from "@/components/ProcessSteps";
import HeroAnimation from "@/components/HeroAnimation";
import Typewriter from "@/components/Typewriter";
import HoverPreviewList from "@/components/HoverPreviewList";
import { contactEmail } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Section className="flex min-h-[calc(100svh-62px)] items-center border-b border-line pt-12 pb-12 md:pt-20 md:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-10">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Reed Solutions
              </p>
              <h1 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
                <Typewriter text="We turn your business into software." />
              </h1>
            </div>

            <Reveal className="md:col-span-5" delay={0.08}>
              <div className="relative aspect-square bg-canvas">
                <HeroAnimation className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="mission" className="scroll-mt-24 border-b border-line pt-32 pb-24 md:pt-48 md:pb-40">
        <Container>
          <Reveal>
            <div className="max-w-[62ch]">
              <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1] tracking-tighter2">
                Our mission
              </h2>

              <div className="mt-12 space-y-5 text-[15px] leading-[1.7] text-muted md:mt-16 md:space-y-6 md:text-[17px] md:leading-[1.7]">
                <p>
                  Every business runs on a concept, tools, and know-how to carry out that concept.
                </p>
                <p>
                  Your value is in the decisions your employees repeat and the work they carry out every day to turn inputs into outputs. But the value of your business should not be trapped in the heads of your workers, inboxes, spreadsheets, and disconnected systems.
                </p>
                <p>
                  In order to scale, you need efficient employees, working at a higher level of abstraction, free from toil and slow, error-prone workflows.
                </p>
                <p>
                  Reed Solutions helps businesses capture how work really gets done. We shadow employees, map workflows, understand the bottlenecks, and identify where manual effort is slowing your business down.
                </p>
                <p>
                  We build bespoke software, automation, and AI-assisted workflows that turn that know-how into reliable, repeatable systems. Systems that quietly connect with the tools you already use, reducing labour, and turning days of work into controllable automations.
                </p>
                <p className="text-ink">
                  Our mission is to make business know-how tangible: turning the value already inside your team into software that makes work faster, clearer, and easier to scale.
                </p>
                <p className="text-ink">
                  Work with us to turn your business into software and empower your employees.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-24 md:mt-40">
            <HoverPreviewList
              items={[
                {
                  index: "01",
                  title: "AI & Automation",
                  meta: "Service",
                  href: "/ai-and-automation",
                  preview: { src: "/images/gpthero.png", alt: "AI & Automation" },
                },
                {
                  index: "02",
                  title: "Integrations",
                  meta: "Service",
                  href: "/integrations",
                  preview: { src: "/images/integrations.jpg", alt: "Integrations" },
                },
                {
                  index: "03",
                  title: "Web development",
                  meta: "Service",
                  href: "/product-development",
                  preview: { src: "/images/product.jpg", alt: "Web development" },
                },
                {
                  index: "04",
                  title: "See our work",
                  meta: "Portfolio",
                  href: "/portfolio/",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section className="border-b border-line bg-ink py-20 text-canvas md:py-32">
        <Container>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.18em] text-canvas/60">
              How we do it
            </p>
            <h2 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2">
              Our approach.
            </h2>
            <p className="mt-8 max-w-[60ch] text-[15px] leading-relaxed text-canvas/75 md:text-base">
              A straightforward delivery approach, keeping things clear along the way.
            </p>
          </Reveal>

          <div className="mt-16">
            <ProcessSteps variant="dark" />
          </div>
        </Container>
      </Section>

      <Section id="contact" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  Contact
                </p>
                <h2 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2">
                  Want to talk?
                </h2>
                <p className="mt-8 max-w-[58ch] text-[15px] leading-relaxed text-muted md:text-base">
                  Send a note with what you’re building and what “success” looks like. We’ll reply with
                  a clear next step.
                </p>
              </div>

              <div className="md:col-span-4 md:justify-self-end">
                <Link
                  href={`mailto:${contactEmail}?subject=Hello%20Reed%20Solutions`}
                  className="inline-flex items-center justify-center bg-ink px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-canvas transition-colors hover:bg-canvas hover:text-ink hover:outline hover:outline-1 hover:-outline-offset-1 hover:outline-ink"
                >
                  Email us
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
