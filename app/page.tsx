import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ProjectRow from "@/components/ProjectRow";
import CTA from "@/components/CTA";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { education } from "@/content/experience";

export default function Home() {
  return (
    <>
      {/* Hero ---------------------------------------------------- */}
      <Container width="wide" className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-wash px-3.5 py-1.5 text-xs text-accent-deep">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.availabilityShort} &middot; {profile.location}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-tight mt-8 max-w-5xl text-[clamp(2.75rem,8vw,6rem)]">
            {profile.headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="rounded-full bg-ink px-7 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              See the work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-line px-7 py-3 text-sm text-ink transition-colors hover:border-ink/30 hover:bg-surface"
            >
              Who I am
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-accent underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-10 max-w-xl border-l-2 border-accent/30 pl-5 text-sm leading-relaxed text-muted">
            {profile.lookingFor}
          </p>
        </Reveal>
      </Container>

      {/* Pillars ------------------------------------------------- */}
      <section className="border-y border-line bg-surface/50">
        <Container width="wide" className="py-14 sm:py-16">
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-10">
            {profile.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <p className="eyebrow text-accent">0{i + 1}</p>
                <h2 className="display-tight mt-4 text-2xl">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured work ------------------------------------------- */}
      <Container width="wide" className="pt-16 sm:pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-tight mt-4 text-[clamp(2rem,5vw,3.25rem)]">
              Three campaigns, start to finish
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-deep"
          >
            All projects
            <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>

        <div className="mt-12 space-y-20 sm:space-y-24">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectRow project={project} index={i} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Credentials strip --------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal className="grid gap-10 border-t border-line pt-14 sm:grid-cols-3">
          <div>
            <p className="eyebrow">Education</p>
            <Link
              href="/resume"
              className="mt-3 block text-ink transition-colors hover:text-accent"
            >
              {education.school}
            </Link>
            <p className="mt-1 text-sm text-muted">
              {education.degree}, {education.concentration}
            </p>
            <p className="mt-1 text-sm text-muted">
              Graduated {education.graduation}
            </p>
          </div>
          <div>
            <p className="eyebrow">Looking for</p>
            <ul className="mt-3 space-y-1">
              {profile.targetRoles.map((role) => (
                <li key={role} className="text-sm text-ink-soft">
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Recognition</p>
            {education.honors.map((h) => (
              <p key={h} className="mt-3 text-sm text-ink-soft">
                {h}
              </p>
            ))}
            <Link
              href="/resume"
              className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-deep"
            >
              Full resume
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </Container>

      <CTA />
    </>
  );
}
