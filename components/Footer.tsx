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
              Custom software development for teams that want a small, senior-led partner.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:text-right">
            <div className="col-span-2 justify-self-end space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Contact</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-muted hover:text-ink" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© {year} Reed Solutions. All rights reserved.</p>
          <p>St. Gallen, Switzerland</p>
        </div>
      </Container>
    </footer>
  );
}

