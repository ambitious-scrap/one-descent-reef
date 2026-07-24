"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteName } from "@/content/navigation";

/** Right-side primary links; "Take action" is the quiet primary. */
const primaryNav = [
  { href: "/mission", label: "Mission" },
  { href: "/impact", label: "Impact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Cinematic header — a slim floating bar over the descent. Three optical columns
 * on desktop (Explore REEF · wordmark · Mission / Impact / Take action) so the
 * wordmark stays centred regardless of side widths. Transparent over the warm
 * hero, settling into translucent deep-teal paper once scrolled: a single
 * data-scrolled attribute flipped at one threshold, never per-frame React state.
 * Mobile collapses to a centred wordmark and a full-screen menu (Escape closes).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Only the home descent floats transparent over the cream hero. Elsewhere the
  // hero is dark, so the header wears its settled teal bar from the top for
  // legible ivory ink. Home flips state at one scroll threshold — never per frame.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    if (!isHome) {
      header.dataset.scrolled = "true";
      return;
    }
    let scrolled = false;
    const onScroll = () => {
      const next = window.scrollY > 16;
      if (next !== scrolled) {
        scrolled = next;
        header.dataset.scrolled = String(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close the mobile menu on Escape (route changes close it via the panel's
  // click handler, since every interactive child is a navigating link).
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        data-scrolled={isHome ? "false" : "true"}
        className="cine-header fixed inset-x-0 top-0 z-50"
      >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Desktop — three optical columns. */}
        <div className="hidden grid-cols-[1fr_auto_1fr] items-center py-3.5 md:grid">
          <div className="justify-self-start">
            <Link
              href="/"
              className="quiet-link font-sans text-xs uppercase tracking-[0.26em]"
            >
              Explore <span className="font-semibold tracking-[0.32em]">REEF</span>
            </Link>
          </div>
          <Link
            href="/"
            className="cine-wordmark justify-self-center font-sans text-sm uppercase"
          >
            {siteName}
          </Link>
          <nav aria-label="Primary" className="justify-self-end">
            <ul className="flex items-center gap-7 font-sans text-xs uppercase tracking-[0.22em]">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className="quiet-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/volunteer"
                  aria-current={isActive(pathname, "/volunteer") ? "page" : undefined}
                  className="paper-action font-semibold tracking-[0.22em]"
                >
                  Take action
                  <span className="pa-plus" aria-hidden="true">
                    +
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile — centred wordmark, compact menu trigger. */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3 md:hidden">
          <span aria-hidden="true" />
          <Link
            href="/"
            className="cine-wordmark justify-self-center font-sans text-sm uppercase"
          >
            {siteName}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="justify-self-end inline-flex min-h-11 min-w-11 items-center justify-center rounded-md font-sans text-xs uppercase tracking-[0.22em]"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu. */}
      {menuOpen ? (
        <div
          id="site-menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 flex flex-col bg-[rgba(9,42,58,0.97)] px-6 pb-10 pt-24 text-surface backdrop-blur md:hidden"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-7 font-sans text-lg uppercase tracking-[0.18em]">
              <li>
                <Link href="/" className="quiet-link">
                  Explore <span className="font-semibold">REEF</span>
                </Link>
              </li>
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className="quiet-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/volunteer"
                  aria-current={isActive(pathname, "/volunteer") ? "page" : undefined}
                  className="paper-action text-lg font-semibold tracking-[0.18em]"
                >
                  Take action
                  <span className="pa-plus" aria-hidden="true">
                    +
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
      </header>

      {/* Non-home routes float over dark content: reserve the header height so
          page copy is never hidden beneath it. Home lets the hero run under. */}
      {!isHome ? <div aria-hidden="true" className="h-14" /> : null}
    </>
  );
}
