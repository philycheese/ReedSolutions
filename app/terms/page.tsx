import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function TermsPage() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tightish md:text-5xl">Terms</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            This is a placeholder terms page. Replace with your company’s actual terms of service, including
            engagement terms, warranties, and limitations.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

