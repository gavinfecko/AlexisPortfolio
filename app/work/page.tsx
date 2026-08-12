import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectRow from "@/components/ProjectRow";
import WorkRail from "@/components/WorkRail";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { allProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected advertising and design work — integrated campaigns, event branding, and environmental design.",
};

export default function WorkPage() {
  const railItems = allProjects.map((p) => ({
    slug: p.slug,
    label: p.client,
    accent: p.accent,
  }));

  return (
    <>
      <WorkRail items={railItems} />

      <PageHeader
        eyebrow={`${allProjects.length} projects`}
        title="Work"
        lede="Every one of these started with a question rather than a layout. Each case study shows the research, the idea it produced, and everything that got made because of it."
      />

      {/* Quick index — lets someone scan the whole body of work in two seconds
          and jump straight to whichever is relevant to them. */}
      <Container width="wide" className="pb-16">
        <Reveal className="flex flex-wrap gap-x-6 gap-y-3 border-y border-line py-5">
          {allProjects.map((p, i) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <span
                className="text-xs tabular-nums"
                style={{ color: p.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.client}
            </a>
          ))}
        </Reveal>
      </Container>

      <Container width="wide">
        <div className="space-y-20 sm:space-y-24">
          {allProjects.map((project, i) => (
            <Reveal key={project.slug}>
              <div id={project.slug} className="scroll-mt-32">
                <ProjectRow project={project} index={i} priority={i === 0} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <CTA />
    </>
  );
}
