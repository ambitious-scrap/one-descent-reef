import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support REEF's reef restoration: simulated giving tiers and a transparent breakdown of where every contribution goes.",
};

const tiers = [
  {
    name: "One fragment",
    amount: "$12",
    body: "Funds a single coral fragment through nursery, tagging, and out-planting. You get its tag number and its first growth photo.",
  },
  {
    name: "One line",
    amount: "$180",
    body: "Sponsors a full rope nursery line — roughly fifteen fragments — for a season, including the volunteer dives that tend it.",
  },
  {
    name: "One plot",
    amount: "$950",
    body: "Adopts a monitored terrace plot for a year: planting, six-week surveys, and the data that proves whether it took.",
  },
];

const allocation = [
  ["Fieldwork & materials", "68%", "Boats, air, rope, tags, and the fragments themselves."],
  ["Monitoring & data", "17%", "Surveys, photography, and the records that make recovery credible."],
  ["Volunteer training", "10%", "Check-out dives, safety, and certification support."],
  ["Operations", "5%", "The unglamorous minimum that keeps the programme running."],
];

export default function SupportPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        Support the work
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Fund a fragment. Follow its growth.
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-lg text-paper/90">
        These are simulated giving options for the ONE DESCENT concept — no
        payment is processed and no money changes hands. The point is to show a
        model of support where you can see exactly what your contribution buys.
      </p>

      <section aria-labelledby="tiers-heading" className="mt-12">
        <h2 id="tiers-heading" className="text-2xl sm:text-3xl">
          Ways to give
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-deep/40 p-6"
            >
              <h3 className="font-serif text-xl">{tier.name}</h3>
              <p className="mt-1 font-serif text-3xl text-gold">
                {tier.amount}
              </p>
              <p className="mt-3 flex-1 font-sans text-sm text-paper/85">
                {tier.body}
              </p>
              <button
                type="button"
                className="mt-5 min-h-11 rounded-md border border-gold px-4 py-3 font-sans text-sm font-semibold text-gold"
              >
                Choose {tier.name.toLowerCase()} (demo)
              </button>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="allocation-heading" className="mt-12">
        <h2 id="allocation-heading" className="text-2xl sm:text-3xl">
          Where support goes
        </h2>
        <p className="mt-2 font-sans text-paper/70">
          An illustrative allocation. Real programmes publish audited versions;
          this concept keeps the shape honest.
        </p>
        <ul className="mt-6 space-y-3">
          {allocation.map(([label, pct, note]) => (
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
      </section>

      <p className="mt-12 font-sans text-paper/85">
        Prefer to give time instead of money? The{" "}
        <Link
          href="/volunteer"
          className="text-gold underline underline-offset-4"
        >
          volunteer page
        </Link>{" "}
        has open dive-team roles.
      </p>
    </article>
  );
}
