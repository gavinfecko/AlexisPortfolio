import Link from "next/link";
import Container from "@/components/Container";
import { allProjects } from "@/content/projects";

export default function NotFound() {
  return (
    <Container width="wide" className="py-28 sm:py-40">
      <p className="eyebrow">404</p>
      <h1 className="display-tight mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4rem)]">
        This page didn&rsquo;t make the final cut.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
        The link is broken or the page has moved. The work is all still here
        though &mdash; start with one of these.
      </p>

      <ul className="mt-10 flex flex-wrap gap-3">
        {allProjects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              className="inline-block rounded-full px-4 py-2 text-sm transition-opacity hover:opacity-75"
              style={{ backgroundColor: p.accentWash, color: p.accent }}
            >
              {p.client}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-deep"
      >
        <span aria-hidden>&larr;</span> Back home
      </Link>
    </Container>
  );
}
