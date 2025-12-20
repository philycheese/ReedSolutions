import Link from "next/link";
import { Container } from "@/components/Section";
import { contactEmail } from "@/lib/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2 text-sm">
            <p className="font-semibold tracking-tightish">Reed Solutions</p>
            <p className="text-muted">© {year}. All rights reserved.</p>
          </div>

          <div className="space-y-2 text-sm md:text-right">
            <Link className="font-semibold text-muted hover:text-ink" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </Link>
            <p className="text-muted">St. Gallen, Switzerland</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

