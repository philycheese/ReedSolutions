import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Reed Solutions",
  description: "Email or schedule time with Reed Solutions in St. Gallen to discuss your custom software needs.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="text-4xl font-semibold">Let’s build your platform.</h1>
        <p className="max-w-2xl text-lg text-muted">
          Based in St. Gallen, collaborating with founders and operators across Switzerland and the UK. Email or
          book a short call and we’ll map your platform, integration, or workflow needs.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border bg-white/70 p-8">
          <h2 className="text-xl font-semibold">Contact form</h2>
          <p className="mt-2 text-sm text-muted">Email-only submission stub for quick context.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div className="rounded-3xl border bg-white/50 p-8">
          <h2 className="text-xl font-semibold">Direct</h2>
          <ul className="mt-4 space-y-4 text-sm text-muted">
            <li>
              Email <a className="text-ink underline" href="mailto:hello@reedsolutions.ch">hello@reedsolutions.ch</a>
            </li>
            <li>
              Calendly <a className="text-ink underline" href="https://calendly.com/placeholder">placeholder</a>
            </li>
            <li>Location: St. Gallen, Switzerland</li>
          </ul>
          <div className="mt-8 rounded-2xl border bg-canvas/80 p-6 font-mono text-xs text-muted">
            <p className="text-muted">Response time: under 1 business day.</p>
            <p className="mt-2">Timezone: CET / CEST.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
