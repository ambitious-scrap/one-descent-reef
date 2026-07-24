import { SceneShell } from "./StoryScene";
import { AmbientVideo } from "@/components/media/AmbientVideo";
import { LivingReefAtlas } from "./LivingReefAtlas";
import { CurrentThread } from "./CurrentThread";
import { ActionHorizon } from "./ActionHorizon";
import { storyMoments } from "@/content/story";

const VID = "/videos/open-water";
const POSTER = "/images/reef/open-water/posters";

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
      {/* 01 — Underlight: open-water video, the descent begins; no reef yet.
          The Current Thread first gathers at the lower edge (Bridge 1). */}
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
            <CurrentThread tone="healthy" edge="bottom" flow="down" />
          </>
        }
      />

      {/* 02 — The Blue Road: distant-reveal video. The thread continues in from
          above (Bridge 1) and widens toward the reef below (Bridge 2). */}
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
            <CurrentThread tone="healthy" edge="top" flow="down" />
            <CurrentThread tone="healthy" edge="bottom" flow="down" />
          </>
        }
      />

      {/* 03–07 — Living Reef Atlas: static scenes, pinned+scrubbed on desktop. */}
      <LivingReefAtlas moments={atlasMoments} />

      {/* 08 — Air: ascent + decision; reef low in frame, longest seam fade. The
          thread curves up out of the reef (Bridge 4) into the action horizon. */}
      <SceneShell
        moment={m.air}
        sectionClass="min-h-[92svh] items-center md:min-h-[96vh]"
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
            <CurrentThread tone="recovery" edge="top" flow="up" />
          </>
        }
      >
        <ActionHorizon />
      </SceneShell>
    </div>
  );
}
