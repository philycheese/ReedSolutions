import Link from "next/link";
import { notFound } from "next/navigation";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { insights } from "@/lib/content";

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tightish md:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{post.excerpt}</p>

          <div className="mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
            <p>
              This is a placeholder article route. Swap in real content (MDX, CMS, or static files) when you
              publish your insights.
            </p>
            <p>
              <Link href="/insights" className="text-ink underline underline-offset-4">
                View all insights
              </Link>
              {" · "}
              <Link href="/" className="text-ink underline underline-offset-4">
                Home
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

