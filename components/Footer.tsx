import Link from "next/link";
import Container from "./Container";
import { profile, socials } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line bg-surface/60">
      <Container width="wide" className="py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <p className="eyebrow">Currently</p>
            <p className="display-tight mt-4 text-2xl sm:text-3xl">
              {profile.availability}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-deep"
            >
              Get in touch
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <ul className="flex flex-col gap-3 sm:items-end">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 border-t border-line pt-8 text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
