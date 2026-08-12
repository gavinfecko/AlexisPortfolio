import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";
import { profile } from "@/content/profile";

/** Closing call-to-action used at the bottom of most pages. */
export default function CTA() {
  return (
    <Container width="wide" className="pt-16">
      <Reveal className="rounded-sm border border-line bg-surface px-8 py-16 text-center sm:px-16 sm:py-20">
        <p className="eyebrow">Still here?</p>
        <h2 className="display-tight mx-auto mt-5 max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)]">
          Then let&rsquo;s talk about what you&rsquo;re working on.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink-soft">
          I&rsquo;m in New York, recently graduated, and looking for a team where I
          can go from the research straight through to the artwork. Tell me about
          the brief &mdash; I&rsquo;ll tell you what I&rsquo;d do with it.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-7 py-3 text-sm text-paper transition-colors hover:bg-accent-deep"
          >
            Get in touch
          </Link>
          <Link
            href="/resume"
            className="rounded-full border border-line px-7 py-3 text-sm text-ink transition-colors hover:border-ink/30 hover:bg-paper"
          >
            View resume
          </Link>
        </div>
      </Reveal>
    </Container>
  );
}
