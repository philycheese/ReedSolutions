"use client";

import { cn } from "@/lib/cn";

type HardLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  className?: string;
};

/**
 * Forces a full document navigation (useful for static exports where client routing can be flaky),
 * while still respecting Next's configured `basePath` at build time.
 */
export default function HardLink({ href, className, children, ...rest }: HardLinkProps) {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const resolvedHref = href.startsWith("/") ? `${basePath}${href}` : href;

  return (
    <a {...rest} href={resolvedHref} className={cn(className)}>
      {children}
    </a>
  );
}
