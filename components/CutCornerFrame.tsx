import { cn } from "@/lib/cn";

type CutCornerFrameProps = React.PropsWithChildren<{
  className?: string;
  /** Kept for backwards-compatibility; ignored in the flat Swiss redesign. */
  cutPx?: number;
  /** Border color as a CSS color string. Pass `"transparent"` or `"none"` to suppress the border. */
  borderColor?: string;
  /** Border width in px. */
  borderWidthPx?: number;
}>;

/**
 * Originally rendered a clipped rectangle with a non-scaling SVG outline.
 * For the flat Swiss redesign this renders a plain rectangle with an optional
 * hairline border. The original prop signature is preserved so call sites
 * across the marketing site keep working unchanged.
 */
export default function CutCornerFrame({
  className,
  borderColor = "#E5E5E5",
  borderWidthPx = 1,
  children,
}: CutCornerFrameProps) {
  const showBorder =
    borderColor && borderColor !== "transparent" && borderColor !== "none";

  return (
    <div
      className={cn("relative", className)}
      style={
        showBorder
          ? {
              border: `${borderWidthPx}px solid ${borderColor}`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
