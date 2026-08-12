import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

export default function ProjectCard({
  project,
  priority = false,
  size = "default",
}: {
  project: Project;
  /** Set on the first card so the cover image isn't lazy-loaded. */
  priority?: boolean;
  size?: "default" | "large";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus:outline-none"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-sm bg-surface ring-1 ring-line transition-shadow duration-500 group-hover:shadow-[0_18px_50px_-24px_rgba(28,25,23,0.45)] group-focus-visible:ring-2 group-focus-visible:ring-accent",
          size === "large" ? "aspect-[4/3]" : "aspect-[4/3]",
        )}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={
            size === "large"
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          priority={priority}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="eyebrow">{project.client}</span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3
          className={cn(
            "display-tight mt-2",
            size === "large" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-[1.75rem]",
          )}
        >
          {project.title}
        </h3>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
          View case study
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
