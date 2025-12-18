import { cn } from "@/lib/cn";

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

type SectionProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

