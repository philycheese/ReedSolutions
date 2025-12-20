import Image from "next/image";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProcessSteps from "@/components/ProcessSteps";
import { contactEmail } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-10">
            <div className="md:col-span-6">
              <Reveal>
                <h1 className="text-4xl font-semibold tracking-tightish md:text-6xl">
                  Custom software, built with you.
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Reed Solutions is a Swiss-based software studio delivering high-quality custom solutions for teams worldwide. 
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">We design, build, and maintain software.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
                  >
                    Get in touch
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal className="md:col-span-6" delay={0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white shadow-hairline">
                <Image
                  src="/images/hero.jpg"
                  alt="Professionals collaborating on software delivery."
                  fill
                  priority
                  className="object-cover grayscale-[25%] contrast-110"
                  sizes="(min-width: 768px) 50vw, 92vw"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-1 gap-4 border-y border-line py-8 md:grid-cols-3 md:gap-0">
            {[{
                title: "Built together",
                copy: "You can be as hands-on or hands-off as you like. we work closely with you and adapt quickly as needs change."
              },
              {
                title: "Long-term support",
                copy: "We continue to evolve and improve your software as your requirements grow."
              },
              {
                title: "Built with your budget in mind",
                copy: "We focus on what delivers real value, avoiding unnecessary complexity and wasted spend."
              }].map((item) => (
                <div key={item.title} className="md:px-6">
                  <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="scroll-mt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">What we do</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
              Build, integrate, and modernise.
            </h2>
            <p className="mt-4 max-w-[700px] text-sm leading-relaxed text-muted">
              If you need help building software, integrating
              systems, or modernising an existing codebase, reach out.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            {[
              {
                title: "Product development",
                copy: "Web apps, internal tools, and APIs — designed for long-term ownership.",
              },
              {
                title: "Integrations",
                copy: "Connect billing, CRM, analytics, and internal systems with reliable interfaces.",
              },
              {
                title: "Cloud & modernisation",
                copy: "Improve performance, security, and operability without unnecessary rewrites.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-line bg-white/50 p-6 shadow-hairline md:col-span-4"
              >
                <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-accent py-16 text-canvas md:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-canvas/70">How we do it</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tightish md:text-6xl">
              How we do it
            </h2>
            <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-canvas/70 md:text-base">
              A straightforward delivery approach that keeps scope clear, communication simple, and
              quality high.
            </p>
          </Reveal>

          <div className="mt-12">
            <ProcessSteps variant="dark" />
          </div>
        </Container>
      </Section>

      <Section id="contact" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-line bg-white/60 p-8 shadow-hairline md:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <h2 className="text-3xl font-semibold tracking-tightish md:text-4xl">
                    Want to talk?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Send a note with what you’re building and what “success” looks like. We’ll reply with
                    a clear next step.
                  </p>
                </div>

                <div className="md:col-span-4 md:justify-self-end">
                  <Link
                    href={`mailto:${contactEmail}?subject=Hello%20Reed%20Solutions`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark md:w-auto"
                  >
                    Email us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
