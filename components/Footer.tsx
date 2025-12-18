import Link from "next/link";
import { Container } from "@/components/Section";
import { contactEmail } from "@/lib/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold tracking-tightish">Reed Solutions</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Premium product engineering, integrations, and cloud systems—built by senior engineers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Services</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-ink" href="/#services">
                    Product Engineering
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-ink" href="/#services">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-ink" href="/#services">
                    Cloud & Modernisation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Contact</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-ink" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-ink" href="/#contact">
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Links</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-ink" href="/privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted hover:text-ink" href="/terms">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© {year} Reed Solutions. All rights reserved.</p>
          <p>Remote-first. Switzerland / UK-friendly.</p>
        </div>
      </Container>
    </footer>
  );
}

