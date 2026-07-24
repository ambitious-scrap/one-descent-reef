import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "How REEF protects coral reefs: the ecosystem-first approach, the science of bleaching and recovery, and the principles that guide every dive.",
};

const principles = [
  {
    title: "Protect the whole system",
    body: "A reef is not a rock garden. It is fish, algae, water chemistry, and current working together. We restore relationships, not just organisms — because a coral planted into a broken system does not survive.",
  },
  {
    title: "Follow the survivors",
    body: "After a bleaching event, some colonies hold on. Those survivors carry heat-tolerant traits. We propagate from them so the reef we rebuild is fitted to the ocean it now lives in, not the one it remembers.",
  },
  {
    title: "Measure before we celebrate",
    body: "Every fragment we plant is tagged, mapped, and revisited. Growth, survival, and spawning are recorded. Recovery is a claim we only make with data behind it.",
  },
  {
    title: "Work at the community waterline",
    body: "The reefs that recover fastest are the ones local divers, fishers, and volunteers watch over. We train and equip people who live beside the water, because protection that leaves is protection that fails.",
  },
];

export default function MissionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
        The mission
      </p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
        Protect the reef by protecting how it lives.
      </h1>
      <p className="mt-6 font-sans text-lg text-paper/90">
        Coral reefs cover less than one percent of the ocean floor and shelter
        roughly a quarter of all marine species. REEF exists to keep that
        structure standing through a warming century — not by freezing reefs in
        place, but by helping them adapt, recover, and keep building.
      </p>

      <section aria-labelledby="why-heading" className="mt-12">
        <h2 id="why-heading" className="text-2xl sm:text-3xl">
          Why reefs bleach
        </h2>
        <p className="mt-4 font-sans text-paper/85">
          Corals share their tissue with tiny algae that photosynthesize food
          and give the reef its colour. When water stays a few degrees too warm
          for too long, that partnership breaks down: the coral expels the
          algae, turns white, and begins to starve. Bleaching is not death — it
          is a warning, and a window. Cool the water in time and the coral can
          recover. Leave the heat and the reef collapses into rubble and weed.
        </p>
      </section>

      <section aria-labelledby="principles-heading" className="mt-12">
        <h2 id="principles-heading" className="text-2xl sm:text-3xl">
          Conservation principles
        </h2>
        <ul className="mt-6 space-y-6">
          {principles.map((p) => (
            <li
              key={p.title}
              className="rounded-xl border border-white/10 bg-deep/40 p-5"
            >
              <h3 className="font-serif text-xl">{p.title}</h3>
              <p className="mt-2 font-sans text-paper/85">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next-heading" className="mt-12">
        <h2 id="next-heading" className="text-2xl sm:text-3xl">
          See it in the water
        </h2>
        <p className="mt-4 font-sans text-paper/85">
          The mission is only as real as the reefs it keeps alive. See where the
          work is happening on the{" "}
          <Link href="/impact" className="text-gold underline underline-offset-4">
            impact page
          </Link>
          , or join a dive team from the{" "}
          <Link
            href="/volunteer"
            className="text-gold underline underline-offset-4"
          >
            volunteer page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
