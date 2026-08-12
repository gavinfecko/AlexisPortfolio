import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import ZoomableCover from "@/components/ZoomableCover";
import CaseStudyNav, { type CaseSection } from "@/components/CaseStudyNav";
import { allProjects, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description: project.summary,
      images: [{ url: project.cover.src }],
    },
  };
}

const SECTIONS: CaseSection[] = [
  { id: "challenge", label: "The challenge" },
  { id: "insights", label: "What we found" },
  { id: "idea", label: "The big idea" },
  { id: "approach", label: "The approach" },
  { id: "work", label: "The work" },
  { id: "outcome", label: "What shipped" },
];

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = allProjects.findIndex((p) => p.slug === project.slug);
  const next = allProjects[(index + 1) % allProjects.length];
  const previous =
    allProjects[(index - 1 + allProjects.length) % allProjects.length];

  return (
    <>
      <CaseStudyNav sections={SECTIONS} accent={project.accent} />

      {/* Title block --------------------------------------------- */}
      <Container width="wide" className="pt-16 pb-12 sm:pt-24">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden>&larr;</span> All work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="rounded-full px-3 py-1 text-[0.7rem] font-medium"
              style={{
                backgroundColor: project.accentWash,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            <span className="eyebrow">{project.client}</span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>

          <h1 className="display-tight mt-5 max-w-4xl text-[clamp(2.5rem,7.5vw,5.5rem)]">
            {project.title}
          </h1>

          <p
            className="mt-6 max-w-2xl font-display text-xl italic sm:text-2xl"
            style={{ color: project.accent }}
          >
            {project.tagline}
          </p>
        </Reveal>
      </Container>

      {/* Cover ---------------------------------------------------- */}
      <Container width="wide">
        <Reveal>
          <ZoomableCover image={project.cover} background={project.accentWash} />
        </Reveal>
      </Container>

      {/* Meta ----------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal className="grid gap-10 border-y border-line py-12 sm:grid-cols-3">
          <div>
            <p className="eyebrow">My role</p>
            <p className="mt-3 text-ink">{project.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.context}
            </p>
          </div>

          {project.team && (
            <div>
              <p className="eyebrow">Team</p>
              <ul className="mt-3 space-y-1.5">
                {project.team.map((member) => (
                  <li key={member} className="text-sm text-ink-soft">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="eyebrow">Tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    backgroundColor: project.accentWash,
                    color: project.accent,
                  }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>

      {/* Challenge ------------------------------------------------ */}
      <Container width="wide" className="pt-16">
        <div
          id="challenge"
          className="grid scroll-mt-32 gap-12 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-16"
        >
          <Reveal>
            <p className="eyebrow sm:sticky sm:top-32">The challenge</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
              {project.challenge}
            </p>
            <div className="mt-10">
              <p className="eyebrow">Who we were talking to</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                {project.audience}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Insights ------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <div
          id="insights"
          className="grid scroll-mt-32 gap-12 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-16"
        >
          <Reveal>
            <p className="eyebrow sm:sticky sm:top-32">What we found</p>
          </Reveal>
          <div className="space-y-8">
            {project.insights.map((insight, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="flex gap-6 border-l-2 pl-6"
                  style={{ borderColor: `${project.accent}40` }}
                >
                  {insight.stat && (
                    <span
                      className="display-tight shrink-0 text-3xl sm:text-4xl"
                      style={{ color: project.accent }}
                    >
                      {insight.stat}
                    </span>
                  )}
                  <p className="max-w-2xl leading-relaxed text-ink-soft">
                    {insight.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      {/* Big idea ------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <div id="idea" className="scroll-mt-32">
          <Reveal
            className="rounded-sm px-8 py-16 sm:px-16 sm:py-24"
            style={{ backgroundColor: project.accent }}
          >
            <p className="eyebrow text-paper/70">The big idea</p>
            <p className="display-tight mt-6 max-w-4xl text-[clamp(1.75rem,4.5vw,3.25rem)] text-paper">
              {project.bigIdea}
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Approach ------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <div
          id="approach"
          className="grid scroll-mt-32 gap-12 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-16"
        >
          <Reveal>
            <p className="eyebrow sm:sticky sm:top-32">The approach</p>
          </Reveal>
          <div className="space-y-9">
            {project.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <p
                  className="text-xs font-medium tracking-[0.16em]"
                  style={{ color: project.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display-tight mt-3 max-w-2xl text-2xl sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      {/* Process detail -------------------------------------------- */}
      {project.processNotes && (
        <Container width="wide" className="pt-16">
          <Reveal className="grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
            {project.processNotes.map((note) => (
              <div key={note.title}>
                <p className="eyebrow">{note.title}</p>
                <ul className="mt-4 space-y-1.5">
                  {note.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Container>
      )}

      {/* The work ------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <div id="work" className="scroll-mt-32">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="eyebrow">The work</p>
              <p className="text-xs text-muted">
                Click any image to view it full screen
              </p>
            </div>
          </Reveal>

          <Gallery images={project.images} leadImage={project.cover} />
        </div>
      </Container>

      {/* Deliverables + outcome ----------------------------------- */}
      <Container width="wide" className="pt-16">
        <div id="outcome" className="scroll-mt-32">
          <Reveal className="grid gap-12 border-t border-line pt-14 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="eyebrow">What got made</p>
              <ul className="mt-4 space-y-2">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span aria-hidden style={{ color: project.accent }}>
                      &mdash;
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {(project.outcome || project.download) && (
              <div>
                <p className="eyebrow">Outcome</p>
                {project.outcome && (
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    {project.outcome}
                  </p>
                )}
                {project.download && (
                  <a
                    href={project.download.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-colors"
                    style={{
                      borderColor: `${project.accent}55`,
                      color: project.accent,
                    }}
                  >
                    {project.download.label}
                    <span aria-hidden>&darr;</span>
                  </a>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </Container>

      {/* Prev / next ---------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal>
          <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
            <Link href={`/work/${previous.slug}`} className="group">
              <p className="eyebrow">Previous</p>
              <h2 className="display-tight mt-3 text-2xl sm:text-3xl">
                <span
                  aria-hidden
                  className="mr-2 inline-block transition-transform duration-300 group-hover:-translate-x-1.5"
                >
                  &larr;
                </span>
                {previous.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{previous.client}</p>
            </Link>

            <Link href={`/work/${next.slug}`} className="group sm:text-right">
              <p className="eyebrow">Next</p>
              <h2 className="display-tight mt-3 text-2xl sm:text-3xl">
                {next.title}
                <span
                  aria-hidden
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  &rarr;
                </span>
              </h2>
              <p className="mt-1 text-sm text-muted">{next.client}</p>
            </Link>
          </div>
        </Reveal>
      </Container>

      <CTA />
    </>
  );
}
