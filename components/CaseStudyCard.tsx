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
        className="group block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-line">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            className="object-cover grayscale transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 30vw, 92vw"
          />
        </div>
        <div className="mt-4 space-y-3">
          <h3 className="text-xl font-medium tracking-tightish md:text-2xl">
            {study.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-muted">
            {study.outcome}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.18em] text-muted"
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
