import { Container } from "@/components/Section";
import HardLink from "@/components/HardLink";

export default function NavBar() {
  return (
    <header className="brand-surface sticky top-0 z-50 border-b border-[var(--brand-line)] backdrop-blur-md">
      <Container className="py-5">
        <div className="flex items-baseline justify-between gap-6">
          <HardLink href="/" className="inline-flex items-baseline gap-4">
            <span className="text-lg font-normal tracking-tightish text-[var(--brand-text)]">
              Reed Solutions
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-[var(--brand-faint)] md:inline">
              Custom software studio
            </span>
          </HardLink>

          <HardLink
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-[var(--brand-text)] focus:px-3 focus:py-2 focus:text-[var(--brand-bg)]"
          >
            Skip to content
          </HardLink>
        </div>
      </Container>
    </header>
  );
}
