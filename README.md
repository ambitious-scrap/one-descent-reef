# ONE DESCENT

**Tagline:** Go down with the light. Come up with a reason.
**Hackathon:** HackOcean 2026
**Problem Statement:** PS 02 — REEF | Ocean Conservation Platform
**Status:** Static multi-page foundation complete (no animation, no final artwork)

---

ONE DESCENT is a REEF ocean-conservation concept: a single dive through a
living reef — thriving, bleaching, and recovering — that resurfaces the visitor
with a reason to act. This repository holds a Next.js (App Router) application
plus the original planning material and prototype.

## Local setup

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
```

## Routes

| Route        | Purpose |
| ------------ | ------- |
| `/`          | Landing story — the eight-moment descent, ending in Mission / Volunteer / Support links |
| `/mission`   | REEF mission, bleaching science, and conservation principles |
| `/impact`    | Restoration projects, monitoring, and illustrative recovery figures |
| `/volunteer` | Volunteer roles and an accessible (unvalidated) sign-up form shell |
| `/support`   | Simulated giving tiers and a transparent where-support-goes breakdown |

## Implementation status

Done:

- Next.js App Router + React + TypeScript + Tailwind CSS
- All five routes with real content (no placeholders)
- Landing page with all eight approved story moments in order
- Responsive site header (current-page indication, keyboard focus, disclosure
  mobile nav) and footer
- CSS-only tonal reef foundation (healthy → warming → bleached → recovery) with
  per-scene media areas ready to receive layered artwork
- Accessibility foundation: skip link, single h1, semantic sections, focus
  states, reduced-motion CSS, labelled form controls
- Per-page metadata, viewport, and text-only Open Graph
- Coherent without JavaScript (no scroll hijacking, no autoplay)

Planned but not yet built:

- GSAP / ScrollTrigger scroll choreography
- Color Memory interaction and organism hotspots
- Final layered reef artwork and audio
- React Hook Form + Zod form validation and a submission backend
- Donation processing
- Custom cursor and advanced page transitions
- Deployment

## Prototype

The original approved static prototype is preserved, unchanged, at
[`reference/prototype/index.html`](reference/prototype/index.html). It is the
reference implementation of the eight-scene story and its interactions.

## AI-assisted tools disclosure

AI-assisted development tools used: ChatGPT, Claude Code, OpenCode.
