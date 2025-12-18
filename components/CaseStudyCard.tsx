import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Reveal from "@/components/Reveal";
import type { CaseStudy } from "@/lib/content";

export default function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <Reveal className={cn(className)}>
      <Link
        href={`/work/${study.slug}`}
        className={cn(
          "group block overflow-hidden rounded-lg border border-line bg-white/60 shadow-hairline",
          "transition-colors hover:bg-white",
        )}
      >
        <div className="relative aspect-[16/10] border-b border-line">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            className="object-cover grayscale-[35%] contrast-110 transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 30vw, 92vw"
          />
        </div>
        <div className="space-y-3 p-5">
          <h3 className="text-lg font-semibold tracking-tightish">{study.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{study.outcome}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-line bg-canvas px-2 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

