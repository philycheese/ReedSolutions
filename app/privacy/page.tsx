import Section, { Container } from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function PrivacyPage() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tightish md:text-5xl">Privacy</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            This is a placeholder privacy policy page. Replace with your company’s actual privacy policy and
            any regional compliance details relevant to your operations.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

