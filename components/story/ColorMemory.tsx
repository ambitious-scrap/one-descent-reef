"use client";

import { useEffect, useRef, type RefObject } from "react";
import { ReefAnchor } from "./ReefAnchor";

/**
 * Color Memory — a soft radial reveal that exposes the aligned healthy reef
 * beneath the pointer during the Pale Zone, as if remembering lost colour.
 * The bleached reef stays the visible base; this layer only masks a healthy
 * overlay over the same geography and never morphs geometry. Pointer motion
 * writes CSS custom properties directly through one requestAnimationFrame — no
 * React state per move. Decorative and aria-hidden; the keyboard-accessible
 * comparison button lives in the chapter copy and drives `remember`.
 *
 * Placement in the stack is the caller's job: it must sit above the bleached
 * anchor and below the pale-zone fauna, text, and chapter rail.
 */
export function ColorMemory({
  stageRef,
  active,
  remember,
}: {
  stageRef: RefObject<HTMLElement | null>;
  active: boolean;
  remember: boolean;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    if (!stage || !layer) return;

    // Out of the Pale Zone, or full-frame "remember" mode: no pointer reveal.
    // When remembering, clear the inline opacity so the CSS 0.62 can take over.
    if (!active || remember) {
      layer.style.transition = "opacity 700ms ease";
      layer.style.opacity = remember ? "" : "0";
      return;
    }

    const pos = { x: 0, y: 0 };
    let raf = 0;
    let pending = false;
    const flush = () => {
      pending = false;
      layer.style.setProperty("--memory-x", `${pos.x}px`);
      layer.style.setProperty("--memory-y", `${pos.y}px`);
    };
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      pos.x = e.clientX - r.left;
      pos.y = e.clientY - r.top;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(flush);
      }
    };
    // Fade in quickly on enter; hold briefly then fade slowly on leave, so the
    // remembered colour recedes into the pale reef rather than snapping off.
    const onEnter = () => {
      layer.style.transition = "opacity 220ms ease";
      layer.style.opacity = "1";
    };
    const onLeave = () => {
      layer.style.transition = "opacity 780ms ease 140ms";
      layer.style.opacity = "0";
    };
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [stageRef, active, remember]);

  return (
    <div
      ref={layerRef}
      data-remember={remember ? "true" : "false"}
      aria-hidden="true"
      className="color-memory-layer atlas-cm pointer-events-none absolute inset-0"
    >
      <ReefAnchor state="healthy" />
    </div>
  );
}
