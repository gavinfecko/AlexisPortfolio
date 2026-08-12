"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/content/projects";
import ImageOverlay from "./ImageOverlay";

/** The case study cover — clickable, same viewer as the gallery below. */
export default function ZoomableCover({
  image,
  background,
}: {
  image: ProjectImage;
  background: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${image.alt}`}
        className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-sm ring-1 ring-line focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        style={{ backgroundColor: background }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
          className={
            image.fit === "cover"
              ? "object-cover"
              : "object-contain p-3 sm:p-12"
          }
        />
        <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-ink/75 px-3 py-1.5 text-xs text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {open && (
        <ImageOverlay
          images={[image]}
          index={0}
          onClose={() => setOpen(false)}
          onStep={() => {}}
        />
      )}
    </>
  );
}
