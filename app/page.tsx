import Image from "next/image";
import Link from "next/link";
import Section, { Container } from "@/components/Section";
import FeatureBlock from "@/components/FeatureBlock";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { caseStudies, contactEmail, insights, services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <Container>
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <Reveal>
                <h1 className="text-4xl font-semibold tracking-tightish md:text-6xl">
                  Reed Solutions builds software that ships.
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  We deliver custom product engineering, integrations, and cloud systems for growing
                  businesses—senior-led, pragmatic, and built for long-term ownership.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`mailto:${contactEmail}?subject=Book%20a%20call%20with%20Reed%20Solutions`}
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark"
                  >
                    Book a call
                  </Link>
                  <Link
                    href="/#work"
                    className="inline-flex items-center justify-center rounded-lg border border-accent/35 bg-transparent px-5 py-3 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-white/50"
                  >
                    View our work
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
            <div className="mt-14 grid grid-cols-1 gap-4 border-y border-line py-10 md:grid-cols-12 md:gap-0">
              {[
                { title: "Senior engineers", copy: "Small team, high ownership." },
                { title: "Fast iterations", copy: "Short cycles, visible progress." },
                { title: "Clean architecture", copy: "Maintainable systems, not hacks." },
                { title: "Transparent delivery", copy: "Clear scope, honest tradeoffs." },
              ].map((item) => (
                <div key={item.title} className="md:col-span-3 md:px-6">
                  <p className="text-sm font-semibold tracking-tightish">{item.title}</p>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="services" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Services</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                  Engineering built around outcomes.
                </h2>
              </div>
              <p className="md:col-span-5 md:justify-self-end md:text-right text-sm leading-relaxed text-muted">
                We partner with teams who value speed and correctness—then ship systems that keep working.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
            {services.map((s, idx) => (
              <FeatureBlock
                key={s.title}
                eyebrow={s.eyebrow}
                title={s.title}
                description={s.description}
                href={s.href}
                images={[...s.images]}
                flip={idx % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="work" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Selected work
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                  Systems that stay shippable.
                </h2>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                className="md:col-span-4"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="process" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Process</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                  Discover → Design → Build → Operate
                </h2>
              </div>
              <p className="md:col-span-5 md:text-right text-sm leading-relaxed text-muted">
                Practical delivery that keeps decisions explicit and progress visible.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <QuoteBlock />
        </Container>
      </Section>

      <Section id="insights" className="scroll-mt-24">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Insights</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                  Notes from the build room.
                </h2>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink"
              >
                View all insights <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            {insights.map((article, idx) => (
              <div key={article.slug} className="md:col-span-4">
                <ArticleCard article={article} delay={idx * 0.05} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="about" className="scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tightish md:text-4xl">
                Senior-led. Remote-first. Delivery-focused.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Reed Solutions is a premium custom software studio working with teams across Switzerland
                and the UK. We bring senior engineering judgment to products, integrations, and cloud
                systems—then leave you with software that’s easy to own.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { title: "Clarity", copy: "Explicit scope and decisions." },
                  { title: "Craft", copy: "Quality that compounds." },
                  { title: "Ownership", copy: "We build like we’ll run it." },
                ].map((v) => (
                  <div key={v.title} className="rounded-lg border border-line bg-white/50 p-5 shadow-hairline">
                    <p className="text-sm font-semibold tracking-tightish">{v.title}</p>
                    <p className="mt-2 text-sm text-muted">{v.copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="md:col-span-6" delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white shadow-hairline">
                <Image
                  src="/images/team.jpg"
                  alt="Team working together on a project."
                  fill
                  className="object-cover grayscale-[25%] contrast-110"
                  sizes="(min-width: 768px) 50vw, 92vw"
                />
              </div>
            </Reveal>
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
                    Ready to build something durable?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Share your context and constraints. We’ll respond with a clear next step—no sales theatre.
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    Email:{" "}
                    <Link className="text-ink underline underline-offset-4" href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </Link>
                  </p>
                </div>

                <div className="md:col-span-4 md:justify-self-end">
                  <Link
                    href={`mailto:${contactEmail}?subject=Book%20a%20call%20with%20Reed%20Solutions`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white shadow-hairline transition-colors hover:bg-accent-dark md:w-auto"
                  >
                    Book a call
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
