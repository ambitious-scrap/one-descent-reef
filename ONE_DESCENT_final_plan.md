# ONE DESCENT — Final Production Plan
## Style: Luminous Paper-Gouache Ocean Diorama · Structure: ONE DESCENT
### Complete step-by-step plan with every prompt

This document is self-contained. It merges the two treatments into one locked direction and gives you: the locked creative decisions, a phased production roadmap, the full image-prompt library, motion/video prompts, the ElevenLabs sound library, the build order, and QA checklists.

---

# PART A — LOCKED CREATIVE DECISIONS

| Decision | Locked value |
|---|---|
| Visual style | **Luminous Paper-Gouache Ocean Diorama** — a cinematic gouache-painted ocean built from subtly layered paper planes. Gouache pigment and painted light carry the cinema; refined paper layering carries the depth. Never craft-project cute, never concept-art photoreal. |
| Project title | **ONE DESCENT** |
| Tagline | *Go down with the light. Come up with a reason.* |
| Core metaphor | Scrolling is diving. Depth is understanding. Saturation is health. |
| Recurring motif | A small warm light ("the pulse") — appears as the sinking scroll cue, travels the depth gauge, becomes the gold glint that pulls the visitor out of the pale zone, and lights the three CTA branches at the end. |
| Signature interaction | **Color Memory** — touching bleached coral blooms its remembered color for ~2 s, then it fades. The violet survivor patch alone holds permanently. |
| Scene structure | 8 zones, one continuous water column: Underlight → Blue Road → Living Wall → Warm Water → Pale Zone → Hands (nursery) → The Way Up → Air (CTAs). |
| Non-negotiable visual rules | Three depth planes every frame (dark paper FG silhouette / detailed gouache MG / hazed BG with text-safe third). One sun, upper left, 20° from vertical, never reversed. Three landmark coral formations recognizable in every reef frame. Saturation = health; damage changes color and texture only, never silhhouette or geography. Turtle = 1 scale unit (fusilier 0.15, sea fan 0.8, brain dome 0.6, staghorn stand 1.2, diver 1.6). |
| Production discipline | One healthy master frame anchors everything. Bleached and recovery states are aligned edits of it, never fresh generations. Layers are generated separately, animated procedurally. AI video only where motion truly earns it (max 2 clips), each with a still fallback. Max 2 img2img generations from the anchor. Dedicated 9:16 mobile masters, never crops. |
| Fallback style | Cinematic Textured Vector Reef (if paper-gouache consistency fails: same storyboard, same layers, vector rendering). |
| Simplifications adopted | No diver-hands AI video in v1 — Scene 6 is an illustrated nursery with procedural bubbles, light, and color animation; diver silhouettes and the hands clip are stretch goals. Abyssal Ink & Glow is used only as a tonal influence in the Pale Zone (saturation extinguishing), not as a style. |

### The three landmark corals (memorize these — they appear in every reef frame)
- **Landmark A — "The Antler":** a tall coral-pink staghorn stand, 1.2 units, left-of-center.
- **Landmark B — "The Dome":** a broad ochre brain-coral dome, 0.6 units, right-of-center.
- **Landmark C — "The Fan":** a violet sea fan, 0.8 units, at the terrace edge (also the FG silhouette in Scenes 3/5).

### Locked palette
| Role | Hex |
|---|---|
| Abyss Navy (deep BG, FG silhouettes) | `#061C2D` |
| Deep Ocean | `#0B3A52` |
| Reef Teal | `#157E88` |
| Sea Glass (shallow water) | `#8BD7CF` |
| Surface Light | `#F4E9CF` |
| Coral Flame (staghorn, urgency accents) | `#ED725C` |
| Ochre Amber (brain dome, warmth — first color lost) | `#E8A94E` |
| Reef Violet (fan, survivor patch) | `#8A5FA8` |
| Recovery Green | `#4DAA82` |
| Nursery Gold (human work ONLY) | `#F2C14E` |
| Bleached Shell | `#D9D2BF` |
| Ash Grey | `#9AA3A4` |
| Warm White (type, foam, highlights) | `#F5FAF8` |

Palette states: **Healthy** = full set at 80–100% saturation. **Threatened** = amber removed first, then all life accents drained toward Bleached Shell/Ash Grey; water gains milky `#557C86` cast. **Recovery** = threatened base + life accents returning in 5–15% of frame + Nursery Gold on all human elements.

### Typography and UI
Display: Fraunces or Sora. Body/UI: Inter. Warm White on water; Abyss Navy on light fields. UI panels: Abyss Navy at 80–88% opacity, 12px feathered edges, 4% grain, no drop shadows. Text-safe third declared per scene; ≥4.5:1 contrast in every palette state (Pale Zone gets a 20% navy soft-scrim under type).

---

# PART B — PRODUCTION ROADMAP (STEP BY STEP)

Suggested for a hackathon timeline; steps are strictly ordered because later assets derive from earlier ones.

### STEP 0 — Setup (30 min)
1. Create asset folders: `/masters`, `/layers`, `/scenes-desktop`, `/scenes-mobile`, `/video`, `/audio`, `/ui`.
2. Copy the scale sheet and palette table (above) somewhere visible — every prompt references them.
3. Pick your image tool (Midjourney / SDXL / Firefly / Imagen — anything with image-reference or img2img) and your video tool if used (Runway / Kling / Luma). Pick one of each; switching tools mid-pipeline breaks texture consistency.

