import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Section";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Reed Solutions",
  description: "Contact Reed Solutions in Switzerland.",
};

export default function ContactPage() {
  return (
    <section className="brand-surface flex min-h-[calc(100svh-69px)] items-center">
      <Container className="text-center">
        <h1 className="text-[clamp(1.35rem,5.5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          <Link
            href={`mailto:${contactEmail}`}
            className="text-[var(--brand-text)] transition-opacity hover:opacity-70"
          >
            {contactEmail}
          </Link>
        </h1>
        <p className="mt-8 text-[15px] text-[var(--brand-faint)]">based in Switzerland</p>
      </Container>
    </section>
  );
}
