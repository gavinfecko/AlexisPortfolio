"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Give the bar a hairline + backdrop only once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex flex-col leading-none transition-opacity hover:opacity-70"
        >
          <span className="display-tight text-lg sm:text-xl">
            {profile.name}
          </span>
          <span className="eyebrow mt-1.5">{profile.role}</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm transition-colors",
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block border-b border-line py-3.5 text-base transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-accent"
                    : "text-ink-soft hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
