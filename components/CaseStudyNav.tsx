"use client";

import { useEffect, useState } from "react";

export type CaseSection = { id: string; label: string };

/**
 * In-project navigation. Three parts, all driven by the same scroll state:
 *
 *  1. A hairline progress bar pinned to the very top — answers "how long is
 *     this?" before the reader has to wonder.
 *  2. A slim rail down the left edge on wide screens (xl+), which tracks the
 *     current section without covering any content.
 *  3. Below xl — phones, tablets, smaller laptops — the same information as a
 *     bottom pill that expands into the full section list. It deliberately
 *     mirrors the project bar on /work so there's one interaction to learn.
 */
export default function CaseStudyNav({
  sections,
  accent,
}: {
  sections: CaseSection[];
  accent: string;
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Whichever tracked section is nearest the top of the viewport wins.
        const onScreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onScreen[0]) setActive(onScreen[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));

    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      // Appear once past the cover; retreat over the footer.
      const atEnd = y + window.innerHeight > document.body.scrollHeight - 700;
      setVisible(y > 420 && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  // Collapse the mobile sheet whenever the reader jumps somewhere.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === active),
  );
  const activeLabel = sections[activeIndex]?.label ?? "";

  return (
    <>
      {/* 1 — reading progress */}
      <div
        aria-hidden
        className="fixed top-0 left-0 z-[60] h-[2px] transition-[width] duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: accent,
          opacity: progress > 0.01 ? 1 : 0,
        }}
      />

      {/* 2 — left rail, wide screens only */}
      <nav
        aria-label="Case study sections"
        className={`fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 transition-opacity duration-500 xl:block ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-3.5">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="group flex items-center gap-3"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className="block h-px transition-all duration-300"
                    style={{
                      width: isActive ? 28 : 14,
                      backgroundColor: isActive ? accent : "var(--color-line)",
                    }}
                  />
                  <span
                    className="text-[0.7rem] tracking-wide whitespace-nowrap transition-all duration-300 group-hover:opacity-100"
                    style={{
                      color: isActive ? accent : "var(--color-muted)",
                      opacity: isActive ? 1 : 0.55,
                    }}
                  >
                    {section.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 3 — bottom pill, everything below xl */}
      <div
        className={`fixed bottom-5 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transition-all duration-500 xl:hidden ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {open && (
          <ul
            className="mb-2 overflow-hidden rounded-2xl border border-line bg-paper/95 py-1.5 shadow-[0_14px_44px_-12px_rgba(28,25,23,0.3)] backdrop-blur-md"
            aria-label="Case study sections"
          >
            {sections.map((section, i) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                    style={{
                      color: isActive ? accent : "var(--color-ink-soft)",
                      backgroundColor: isActive ? `${accent}12` : "transparent",
                    }}
                  >
                    <span className="text-xs tabular-nums opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`Case study section navigation — currently ${activeLabel}`}
          data-case-nav="pill"
          className="flex w-full items-center justify-between gap-3 rounded-full border border-line bg-paper/95 px-4 py-3 shadow-[0_10px_40px_-12px_rgba(28,25,23,0.28)] backdrop-blur-md"
        >
          <span className="flex items-center gap-2.5 truncate text-sm">
            <span className="text-xs tabular-nums text-muted">
              {activeIndex + 1}/{sections.length}
            </span>
            <span className="truncate" style={{ color: accent }}>
              {activeLabel}
            </span>
          </span>
          <span
            aria-hidden
            className={`shrink-0 text-[0.6rem] text-muted transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            &#9650;
          </span>
        </button>
      </div>
    </>
  );
}