### STEP 1 — Style lock test (1–2 hrs) ⚠️ Do not skip
1. Generate the **Healthy Master candidate** (Prompt 1.1) — at least 4 variations.
2. Judge with the 10-question rubric (Part F). The winner must survive: img2img desaturation test (run Prompt 2.1 on it at denoise 0.3 — is it recognizably the same reef, bleached?), a 480px-wide squint test, and a "can I see three separable planes?" test.
3. If no candidate passes after ~8 attempts, switch to the fallback vector style (same plan, Part G notes the prompt changes).
4. **Lock the winner.** It is now THE ANCHOR. Every subsequent generation references it.

### STEP 2 — The master trio (1 hr)
1. From the anchor: generate the **Bleached Twin** (Prompt 2.1, img2img denoise ≤0.3). Verify alignment by difference-blending the two frames — structure must match (Color Memory depends on it). If misaligned: fall back to manual grade (desaturate + white-tint the anchor in any editor — 100% aligned by definition).
2. From the bleached twin: generate the **Recovery State** (Prompt 2.2, denoise ≤0.35, also style-referencing the anchor).
3. You now own the site's spine: three aligned states of one reef.

### STEP 3 — The layer kit (2–3 hrs)
Generate each as an isolated transparent/removable-background asset (Prompts 3.1–3.9): FG sea-fan pair (living + skeletal), fusilier school, turtle, kelp fringe, BG haze plates ×4, nursery line with fragments, gold tags, CTA coral branches ×3, census spot art ×4. These composite into every scene — generating them once guarantees identity.

### STEP 4 — Scene set, desktop (2–3 hrs)
Generate the remaining scene stills (Prompts 4.1–4.6): Underlight, Blue Road plate, Warm Water (img2img from anchor), Nursery slope (img2img from recovery state), Restoration plates ×3 (chained), Golden surface. Scenes 3 and 5 already exist (they ARE the anchor and twin).

### STEP 5 — Mobile masters (1–2 hrs)
For each desktop scene, generate the 9:16 recomposition (Prompt 5.1 applied per scene, image-referencing the desktop frame). Landmark coral in lower third, upper 40–45% calm water for type.

### STEP 6 — Motion (2–4 hrs)
1. Procedural first (covers 6 of 8 scenes): parallax planes, particle systems (rise/fall/bubbles), light-shaft opacity breathing, caustic shimmer, the Scene 4 milky-overlay scroll animation, Color Memory mask reveal. Motion specs in Part D.
2. AI video only if time allows, in this order: (a) Scene 3 hero loop, (b) Scene 1 caustics, (c) Scene 8 surface. Prompts in Part D. Every video has its still as poster/fallback.

### STEP 7 — Sound (1–2 hrs, parallelizable)
Batch-generate the ElevenLabs library (Part E): 7 beds, 8 environmental loops, 12 one-shots. Loop-test each bed 3× on headphones; crossfade the last 2 s in an editor to repair seams. Audio is optional-tier: ship without it if time runs out — the site is designed mute-first.

### STEP 8 — Build order (the site itself)
1. **HTML story tier first** (1 hr): 8 semantic sections, headlines, copy, alt text, 3 CTA links, native scroll. This is the accessibility floor and the no-JS fallback — and it means you always have a shippable site.
2. **Backgrounds + palette arc** (still per scene, scroll-driven crossfades).
3. **Scroll engine**: smoothed camera (lerp ~0.08), depth gauge UI, scene-boundary crossfades driven by scroll position.
4. **Parallax**: 3 planes desktop (FG/MG/BG), transform-only animation.
5. **Scene 4 color drain**: scroll-bound desaturation/milky overlay between anchor and twin.
6. **Color Memory**: canvas mask reveal between the aligned twin pair; touch-and-hold on mobile; reduced-motion = auto crossfade with caption.
7. **Interactions**: census cards, temperature ribbon, nursery tags, CTA tint states.
8. **Audio layer**: toggle, beds, crossfade rules (max 4 layers, scroll-position crossfades).
9. **Polish**: particles, caustics, videos replacing stills where ready.

### STEP 9 — QA (Part F checklists)
Consistency contact-sheet review, contrast pass per palette state, keyboard/screen-reader walk, reduced-motion walk, mobile walk, mute-first walk, 3G throttle test.

**If behind schedule, cut in this order:** AI videos (stills carry everything) → census cards beyond 2 → diver silhouettes → sound one-shots → sound entirely → particle density → Scene 2 shortens. Never cut: the 8-scene HTML story, the three master states, the color drain, Color Memory, the CTAs.

---

# PART C — IMAGE PROMPT LIBRARY

### Master style block — PREPEND to every image prompt
```text
Luminous paper-gouache ocean diorama illustration: a cinematic underwater scene digitally painted in opaque gouache and constructed from subtly layered paper planes. Refined visible paper fibre, soft cut edges between depth layers, gentle dry-brush pigment texture, restrained shadows between planes. Three strict depth planes: dark indigo paper-silhouette foreground, detailed illuminated gouache middle ground, soft hazed low-detail background. Soft volumetric underwater light from the upper left with painted diagonal light shafts. Disciplined palette of abyss navy, deep ocean blue, reef teal and sea glass for water; coral flame, ochre amber, reef violet and recovery green carried only by living things. Premium, editorial, quietly cinematic conservation art — not a children's craft project, not photorealism.
```

### Master negative block — APPEND to every image prompt
```text
No text, no logo, no watermark, no photorealism, no glossy 3D render, no CGI, no plastic materials, no cartoon faces, no anthropomorphic animals, no mascot, no outlines, no neon, no oversaturated rainbow palette, no lens flare, no motion blur, no warped or duplicate fish anatomy, no busy full-frame detail, no symmetrical composition, no surface waves in underwater scenes, no frame border.
```

