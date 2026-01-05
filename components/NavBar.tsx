import { Container } from "@/components/Section";
import HardLink from "@/components/HardLink";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <Container className="py-3">
        <div className="relative flex items-center justify-center">
          <HardLink href="/" className="group inline-flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tightish">Reed Solutions</span>
            <span className="hidden text-xs text-muted md:inline">Custom software studio</span>
          </HardLink>

          <HardLink
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:bg-white/70 focus:px-3 focus:py-2"
          >
            Skip to content
          </HardLink>
        </div>
      </Container>
    </header>
  );
}
