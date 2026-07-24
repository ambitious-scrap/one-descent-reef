import Link from "next/link";
import { navLinks, siteName, siteTagline } from "@/content/navigation";
import { finalLine } from "@/content/story";
import { CurrentThread } from "@/components/story/CurrentThread";

const REPO_URL = "https://github.com/ambitious-scrap/one-descent-reef";
const footerNav = navLinks.filter((link) => link.href !== "/");

/**
 * Closing footer — the film title card at the end of the descent. Deep abyssal
 * teal with a refined paper grain and a faint Current Thread rising at its top
 * edge, so the reef's continuity carries all the way out. The relocated final
 * line sits above, quiet and italic; links wear the same understated action
 * style as the rest of the page — no card, no thick border, no gradient blob.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer relative isolate overflow-hidden font-sans text-sm">
      <CurrentThread
        tone="recovery"
        edge="top"
        flow="up"
        className="opacity-60"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:px-6">
        <p className="max-w-2xl font-serif text-lg italic leading-relaxed text-surface/70 sm:text-xl">
          {finalLine}
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="footer-wordmark text-base uppercase text-surface">
              {siteName}
            </p>
            <p className="mt-3 font-serif italic text-paper/70">{siteTagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="quiet-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link"
              >
                GitHub
              </a>
            </li>
            <li className="text-paper/60">HackOcean 2026 · PS 02 — REEF</li>
            <li className="text-paper/55">AI-assisted build</li>
          </ul>
        </div>

        <p className="mt-10 text-xs text-paper/45">
          REEF is a fictional ocean-conservation organization created for the ONE
          DESCENT concept. Figures and projects are illustrative. Both flows are
          demonstrations — no payments, no real data.
        </p>
      </div>
    </footer>
  );
}
