import Link from "next/link";
import { Container } from "@/components/Section";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="group inline-flex items-baseline gap-2">
              <span className="text-lg font-semibold tracking-tightish">Reed Solutions</span>
              <span className="hidden text-xs text-muted md:inline">
                Custom software studio
              </span>
            </Link>

            <Link
              href="#main"
              className="sr-only focus:not-sr-only focus:rounded-md focus:bg-white/70 focus:px-3 focus:py-2"
            >
              Skip to content
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
