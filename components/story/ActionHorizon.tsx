import Link from "next/link";
import { finalActions } from "@/content/story";

const roleClass: Record<string, string> = {
  mission: "ah-role-mission",
  volunteer: "ah-role-volunteer",
  support: "ah-role-support",
};

/**
 * The Air action horizon — the three ways to resurface, set as quiet editorial
 * actions over open water rather than pricing-style cards. Each grows a soft,
 * role-tinted paper panel behind itself on hover/focus; Volunteer is the
 * emphasised centre. No rest chrome, no opaque cards, generous spacing.
 */
export function ActionHorizon() {
  return (
    <ul
      role="list"
      className="action-horizon relative left-1/2 mt-14 w-[min(60rem,86vw)] -translate-x-1/2 text-left"
    >
      {finalActions.map((action) => {
        const emphasised = action.role === "volunteer";
        return (
          <li key={action.href} className={emphasised ? "md:-mt-2" : ""}>
            <Link
              href={action.href}
              className={`paper-action paper-action--panel ${roleClass[action.role]} max-w-xs`}
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className={`scene-heading font-serif leading-tight ${
                    emphasised ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {action.title}
                </span>
                <span className="pa-plus font-sans text-xl font-light" aria-hidden="true">
                  +
                </span>
              </span>
              <span className="font-sans text-sm leading-relaxed opacity-80 [text-shadow:0_1px_10px_rgba(6,28,45,0.55)]">
                {action.detail}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
