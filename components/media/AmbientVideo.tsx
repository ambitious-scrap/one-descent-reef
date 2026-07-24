"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type AmbientVideoProps = {
  webmSrc: string;
  mp4Src: string;
  posterSrc: string;
  /** currentTime (s) at which the loop-seam fade toward the poster begins. */
  seamFadeStart: number;
  className?: string;
  /** Above-the-fold: preload metadata and allow immediate play. */
  eager?: boolean;
  /** object-position for the <video>/poster (e.g. "center bottom"). */
  objectPosition?: string;
  /** Only when the video carries meaning; normally decorative + silent. */
  ariaLabel?: string;
};

/**
 * One atmospheric, silent, looping background video with a poster fallback.
 * Decorative by default (hidden from AT, not focusable, pointer-events none).
 * Activates lazily via IntersectionObserver, pauses when offscreen or when the
 * tab is hidden, and masks its loop seam by fading the video toward the poster
 * beneath it near the end of each loop. Reduced-motion users get only the
 * static poster — no <video>, no autoplay, no loop.
 */
export function AmbientVideo({
  webmSrc,
  mp4Src,
  posterSrc,
  seamFadeStart,
  className = "",
  eager = false,
  objectPosition = "center",
  ariaLabel,
}: AmbientVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const decorative = !ariaLabel;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    let visible = false;
    let rafId = 0;
    let opacity = 1;

    const play = () => {
      // Autoplay can reject (policy/decode); poster stays, no console spam loop.
      video.play().catch(() => {});
    };

    // Seam mask: ease the video opacity toward the poster near the loop end,
    // then ease back after the loop resets. Runs only while visible; no React
    // state, writes straight to the element style.
    const tick = () => {
      if (!visible) return;
      const d = video.duration || 7.25;
      const t = video.currentTime;
      const target =
        t >= seamFadeStart ? Math.max(0, 1 - (t - seamFadeStart) / (d - seamFadeStart)) : 1;
      opacity += (target - opacity) * 0.25;
      video.style.opacity = opacity.toFixed(3);
      rafId = requestAnimationFrame(tick);
    };
    const startTick = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    };
    const stopTick = () => cancelAnimationFrame(rafId);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) {
          play();
          startTick();
        } else {
          video.pause();
          stopTick();
        }
      },
      // "near the viewport": begin loading/playing shortly before fully in view.
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    io.observe(video);

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
        stopTick();
      } else if (visible) {
        play();
        startTick();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stopTick();
    };
  }, [reducedMotion, seamFadeStart]);

  // Reduced motion (and SSR / first paint): poster only, guaranteed motion-free.
  if (reducedMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- full-bleed decorative poster
      <img
        src={posterSrc}
        alt={ariaLabel ?? ""}
        aria-hidden={decorative || undefined}
        width={1920}
        height={1080}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectPosition }}
        draggable={false}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      poster={posterSrc}
      muted
      loop
      playsInline
      preload={eager ? "metadata" : "none"}
      aria-hidden={decorative || undefined}
      aria-label={ariaLabel}
      width={1920}
      height={1080}
      className={`h-full w-full select-none object-cover ${className}`}
      style={{ objectPosition, pointerEvents: "none" }}
      tabIndex={-1}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
