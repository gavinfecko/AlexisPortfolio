import { cn } from "@/lib/cn";

/** Standard page gutter. `width` picks the measure. */
export default function Container({
  children,
  className,
  width = "default",
}: {
  children: React.ReactNode;
  className?: string;
  /** "prose" is a comfortable reading measure; "wide" is for image grids. */
  width?: "prose" | "default" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        width === "prose" && "max-w-2xl",
        width === "default" && "max-w-5xl",
        width === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
