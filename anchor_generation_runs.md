# Anchor Generation Runs — paste-ready
### Goal: lock ONE healthy master frame that every other asset derives from.

Run these in order. Do not generate anything else until Run 3 passes.

---

## RUN 1 — Anchor candidates (generate all 4, pick best 2)

Paste each as-is. If your tool supports aspect ratio flags, add `16:9` (Midjourney: `--ar 16:9`).

### Candidate A — balanced (the default)
```text
Luminous paper-gouache ocean diorama illustration: a cinematic underwater scene digitally painted in opaque gouache and constructed from subtly layered paper planes. Refined visible paper fibre, soft cut edges between depth layers, gentle dry-brush pigment texture, restrained shadows between planes. Wide 16:9 healthy coral-reef wall viewed from mid-water. Foreground plane: one dark indigo sea-fan paper silhouette entering from the lower-left edge with strong dry-brush grain, occupying no more than 12% of the frame. Middle ground: a terraced reef wall with three landmark corals — a tall coral-pink branching staghorn stand left-of-center, a broad warm-ochre brain-coral dome right-of-center, and a violet sea fan at the terrace edge — plus turquoise plate coral and small green soft-coral accents. A loose school of small blue-green fusilier fish weaves between the coral heads. One green sea turtle glides in the upper-middle distance. Background plane: distant desaturated teal reef silhouettes dissolving into atmospheric haze. Lighting: three painted diagonal golden light shafts from the upper left, fine particles drifting like slow snow. The upper-right 30% is calm, low-detail water for typography. Premium, editorial, quietly cinematic conservation art. No text, no logo, no watermark, no photorealism, no glossy 3D, no cartoon faces, no mascot, no outlines, no neon, no lens flare, no warped fish, no busy full-frame detail, no symmetrical composition.
```

### Candidate B — more paper (if A comes out too painterly/generic)
Same prompt, but replace the first sentence with:
```text
Layered paper-diorama ocean illustration with gouache-painted pigment: five to six visibly distinct hand-cut paper depth planes with refined scissor-cut contours, subtle fibre texture, and small soft shadows between layers, lit by warm gel-like glow between the planes — sophisticated shadow-box quality, never childish craft.
```

### Candidate C — more cinema (if A comes out too crafty/flat)
Same prompt, but replace the first sentence with:
```text
Cinematic gouache matte painting with subtle paper-plane layering: broad painted value masses, soft dry-brush texture, atmospheric volumetric underwater light, with gentle paper-fibre grain and softly cut layer edges giving the scene a tactile handcrafted depth.
```

### Candidate D — wildcard reroll of A
Rerun Candidate A with a different seed. Painterly styles vary a lot between seeds; the 4th roll is often the winner.

---

## RUN 2 — Squint + split tests (no generation)

For each of your top 2 candidates:
1. **480px test:** shrink to 480px wide. Do the three landmarks still read? Does the text-safe third stay calm?
2. **Plane test:** squint. Do FG / MG / BG separate into three clear value bands (≥15% value gap)?
3. **Landmark test:** could you point to the Antler, the Dome, and the Fan without hesitation?

Kill any candidate that fails two of three.

---

## RUN 3 — The desaturation test (THE gate)

Take your best candidate. Run img2img / image-reference at **denoise 0.25–0.30** (Midjourney: use it as image prompt with high image weight, e.g. `--iw 2`):

```text
Using the attached healthy reef image as the base, preserve ALL coral geography, silhouettes, plane structure, camera and composition exactly. Transform only color, texture and life: the staghorn stand turns chalk-white, the brain dome bone-grey, the plate coral pale shell; water gains a milky pale cast; the light shafts become flat, diffuse and shadowless; the fish school is gone — a single grey fish remains; particles sparse and still. The foreground sea fan becomes bare and skeletal. One small violet soft-coral patch in the lower right keeps its full color — the only saturation in the frame. Quiet, still, snowfall-silence atmosphere. No destruction, no debris, no broken coral. Same paper-gouache texture, same grain scale, same camera. No text, no watermark, no photorealism, no colorful coral, no fish schools, no warm golden light.
```

**Pass criteria:** overlay the pair at 50% opacity (or difference-blend). The reefs must align — same Antler, same Dome, same Fan, same terrace. Color Memory depends on this alignment.

- **Pass →** the healthy frame is your ANCHOR. Save both. Proceed to the plan's Step 2 (recovery state) and Step 3 (layer kit).
- **Fail after 2 attempts →** manual fallback: duplicate the anchor in any editor, desaturate ~85%, tint toward `#D9D2BF`, mask the violet patch back in. Perfect alignment by definition. Anchor still locked; proceed.
- **Anchor itself unusable after ~8 total candidates →** switch to the vector fallback (final plan, Part G).

---

## RUN 4 — Mobile anchor

Image-reference the locked anchor:
```text
Using the attached widescreen reef as strict style, palette, texture and landmark reference: recompose the same healthy reef vertically for 9:16 — a true recomposition, not a crop. The three landmark corals in the lower two-thirds with the staghorn dominant, the fish school weaving vertically, the turtle small in the middle distance, one golden light shaft from upper left, foreground sea-fan reduced to a small lower-left corner anchor. Upper 40% calm low-detail water for typography. Same paper-gouache texture and palette. No text, no watermark, no photorealism.
```

Then repeat Run 3's transformation on the mobile anchor for the mobile bleached twin.

---

## After the anchor is locked
Everything else is in the final plan: recovery state (Prompt 2.2) → layer kit (3.x) → scenes (4.x) → mobile set (5.1). Always image-reference the anchor; never chain more than 2 generations away from it.
