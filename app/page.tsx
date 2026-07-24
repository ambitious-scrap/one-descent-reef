import type { Metadata } from "next";
import { StoryJourney } from "@/components/story/StoryJourney";
import { siteTagline } from "@/content/navigation";

export const metadata: Metadata = {
  title: "ONE DESCENT — Go down with the light",
  description:
    "A single dive through a living reef: watch it thrive, bleach, and recover — then choose how you resurface. REEF ocean conservation.",
};

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="tone-surface border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-abyss/70">
            REEF · Ocean Conservation
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-abyss sm:text-5xl md:text-6xl">
            {siteTagline}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-abyss/80">
            One descent, eight moments. Read down through a living reef, witness
            what heat takes, and meet the hands that bring it back.
          </p>
        </div>
      </section>

      <StoryJourney />
    </>
  );
}
