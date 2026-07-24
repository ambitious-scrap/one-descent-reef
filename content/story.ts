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
      "Below this surface, an entire living world depends on one fragile structure. Read on to descend.",
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
      "The reef is more than blue — it carries stories written through generations of growth.",
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
      "Coral animals build limestone homes that become habitat for fish, invertebrates, and algae — countless relationships across the reef.",
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
      "Sustained heat can cause corals to expel the algae that feed and colour them. The pale skeleton shows through, while the coral remains alive but deeply stressed.",
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
      "This coral is not necessarily dead. Under severe stress, recovery remains possible when conditions improve in time.",
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
      "Fragments of resilient coral are grown in nurseries, monitored, and returned to damaged reef sections by trained restoration teams.",
    tone: "recovery",
    mediaCaption:
      "A grey slope strung with rope nursery lines, saturated coral fragments in tidy rows, marked with gold tags.",
    transition: "Now watch what time and care can begin.",
  },
  {
    id: "way-up",
    index: 7,
    name: "The Way Up",
    heading: "Given hands and time, it comes back.",
    support:
      "With suitable conditions, long-term protection, and careful restoration, selected reef areas can regain living cover and ecological activity over time.",
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
    detail: "Explore the science and conservation approach behind the descent.",
    role: "mission" as const,
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    detail: "Choose a role in monitoring, education, restoration, or outreach.",
    role: "volunteer" as const,
  },
  {
    href: "/support",
    title: "Support the work",
    detail: "See how a simulated contribution supports reef priorities.",
    role: "support" as const,
  },
];

export const finalLine =
  "The reef doesn’t need everyone. It needs enough of us. Be one.";

/** The restoration method behind the "Hands" scene — an ordered, monitored process. */
export const restorationMethod = [
  {
    n: "01",
    title: "Nursery",
    body: "Fragments of heat-tolerant coral are secured to rope or frame nurseries to grow in sheltered water.",
  },
  {
    n: "02",
    title: "Monitoring",
    body: "Each colony is tagged and checked over months for growth, disease, and heat stress.",
  },
  {
    n: "03",
    title: "Outplanting",
    body: "Healthy grown fragments are returned by hand to bare reef sections that need rebuilding.",
  },
  {
    n: "04",
    title: "Time",
    body: "Replanted colonies are left to fuse, spread, and eventually spawn on their own.",
  },
] as const;
