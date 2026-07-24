import Link from "next/link";
import { StoryScene } from "./StoryScene";
import {
  storyMoments,
  finalActions,
  finalLine,
} from "@/content/story";

const accentBorder: Record<string, string> = {
  seaglass: "border-t-seaglass",
  gold: "border-t-gold",
  coral: "border-t-coral",
};

export function StoryJourney() {
  return (
    <div>
      {storyMoments.map((moment) =>
        moment.id === "air" ? (
          <StoryScene key={moment.id} moment={moment}>
            <nav
              aria-label="Take action"
              className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {finalActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`block rounded-xl border-t-4 bg-paper/95 p-5 text-abyss transition-transform hover:-translate-y-1 focus-visible:-translate-y-1 ${accentBorder[action.accent]}`}
                >
                  <strong className="block font-serif text-lg">
                    {action.title}
                  </strong>
                  <span className="mt-1 block font-sans text-sm text-abyss/80">
                    {action.detail}
                  </span>
                </Link>
              ))}
            </nav>
            <p className="mt-8 font-sans italic text-paper/85">{finalLine}</p>
          </StoryScene>
        ) : (
          <StoryScene key={moment.id} moment={moment} />
        ),
      )}
    </div>
  );
}
