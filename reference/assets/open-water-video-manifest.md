# ONE DESCENT Open-Water Video References

## Underlight

Poster and first-frame reference:

`public/images/reef/open-water/posters/underlight-poster.png`

Purpose:
Opening open-water loop beneath the ocean surface.

| Property | Value |
|----------|-------|
| Original Downloads filename | `ChatGPT Image Jul 24, 2026, 08_49_23 PM.png` |
| Repository destination | `public/images/reef/open-water/posters/underlight-poster.png` |
| Dimensions | 1672 × 941 |
| SHA-256 | `8996468a7d41daaa33f7b538a4153e3fcad52c0b1df9b48db01ee4252722f79b` |

## The Blue Road

Poster and first-frame reference:

`public/images/reef/open-water/posters/blue-road-poster.png`

Purpose:
Deep-water descent before the full reef reveal.

| Property | Value |
|----------|-------|
| Original Downloads filename | `ChatGPT Image Jul 24, 2026, 08_51_18 PM.png` |
| Repository destination | `public/images/reef/open-water/posters/blue-road-poster.png` |
| Dimensions | 1672 × 941 |
| SHA-256 | `72bd6dc2249bbac0691161fd81cd267189978f58bc3788211171a2e0b9931565` |

## Air

Poster and first-frame reference:

`public/images/reef/open-water/posters/air-poster.png`

Purpose:
Closing ascent with the recovering reef receding below.

| Property | Value |
|----------|-------|
| Original Downloads filename | `ChatGPT Image Jul 24, 2026, 08_51_21 PM.png` |
| Repository destination | `public/images/reef/open-water/posters/air-poster.png` |
| Dimensions | 1672 × 941 |
| SHA-256 | `9c8693b5a2da8f0c1695aaf8a27ffaa2f5d4c3fc9c678c5ad2b09882eaeb8c1d` |

## Production notes

- These files are approved original PNG masters.
- They are intended as video first frames and static fallbacks.
- The original Downloads files remain untouched.

---

# Optimized open-water loops

All loops:
- silent
- 1920 × 1080
- 24 fps
- approximately 7.2 seconds
- 0.8-second end-to-head crossfade
- WebM preferred
- MP4 fallback
- static poster fallback for reduced motion

## Underlight

WebM:
`public/videos/open-water/underlight.webm`

MP4:
`public/videos/open-water/underlight.mp4`

Poster:
`public/images/reef/open-water/posters/underlight-poster.png`

Cleaned source:
`video-blue-road-raw_1080p_202607242114-cleaned.mp4`

Note:
The source filename says blue-road, but the approved visual content represents
Underlight.

| Property | Value |
|----------|-------|
| MP4 codec | h264 (libx264) |
| WebM codec | vp9 (libvpx-vp9) |
| Dimensions | 1920 × 1080 |
| Frame rate | 24 fps |
| MP4 CRF | 25 |
| WebM CRF | 34 |
| MP4 byte size | 5,088,299 |
| WebM byte size | 4,137,917 |
| MP4 SHA-256 | `29744a530f91c6cdde7745f1c8d3bd436ba78df16b07545e700829fd9459454b` |
| WebM SHA-256 | `660b379c1fe44cd5f11e3f8a6035b171670e1da36757beb851aa89659fc7e21d` |
| Audio | None (confirmed) |
| SSIM (start vs end frame) | MP4: 0.7498, WebM: 0.7549 |

## The Blue Road

WebM:
`public/videos/open-water/blue-road.webm`

MP4:
`public/videos/open-water/blue-road.mp4`

Poster:
`public/images/reef/open-water/posters/blue-road-poster.png`

Cleaned source:
`video-underlight-raw_1080p_202607242113-cleaned.mp4`

Note:
The source filename says underlight, but the approved visual content
represents The Blue Road.

| Property | Value |
|----------|-------|
| MP4 codec | h264 (libx264) |
| WebM codec | vp9 (libvpx-vp9) |
| Dimensions | 1920 × 1080 |
| Frame rate | 24 fps |
| MP4 CRF | 25 |
| WebM CRF | 34 |
| MP4 byte size | 4,055,193 |
| WebM byte size | 3,328,327 |
| MP4 SHA-256 | `1afec71573521f7364d3123c2b8de00b4136491386f2226cff98767ff1cb5e69` |
| WebM SHA-256 | `c5a41e0af2a454ddf2beea5fbe653edd12cd4fad84bd338c24526d6c28f99199` |
| Audio | None (confirmed) |
| SSIM (start vs end frame) | MP4: 0.6808, WebM: 0.6936 |

## Air

WebM:
`public/videos/open-water/air.webm`

MP4:
`public/videos/open-water/air.mp4`

Poster:
`public/images/reef/open-water/posters/air-poster.png`

Cleaned source:
`video-air-raw_1080p_202607242113-cleaned.mp4`

| Property | Value |
|----------|-------|
| MP4 codec | h264 (libx264) |
| WebM codec | vp9 (libvpx-vp9) |
| Dimensions | 1920 × 1080 |
| Frame rate | 24 fps |
| MP4 CRF | 27 |
| WebM CRF | 37 |
| MP4 byte size | 3,892,248 |
| WebM byte size | 3,814,783 |
| MP4 SHA-256 | `35448924bfcfd8bf0821b6c67e25bba1d2707e621a39b83b87fd6c40eaf06bf7` |
| WebM SHA-256 | `f11c6ce992fc114ce3bdcb43757e0cc10cabb1a1aa049b6ae42eff571b544f49` |
| Audio | None (confirmed) |
| SSIM (start vs end frame) | MP4: 0.5318, WebM: 0.5681 |

## Encoding notes

- Raw masters remain outside the public repository.
- Cleaned masters remain outside the public repository.
- Videos are not yet referenced by application components.
- Reduced-motion mode will use static posters.
- Air exceeded the 5 MB MP4 limit at CRF 25 and was re-encoded at CRF 27.
- Air exceeded the 4 MB WebM limit at CRF 34 and was re-encoded at CRF 37.
