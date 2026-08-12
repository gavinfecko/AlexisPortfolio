"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { ProjectImage } from "@/content/projects";

/**
 * The full-screen viewer. Shared by the case study cover and the gallery
 * so there's exactly one implementation of the zoom behavior.
 *
 * Arrow keys and the on-screen controls step through `images`; Escape closes.
 */
export default function ImageOverlay({
  images,
  index,
  onClose,
  onStep,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };

    // Stop the page behind the overlay from scrolling.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onStep]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged artwork"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-4 text-paper/70">
        <span className="text-xs tabular-nums">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-full px-3 py-1 text-sm transition-colors hover:text-paper"
        >
          Close &times;
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-4 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onStep(-1)}
            aria-label="Previous image"
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-xl text-paper transition-colors hover:bg-paper/20 sm:left-6"
          >
            &larr;
          </button>
        )}

        <Image
          src={current.src}
          alt={current.alt}
          width={2000}
          height={1500}
          sizes="100vw"
          className="max-h-full w-auto max-w-full object-contain"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onStep(1)}
            aria-label="Next image"
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-xl text-paper transition-colors hover:bg-paper/20 sm:right-6"
          >
            &rarr;
          </button>
        )}
      </div>

      {current.caption && (
        <p
          onClick={(e) => e.stopPropagation()}
          className="mx-auto max-w-3xl px-6 pb-8 text-center text-sm leading-relaxed text-paper/70"
        >
          {current.caption}
        </p>
      )}
    </div>
  );
}
