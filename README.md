# ONE DESCENT

**Tagline:** Go down with the light. Come up with a reason.
**Hackathon:** HackOcean 2026
**Problem Statement:** PS 02 — REEF | Ocean Conservation Platform
**Status:** Static multi-page foundation with integrated reef artwork complete (no animation)

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
| `/volunteer` | Volunteer roles and an accessible, validated sign-up form (demonstration only) |
| `/support`   | Simulated giving tiers and a transparent where-support-goes breakdown |

## Implementation status

Done:

- Next.js App Router + React + TypeScript + Tailwind CSS
- All five routes with real content (no placeholders)
- Landing page with all eight approved story moments in order
- Responsive site header (current-page indication, keyboard focus, disclosure
  mobile nav) and footer
- Locked reef artwork integrated as static, art-directed scenes: eight
  full-bleed moments (healthy → warming → bleached → recovery) built from
  responsive `<picture>` anchors (portrait crop on mobile, landscape on desktop)
  plus screen-blended light/particle overlays — no animation, no scroll effects
- Accessibility foundation: skip link, single h1, semantic sections, focus
  states, reduced-motion CSS, labelled form controls
- Per-page metadata, viewport, and text-only Open Graph
- Coherent without JavaScript (no scroll hijacking, no autoplay)
- Validated volunteer application form (React Hook Form + Zod, one typed
  schema, accessible field-level errors, first-error focus, live-region
  confirmation — demonstration only, no network request)
- Simulated conservation-support flow (frequency, suggested or custom rupee
  amount, focus area, summary → confirm with edit/back, accessible success
  state — no payment processing and no financial details collected)

Planned but not yet built:

- GSAP / ScrollTrigger scroll choreography
- Color Memory interaction and organism hotspots
- Advanced interaction polish, custom cursor, page transitions, audio
- Deployment

Intentionally absent: any real backend, database, email delivery, payment
gateway, or donation receipts. Both flows are demonstrations.

## Prototype

The original approved static prototype is preserved, unchanged, at
[`reference/prototype/index.html`](reference/prototype/index.html). It is the
reference implementation of the eight-scene story and its interactions.

## Asset policy

Only production-ready optimized visual assets belong in `public/`. Raw
generations, rejected candidates, source images, test composites, and event
documents are stored outside this repository in a local project archive. The
public repository intentionally excludes large working files.

## AI-assisted tools disclosure

AI-assisted development tools used: ChatGPT, Claude Code, OpenCode.
