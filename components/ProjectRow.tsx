import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

/**
 * The editorial row used on the home page and /work — image on one side,
 * the pitch on the other, alternating direction down the page.
 *
 * Cover art is never cropped: it sits on the project's own tinted ground so
 * posters and billboards read at their true proportions.
 */
export default function ProjectRow({
  project,
  index,
  priority = false,
}: {
  project: Project;
  /** 0-based — drives the alternating direction and the big numeral. */
  index: number;
  priority?: boolean;
}) {
  const flipped = index % 2 === 1;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid items-center gap-8 sm:grid-cols-12 sm:gap-12"
    >
      {/* Artwork */}
      <div
        className={cn(
          "sm:col-span-7",
          flipped && "sm:order-2 sm:col-start-6",
        )}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-sm border transition-colors duration-500"
          style={{
            backgroundColor: project.accentWash,
            borderColor: `${project.accent}22`,
          }}
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 640px) 100vw, 58vw"
            priority={priority}
            className={cn(
              "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]",
              project.cover.fit === "cover"
                ? "object-cover"
                : "object-contain p-4 sm:p-10",
            )}
          />
        </div>
      </div>

      {/* Pitch */}
      <div
        className={cn(
          "sm:col-span-5",
          flipped && "sm:order-1 sm:col-start-1 sm:row-start-1",
        )}
      >
        <div className="flex items-center gap-4">
          <span
            className="display-tight text-5xl leading-none opacity-25 transition-opacity duration-500 group-hover:opacity-60 sm:text-6xl"
            style={{ color: project.accent }}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-wide"
            style={{
              backgroundColor: project.accentWash,
              color: project.accent,
            }}
          >
            {project.category}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-3">
          <span className="eyebrow">{project.client}</span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="display-tight mt-2 text-[clamp(1.9rem,3.4vw,2.75rem)]">
          {project.title}
        </h3>

        <p className="mt-2 font-display text-lg italic" style={{ color: project.accent }}>
          {project.tagline}
        </p>

        <p className="mt-4 leading-relaxed text-ink-soft">{project.summary}</p>

        <span
          className="mt-6 inline-flex items-center gap-2 border-b pb-1 text-sm transition-all duration-300"
          style={{ color: project.accent, borderColor: `${project.accent}44` }}
        >
          Read the case study
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
