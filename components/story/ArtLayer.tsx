import type { CSSProperties } from "react";

/**
 * A single decorative, positioned reef image layer (foreground fauna, sea fans,
 * or black-background particle / light-shaft overlays). Always non-interactive
 * and hidden from assistive tech; meaning lives in the scene copy, never here.
 * Blend overlays pass `mix-blend-screen art-screen` in className — `art-screen`
 * hides them where screen blending is unsupported (their black backgrounds
 * would otherwise show).
 */
export function ArtLayer({
  src,
  className = "",
  style,
}: {
  src: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative, freely positioned layer; next/image fill fights the per-scene placement
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
    />
  );
}
