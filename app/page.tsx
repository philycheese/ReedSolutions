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
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">We design, build, and maintain your software.
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
              systems, or modernising an existing project, reach out.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            {[
              {
                title: "Product development",
                copy: "Web apps, internal tools, and APIs - designed for long-term ownership.",
                icon: (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
                    <path d="M8 19v-2m8 2v-2" />
                    <path d="M7 9h10" />
                  </svg>
                ),
              },
              {
                title: "Integrations",
                copy: "Connect billing, CRM, analytics, and internal systems with reliable interfaces.",
                icon: (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a4 4 0 0 1 0-6l1.2-1.2a4 4 0 0 1 5.6 5.6L16 12" />
                    <path d="M14 11a4 4 0 0 1 0 6l-1.2 1.2a4 4 0 0 1-5.6-5.6L8 12" />
                  </svg>
                ),
              },
              {
                title: "Cloud & modernisation",
                copy: "Improve performance, security, and operability without unnecessary rewrites.",
                icon: (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.5 18h9a4 4 0 0 0 .4-7.98A6 6 0 0 0 5.2 12.2 3.5 3.5 0 0 0 7.5 18Z" />
                    <path d="M12 10v6" />
                    <path d="M9.5 13.5 12 16l2.5-2.5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-line bg-white/60 p-6 shadow-hairline transition-shadow hover:shadow-lift md:col-span-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/15 bg-accent/10">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
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
