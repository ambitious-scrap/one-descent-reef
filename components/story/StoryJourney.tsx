import Link from "next/link";
import { SceneShell } from "./StoryScene";
import { ReefAnchor } from "./ReefAnchor";
import { ArtLayer } from "./ArtLayer";
import {
  storyMoments,
  finalActions,
  finalLine,
  restorationMethod,
} from "@/content/story";

const OVERLAY = "/images/reef/overlays";
const LAYER = "/images/reef/layers";

const LIGHT = `${OVERLAY}/overlay-lightshafts-healthy-black.png`;
const PARTICLES = `${OVERLAY}/overlay-particles-healthy-black.png`;
const SEAFAN = `${LAYER}/foreground/layer-seafan-foreground-healthy.png`;

const FADE_UP =
  "linear-gradient(to top, #000 0%, transparent 55%)";
const FADE_UP_LOW =
  "linear-gradient(to top, #000 0%, #000 20%, transparent 60%)";

const accentBorder: Record<string, string> = {
  seaglass: "border-t-seaglass",
  gold: "border-t-gold",
  coral: "border-t-coral",
};

/** Screen-blended atmospheric overlays (black backgrounds drop out). */
function Light({ className = "" }: { className?: string }) {
  return (
    <ArtLayer
      src={LIGHT}
      className={`inset-0 h-full w-full object-cover mix-blend-screen art-screen ${className}`}
    />
  );
}
function Particles({ className = "" }: { className?: string }) {
  return (
    <ArtLayer
      src={PARTICLES}
      className={`inset-0 h-full w-full object-cover mix-blend-screen art-screen ${className}`}
    />
  );
}

/** Text-safe scrims: top on narrow (open water above the reef),
    right on wide (open water beside the reef). */
function ReefScrims() {
  return (
    <>
      <div className="absolute inset-0 scrim-t md:hidden" />
      <div className="absolute inset-0 hidden scrim-r md:block" />
    </>
  );
}

// Reef reveal scenes: copy at top on mobile, floated right on desktop.
const REVEAL_CONTENT =
  "items-start justify-center md:items-center md:justify-end";
const REVEAL_PANEL = "md:ml-auto";

export function StoryJourney() {
  const m = Object.fromEntries(
    storyMoments.map((s) => [s.id, s]),
  ) as Record<string, (typeof storyMoments)[number]>;

  return (
    <div>
      {/* 01 — Underlight: open water, the descent begins; no full reef yet. */}
      <SceneShell
        moment={m.underlight}
        sectionClass="min-h-[80svh] items-end bg-gradient-to-b from-teal via-deep to-abyss md:min-h-[88vh]"
        contentClass="items-end"
        art={
          <>
            <Light className="opacity-50" />
            <Particles className="opacity-35" />
            <div className="absolute inset-0 scrim-b" />
          </>
        }
      />

      {/* 02 — The Blue Road: deeper, cooler; the reef only a distant silhouette. */}
      <SceneShell
        moment={m["blue-road"]}
        sectionClass="min-h-[66svh] items-center bg-gradient-to-b from-deep via-abyss to-abyss md:min-h-[72vh]"
        contentClass="items-center"
        art={
          <>
            <ReefAnchor
              state="healthy"
              className="opacity-20 blur-[2px] saturate-50"
              style={{ maskImage: FADE_UP, WebkitMaskImage: FADE_UP }}
            />
            <Particles className="opacity-25" />
            <div className="absolute inset-0 scrim-veil" />
          </>
        }
      />

      {/* 03 — The Living Wall: first full, colourful reveal. */}
      <SceneShell
        moment={m["living-wall"]}
        sectionClass="min-h-[86svh] items-stretch md:min-h-[94vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="healthy" />
            <Light className="opacity-40" />
            <Particles className="opacity-30" />
            <ArtLayer
              src={SEAFAN}
              className="-left-10 bottom-[-4%] w-36 opacity-90 sm:w-52 md:w-72"
            />
            <ReefScrims />
          </>
        }
      />

      {/* 04 — Warm Water: same geography, healthy under a ~40% bleached blend. */}
      <SceneShell
        moment={m["warm-water"]}
        sectionClass="min-h-[84svh] items-stretch md:min-h-[90vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="healthy" />
            <ReefAnchor state="bleached" className="opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-amber/15 via-transparent to-abyss/25" />
            <Particles className="opacity-20" />
            <ReefScrims />
          </>
        }
      />

      {/* 05 — The Pale Zone: bleached, quiet, no golden light. */}
      <SceneShell
        moment={m["pale-zone"]}
        sectionClass="min-h-[84svh] items-stretch md:min-h-[88vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="bleached" />
            <div className="absolute inset-0 bg-milky/10" />
            <Particles className="opacity-10" />
            <ReefScrims />
          </>
        }
      />

      {/* 06 — Hands: bleached→recovery blend + the restoration method. */}
      <SceneShell
        moment={m.hands}
        sectionClass="min-h-[86svh] items-stretch md:min-h-[92vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="bleached" />
            <ReefAnchor state="recovery" className="opacity-45" />
            <Particles className="opacity-20" />
            <ReefScrims />
          </>
        }
      >
        <ol className="mt-8 space-y-5">
          {restorationMethod.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="font-serif text-2xl tabular-nums text-gold">
                {step.n}
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug">{step.title}</h3>
                <p className="mt-1 font-sans text-sm text-paper/85">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </SceneShell>

      {/* 07 — The Way Up: partial recovery, colour returning. */}
      <SceneShell
        moment={m["way-up"]}
        sectionClass="min-h-[84svh] items-stretch md:min-h-[90vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="recovery" />
            <Light className="opacity-35" />
            <Particles className="opacity-25" />
            <ReefScrims />
          </>
        }
      />

      {/* 08 — Air: the ascent and the decision. Recovery reef along the lower edge. */}
      <SceneShell
        moment={m.air}
        sectionClass="min-h-[88svh] items-center bg-gradient-to-b from-teal via-deep to-abyss md:min-h-[92vh]"
        contentClass="items-center justify-center text-center"
        panelClass="mx-auto"
        art={
          <>
            <ReefAnchor
              state="recovery"
              className="opacity-45"
              style={{ maskImage: FADE_UP_LOW, WebkitMaskImage: FADE_UP_LOW }}
            />
            <Light className="opacity-30" />
            <Particles className="opacity-25" />
            <div className="absolute inset-0 scrim-veil" />
          </>
        }
      >
        <nav
          aria-label="Take action"
          className="mt-8 grid gap-4 text-left sm:grid-cols-3"
        >
          {finalActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`block rounded-xl border-t-4 bg-paper/95 p-5 text-abyss transition-transform hover:-translate-y-1 focus-visible:-translate-y-1 ${accentBorder[action.accent]}`}
            >
              <strong className="block font-serif text-lg">
                {action.title}
              </strong>
              <span className="mt-1 block font-sans text-sm text-abyss/80">
                {action.detail}
              </span>
            </Link>
          ))}
        </nav>
        <p className="mt-8 font-sans italic text-paper/90">{finalLine}</p>
      </SceneShell>
    </div>
  );
}
