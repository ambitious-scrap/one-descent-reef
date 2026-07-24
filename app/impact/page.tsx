import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Restoration projects, reef monitoring, and credible recovery examples from REEF — what has been planted, what survived, and how it is measured.",
};

const projects = [
  {
    name: "Antler Line — staghorn nursery",
    location: "Working depth, 8–12 m",
    body: "Rope nurseries seeded with fragments from heat-tolerant survivor colonies. Fragments spend 10–14 months on the line before out-planting to bare terrace.",
    stats: [
      ["Fragments on line", "4,200"],
      ["12-month survival", "78%"],
      ["Avg. growth / year", "9 cm"],
    ],
  },
  {
    name: "Dome Watch — brain-coral monitoring",
    location: "Terrace edge, 6–10 m",
    body: "Slow-growing dome corals are photographed and measured every six weeks. The dataset flags heat stress early, before a full bleaching event sets in.",
    stats: [
      ["Colonies tracked", "310"],
      ["Survey cadence", "6 weeks"],
      ["Early-stress alerts", "14"],
    ],
  },
  {
    name: "The Way Up — decade-old replant",
    location: "North wall, 5–9 m",
    body: "A section replanted ten years ago now spawns on its own and no longer needs intervention. It is our clearest evidence that assisted recovery can hand a reef back to itself.",
    stats: [
      ["Area handed back", "1.1 ha"],
      ["Self-spawning since", "Year 7"],
      ["Fish abundance vs. start", "+3.4×"],
    ],
  },
];

export default function ImpactPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        The impact
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Recovery you can count.
      </h1>
      <p className="mt-6 max-w-2xl font-sans text-lg text-paper/90">
        These are illustrative figures for the ONE DESCENT concept, modelled on
        how real reef-restoration programmes report their work: every claim tied
        to a tagged fragment, a survey date, or a mapped plot. Recovery is slow,
        uneven, and measurable — that is exactly why it is credible.
      </p>

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <section
            key={project.name}
            aria-labelledby={`${project.name}-h`}
            className="rounded-2xl border border-white/10 bg-deep/40 p-6"
          >
            <h2
              id={`${project.name}-h`}
              className="text-2xl sm:text-3xl"
            >
              {project.name}
            </h2>
            <p className="mt-1 font-sans text-sm uppercase tracking-wide text-paper/60">
              {project.location}
            </p>
            <p className="mt-4 font-sans text-paper/85">{project.body}</p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              {project.stats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-abyss/50 p-4"
                >
                  <dt className="font-sans text-xs uppercase tracking-wide text-paper/60">
                    {label}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-gold">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-12 font-sans text-paper/85">
        Want to add to these numbers?{" "}
        <Link
          href="/volunteer"
          className="text-gold underline underline-offset-4"
        >
          Join a dive team
        </Link>{" "}
        or{" "}
        <Link href="/support" className="text-gold underline underline-offset-4">
          fund a nursery line
        </Link>
        .
      </p>
    </article>
  );
}
