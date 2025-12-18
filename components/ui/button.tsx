import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BaseButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: BaseButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition",
        variant === "primary"
          ? "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90"
          : "bg-transparent text-ink hover:border-ink/60 hover:bg-white/80",
        className
      )}
      {...props}
    />
  );
}

type AnchorProps = ComponentPropsWithoutRef<"a">;

type ButtonLinkProps = LinkProps &
  Omit<AnchorProps, keyof LinkProps> & {
    variant?: "primary" | "ghost";
  };

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition",
        variant === "primary"
          ? "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90"
          : "bg-transparent text-ink hover:border-ink/60 hover:bg-white/80",
        className
      )}
      {...props}
    />
  );
}
