import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function TermsPage() {
  return (
    <Section className="pt-12 md:pt-20">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Legal</p>
          <h1 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-tighter2 text-ink">
            Terms
          </h1>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[15px] leading-relaxed text-muted md:text-[16px]">
                This is a placeholder terms page. Replace with your company’s actual terms of service, including
                engagement terms, warranties, and limitations.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
