import { ButtonLink } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="rounded-3xl border bg-white/80 p-8 text-center shadow-subtle">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Next step</p>
      <h2 className="mt-3 text-3xl font-semibold">Ready when you are.</h2>
      <p className="mt-3 text-muted">
        Send a note to hello@reedsolutions.ch or drop time on the calendar. Based in St. Gallen, working with
        teams across Switzerland and the UK.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <ButtonLink href="mailto:hello@reedsolutions.ch" variant="primary">
          Email
        </ButtonLink>
        <ButtonLink href="https://calendly.com/placeholder" variant="ghost">
          Calendly link
        </ButtonLink>
      </div>
    </section>
  );
}
