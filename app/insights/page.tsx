import Link from "next/link";
import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ArticleCard from "@/components/ArticleCard";
import { insights } from "@/lib/content";

export default function InsightsIndexPage() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Insights</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tightish md:text-5xl">
            Engineering notes, practical by design.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Short articles on shipping, integrations, and operating cloud systems. Replace these placeholders
            with your real posts when ready.
          </p>
          <p className="mt-6 text-sm">
            <Link href="/" className="underline underline-offset-4">
              Back to home
            </Link>
          </p>
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
  );
}

