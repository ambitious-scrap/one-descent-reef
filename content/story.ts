export type ReefTone = "healthy" | "warming" | "bleached" | "recovery" | "surface";

export type StoryMoment = {
  id: string;
  index: number;
  name: string;
  heading: string;
  support: string;
  /** Tonal progression the visual media area should express. */
  tone: ReefTone;
  /** Short image-area caption describing what art will occupy the media slot. */
  mediaCaption: string;
  /** Optional transition line carried from the prototype. */
  transition?: string;
};

export const storyMoments: StoryMoment[] = [
  {
    id: "underlight",
    index: 1,
    name: "Underlight",
    heading: "Take a breath.",
    support:
      "Below this surface, a quarter of all ocean life depends on one living structure. Read on to descend.",
    tone: "surface",
    mediaCaption:
      "The sea surface seen from below, sunlight breaking into shafts through warm shallow water.",
  },
  {
    id: "blue-road",
    index: 2,
    name: "The Blue Road",
    heading: "The light thins. The story doesn’t.",
    support:
      "Every ten meters down, the ocean keeps more of its secrets. The reef holds most of them.",
    tone: "surface",
    mediaCaption:
      "Open blue water, a school of small fish crossing the middle distance, a dark reef wall emerging from the haze.",
    transition: "There. On the wall.",
  },
  {
    id: "living-wall",
    index: 3,
    name: "The Living Wall",
    heading: "Meet the city that builds itself.",
    support:
      "Coral is an animal, a builder, and a landlord to thousands. It has been growing this wall for four hundred years.",
    tone: "healthy",
    mediaCaption:
      "A sunlit coral terrace in full colour: staghorn, brain-coral dome, and a violet sea fan, fish weaving between them.",
    transition: "Follow the turtle. Notice the water.",
  },
  {
    id: "warm-water",
    index: 4,
    name: "Warm Water",
    heading: "The water is changing.",
    support:
      "A few degrees of sustained heat, and coral expels the algae that feed and colour it. What’s left is white — alive, but starving.",
    tone: "warming",
    mediaCaption:
      "The same reef wall, hazier and quieter: fewer fish, milky water, the warmth draining from the light.",
    transition: "This is the same reef.",
  },
  {
    id: "pale-zone",
    index: 5,
    name: "The Pale Zone",
    heading: "When heat stays, colour leaves.",
    support:
      "This coral is not dead. It is holding on — and it can come back, if the water lets it.",
    tone: "bleached",
    mediaCaption:
      "The same coral terrace, now chalk-white after bleaching, with one small violet patch surviving.",
    transition: "Look down. Someone’s here.",
  },
  {
    id: "hands",
    index: 6,
    name: "Hands",
    heading: "Recovery isn’t a miracle. It’s a method.",
    support:
      "Fragments of surviving coral, grown on lines, planted back by hand. REEF volunteers have done this ten thousand times.",
    tone: "recovery",
    mediaCaption:
      "A grey slope strung with rope nursery lines, saturated coral fragments in tidy rows, marked with gold tags.",
    transition: "Now watch what ten years can do.",
  },
  {
    id: "way-up",
    index: 7,
    name: "The Way Up",
    heading: "Given hands and time, it comes back.",
    support:
      "Reefs replanted a decade ago now spawn on their own. Recovery scales exactly as far as we do.",
    tone: "recovery",
    mediaCaption:
      "Rising past restored terraces, colour returning zone by zone, the fish school larger than before.",
    transition: "Almost up. Don’t forget.",
  },
  {
    id: "air",
    index: 8,
    name: "Air",
    heading: "Come up ready.",
    support:
      "You’ve seen what’s down there — what it was, what it can be. Choose how you return.",
    tone: "surface",
    mediaCaption:
      "The surface from just below, warm light returning, a diver rising toward open air.",
  },
];

export const finalActions = [
  {
    href: "/mission",
    title: "Learn the mission",
    detail: "See how REEF works. Five minutes, no signup.",
    accent: "seaglass" as const,
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    detail: "Train with us. Dive with us. Plant coral with your own hands.",
    accent: "gold" as const,
  },
  {
    href: "/support",
    title: "Support the work",
    detail: "One fragment costs less than lunch. Fund a line, follow its growth.",
    accent: "coral" as const,
  },
];

export const finalLine =
  "The reef doesn’t need everyone. It needs enough of us. Be one.";
