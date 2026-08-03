import Section, { Container } from "@/components/Section";
import Typewriter from "@/components/Typewriter";
import ParticleField from "@/components/ParticleField";
import MissionScrollScene from "@/components/MissionScrollScene";
import HeroScrollSnap from "@/components/HeroScrollSnap";

export default function HomePage() {
  return (
    <div className="home-redesign brand-surface relative">
      <HeroScrollSnap />
      <Section id="hero" className="relative z-10 flex min-h-[calc(100svh-69px)] items-center border-b border-[var(--brand-line)] py-16 [scroll-snap-align:start] [scroll-snap-stop:always]">
        <ParticleField className="fixed inset-x-0 top-[69px] h-[calc(100svh-69px)] w-full" />
        <Container className="relative z-10">
          <h1 className="mx-auto w-full max-w-[1120px] whitespace-nowrap text-[clamp(1rem,5vw,4.25rem)] font-light leading-[1.08] tracking-[-0.04em] text-[var(--brand-text)]">
            <Typewriter
              key="hero-particle-typewriter"
              text="We turn your business into software."
              typingSpeed={72}
              startDelay={650}
              syncParticles
            />
          </h1>
        </Container>
      </Section>

      <MissionScrollScene />
    </div>
  );
}
