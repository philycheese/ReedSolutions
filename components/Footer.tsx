"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Section";
import { contactEmail } from "@/lib/content";

const year = new Date().getFullYear();

export default function Footer() {
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  if (normalizedPathname === "/" || normalizedPathname === "/contact") return null;

  return (
    <footer className="brand-surface relative z-30 border-t border-[var(--brand-line)]">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-faint)]">
              Reed Solutions
            </p>
            <p className="mt-4 text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[0.95] tracking-tighter2 text-[var(--brand-text)]">
              Switzerland
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <Link
              className="block text-[15px] text-[var(--brand-text)] underline decoration-[var(--brand-text)] decoration-1 underline-offset-[6px] hover:decoration-2"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--brand-line)] pt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--brand-faint)]">
          <span>© {year}. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}
