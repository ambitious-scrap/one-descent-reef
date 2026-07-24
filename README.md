# ONE DESCENT

**Tagline:** Go down with the light. Come up with a reason.
**Hackathon:** HackOcean 2026
**Problem Statement:** PS 02 — REEF | Ocean Conservation Platform
**Status:** Complete cinematic reef-experience concept with accessible fallbacks

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
- Three ambient open-water video scenes (Underlight, Blue Road, Air) with
  static poster fallbacks under reduced motion or video failure
- Living Reef Atlas — Scenes 3–7 progressively enhanced into one pinned,
  scroll-scrubbed reef stage (GSAP + ScrollTrigger) on wide desktops; the
  accessible static scenes remain the fallback on mobile, narrow tablet,
  reduced-motion, or when JavaScript is unavailable
- Healthy, warming, bleached, restoration, and partial-recovery progression
- Color Memory — a soft radial reveal that remembers the reef's lost colour
  during the Pale Zone: a CSS-masked healthy overlay follows the pointer over
  the aligned bleached geometry (one rAF, no per-frame React state), with a
  native "Remember colour" button for a restrained full-frame comparison. The
  pointer reveal is desktop-only; mobile and reduced-motion get the same
  button-toggled comparison as an accessible static equivalent
- Current Thread — a recurring underwater continuity motif tying scenes
  together with restrained CSS animation (static under reduced motion)
- Cinematic responsive header with optically centred three-column layout,
  mobile full-screen menu, keyboard Escape support, and one-threshold scroll
  detection (no per-frame React state)
- Quiet editorial action system — soft paper-bloom hover and focus treatment
  on interactive elements
- Action Horizon — the closing section replacing card-style links with quiet
  editorial options
- Cinematic compact footer with Current Thread, GitHub link, and AI-assisted
  disclosure
- Responsive reef artwork integrated as art-directed scenes: eight full-bleed
  moments (healthy → warming → bleached → recovery) built from responsive
  `<picture>` anchors plus screen-blended light/particle overlays
- Accessibility foundation: skip link, single h1, semantic sections, focus
  states, focus-visible outlines, reduced-motion CSS, labelled form controls,
  inert inactive panels, aria-pressed on toggles
- Per-page metadata, viewport, and text-only Open Graph
- Coherent without JavaScript (no scroll hijacking, no autoplay)
- Validated volunteer application form (React Hook Form + Zod, one typed
  schema, accessible field-level errors, first-error focus, live-region
  confirmation — demonstration only, no network request)
- Simulated conservation-support flow (frequency, suggested or custom rupee
  amount, focus area, summary → confirm with edit/back, accessible success
  state — no payment processing and no financial details collected)
- Deployed to Vercel (static export, no server runtime)

GSAP is the only animation dependency. No WebGL or Three.js is used.

Intentionally absent: any real backend, database, email delivery, payment
gateway, or donation receipts. Both flows are demonstrations. REEF is a
fictional ocean-conservation organization created for the ONE DESCENT concept.

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
