import Link from "next/link";
import { navLinks, siteTagline } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-abyss px-4 py-10 font-sans text-sm text-paper/75 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="text-base font-semibold tracking-[0.2em] text-paper">
            ONE DESCENT
          </p>
          <p className="mt-2 italic">{siteTagline}</p>
          <p className="mt-4">
            REEF is a fictional ocean-conservation organization created for the
            ONE DESCENT concept. Figures and projects are illustrative.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
