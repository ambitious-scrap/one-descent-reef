import type { ReactNode } from "react";
import type { StoryMoment } from "@/content/story";

/**
 * Semantic, cinematic scene wrapper: a full-bleed <section> whose background
 * "stage" (reef anchors, layers, overlays, scrims) is supplied per scene via
 * `art`, with the copy floated over a calm region of the artwork. Positioning
 * and height vary by scene through the *Class props — the shell only guarantees
 * the shared structure and accessibility (labelled section, single h2, readable
 * copy width). Not a generic renderer: each scene composes its own `art`.
 */
export function SceneShell({
  moment,
  sectionClass = "",
  contentClass = "",
  panelClass = "",
  art,
  children,
}: {
  moment: StoryMoment;
  sectionClass?: string;
  contentClass?: string;
  panelClass?: string;
  art?: ReactNode;
  children?: ReactNode;
}) {
  const { id, index, name, heading, support, transition } = moment;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scene flex ${sectionClass}`}
    >
      {art ? (
        <div className="scene-art" aria-hidden="true">
          {art}
        </div>
      ) : null}
      <div
        className={`scene-content mx-auto flex w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 ${contentClass}`}
      >
        <div className={`max-w-prose ${panelClass}`}>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/70">
            {String(index).padStart(2, "0")} · {name}
          </p>
          <h2
            id={`${id}-heading`}
            className="scene-heading mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg text-paper/95 sm:text-xl">{support}</p>
          {transition ? (
            <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-paper/70">
              {transition}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
