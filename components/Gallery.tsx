"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { ProjectImage } from "@/content/projects";
import ImageOverlay from "./ImageOverlay";
import { cn } from "@/lib/cn";

/**
 * The "The work" grid. Every image opens full screen, and once open you can
 * step through the whole set — including the cover, which is passed in as
 * `leadImage` so the viewer covers everything on the page.
 */
export default function Gallery({
  images,
  leadImage,
}: {
  images: ProjectImage[];
  /** The case study cover, so it's reachable from the viewer too. */
  leadImage?: ProjectImage;
}) {
  const all = leadImage ? [leadImage, ...images] : images;
  const offset = leadImage ? 1 : 0;

  const [openAt, setOpenAt] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) =>
      setOpenAt((i) => (i === null ? i : (i + delta + all.length) % all.length)),
    [all.length],
  );

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {images.map((image, i) => (
          <figure
            key={image.src + i}
            className={cn(image.span === "full" && "sm:col-span-2")}
          >
            <button
              type="button"
              onClick={() => setOpenAt(i + offset)}
              aria-label={`Enlarge: ${image.alt}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm bg-surface ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_18px_50px_-24px_rgba(28,25,23,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1200}
                sizes={
                  image.span === "full"
                    ? "(max-width: 1280px) 100vw, 1280px"
                    : "(max-width: 768px) 100vw, 640px"
                }
                className="h-auto w-full object-contain"
              />
              <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-ink/75 px-3 py-1.5 text-xs text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                Click to enlarge
              </span>
            </button>
            {image.caption && (
              <figcaption className="mt-2.5 text-sm leading-relaxed text-muted">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {openAt !== null && (
        <ImageOverlay
          images={all}
          index={openAt}
          onClose={() => setOpenAt(null)}
          onStep={step}
        />
      )}
    </>
  );
}
