import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Insight } from "@/lib/content";

export default function ArticleCard({ article, delay = 0 }: { article: Insight; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/insights/${article.slug}`}
        className="group block rounded-lg border border-line bg-white/50 p-6 shadow-hairline transition-colors hover:bg-white"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {new Date(article.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-tightish">{article.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink">
          Read <span aria-hidden="true">→</span>
        </p>
      </Link>
    </Reveal>
  );
}

