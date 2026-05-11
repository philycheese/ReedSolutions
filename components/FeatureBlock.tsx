import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Reveal from "@/components/Reveal";

type FeatureBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  images: Array<{ src: string; alt: string }>;
  flip?: boolean;
};

export default function FeatureBlock({
  eyebrow,
  title,
  description,
  href,
  images,
  flip = false,
}: FeatureBlockProps) {
  const [a, b] = images;

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-10 border-t border-ink pt-12 md:grid-cols-12 md:gap-12 md:pt-16",
        flip && "md:[&>*:first-child]:order-2",
      )}
    >
      <Reveal className="md:col-span-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
        <h3 className="mt-5 text-3xl font-medium tracking-tightish md:text-5xl md:leading-[1.02]">
          {title}
        </h3>
        <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-muted">
          {description}
        </p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-ink decoration-1 underline-offset-[6px] hover:decoration-2"
        >
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </Reveal>

      <Reveal className="md:col-span-7" delay={0.05}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden bg-line">
              <Image
                src={a?.src ?? "/images/hero.jpg"}
                alt={a?.alt ?? ""}
                fill
                className="object-cover grayscale"
                sizes="(min-width: 768px) 52vw, 92vw"
                priority={false}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-line">
              <Image
                src={b?.src ?? "/images/team.jpg"}
                alt={b?.alt ?? ""}
                fill
                className="object-cover grayscale"
                sizes="(min-width: 768px) 22vw, 92vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