### Consistency add-ons (append as needed)
```text
TEXTURE LOCK: Match the reference frame exactly: fine cold-press paper fibre, dry-brush gouache edges, soft inter-plane shadows, identical grain scale. No new texture types.
COLOR LOCK: Use only the locked palette (#061C2D, #0B3A52, #157E88, #8BD7CF, #F4E9CF, #ED725C, #E8A94E, #8A5FA8, #4DAA82, #F2C14E, #D9D2BF, #9AA3A4, #F5FAF8). Current state: [HEALTHY / THREATENED / RECOVERY].
CAMERA LOCK: Same camera height, eye-level underwater viewpoint, left-to-right world direction, sun upper left 20 degrees from vertical, no tilt, no fisheye.
LANDMARK LOCK: Preserve the three landmark corals in identical positions and silhouettes: tall coral-pink staghorn stand left-of-center, broad ochre brain dome right-of-center, violet sea fan at the terrace edge.
```

---

## Prompts 1.x — THE ANCHOR

### 1.1 Healthy Master (Scene 3, "The Living Wall") — GENERATE FIRST
```text
[MASTER STYLE BLOCK]
Wide 16:9 healthy coral-reef wall viewed from mid-water, the emotional heart of a conservation website.
Foreground plane: one dark indigo sea-fan paper silhouette entering from the lower-left edge with strong dry-brush grain, occupying no more than 12% of the frame.
Middle ground: a terraced reef wall containing three landmark corals — a tall coral-pink branching staghorn stand left-of-center, a broad warm-ochre brain-coral dome right-of-center, and a violet sea fan at the terrace edge — plus turquoise plate coral and small recovery-green soft coral accents. A loose school of small blue-green fusilier fish weaves between the coral heads. One green sea turtle glides quietly in the upper-middle distance, its shell about the size of the brain dome's width.
Background plane: distant desaturated teal reef silhouettes dissolving into atmospheric haze.
Lighting: three painted diagonal golden light shafts from the upper left, gentle dapple on the brain dome, fine particles drifting like slow snow.
Reserve the upper-right 30% as calm, low-detail, low-texture water for website typography.
Emotional tone: reverent, alive, quietly cinematic. Everything at breathing tempo.
[MASTER NEGATIVE BLOCK] Also exclude: bleached coral, grey coral, murky water, empty reef.
```
Generate ≥4 variations. Judge with the Part F rubric. Lock the winner as **ANCHOR**.

### 1.2 Healthy Master, mobile 9:16
```text
[MASTER STYLE BLOCK] Using the attached reference image as strict style, palette, texture and landmark reference:
Portrait 9:16 recomposition of the same healthy reef wall — a true recomposition, not a crop. The three landmark corals arranged in the lower two-thirds with the staghorn stand dominant, the fish school weaving vertically between them, the turtle small in the middle distance. One golden light shaft from upper left. Foreground sea-fan silhouette reduced to a small lower-left corner anchor. The upper 40% is calm low-detail water reserved for typography.
[LANDMARK LOCK] [COLOR LOCK: HEALTHY] [MASTER NEGATIVE BLOCK]
```

---

## Prompts 2.x — THE STATE TWINS (img2img from the anchor)

### 2.1 Bleached Twin (Scene 5, "The Pale Zone") — img2img, denoise ≤0.30
```text
[MASTER STYLE BLOCK] Using the attached healthy reef image as the base, preserve ALL coral geography, silhouettes, plane structure, camera and composition exactly.
Transform only color, texture and life: the staghorn stand turns chalk-white, the brain dome bone-grey, the plate coral pale shell; water gains a milky pale cast; the three light shafts become flat, diffuse and shadowless; the fish school is gone — a single grey fish remains mid-frame; particles are sparse and still. The foreground sea fan becomes a bare skeletal silhouette, unmoving. One small violet soft-coral patch in the lower right keeps its full color — the only saturation in the frame.
Dry brushwork becomes sparser and drier. Quiet, still, snowfall-silence atmosphere. No destruction, no debris, no broken coral — the horror is absence, not damage.
[TEXTURE LOCK] [CAMERA LOCK] [LANDMARK LOCK] [COLOR LOCK: THREATENED] [MASTER NEGATIVE BLOCK] Also exclude: colorful coral, fish schools, warm golden light, algae, wreckage.
```
Verify: difference-blend against the anchor — structural deltas must be near-zero. Fallback: manual desaturate + white-tint grade of the anchor.

### 2.2 Recovery State (base for Scene 6) — img2img from 2.1, denoise ≤0.35, style-ref the anchor
```text
[MASTER STYLE BLOCK] Using the attached bleached reef image as the base, preserve all coral geography and composition exactly.
Add partial, credible recovery: tidy horizontal rope nursery lines strung across the grey slope carrying small saturated coral fragments in coral flame and reef violet, spaced in rows like buds on a wire; small nursery-gold tags and a slim gold monitoring frame marking the human work; one warm light shaft regaining gold where it lands on the newest fragment; a few small fish returning near the fragments; the violet survivor patch now slightly larger.
Color occupies only 10–15% of the frame. Most of the reef remains pale — recovery is real but incomplete. Hopeful, methodical, unhurried atmosphere.
[TEXTURE LOCK] [CAMERA LOCK] [LANDMARK LOCK] [COLOR LOCK: RECOVERY] [MASTER NEGATIVE BLOCK] Also exclude: fully recovered reef, instant perfection, construction equipment, boats.
```

### 2.3 Mobile twins
Repeat 2.1 and 2.2 as img2img on the mobile master (1.2) with identical transformation language.

---

## Prompts 3.x — THE LAYER KIT (isolated, removable background)

