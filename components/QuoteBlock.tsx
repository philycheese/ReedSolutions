import Reveal from "@/components/Reveal";

export default function QuoteBlock() {
  return (
    <Reveal>
      <figure className="rounded-lg border border-line bg-white/60 p-8 shadow-hairline md:p-10">
        <blockquote className="text-xl leading-snug tracking-tightish md:text-2xl">
          “Reed Solutions delivered reliably and without drama. The engineering quality was obvious: clean
          interfaces, solid decisions, and a system we can confidently extend.”
        </blockquote>
        <figcaption className="mt-6 text-sm text-muted">
          <span className="font-medium text-ink">Alex Morgan</span> — Head of Product (client)
        </figcaption>
      </figure>
    </Reveal>
  );
}

