import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="space-y-8">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono text-muted shadow-subtle">
        <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
        Available for new projects from July 2024
      </div>
      <div className="space-y-6 md:grid md:grid-cols-[3fr,2fr] md:items-start md:gap-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Reed Solutions</p>
          <h1 className="text-4xl font-semibold leading-tight text-balance md:text-5xl">
            Custom software, thoughtfully engineered.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Switzerland-based studio delivering secure platforms for operations, payments, and customer
            experience—tailored to the way your business works today and where it needs to go next.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="rounded-3xl border bg-white/80 p-4 shadow-subtle">
            <div className="rounded-2xl border bg-canvas/80 p-3">
              <Image
                src="/grid.svg"
                width={400}
                height={240}
                alt="Signal of technical grid-based planning"
                className="h-auto w-full rounded-xl border object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted">Systems thinking, delivered calmly.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="mailto:hello@reedsolutions.ch" variant="primary">
          Email Reed Solutions
        </ButtonLink>
        <ButtonLink href="/work" variant="ghost">
          See work
        </ButtonLink>
        <ButtonLink href="/contact" variant="ghost">
          Book a call
        </ButtonLink>
      </div>
    </section>
  );
}
