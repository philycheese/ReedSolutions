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
        "grid grid-cols-1 items-start gap-10 border-t border-line pt-10 md:grid-cols-12 md:gap-12 md:pt-14",
        flip && "md:[&>*:first-child]:order-2",
      )}
    >
      <Reveal className="md:col-span-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tightish md:text-3xl">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink"
        >
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </Reveal>

      <Reveal className="md:col-span-7" delay={0.05}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white shadow-hairline">
              <Image
                src={a?.src ?? "/images/hero.jpg"}
                alt={a?.alt ?? ""}
                fill
                className="object-cover grayscale-[35%] contrast-110"
                sizes="(min-width: 768px) 52vw, 92vw"
                priority={false}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line bg-white shadow-hairline">
              <Image
                src={b?.src ?? "/images/team.jpg"}
                alt={b?.alt ?? ""}
                fill
                className="object-cover grayscale-[35%] contrast-110"
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

