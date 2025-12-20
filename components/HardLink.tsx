"use client";

import { cn } from "@/lib/cn";

type HardLinkProps = React.PropsWithChildren<{
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}>;

/**
 * Forces a full document navigation (useful for static exports where client routing can be flaky),
 * while still respecting Next's configured `basePath` at build time.
 */
export default function HardLink({ href, className, target, rel, children }: HardLinkProps) {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const resolvedHref = href.startsWith("/") ? `${basePath}${href}` : href;

  return (
    <a href={resolvedHref} className={cn(className)} target={target} rel={rel}>
      {children}
    </a>
  );
}


