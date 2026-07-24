import type { Metadata } from "next";
import Link from "next/link";
import { SupportFlow } from "@/components/support/SupportFlow";
import { supportIntro, supportAllocation } from "@/content/support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "A simulated conservation-support flow for ONE DESCENT: choose a frequency, amount, and focus area, review a clear summary, and see what it would set in motion. No payment is processed.",
};

export default function SupportPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        {supportIntro.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        {supportIntro.heading}
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-lg text-paper/90">
        {supportIntro.lead}
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <section aria-labelledby="flow-heading">
          <h2 id="flow-heading" className="text-2xl sm:text-3xl">
            Model your support
          </h2>
          <div className="mt-6">
            <SupportFlow />
          </div>
        </section>

        <aside aria-labelledby="allocation-heading">
          <h2 id="allocation-heading" className="text-2xl sm:text-3xl">
            Where support goes
          </h2>
          <p className="mt-2 font-sans text-sm text-paper/70">
            An illustrative allocation — real programmes publish audited
            versions. This concept keeps the shape honest.
          </p>
          <ul className="mt-6 space-y-3">
            {supportAllocation.map(([label, pct, note]) => (
              <li
                key={label}
                className="rounded-lg border border-white/10 bg-abyss/50 p-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg">{label}</span>
                  <span className="font-serif text-xl text-gold">{pct}</span>
                </div>
                <div
                  className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  <div className="h-full bg-gold" style={{ width: pct }} />
                </div>
                <p className="mt-2 font-sans text-sm text-paper/75">{note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-sans text-sm text-paper/85">
            Prefer to give time?{" "}
            <Link
              href="/volunteer"
              className="text-gold underline underline-offset-4"
            >
              Volunteer with us
            </Link>
            .
          </p>
        </aside>
      </div>
    </article>
  );
}
