import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/content";

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Case study</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tightish md:text-5xl">{study.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{study.outcome}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-line bg-white/60 px-2 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-lg border border-line bg-white shadow-hairline">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              className="object-cover grayscale-[25%] contrast-110"
              sizes="(min-width: 1024px) 80vw, 92vw"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-xl font-semibold tracking-tightish">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This is a placeholder case study route. Replace this content with your real client context,
                constraints, and delivery narrative (what we built, why it mattered, and how it’s measured).
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-lg border border-line bg-white/50 p-6 shadow-hairline">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Next</p>
                <p className="mt-3 text-sm text-muted">
                  Want a similar outcome?{" "}
                  <Link href="/#contact" className="text-ink underline underline-offset-4">
                    Book a call
                  </Link>
                  .
                </p>
                <p className="mt-4 text-sm text-muted">
                  Or{" "}
                  <Link href="/" className="text-ink underline underline-offset-4">
                    return home
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