### 3.1 Foreground sea fan — living
```text
[MASTER STYLE BLOCK] Isolated foreground element on a plain removable background: one large sea fan as a dark abyss-navy paper silhouette with strong dry-brush edge grain and a hint of violet at its rim, designed to anchor the lower-left edge of a widescreen frame, elegant organic branching, no water, no environment.
[MASTER NEGATIVE BLOCK]
```

### 3.2 Foreground sea fan — skeletal (Pale Zone variant)
```text
[MASTER STYLE BLOCK] Isolated foreground element on a plain removable background: the same sea fan silhouette now bare and skeletal — identical overall shape, sparser branching, ash-grey and bone tones at the rim instead of violet, brittle dry-brush texture, motionless character. Must read as the same fan, drained.
[MASTER NEGATIVE BLOCK]
```

### 3.3 Fusilier school (reused Scenes 2, 3, 7)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: a loose flowing school of about twenty small blue-green fusilier reef fish in a gentle ribbon formation, side profile facing left, each fish a simple rounded gouache shape with one clear gesture, natural proportions, no anatomical detail, subtle size variation, painted as one coherent layer for parallax animation.
[MASTER NEGATIVE BLOCK] Also exclude: individual fish detail, eyes, open mouths.
```

### 3.4 Sea turtle (reused Scenes 2, 3, 4)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: one green sea turtle gliding, side three-quarter profile facing right, simple elegant gouache silhouette with soft shell pattern suggested by dabbed texture, recovery-green and ochre tones, natural adult proportions, calm gesture, no facial detail.
[MASTER NEGATIVE BLOCK]
```

### 3.5 Kelp/soft-coral fringe (FG anchor variants)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: a fringe of tall kelp fronds and soft finger coral as dark abyss-navy paper silhouettes with teal edge light, designed to anchor a lower frame corner, gentle sway-ready shapes.
[MASTER NEGATIVE BLOCK]
```

### 3.6 Background haze plates ×4 (rearmost parallax planes + text surfaces)
Run four times with the depth pairs: (a) Sea Glass→Surface Light, (b) Reef Teal→Sea Glass, (c) Deep Ocean→Reef Teal, (d) Abyss Navy→Deep Ocean.
```text
[MASTER STYLE BLOCK] Background plate only: a vertical underwater gradient from [LOWER COLOR] at the bottom to [UPPER COLOR] at the top, three very soft diagonal light shafts from the upper left at low opacity, near-textureless with only the faintest paper fibre, no subjects, no particles, no coral — a calm atmospheric water field suitable as the rearmost parallax plane and as a typography surface.
[MASTER NEGATIVE BLOCK]
```

### 3.7 Nursery line element (Scene 6 dressing, tags, fragments)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: one horizontal rope nursery line for coral restoration, taut between two slim stakes, carrying seven small coral fragments in coral flame and reef violet like buds on a wire, with three small nursery-gold tags, painted gouache texture, tidy and methodical character.
[MASTER NEGATIVE BLOCK]
```

