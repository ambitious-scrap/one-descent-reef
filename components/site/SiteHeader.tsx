"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteName } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-abyss/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-sans text-sm font-bold uppercase tracking-[0.35em] text-paper"
        >
          {siteName}
        </Link>

        {/* Disclosure-based mobile nav: no JS required, keyboard-operable. */}
        <details className="group relative sm:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/20 px-3 font-sans text-sm text-paper [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-deep p-2 shadow-xl">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block min-h-11 rounded-md px-3 py-2 font-sans text-base ${
                      active
                        ? "bg-white/10 font-semibold text-gold"
                        : "text-paper/90 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 font-sans text-sm ${
                      active
                        ? "font-semibold text-gold underline decoration-gold decoration-2 underline-offset-8"
                        : "text-paper/85 hover:text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
