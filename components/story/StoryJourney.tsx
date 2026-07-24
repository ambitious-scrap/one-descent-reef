import Link from "next/link";
import { SceneShell } from "./StoryScene";
import { AmbientVideo } from "@/components/media/AmbientVideo";
import { LivingReefAtlas } from "./LivingReefAtlas";
import { storyMoments, finalActions, finalLine } from "@/content/story";

const VID = "/videos/open-water";
const POSTER = "/images/reef/open-water/posters";

const accentBorder: Record<string, string> = {
  seaglass: "border-t-seaglass",
  gold: "border-t-gold",
  coral: "border-t-coral",
};

export function StoryJourney() {
  const m = Object.fromEntries(
    storyMoments.map((s) => [s.id, s]),
  ) as Record<string, (typeof storyMoments)[number]>;

  // Scenes 3–7 form the Living Reef Atlas.
  const atlasMoments = storyMoments.filter((s) =>
    ["living-wall", "warm-water", "pale-zone", "hands", "way-up"].includes(s.id),
  );

  return (
    <div>
      {/* 01 — Underlight: open-water video, the descent begins; no reef yet. */}
      <SceneShell
        moment={m.underlight}
        sectionClass="min-h-[80svh] items-end md:min-h-[88vh]"
        contentClass="items-end"
        art={
          <>
            <AmbientVideo
              webmSrc={`${VID}/underlight.webm`}
              mp4Src={`${VID}/underlight.mp4`}
              posterSrc={`${POSTER}/underlight-poster.png`}
              seamFadeStart={6.55}
              eager
              objectPosition="center"
            />
            <div className="absolute inset-0 scrim-b" />
          </>
        }
      />

      {/* 02 — The Blue Road: distant-reveal video; no reef anchor over the clip. */}
      <SceneShell
        moment={m["blue-road"]}
        sectionClass="min-h-[66svh] items-center md:min-h-[72vh]"
        contentClass="items-center"
        art={
          <>
            <AmbientVideo
              webmSrc={`${VID}/blue-road.webm`}
              mp4Src={`${VID}/blue-road.mp4`}
              posterSrc={`${POSTER}/blue-road-poster.png`}
              seamFadeStart={6.35}
              objectPosition="center"
            />
            <div className="absolute inset-0 scrim-veil" />
          </>
        }
      />

      {/* 03–07 — Living Reef Atlas: static scenes, pinned+scrubbed on desktop. */}
      <LivingReefAtlas moments={atlasMoments} />

      {/* 08 — Air: ascent + decision; reef low in frame, longest seam fade. */}
      <SceneShell
        moment={m.air}
        sectionClass="min-h-[88svh] items-center md:min-h-[92vh]"
        contentClass="items-center justify-center text-center"
        panelClass="mx-auto"
        art={
          <>
            <AmbientVideo
              webmSrc={`${VID}/air.webm`}
              mp4Src={`${VID}/air.mp4`}
              posterSrc={`${POSTER}/air-poster.png`}
              seamFadeStart={5.95}
              objectPosition="center bottom"
            />
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
              <strong className="block font-serif text-lg">{action.title}</strong>
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
