import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Insight } from "@/lib/content";

export default function ArticleCard({ article, delay = 0 }: { article: Insight; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/insights/${article.slug}`}
        className="group block border-t border-ink py-8"
      >
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
          {new Date(article.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
        <h3 className="mt-4 text-2xl font-medium tracking-tightish md:text-3xl">
          {article.title}
        </h3>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-ink decoration-1 underline-offset-[6px] group-hover:decoration-2">
          Read <span aria-hidden="true">→</span>
        </p>
      </Link>
    </Reveal>
  );
}
