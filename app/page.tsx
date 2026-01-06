import Image from "next/image";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProcessSteps from "@/components/ProcessSteps";
import HardLink from "@/components/HardLink";
import CutCornerFrame from "@/components/CutCornerFrame";
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
                  We turn your ideas into software.
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Reed Solutions is a custom software studio delivering high-quality solutions for teams worldwide. 
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">We design, build, and maintain your software.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <CutCornerFrame cutPx={10} borderColor="rgba(247, 246, 242, 0.35)" borderWidthPx={1}>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
                    >
                      Get in touch
                    </Link>
                  </CutCornerFrame>

                  <CutCornerFrame cutPx={10} borderColor="#E8E5DD" borderWidthPx={1}>
                    <HardLink
                      href="/portfolio/"
                      className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm font-medium text-ink shadow-hairline transition-colors hover:bg-white/80"
                    >
                      See our work
                    </HardLink>
                  </CutCornerFrame>
                </div>
              </Reveal>
            </div>

            <Reveal className="md:col-span-6" delay={0.08}>
              <CutCornerFrame className="aspect-[4/3] bg-canvas" cutPx={12} borderColor="#E8E5DD" borderWidthPx={1}>
                <Image
                  src="/images/stock3.png"
                  alt="Professionals collaborating on software delivery."
                  fill
                  priority
                  className="object-contain p-6"
                  sizes="(min-width: 768px) 50vw, 92vw"
                />
              </CutCornerFrame>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <CutCornerFrame className="mt-12 overflow-hidden bg-white/70" cutPx={10} borderColor="#E8E5DD" borderWidthPx={1}>
              <div className="h-1.5 bg-brand-yellow" style={{ clipPath: 'polygon(0 10px, 10px 0, 100% 0, 100% 100%, 0 100%)' }} />
              <div className="px-6 py-10 md:px-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
                  {[
                    {
                      title: "Built together",
                      copy: "You can be as hands-on or hands-off as you like. We work closely with you and adapt quickly as needs change.",
                    },
                    {
                      title: "Long-term support",
                      copy: "We continue to evolve and improve your software as your requirements grow.",
                    },
                    {
                      title: "Built with your budget in mind",
                      copy: "We focus on what delivers real value, avoiding unnecessary complexity and wasted spend.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="md:px-6">
                      <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                      <p className="mt-2 text-sm text-muted">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CutCornerFrame>
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
                title: "Web development",
                copy: "Web apps, internal tools, and APIs - built to last and easy to own.",
                href: "/product-development",
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
                title: "Mobile development",
                copy: "iOS and Android apps that feel fast, polished, and easy to evolve.",
                href: "/mobile-development",
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
                    <path d="M8 4h8" />
                    <path d="M9 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                    <path d="M11 17h2" />
                  </svg>
                ),
              },
              {
                title: "Integrations",
                copy: "Bring your tools and platforms together into a single, coherent system.",
                href: "/integrations",
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
            ].map((item) => (
              <CutCornerFrame
                key={item.title}
                className="md:col-span-4"
                cutPx={12}
                borderColor="#E8E5DD"
                borderWidthPx={1}
              >
                <HardLink
                  href={item.href}
                  className="group relative block bg-white/60 p-6 pb-14 shadow-hairline transition-shadow hover:shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-brand-yellow/40 bg-brand-yellow/20">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
                  <span className="sr-only">Open {item.title}</span>
                  <span className="absolute bottom-5 right-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-hairline transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110 group-hover:shadow-lift motion-reduce:transition-none motion-reduce:transform-none">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h12" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </HardLink>
              </CutCornerFrame>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-accent py-16 text-canvas md:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-canvas/70">How we do it</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tightish md:text-6xl">
              Our approach
            </h2>
            <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-canvas/70 md:text-base">
              A straightforward delivery approach, keeping things clear along the way.
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
            <CutCornerFrame className="relative bg-white/60 p-8 shadow-hairline md:p-10" cutPx={12} borderColor="#E8E5DD" borderWidthPx={1}>
              <span aria-hidden="true" className="absolute -top-3 left-8 h-1.5 w-20 bg-brand-yellow md:left-10" />
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
                  <CutCornerFrame cutPx={10} borderColor="rgba(247, 246, 242, 0.35)" borderWidthPx={1}>
                    <Link
                      href={`mailto:${contactEmail}?subject=Hello%20Reed%20Solutions`}
                      className="inline-flex w-full items-center justify-center bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark md:w-auto"
                    >
                      Email us
                    </Link>
                  </CutCornerFrame>
                </div>
              </div>
            </CutCornerFrame>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
