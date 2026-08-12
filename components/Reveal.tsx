"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Falls back to simply visible if IntersectionObserver is unavailable,
 * and the CSS honours prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={
        shown && delay ? { ...style, transitionDelay: `${delay}ms` } : style
      }
      className={cn(shown ? "reveal-in" : "reveal-init", className)}
    >
      {children}
    </Tag>
  );
}
