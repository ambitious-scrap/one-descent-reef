import type { StoryMoment } from "@/content/story";

const toneClass: Record<StoryMoment["tone"], string> = {
  surface: "tone-surface",
  healthy: "tone-healthy",
  warming: "tone-warming",
  bleached: "tone-bleached",
  recovery: "tone-recovery",
};

export function StoryScene({
  moment,
  children,
}: {
  moment: StoryMoment;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={moment.id}
      aria-labelledby={`${moment.id}-heading`}
      className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24"
    >
      <div className="max-w-prose">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-paper/60">
          {String(moment.index).padStart(2, "0")} · {moment.name}
        </p>
        <h2
          id={`${moment.id}-heading`}
          className="mt-3 text-3xl leading-tight sm:text-4xl"
        >
          {moment.heading}
        </h2>
        <p className="mt-4 text-base text-paper/90 sm:text-lg">
          {moment.support}
        </p>
        {moment.transition ? (
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-paper/50">
            {moment.transition}
          </p>
        ) : null}
        {children}
      </div>

      {/* Media area: restrained tonal placeholder; accepts layered art later. */}
      <figure className={`scene-media ${toneClass[moment.tone]} md:min-h-72`}>
        <figcaption className="absolute inset-x-0 bottom-0 bg-abyss/55 p-3 font-sans text-xs text-paper/85">
          {moment.mediaCaption}
        </figcaption>
      </figure>
    </section>
  );
}
