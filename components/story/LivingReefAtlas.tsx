"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SceneShell } from "./StoryScene";
import { ReefAnchor } from "./ReefAnchor";
import { ArtLayer } from "./ArtLayer";
import type { StoryMoment } from "@/content/story";
import { restorationMethod } from "@/content/story";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OVERLAY = "/images/reef/overlays";
const LAYER = "/images/reef/layers";
const LIGHT = `${OVERLAY}/overlay-lightshafts-healthy-black.png`;
const PARTICLES = `${OVERLAY}/overlay-particles-healthy-black.png`;
const SEAFAN_H = `${LAYER}/foreground/layer-seafan-foreground-healthy.png`;
const SEAFAN_B = `${LAYER}/foreground/layer-seafan-foreground-bleached.png`;
const SCHOOL_H = `${LAYER}/fauna/layer-fusilier-school-healthy.png`;
const SCHOOL_R = `${LAYER}/fauna/layer-fusilier-school-recovery.png`;
const FISH_SOLO = `${LAYER}/fauna/layer-fish-solitary-bleached.png`;

const CHAPTERS = ["Living Wall", "Warm Water", "Pale Zone", "Hands", "The Way Up"];

/** Text-safe scrims: top on narrow (open water above the reef), right on wide. */
function Scrims() {
  return (
    <>
      <div className="absolute inset-0 scrim-t md:hidden" />
      <div className="absolute inset-0 hidden scrim-r md:block" />
    </>
  );
}

/**
 * Scenes 3–7 of the descent. The five semantic <section>s render as ordinary
 * scrolling scenes by default (the accessible fallback that ships when JS,
 * width, or motion preference disallow enhancement). On wide desktops without
 * reduced-motion, a GSAP + ScrollTrigger enhancement hides that static block
 * and reveals one pinned reef stage whose health state, fauna, and chapter copy
 * are driven by a single scrubbed timeline. No wheel/touch hijack: the stage is
 * CSS-sticky and the timeline merely scrubs to native scroll.
 */
