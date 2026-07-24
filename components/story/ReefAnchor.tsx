import type { CSSProperties } from "react";

export type AnchorState = "healthy" | "bleached" | "recovery";

/**
 * A full-bleed reef "anchor" background, art-directed per viewport:
 * a portrait crop on narrow screens, a landscape crop on wide ones.
 * Rendered with a plain <img> inside <picture> so the browser downloads
 * only the matching source (never both). Decorative — the ecological
 * state (healthy / bleached / recovery) is always stated in scene copy.
 */
export function ReefAnchor({
  state,
  className = "",
  style,
}: {
  state: AnchorState;
  className?: string;
  style?: CSSProperties;
}) {
  const dir = "/images/reef/anchors";
  return (
    // `block` + fill on <picture> itself: it defaults to inline with auto
    // height, which would collapse the inner img's h-full to natural size.
    <picture
      className={`absolute inset-0 block h-full w-full ${className}`}
      style={style}
    >
      <source
        media="(min-width: 768px)"
        srcSet={`${dir}/desktop/reef-anchor-${state}-desktop.png`}
        width={1672}
        height={941}
      />
      {/* Art-directed <picture>; next/image can't swap portrait/landscape crops. */}
      <img
        src={`${dir}/mobile/reef-anchor-${state}-mobile.png`}
        alt=""
        aria-hidden="true"
        width={941}
        height={1672}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full select-none object-cover"
      />
    </picture>
  );
}
