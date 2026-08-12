"use client";

import { useEffect, useState } from "react";

export type RailItem = { slug: string; label: string; accent: string };

/**
 * A compact bar that slides up once you start scrolling the work page.
 * It tracks which project is on screen, jumps to any of the others, and
 * collapses to a single pill when the reader wants it out of the way.
 *
 * Sits bottom-center so it never covers the artwork.
 */
export default function WorkRail({ items }: { items: RailItem[] }) {
  const [active, setActive] = useState(items[0]?.slug ?? "");
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const nodes = items
      .map((i) => document.getElementById(i.slug))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onScreen[0]) setActive(onScreen[0].target.id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));

    // Appear as soon as the reader leaves the header, hide over the footer.
    const onScroll = () => {
      const y = window.scrollY;
      const atEnd = y + window.innerHeight > document.body.scrollHeight - 700;
      setVisible(y > 320 && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  const activeIndex = Math.max(
    0,
    items.findIndex((i) => i.slug === active),
  );
  const activeItem = items[activeIndex];

  return (
    <nav
      aria-label="Jump to project"
      className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-1 rounded-full border border-line bg-paper/90 p-1.5 shadow-[0_10px_40px_-12px_rgba(28,25,23,0.28)] backdrop-blur-md">
        {open ? (
          <>
            <ul className="flex items-center gap-0.5">
              {items.map((item, i) => {
                const isActive = active === item.slug;
                return (
                  <li key={item.slug}>
                    <a
                      href={`#${item.slug}`}
                      aria-current={isActive ? "true" : undefined}
                      title={item.label}
                      className="flex items-center gap-2 rounded-full px-3 py-2 text-xs transition-colors"
                      style={{
                        backgroundColor: isActive
                          ? `${item.accent}18`
                          : "transparent",
                        color: isActive ? item.accent : "var(--color-muted)",
                      }}
                    >
                      <span className="tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Names collapse away on narrow screens; the active
                          one always stays so you know where you are. */}
                      <span
                        className={`whitespace-nowrap ${
                          isActive ? "inline" : "hidden lg:inline"
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Minimize project navigation"
              title="Minimize"
              className="ml-0.5 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              <span aria-hidden className="text-sm leading-none">
                &minus;
              </span>
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Show project navigation"
            className="flex items-center gap-2.5 rounded-full px-3.5 py-2 text-xs transition-colors hover:bg-surface"
            style={{ color: activeItem?.accent }}
          >
            <span className="tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>
            <span className="text-muted">Projects</span>
            <span aria-hidden className="text-[0.65rem] text-muted">
              &#9650;
            </span>
          </button>
        )}
      </div>
    </nav>
  );
}
