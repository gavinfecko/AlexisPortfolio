import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { profile } from "@/content/profile";
import {
  education,
  experience,
  skillGroups,
  involvement,
} from "@/content/experience";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${profile.name} — ${profile.role}.`,
};

function SectionRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-line py-12 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-16">
      <p className="eyebrow sm:pt-1">{label}</p>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title={profile.name}
        lede={profile.availability}
      />

      <Container width="wide">
        {profile.resumePdf && (
          <Reveal>
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              Download PDF
              <span aria-hidden>&darr;</span>
            </a>
          </Reveal>
        )}

        <div className="mt-16">
          <Reveal>
            <SectionRow label="Education">
              <h2 className="display-tight text-2xl">{education.school}</h2>
              <p className="mt-2 text-ink-soft">
                {education.degree} &middot; {education.concentration}
              </p>
              <p className="mt-1 text-sm text-muted">
                {education.location} &middot;{" "}
                {education.graduated ? "Graduated" : "Expected"}{" "}
                {education.graduation}
              </p>
              <ul className="mt-4 space-y-1">
                {education.honors.map((h) => (
                  <li key={h} className="text-sm text-ink-soft">
                    {h}
                  </li>
                ))}
              </ul>
            </SectionRow>
          </Reveal>

          <Reveal>
            <SectionRow label="Experience">
              <div className="space-y-9">
                {experience.map((role) => (
                  <div key={role.organization}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h2 className="display-tight text-2xl">{role.title}</h2>
                      <span className="text-sm text-muted">
                        {role.start} &ndash; {role.end}
                      </span>
                    </div>
                    <p className="mt-1 text-ink-soft">
                      {role.organization}
                      {role.location && (
                        <span className="text-muted"> &middot; {role.location}</span>
                      )}
                      {role.end === "Present" && (
                        <span className="ml-2 rounded-full bg-accent-wash px-2.5 py-0.5 text-xs text-accent-deep">
                          Current
                        </span>
                      )}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className={role.aside ? "text-muted" : "text-accent"}
                          >
                            &mdash;
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionRow>
          </Reveal>

          <Reveal>
            <SectionRow label="Skills">
              <div className="grid gap-8 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-ink">{group.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </SectionRow>
          </Reveal>

          <Reveal>
            <SectionRow label="Involvement">
              <ul className="space-y-4">
                {involvement.map((item) => (
                  <li key={item.name}>
                    <p className="text-ink">{item.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </SectionRow>
          </Reveal>

          <Reveal>
            <SectionRow label="Contact">
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink transition-colors hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </SectionRow>
          </Reveal>
        </div>
      </Container>

      <CTA />
    </>
  );
}