### 3.8 Diver silhouettes ×2 (STRETCH GOAL)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: one scuba diver as a calm dark paper silhouette, backlit, working posture — reaching toward a nursery line with unhurried care — simplified equipment shapes, thin bubble trail rising, scale 1.6 times a sea turtle, absolutely no face or finger detail, no mask close-up.
[MASTER NEGATIVE BLOCK] Also exclude: faces, hands detail, realistic scuba gear.
```
(Second variant: "kneeling posture, holding a small gold monitoring frame.")

### 3.9 CTA coral branches ×3 (Scene 8 interface art)
```text
[MASTER STYLE BLOCK] Isolated on a plain removable background: one elegant coral branch as a small emblem, [VARIANT A: sea-glass cyan branching staghorn / VARIANT B: nursery-gold staghorn with a tiny tag / VARIANT C: coral-flame staghorn], simple readable silhouette at small sizes, gentle paper texture, designed to crown a website action card.
[MASTER NEGATIVE BLOCK]
```

### 3.10 Census spot art ×4 (Scene 3 info cards — field-journal accent style)
```text
Scientific field-journal illustration on warm-white paper (#F5FAF8): a small elegant ink-and-wash study of [SUBJECT: staghorn coral / brain coral / sea fan / green sea turtle], abyss-navy ink linework with one restrained wash of its signature color, specimen-plate composition with generous margins, hand-drawn charm, museum-label quality.
No text, no watermark, no photorealism, no cartoon.
```

---

## Prompts 4.x — REMAINING SCENE STILLS (desktop 16:9; repeat each with Prompt 5.1 for mobile)

### 4.1 Scene 1 — "Underlight"
```text
[MASTER STYLE BLOCK] The underside of a calm sea surface seen from just below: liquid-gold caustic light patterns painted in gouache rippling across the upper half on a field of sea-glass aqua, three small bubble trains rising lazily, faint paper-fibre grain in the water, warm amniotic serenity. No reef, no fish, no sky, no horizon. The lower-center third is calm and slightly deeper-toned for a wordmark and headline.
[COLOR LOCK: HEALTHY] [MASTER NEGATIVE BLOCK] Also exclude: sun disk, waves above water, boats, swimmers, seabirds.
```

### 4.2 Scene 2 — "The Blue Road" (open-water plate; school + turtle composite from layers)
```text
[MASTER STYLE BLOCK] Vast open ocean water with no seafloor and no surface: a vertical gradient from deep ocean blue at the bottom to reef teal above, three long soft diagonal light shafts from the upper left, sparse drifting particles, a dark reef-wall silhouette just beginning to emerge from the haze in the lower right corner at low contrast, immense calm scale. Upper-left third calm for typography.
[COLOR LOCK: HEALTHY] [MASTER NEGATIVE BLOCK] Also exclude: coral detail, fish (added as separate layer), divers, rocks.
```

### 4.3 Scene 4 — "Warm Water" — img2img from ANCHOR, denoise ≤0.35
```text
[MASTER STYLE BLOCK] Using the attached healthy reef image as the base, preserve all coral geography and composition.
The same reef wall continuing to the right, one stage into decline: all ochre-amber warmth removed from the palette, other life colors at roughly 60% saturation, water carrying a subtle milky cast, light shafts flatter and paler, the fish school reduced to a thin scatter of five fish swimming back toward the upper left, particles drifting faintly downward, quieter sparser brushwork. Unease by subtraction — the party is over but nobody said so. Upper-left third calm for typography.
[TEXTURE LOCK] [CAMERA LOCK] [LANDMARK LOCK] [COLOR LOCK: THREATENED, partial] [MASTER NEGATIVE BLOCK] Also exclude: fully bleached coral, golden light, dense schools.
```
(The scroll-driven drain between 4.3 and the bleached twin is done in code with a desaturation + milky overlay — see Part D.)

### 4.4 Scene 6 — "Hands" nursery wide (compose: recovery state 2.2 + nursery lines 3.7 + optional divers 3.8)
If you want a single generated wide instead of a composite:
```text
[MASTER STYLE BLOCK] Using the attached recovery reef image as the base, preserve all geography.
A closer medium view of the nursery terrace: three tidy rope nursery lines with saturated coral fragments and nursery-gold tags in the middle ground, two calm dark diver silhouettes working unhurried at middle distance — one tying a fragment, one holding a small gold monitoring frame — columns of bubbles rising from them, one warm gold light shaft landing on the newest fragment, the violet survivor patch visible at the frame edge. A garden at dawn: methodical, hopeful, quiet. Upper-right third calm for typography.
[TEXTURE LOCK] [CAMERA LOCK] [COLOR LOCK: RECOVERY] [MASTER NEGATIVE BLOCK] Also exclude: faces, hand detail, realistic gear, boats.
```

### 4.5 Scene 7 — Restoration plates ×3 (chain: 2.2 → plate A → plate B → plate C, each also style-ref'd to ANCHOR)
```text
[MASTER STYLE BLOCK] Using the attached image as the base, preserve all coral geography.
The same reef terrace at [STAGE]:
STAGE A, one year on — sparse planted rows fused at their bases, about 15% of the frame carrying color, a small returning fish group, water clearing slightly.
STAGE B, five years on — young colonies fused into recognizable coral forms, about 35% color, the fusilier school returned at half strength, light shafts warming toward gold.
STAGE C, ten years on — a thriving terrace where nursery lines are barely findable inside living reef, about 70% color, dense fish life, near-golden light — clearly approaching but not equal to the healthy master's saturation, with one unrestored grey terrace visible at the frame's far edge.
Upper-[LEFT/RIGHT — alternate per plate] third calm for typography.
[TEXTURE LOCK] [CAMERA LOCK] [LANDMARK LOCK] [COLOR LOCK: RECOVERY, staged] [MASTER NEGATIVE BLOCK] Also exclude: bleached foreground (stages B–C), instant perfection.
```

### 4.6 Scene 8 — "Air"
```text
[MASTER STYLE BLOCK] The one above-water frame of the journey, painted in exactly the same gouache-and-paper language: a calm ocean surface at golden hour seen from a swimmer's eye level, gentle slow swells in layered paper planes, a warm gold light path on the water echoing the underwater light shafts, a distant hazy green shoreline, an expansive soft sky in surface-light cream and pale gold occupying the upper two-thirds. Serene, resolved, quietly triumphant. The sky is clean and low-detail — it will hold three interface cards and a headline.
[COLOR LOCK: HEALTHY + gold] [MASTER NEGATIVE BLOCK] Also exclude: underwater elements, boats, people, close birds, dramatic sunset, sun disk.
```

### 5.1 Mobile recomposition prompt (apply per scene, image-ref the desktop frame)
```text
[MASTER STYLE BLOCK] Using the attached widescreen scene as strict style, palette, texture and landmark reference: recompose the same scene vertically for 9:16 — a true recomposition, not a crop. Primary landmark/subject in the lower third, central action preserved, side elements simplified, one light shaft instead of three, foreground silhouette reduced to one small corner anchor. Reserve the upper 40–45% as calm low-detail water (or sky, for the surface scene) for typography.
[TEXTURE LOCK] [CAMERA LOCK] [COLOR LOCK: match source] [MASTER NEGATIVE BLOCK]
```

---

# PART D — MOTION AND VIDEO

## D1. Procedural motion specs (the default — covers 6 of 8 scenes, guaranteed loops, tiny payload)

| Scene | Motion recipe |
|---|---|
| 1 Underlight | Caustic layer: canvas/CSS shimmer (two offset caustic textures, opposing 20 s pans, screen blend). Bubbles: 3 particle emitters, offset timing. Wordmark idle ±0.5% scale breathing. |
| 2 Blue Road | BG plate pans up with scroll (descent). Particles rise ~30 px/s. School layer (3.3) translates right→left over 20 s, individual sprites sine-bob ±4 px. Turtle layer crosses once per scene entry. Shafts breathe opacity 20↔50%, 12 s. |
| 3 Living Wall | 5 planes desktop / 3 mobile: haze plate (slowest), reef MG, school loop, turtle glide, FG fan sway ±2° / 8 s period. Dapple: soft light blob drifting across the Dome, 15 s. |
| 4 Warm Water | Scroll-bound: milky gradient overlay 0→100% opacity + CSS saturate(1→0.4) on MG plane + amber channel fade. School exit plays once on entry. Particles reverse to slow downward drift. |
| 5 Pale Zone | Near-still by design: sparse particles at 8 px/s, single grey fish crossing 25 s, skeletal fan motionless. Color Memory: canvas radial mask (dry-brush edge texture) revealing the healthy anchor beneath the bleached twin, 180 px radius desktop / 130 px mobile, 2 s hold, 1.5 s fade. Violet patch: permanent, +8% brightness pulse on touch. |
| 6 Hands | Bubble columns (fastest particles of the site, ~80 px/s). Nursery-line layer sways ±1°. Gold tags glint (specular sweep every 9 s). Optional scroll-driven push-in: MG scale 1.0→1.12. Fragment "seat" beat: one fragment layer eases 6 px down + tag glint on scroll trigger. |
| 7 Way Up | Three plates crossfade with scroll; plates translate downward past camera (ascent). School spiral: the school layer on a rising helical path, 18 s. Bubble trains lead upward. Shafts warm via hue-rotate as plates advance. Timeline ticks fade in/out on the gauge. |
| 8 Air | Swell: two horizontal paper-wave layers, opposing 9 s sway ±6 px. Light path shimmer (opacity noise). Droplet overlay plays once on arrival, 2 s. CTA cards rise 20 px + fade on entry; hover tint = full-frame color overlay at 8% opacity. |

Global: all ambient element velocity <40 px/s (bubbles exempt), transform/opacity only, `prefers-reduced-motion` swaps everything for ≤400 ms opacity crossfades on stills.

## D2. AI video prompts (optional upgrades, in priority order — each has its still as poster/fallback)

### V1 — Scene 3 hero loop (12–15 s)
```text
Animate the attached healthy paper-gouache reef painting as slow ambient motion. Locked camera, no camera movement, no zoom. The small blue-green fish school drifts gently between the coral heads on a 15-second crossing; the sea turtle glides slowly through the upper-middle distance; the foreground sea-fan silhouette sways very gently; fine particles rise like slow snow; the three golden light shafts breathe subtly in opacity. Preserve every coral shape, all paper texture, all colors exactly. All movement at breathing tempo. First and last frames identical for a seamless loop. No new objects appearing, no morphing, no flicker.
```

### V2 — Scene 1 caustic loop (10 s)
```text
Animate the attached underwater surface painting: golden caustic light patterns ripple slowly across the paper-textured water surface seen from below, three small bubble trains rise lazily at offset timing, gentle dreamlike movement, locked camera, seamless 10-second loop, preserve the gouache texture and palette exactly, no new elements, no morphing.
```

### V3 — Scene 8 surface loop (12 s)
```text
Animate the attached golden-hour ocean surface painting: gentle slow swells rise and fall in layered paper planes, the warm gold light path shimmers softly on the water, distant shoreline haze drifts almost imperceptibly, locked camera with a very slight vertical bob, seamless 12-second loop, serene and resolved, preserve all colors and paper texture, no boats, no birds, no new elements.
```

### V4 — STRETCH: Scene 6 hands clip (4–6 s, palindrome loop)
```text
Animate: a close view of a diver's gloved hands rendered as soft dark paper-gouache silhouettes, gently tying a small coral-pink fragment onto a rope nursery line underwater, one small gold tag on the line, calm deliberate movement, bubbles rising slowly, one warm light shaft from the upper left, grey reef softly blurred behind, painterly gouache texture throughout, slow and quiet, 6 seconds. No faces, no finger detail, no photorealism, no fast movement.
```
Generate 3–4 takes, keep the cleanest 4 s, loop forward-reverse. Fallback: 3-still sequence with slow dissolves.

### Video negative (append to all):
```text
No camera shake, no zoom, no morphing coral, no objects appearing or disappearing, no flicker, no photorealistic drift, no text, no watermark.
```

---

# PART E — ELEVENLABS SOUND LIBRARY (complete)

System rules: OFF by default, shell-glyph toggle pulses once at second 5; master −14 LUFS; max 4 simultaneous layers (bed + incoming bed + environmental + one-shot); scene beds crossfade equal-power over ±50vh of scroll; background tab pauses audio; calm mode = beds only, doubled fades; mobile one-shots −3 dB. Loop-test every bed 3×; repair seams with a 2 s tail crossfade in an editor.

### Beds (60 s seamless loops)
1. **Shallow surface bed (S1):** `Soft underwater ambience just below a calm sunlit sea surface, close and warm, gentle muffled water movement, very light distant bubble activity, smooth low-mid texture, no music, no voices, no boats, wide enveloping stereo, calm and safe, seamless loop, 60 seconds.`
2. **Open ocean bed (S2):** `Deep open ocean underwater ambience, vast and spacious, low soft rumble of distant water masses, faint particulate hiss, awe-inspiring but calm, very wide stereo, no marine mammal calls, no music, seamless loop, 60 seconds.`
3. **Healthy reef bed (S3):** `Rich healthy coral reef underwater ambience, warm and alive, gentle water movement, soft distant fish activity, bright but natural texture, joyful serene tone, wide immersive stereo, no music, no human sounds, seamless loop, 60 seconds.`
4. **Fading reef bed (S4):** `Underwater reef ambience that feels emptied out, muffled and slightly milky, distant thin water movement, subdued low-mid texture, reduced high frequencies as if heard through warmer denser water, faint unease, hollow wide stereo, no music, seamless loop, 60 seconds.`
5. **Near-silence bed (S5):** `Almost silent deep underwater room tone, only a faint sub-bass presence of vast still water, no events, no life sounds, profound quiet, emotionally heavy and empty, wide but static stereo, seamless loop, 60 seconds.`
6. **Partial-recovery bed (S7):** `Underwater reef ambience in early recovery, moderate gentle water movement, scattered light snapping-shrimp clicks noticeably denser than sparse but not yet a full crackle, occasional small fish flutter, cautious hopeful tone, medium stereo width, no music, seamless loop, 60 seconds.`
7. **Golden air bed (S8):** `Calm open sea ambience at golden hour heard at water level, soft slow swells, warm gentle breeze, very distant shoreline, peaceful resolved tone, wide relaxed stereo, no music, no boats, no voices, seamless loop, 60 seconds.`

### Environmental loops
8. **Surface lapping (S1, 30 s):** `Gentle water lapping heard from just beneath the surface, soft and filtered, slow rhythm, intimate distance, light stereo movement left to right, peaceful, seamless loop, 30 seconds, no splashes, no seagulls.`
9. **Current wash (S2, 30 s):** `Slow underwater current washing past, smooth broadband water movement, medium distance, soft rise and fall over fifteen seconds, relaxed, stereo motion left to right, seamless loop, 30 seconds.`
10. **Dense reef crackle (S3, 45 s):** `Dense crackle of snapping shrimp on a thriving coral reef, like soft fizzing static made of thousands of tiny clicks, close distance, constant gentle intensity, organic granular texture, evenly spread across the stereo field, lively and comforting, seamless loop, 45 seconds, no water whoosh, no splashes.`
11. **Fish flutters (S3, 20 s):** `Occasional soft fish tail flutters and small darting water movements passing near the listener underwater, brief and light, random spacing, close to medium distance, playful and alive, stereo movement, seamless loop, 20 seconds.`
12. **Sparse crackle (S4, 45 s):** `Very sparse intermittent snapping shrimp clicks underwater, isolated single ticks with two-to-five-second gaps, medium distance, thin lonely texture, seamless loop, 45 seconds, no dense crackle.`
13. **Warm drone (S4, 40 s):** `Extremely quiet low warm drone underwater, barely audible sustained tone suggesting rising temperature and stillness, sub and low-mid frequencies only, no melody, unsettling but very restrained, narrow stereo, seamless loop, 40 seconds.`
14. **Regulator breathing (S6, 30 s):** `Calm scuba regulator breathing underwater, slow steady rhythm of about ten breaths per minute, medium-close distance, soft inhale hiss and gentle bubble burst on exhale, reassuring and meditative, centered stereo, seamless loop, 30 seconds, no talking, no stress.`
15. **Bubble columns (S6–7, 20 s):** `Streams of exhaled scuba bubbles rising and dispersing underwater, soft fizzy clusters every few seconds, close to medium distance, light hopeful texture, rising stereo movement from center to upper sides, seamless loop, 20 seconds.`

### One-shots
16. **Pressure swell (S1→2, 2.5 s):** `Deep soft whoosh of water pressure as a body begins to sink underwater, smooth and slow, low-frequency emphasis, enveloping stereo, calm not frightening, single event, two and a half seconds, no bubbles.`
17. **Distant marine call (S2, 4 s):** `Single distant unidentifiable marine creature call, haunting and soft, far away, low-mid frequency, natural underwater reverb, mysterious but gentle, four seconds, one event only.`
18. **Census card tick (S3, 0.5 s):** `Tiny glass bell tick, single note, very soft and short, bright but quiet, pleasant interface confirmation, close and dry, half a second, no reverb.`
19. **Memory chimes ×6 (S5, 1.5 s each):** `Single soft glassy chime like a small bell heard underwater, gentle attack, warm rounded tone, about one and a half seconds with a short watery tail, tender and nostalgic, close distance, no reverb wash, single note.` — generate 6 variants: "slightly higher pitch" / "slightly lower pitch" / "slightly softer" etc.
20. **Held color pad (S5, 20 s gated loop):** `Very soft warm harmonic pad as if colors were quietly humming underwater, sustained and breathing, low volume, tender fragile tone, slow two-second fade in and out, narrow warm stereo, seamless loop, 20 seconds, no melody, no rhythm.`
21. **Tool ticks (S6, 30 s sparse loop):** `Occasional soft click and gentle scrape of small hand tools and rope work underwater, muffled and rounded, sparse events several seconds apart, close distance, careful precise tone, seamless loop, 30 seconds, no metal clanging.`
22. **Tag flip (S6, 0.5 s):** `Soft flip of a small stiff tag underwater, brief muffled snap with a tiny bubble tick, pleasant and tactile, close and dry, half a second, single event.`
23. **School swirl (S7, 3–4 s):** `A large school of small fish swirling past underwater, soft rushing flutter of many small bodies and water displacement, medium distance rising past the listener, uplifting, upward stereo movement, three to four seconds, single event.`
24. **Timeline tick (S7, 0.25 s):** `Tiny soft wooden tick, single very quiet event, a quarter second, unobtrusive interface marker, dry, close, no tail.`
25. **Surfacing breath (S8, 2.5 s):** `A person's head breaking the ocean surface followed by one deep satisfying breath of air, water streaming off briefly, close and personal, relieving and emotional, two and a half seconds, single event, no gasping panic, no voice.`
26. **CTA hover tick (S8, 0.5 s):** `Soft low warm tick like a rounded wooden button press, single event, calm and confident, dry, close, half a second.`
27. **CTA plunge whoosh (S8, 1.5 s):** `Short forward plunge into water, a smooth diving whoosh with a soft bubble tail, decisive and positive, centered stereo moving away from the listener, one and a half seconds, single event, no splash crash.`

Scene→sound map: S1 = 1+8 (+16 on first scroll) · S2 = 2+9 (+17 once) · S3 = 3+10+11 (+18) · S4 = 4+12 (+13) · S5 = 5 (+19/20 via Color Memory) · S6 = 5→6 rising +14+15 (+21/22) · S7 = 6 staged (+15, 23, 24) · S8 = 7 (+25 once, 26, 27).

---

# PART F — QA AND CONSISTENCY

## F1. Style-lock rubric (judge every anchor candidate; also re-run on the finished scene set)
1. Can the same reef be generated again? (img2img desaturation test passes)
2. Are the three landmark corals instantly recognizable?
3. Is there a clean text-safe third?
4. Can the image be split into three planes? (squint: do FG/MG/BG separate?)
5. Does it survive at 480 px wide? (mobile texture test)
6. Bleached version: sad but not ugly/childish?
7. Recovery version: credible, partial, not magical?
8. Distinctive beside other hackathon projects?
9. Animatable without AI video? (are the moving parts separable?)
10. Does it serve ONE DESCENT? (does light lead downward; is the water column continuous?)

## F2. Contact-sheet review (after Steps 4–5)
Lay all 8 desktop + 8 mobile frames side by side. Ask: same painter? Same sun? Same reef? Same paper? Any frame that fails gets regenerated **from the anchor**, never patched forward.

## F3. Build QA walks
- **Mute-first walk:** full journey, sound off — is every beat legible from color, motion, copy alone?
- **Contrast pass:** every headline against its actual background in every palette state (Pale Zone is the risk; navy soft-scrim ready).
- **Keyboard walk:** Tab reaches gauge (skip-nav), census organisms, corals (Color Memory buttons announce "hear its remembered color"), tags, CTAs; visible gold focus rings; Esc closes panels; focus never lost.
- **Screen-reader walk:** 8 landmark sections with descriptive labels, substantive alt text per scene figure, aria-hidden decoration, zone-boundary live-region lines.
- **Reduced-motion walk:** stills + opacity crossfades only; Color Memory = auto crossfade + caption; story fully intact.
- **Throttle test:** 3G — poster stills first, story readable under 4 MB before any video arrives; Scene 2 stretches as the loading corridor.
- **Scene 7 direction test:** watch a first-time user cross the 6→7 boundary; if the scroll-down-equals-rise inversion confuses, apply the fallback (recovery staged as lateral drift to shallower terraces).

## F4. Standing risk table (top items)
| Risk | Detect | Reduce | Fallback |
|---|---|---|---|
| Reef geography drifts between generations | 50%-opacity overlay vs. anchor | One anchor, img2img only, ≤2 chain depth | Color-grade the anchor manually for all states |
| Paper texture varies | Grain-scale comparison | TEXTURE LOCK block + one shared grain overlay in post | Apply a single texture overlay to everything in an editor |
| Video warps coral | Frame-step review | Animate separated stills instead | Still + parallax (the default anyway) |
| AI fills every corner | Early text-overlay test | "calm low-detail" language + negative block | Gradient mask behind type |
| Recovery looks instant | Compare plate C vs. anchor saturation | Cap at 70%, keep one grey terrace in frame | Manual mask on color return |
| Pale zone bleak → bounce | Scroll-depth analytics at S5 | Violet survivor + Color Memory + gold glint planted inside the grief | Shorten zone 30% |
| Interactions feel game-like | "Does winning exist?" review | No scores, no collecting, blooms always fade | Information reveal only |
| Accessibility slips | Turn everything off — story readable? | Build HTML story tier FIRST (Step 8.1) | It IS the floor; nothing to fall back from |

---

# PART G — FALLBACK NOTES (Cinematic Textured Vector Reef)

If the paper-gouache anchor fails Step 1 after ~8 attempts: keep everything in this plan — scenes, copy, interactions, sound, build order — and swap only the rendering language. Replace the master style block with:
```text
Sophisticated textured-vector editorial illustration: bold organic silhouettes, clean graphic shapes, controlled gradient lighting, subtle printed grain, restrained paper-like texture, premium environmental-campaign aesthetic, three strict depth planes, light from upper left, disciplined navy-teal-cyan water palette with coral-orange, mint and soft-gold life accents. Not a corporate infographic, not flat clip art.
```
Everything else (negative block, locks, landmarks, scene deltas, state twins, layer kit, mobile recomposition) applies verbatim. The vector style is *more* consistent, so risk drops; warmth drops slightly with it — compensate by leaning harder on the sound design and the Color Memory moment.

---

# PART H — FINAL CHECKLISTS

**Images to generate (in order):** ① Healthy Master anchor (1.1) → ② mobile anchor (1.2) → ③ bleached twin + mobile (2.1, 2.3) → ④ recovery state + mobile (2.2, 2.3) → ⑤ layer kit: fan pair, school, turtle, kelp, 4 haze plates, nursery line, CTA branches ×3, census art ×4, divers ×2 (stretch) → ⑥ scenes: Underlight, Blue Road plate, Warm Water, Nursery wide, Restoration plates ×3, Air (+ mobiles). **≈ 30 images, of which 18 are essential.**

**Videos (all optional, priority order):** V1 Living Wall hero → V2 caustics → V3 surface → V4 hands (stretch).

**Sounds (27 prompts above):** 7 beds → dense crackle + regulator + bubbles (the three character sounds) → remaining loops → one-shots. Ship-without-audio is an approved end state.

**Build:** HTML story → backgrounds + palette arc → scroll engine + gauge → parallax → Scene 4 drain → Color Memory → cards/tags/ribbon/CTAs → audio → polish.

**Definition of done:** a first-time visitor on a muted phone can scroll once through the page and correctly answer: *What is this place? What happened to it? Is it dead? What fixes it? What are my three options?* — and the moment they'd describe to a friend is the color blooming under their finger.

