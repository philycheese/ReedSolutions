import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Reed Solutions. St. Gallen, Switzerland.</p>
        <div className="flex gap-4">
          <Link className="transition hover:text-ink" href="/work">
            Work
          </Link>
          <Link className="transition hover:text-ink" href="/contact">
            Contact
          </Link>
          <a className="transition hover:text-ink" href="mailto:hello@reedsolutions.ch">
            hello@reedsolutions.ch
          </a>
        </div>
      </div>
    </footer>
  );
}
