import Link from "next/link";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Logo />
          <p className="hidden text-xs text-muted md:block">Custom software studio based in St. Gallen.</p>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="text-muted transition hover:text-ink" href="/">
            Home
          </Link>
          <Link className="text-muted transition hover:text-ink" href="/work">
            Work
          </Link>
          <Link className="text-muted transition hover:text-ink" href="/contact">
            Contact
          </Link>
          <ButtonLink href="/contact" variant="primary" className="hidden sm:inline-flex">
            Start a conversation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
