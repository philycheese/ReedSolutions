import Reveal from "@/components/Reveal";

export default function QuoteBlock() {
  return (
    <Reveal>
      <figure className="border-t border-ink pt-10 md:pt-14">
        <blockquote className="max-w-[60ch] text-3xl font-medium leading-[1.1] tracking-tightish md:text-5xl">
          “Reed Solutions delivered reliably and without drama. The engineering quality was obvious: clean
          interfaces, solid decisions, and a system we can confidently extend.”
        </blockquote>
        <figcaption className="mt-10 text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="text-ink">Alex Morgan</span> — Head of Product (client)
        </figcaption>
      </figure>
    </Reveal>
  );
}