export function LivingReefAtlas({ moments }: { moments: StoryMoment[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const staticRef = useRef<HTMLDivElement>(null);
  const enhancedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const staticEl = staticRef.current;
    const enhancedEl = enhancedRef.current;
    if (!staticEl || !enhancedEl) return;

    const ctx = gsap.context((self) => {
      const q = self.selector as (s: string) => HTMLElement[];
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Enhance: retire the static duplicate from layout + AT, reveal stage.
          staticEl.hidden = true;
          enhancedEl.hidden = false;

          const anchorStack = q(".atlas-anchors");
          const healthy = q(".atlas-healthy");
          const bleached = q(".atlas-bleached");
          const recovery = q(".atlas-recovery");
          const light = q(".atlas-light");
          const particles = q(".atlas-particles");
          const warmVeil = q(".atlas-warm");
          const coolVeil = q(".atlas-cool");
          const seafanH = q(".atlas-seafan-h");
          const seafanB = q(".atlas-seafan-b");
          const schoolH = q(".atlas-school-h");
          const schoolR = q(".atlas-school-r");
          const solo = q(".atlas-solo");
          const panels = q(".atlas-panel");
          const rail = q(".atlas-rail-item");
          const steps = q(".atlas-step");
          const sheet = q(".atlas-sheet");

          // Chapter 0 — Living Wall baseline.
          gsap.set(healthy, { opacity: 1 });
          gsap.set([bleached, recovery, warmVeil, coolVeil, seafanB, solo, schoolR], {
            opacity: 0,
          });
          gsap.set(light, { opacity: 0.4 });
          gsap.set(particles, { opacity: 0.3 });
          gsap.set(seafanH, { opacity: 0.9 });
          gsap.set(schoolH, { opacity: 0.6 });
          gsap.set(panels, { opacity: 0, yPercent: 4 });
          gsap.set(panels[0], { opacity: 1, yPercent: 0 });

          let lastChapter = -1;

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: enhancedEl,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
              onUpdate: (st) => {
                const cf = st.progress * 4; // chapter float 0..4
                const chapter = Math.min(4, Math.round(cf));
                if (chapter !== lastChapter) {
                  rail.forEach((el, i) =>
                    el.setAttribute("data-active", String(i === chapter)),
                  );
                  // Paper-sheet gesture: one restrained field-note turn per chapter.
                  gsap.fromTo(
                    sheet,
                    { opacity: 0.26, rotateY: -5, yPercent: 3 },
                    {
                      opacity: 0,
                      rotateY: 0,
                      yPercent: 0,
                      duration: 0.9,
                      ease: "power2.out",
                      overwrite: true,
                    },
                  );
                  lastChapter = chapter;
                }
                // Restoration method advances with scroll inside the Hands hold.
                const inHands = Math.max(0, Math.min(1, cf - 2.5));
                const stepIdx = Math.min(3, Math.floor(inHands * 4));
                steps.forEach((el, i) =>
                  el.setAttribute("data-active", String(cf > 2.5 && i === stepIdx)),
                );
              },
            },
          });

          // Continuous, restrained parallax across the whole sequence.
          tl.to(anchorStack, { scale: 1.02, duration: 4 }, 0);
          tl.to(seafanH, { yPercent: -6, duration: 4 }, 0);

          // 0 → 1  Warm Water: heat blends in, colour drains.
          tl.to(bleached, { opacity: 0.4 }, 0)
            .to(warmVeil, { opacity: 1 }, 0)
            .to(schoolH, { opacity: 0.15 }, 0)
            .to(light, { opacity: 0.25 }, 0)
            .to(panels[0], { opacity: 0, yPercent: -4 }, 0)
            .to(panels[1], { opacity: 1, yPercent: 0 }, 0.15);

          // 1 → 2  Pale Zone: full bleach, quiet, cool.
          tl.to(healthy, { opacity: 0 }, 1)
            .to(bleached, { opacity: 1 }, 1)
            .to(warmVeil, { opacity: 0 }, 1)
            .to(light, { opacity: 0 }, 1)
            .to(particles, { opacity: 0.1 }, 1)
            .to(coolVeil, { opacity: 1 }, 1)
            .to(seafanH, { opacity: 0 }, 1)
            .to(seafanB, { opacity: 0.85 }, 1)
            .to(schoolH, { opacity: 0 }, 1)
            .to(solo, { opacity: 0.8 }, 1)
            .to(panels[1], { opacity: 0, yPercent: -4 }, 1)
            .to(panels[2], { opacity: 1, yPercent: 0 }, 1.15);

          // 2 → 3  Hands: begin bleached → recovery blend.
          tl.to(recovery, { opacity: 0.5 }, 2)
            .to(coolVeil, { opacity: 0.4 }, 2)
            .to(solo, { opacity: 0.2 }, 2)
            .to(panels[2], { opacity: 0, yPercent: -4 }, 2)
            .to(panels[3], { opacity: 1, yPercent: 0 }, 2.15);

          // 3 → 4  The Way Up: recovery dominant, partial colour return.
          tl.to(recovery, { opacity: 1 }, 3)
            .to(bleached, { opacity: 0 }, 3)
            .to(seafanB, { opacity: 0.2 }, 3)
            .to(seafanH, { opacity: 0.35 }, 3)
            .to(light, { opacity: 0.3 }, 3)
            .to(particles, { opacity: 0.25 }, 3)
            .to(coolVeil, { opacity: 0 }, 3)
            .fromTo(schoolR, { opacity: 0, xPercent: -4 }, { opacity: 0.8, xPercent: 4 }, 3)
            .to(panels[3], { opacity: 0, yPercent: -4 }, 3)
            .to(panels[4], { opacity: 1, yPercent: 0 }, 3.15);

          ScrollTrigger.refresh();

          return () => {
            // matchMedia revert: restore the accessible static block.
            staticEl.hidden = false;
            enhancedEl.hidden = true;
          };
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Accessible, scrolling fallback — the shipped experience without enhancement. */}
      <div ref={staticRef}>
        <StaticScenes moments={moments} />
      </div>

      {/* Enhanced pinned stage — hidden until JS enables it; decorative visuals,
          real chapter copy carried in the panels. */}
      <div ref={enhancedRef} hidden className="atlas-enhanced relative h-[500vh]">
        <div className="atlas-stage sticky top-0 h-screen w-full overflow-hidden bg-abyss">
          {/* Reef geography — the same terrace across every state. */}
          <div className="atlas-anchors absolute inset-0 will-change-transform">
            <div className="atlas-healthy absolute inset-0">
              <ReefAnchor state="healthy" />
            </div>
            <div className="atlas-bleached absolute inset-0">
              <ReefAnchor state="bleached" />
            </div>
            <div className="atlas-recovery absolute inset-0">
              <ReefAnchor state="recovery" />
            </div>
          </div>

          {/* Atmospheric overlays. */}
          <ArtLayer
            src={LIGHT}
            className="atlas-light inset-0 h-full w-full object-cover mix-blend-screen art-screen"
          />
          <ArtLayer
            src={PARTICLES}
            className="atlas-particles inset-0 h-full w-full object-cover mix-blend-screen art-screen"
          />
          <div className="atlas-warm absolute inset-0 bg-gradient-to-b from-amber/25 via-transparent to-abyss/30" />
          <div className="atlas-cool absolute inset-0 bg-milky/15" />

          {/* Selective fauna / foreground (turtle layers intentionally omitted —
              the anchor paintings already carry a turtle). */}
          <ArtLayer src={SEAFAN_H} className="atlas-seafan-h -left-10 bottom-[-4%] w-72" />
          <ArtLayer src={SEAFAN_B} className="atlas-seafan-b -left-10 bottom-[-4%] w-72" />
          <ArtLayer
            src={SCHOOL_H}
            className="atlas-school-h left-[28%] top-[40%] w-72 will-change-transform"
          />
          <ArtLayer
            src={FISH_SOLO}
            className="atlas-solo right-[34%] top-[46%] w-24 will-change-transform"
          />
          <ArtLayer
            src={SCHOOL_R}
            className="atlas-school-r left-[26%] top-[38%] w-80 will-change-transform"
          />

          {/* Text-safe scrim over the open water where copy floats. */}
          <div className="absolute inset-0 scrim-r" aria-hidden="true" />

          {/* Chapter rail — decorative progress indicator. */}
          <ul
            aria-hidden="true"
            className="atlas-rail absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
          >
            {CHAPTERS.map((c, i) => (
              <li
                key={c}
                data-active={i === 0}
                className="atlas-rail-item font-sans text-xs uppercase tracking-[0.2em]"
              >
                {c}
              </li>
            ))}
          </ul>

          {/* Chapter copy — one panel visible at a time, stacked in the calm area. */}
          <div className="absolute inset-0 flex items-center">
            <div className="relative mx-auto grid w-full max-w-6xl px-6">
              <div
                className="atlas-sheet pointer-events-none absolute right-6 top-1/2 h-64 w-[34rem] max-w-[46vw] -translate-y-1/2 rounded-sm bg-paper/10"
                style={{ transformOrigin: "right center" }}
                aria-hidden="true"
              />
              {moments.map((m) => (
                <div
                  key={m.id}
                  className="atlas-panel col-start-1 row-start-1 ml-auto max-w-prose text-right"
                >
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/70">
                    {String(m.index).padStart(2, "0")} · {m.name}
                  </p>
                  <h2 className="scene-heading mt-3 text-4xl leading-tight md:text-5xl">
                    {m.heading}
                  </h2>
                  <p className="mt-4 text-lg text-paper/95">{m.support}</p>
                  {m.id === "hands" ? (
                    <ol className="mt-6 space-y-3 text-left">
                      {restorationMethod.map((step) => (
                        <li
                          key={step.n}
                          data-active="false"
                          className="atlas-step flex gap-3 opacity-60 transition-opacity data-[active=true]:opacity-100"
                        >
                          <span className="font-serif text-xl tabular-nums text-gold">
                            {step.n}
                          </span>
                          <div>
                            <h3 className="font-serif text-base leading-snug">
                              {step.title}
                            </h3>
                            <p className="mt-0.5 font-sans text-sm text-paper/85">
                              {step.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The unchanged, accessible five-scene fallback (mirrors the prior static art). */
function StaticScenes({ moments }: { moments: StoryMoment[] }) {
  const m = Object.fromEntries(moments.map((s) => [s.id, s])) as Record<
    string,
    StoryMoment
  >;
  const REVEAL_CONTENT = "items-start justify-center md:items-center md:justify-end";
  const REVEAL_PANEL = "md:ml-auto";
  const screen = "inset-0 h-full w-full object-cover mix-blend-screen art-screen";

  return (
    <>
      <SceneShell
        moment={m["living-wall"]}
        sectionClass="min-h-[86svh] items-stretch md:min-h-[94vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="healthy" />
            <ArtLayer src={LIGHT} className={`${screen} opacity-40`} />
            <ArtLayer src={PARTICLES} className={`${screen} opacity-30`} />
            <ArtLayer src={SEAFAN_H} className="-left-10 bottom-[-4%] w-36 opacity-90 sm:w-52 md:w-72" />
            <Scrims />
          </>
        }
      />
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
            <ArtLayer src={PARTICLES} className={`${screen} opacity-20`} />
            <Scrims />
          </>
        }
      />
      <SceneShell
        moment={m["pale-zone"]}
        sectionClass="min-h-[84svh] items-stretch md:min-h-[88vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="bleached" />
            <div className="absolute inset-0 bg-milky/10" />
            <ArtLayer src={PARTICLES} className={`${screen} opacity-10`} />
            <Scrims />
          </>
        }
      />
      <SceneShell
        moment={m.hands}
        sectionClass="min-h-[86svh] items-stretch md:min-h-[92vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="bleached" />
            <ReefAnchor state="recovery" className="opacity-45" />
            <ArtLayer src={PARTICLES} className={`${screen} opacity-20`} />
            <Scrims />
          </>
        }
      >
        <ol className="mt-8 space-y-5">
          {restorationMethod.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="font-serif text-2xl tabular-nums text-gold">{step.n}</span>
              <div>
                <h3 className="font-serif text-lg leading-snug">{step.title}</h3>
                <p className="mt-1 font-sans text-sm text-paper/85">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </SceneShell>
      <SceneShell
        moment={m["way-up"]}
        sectionClass="min-h-[84svh] items-stretch md:min-h-[90vh]"
        contentClass={REVEAL_CONTENT}
        panelClass={REVEAL_PANEL}
        art={
          <>
            <ReefAnchor state="recovery" />
            <ArtLayer src={LIGHT} className={`${screen} opacity-35`} />
            <ArtLayer src={PARTICLES} className={`${screen} opacity-25`} />
            <Scrims />
          </>
        }
      />
    </>
  );
}
