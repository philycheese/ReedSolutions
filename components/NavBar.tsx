"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { contactEmail, navItems } from "@/lib/content";
import { Container } from "@/components/Section";

function BookCallButton({ className }: { className?: string }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white",
        "shadow-hairline transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60",
        className,
      )}
      href={`mailto:${contactEmail}?subject=Book%20a%20call%20with%20Reed%20Solutions`}
    >
      Book a call
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const items = navItems;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="group inline-flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-tightish">Reed Solutions</span>
              <span className="hidden text-xs text-muted md:inline">
                Premium engineering studio
              </span>
            </Link>

            <Link
              href="#main"
              className="sr-only focus:not-sr-only focus:rounded-md focus:bg-white/70 focus:px-3 focus:py-2"
            >
              Skip to content
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all hover:after:w-full">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BookCallButton className="hidden md:inline-flex" />

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-white/60 px-3 py-2 text-sm text-ink shadow-hairline md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/25"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-line bg-canvas shadow-lift"
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <span className="text-sm font-semibold tracking-tightish">Reed Solutions</span>
                <button
                  type="button"
                  className="rounded-lg border border-line bg-white/60 px-3 py-2 text-sm"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="flex h-full flex-col justify-between px-6 py-6">
                <nav className="space-y-5" aria-label="Mobile primary">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-base text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-4">
                  <BookCallButton className="w-full" />
                  <p className="text-xs text-muted">
                    Prefer email?{" "}
                    <Link className="underline underline-offset-4" href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
