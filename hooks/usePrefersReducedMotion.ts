import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/**
 * Tracks the user's reduced-motion preference via an external-store subscription.
 * The server snapshot is `true` so SSR and the first client paint default to the
 * calm, motion-free treatment (posters, no autoplay); the client only opts into
 * motion once it confirms the user allows it. Updates live on preference change.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true,
  );
}
