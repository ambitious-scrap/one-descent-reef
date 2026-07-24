type ThreadTone = "healthy" | "warm" | "pale" | "recovery";
type ThreadEdge = "top" | "bottom";

/**
 * Current Thread — the recurring underwater current that carries the visitor
 * between scenes. Broad, translucent paper-gouache masses with feathered edges,
 * tinted to the reef state. Decorative only: aria-hidden, non-interactive, adds
 * no layout height (absolutely pinned to one edge of its scene's art and clipped
 * by that art's overflow). Motion is a very slow CSS drift (max ~4% travel) that
 * the global reduced-motion rule freezes to a static ribbon.
 */
export function CurrentThread({
  tone,
  edge = "bottom",
  flow = "down",
  className = "",
}: {
  tone: ThreadTone;
  edge?: ThreadEdge;
  flow?: "down" | "up";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      data-tone={tone}
      data-edge={edge}
      data-flow={flow}
      className={`current-thread ${edge === "top" ? "top-0" : "bottom-0"} ${className}`}
    >
      <span className="ct-mass ct-mass-1" />
      <span className="ct-mass ct-mass-2" />
      <span className="ct-grain" />
    </div>
  );
}
