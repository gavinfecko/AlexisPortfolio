import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { profile } from "@/content/profile";
import { skillGroups, involvement, education } from "@/content/experience";

export const metadata: Metadata = {
  title: "About",
  description: profile.metaDescription,
};

/** Personal photos for the closing strip. Swap freely. */
const snapshots = [
  { src: "/about/yankees.jpg", alt: "Alexis with friends at a Yankees game" },
  { src: "/about/greece.jpg", alt: "Alexis in Corfu, Greece" },
  { src: "/about/dog-1.jpg", alt: "A German shepherd lying on a patio" },
  { src: "/about/corolla.jpg", alt: "A horse at sunset in Corolla, North Carolina" },
  { src: "/about/dog-2.jpg", alt: "A dog looking up at the camera" },
  { src: "/about/sunset.jpg", alt: "Sunset over the water" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Big ideas, quick momentum, and work that makes people look twice."
      />

      <Container width="wide">
        <div className="grid gap-14 sm:grid-cols-[1fr_minmax(0,20rem)] sm:gap-16">
          <Reveal>
            <div className="space-y-6">
              {profile.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-ink sm:text-2xl"
                      : "leading-relaxed text-ink-soft"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-line">
              <Image
                src="/about/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                priority
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              {education.school} &middot; Class of {education.graduation}
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Skills ---------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal>
          <p className="eyebrow">What I work with</p>
        </Reveal>
        <div className="mt-10 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <h2 className="display-tight text-xl">{group.label}</h2>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Involvement ----------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal>
          <p className="eyebrow">Involvement</p>
        </Reveal>
        <div className="mt-8 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          {involvement.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <p className="text-ink">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Snapshots -------------------------------------------------- */}
      <Container width="wide" className="pt-16">
        <Reveal>
          <p className="eyebrow">Outside the work</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {snapshots.map((snap, i) => (
            <Reveal key={snap.src} delay={(i % 3) * 70}>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-surface ring-1 ring-line">
                <Image
                  src={snap.src}
                  alt={snap.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <CTA />
    </>
  );
}
