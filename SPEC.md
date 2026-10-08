# tmytrn.com v2 homepage: design handoff spec

Source: Figma file `4A99CWi7BtzALBmzrZIoZS`, page `portfolio_tmytrn` (408:2)
- Desktop: `1360:204` "Frame 8", 1440 × 3601
- Mobile: `1357:2` "Frame 7", 375 × 3601 (incomplete, see §5)
- Reference renders: `desktop-1440.png`, `mobile-375.png` (+ `desktop-part1..3.png`, `mobile-part1..3.png`) in this folder
- Assets: `./assets/` (2x composites) and `./assets/source/` (full-res originals)

All values below come from Figma `get_design_context`. Figma lays everything out with absolute positions; the build should use a normal flow/grid layout that reproduces these measurements.

---

## 1. Design tokens

### Fonts
| Role | Figma font name | Weight | Availability |
|---|---|---|---|
| Display / labels / services / button / footer | **`Eurostile Extd`**, style **`Black`** (Eurostile Extended Black) | Black (900) | **Not on Google Fonts.** Commercial (Linotype/Monotype; also sold as URW Eurostile Extended Black). It's usually on Adobe Fonts as a web project, but confirm Tommy's license. Free fallbacks: `Archivo` variable at `wdth 125, wght 900` (closest heavy-extended look), or `Michroma` (one weight, lighter). |
| Body / serif | **`EB Garamond`**, style **`Regular`** | 400 | **On Google Fonts** (use `next/font/google`). |

The "TMYTRN LLC" wordmark is **outlined vectors** (SVG), not live text, so no font is needed for it. Its letterforms match Eurostile Extended Black.

Line height: `normal` everywhere except the desktop footer headline (76.86%). Letter spacing: only on the services list (−0.02em → −0.64px at 32px, −0.36px at 18px) and the mobile footer (−0.64px at 32px).

### Colors
| Token | Hex | Used for |
|---|---|---|
| `--cream` (page bg) | `#F3EDE1` | page background; SUBMIT text |
| `--navy` (primary ink) | `#152057` | almost all text, borders, slider, button bg |
| (near-dup) | `#141F57` | wordmark fill, hero subline (treat as `--navy`) |
| (near-dup) | `#162158` | services box border (treat as `--navy`) |
| hero gradient | `#16388E` → `#081848` | hero box, top to bottom (`linear-gradient(180deg, #16388E, #081848)`) |
| card gradient | `#20289E` → `#0B0E38` | project card bg behind images: `linear-gradient(225deg, #20289E 47.756%, #0B0E38 123.77%)` |
| `--yellow` | `#EBC141` | hero inner rectangle |
| yellow 10% | `rgba(235,193,65,0.1)` | hero halo rectangle |
| black | `#000000` | "2026 TMYTRN LLC" and the "More Details..." placeholder (probably unintended; use navy) |
| white | `#FFFFFF` | only in the unused "WEBSITES" tile |

Figma variables: none defined (`get_variable_defs` returned only an empty style named "shield gradient").

### Type scale (desktop → mobile)
| Element | Font | Desktop | Mobile |
|---|---|---|---|
| Hero subline | EB Garamond 400 | 24px, centered, max-w 383px | 18px, centered, max-w 259px |
| "I offer services for:" | EB Garamond 400 | 18px | 14px |
| Services list | Eurostile Extd Black | 32px, ls −0.64px | 18px, ls −0.36px |
| Section labels (SELECT WORK, CONTACT, ABOUT) | Eurostile Extd Black | 24px | 14px |
| Project title | EB Garamond 400 | 36px | 24px |
| Project description | EB Garamond 400 | 18px | — (absent) |
| Contact intro | EB Garamond 400 | 36px | — |
| Form inputs / labels | EB Garamond 400 | 18px (Budget Range label 14px) | — |
| SUBMIT | Eurostile Extd Black | 18px | — |
| Schedule line | EB Garamond 400 | 18px | — |
| Footer headline | Eurostile Extd Black | 128px, lh 76.86%, uppercase | 32px, lh normal, ls −0.64px, uppercase |
| Copyright | EB Garamond 400 | 12px | — |

### Layout grid (desktop, 1440)
- Left margin **56px**. Two columns of **625px** at x=56 and x=738 (gutter **57px**). Right edge 1363, so the right margin is 77px (asymmetric).
- The wordmark spans x 56→1385 (1329px wide), and the contact form box spans x 720→1363 (643px wide). These are small inconsistencies in the Figma file.
- Suggested build: `max-width: 1440px; padding-inline: 56px;` with a 2-col grid `gap: 57px`, letting columns flex. Treat the 22px/18px misalignments as noise.

### Layout (mobile, 375)
- Side margin **15px**, content width **345px**, single column.

---

## 2. Desktop: section by section (y = top offset in the 1440 frame)

### 2.1 Header / wordmark
- Asset: `assets/tmytrn-llc-wordmark.svg` (1329×105 viewBox, fill `#141F57`). Position: centered, top 38.
- Subline at top 168, centered (Figma offset −10.5px from center), width 383, EB Garamond 24px, `#141F57`:
  > is the web design and development practice of Tommy Tran.

### 2.2 Hero row (top 308, height 429)
**Left: hero box** (x56, 625×429). This is **not an image or a named illustration**. It's three plain vector rectangles in Figma group `1384:133`, with no image fills and no meaningful layer names:
1. Box `1384:135`: 625×429, `linear-gradient(180deg, #16388E, #081848)`.
2. Halo `1384:137`: 197.46×135.54, `rgba(235,193,65,0.1)`, centered.
3. Core `1384:139`: 125×85.8, `#EBC141`, centered.
Proportions: halo = 31.6% of box width, core = 20% of box width. Both are centered on the box.
It's best read as a **placeholder/abstract "website/screen" graphic**. The same pieces exist off-canvas as separate groups: `1384:63` "Group 6" (the navy gradient tile, 345×226, with white **"WEBSITES"** text in Eurostile Extd Black 32px at the bottom), `1384:65` "Group 8" (yellow 10% rect 109×71.4), and `1384:67` "Group 7" (yellow rect 69×45.2). The mobile hero uses exactly those sizes, so the hero looks like an unfinished "WEBSITES" service tile with its label removed. Build it in CSS (3 divs), or use `assets/hero-box.png` (2x). `assets/websites-tile.png` is the labeled variant.

**Right: services** (x738)
- Label above the box, centered over the right column, top 270, EB Garamond 18px: `I offer services for:`
- Box: 625×429, `border: 1px solid #162158`, flex column, centered both ways, `gap: 10px`, `padding-block: 21px`. Items are Eurostile Extd Black 32px, ls −0.64px, `#152057`, centered:
  ```
  SHOPIFY SITES
  NEXT.JS SITES
  ECOMM STRATEGY
  KLAVIYO
  MAILCHIMP
  SEO
  AI SEARCH
  ```
  (In Figma, "KLAVIYO ", "MAILCHIMP " and "SEO " have trailing spaces. Trim them.)

### 2.3 SELECT WORK (label at top 863, x56, Eurostile Extd Black 24px)
Cards are 625×469 with `overflow:hidden` and the card gradient as bg. Title (EB Garamond 36px) sits 12px below the card. The description (18px, max-w 484) follows about 47px below the card bottom.

| Pos | Card node | Title (verbatim) | Description (verbatim) | Asset (2x composite) | Source images |
|---|---|---|---|---|---|
| Row 1 left (x56, top 1008) | `1392:212` | `Dresen` | `Womens denim brand from Becca Rosen. Made in USA.` | `assets/dresen-card.png` | `source/dresen-bg-photo.(png|jpg)` 1500×2048 (blur 1px, 628×785 at −1,−80); `source/dresen-site-screenshot.png` 3398×1816 (472×251 at 78,79) |
| Row 1 right (x738, top 1008) | `1392:168` | `Benjamin Edgar` | `Designer and Artist based in Chicago` | `assets/benjamin-edgar-card.png` | No bg photo, just the gradient. `source/benjamin-edgar-site-screenshot.png` 3396×1822, centered, top/bottom inset 18.5%, aspect 3398/1806 |
| Row 2 left (x55, top 1616) | `1392:228` | `Urban Jurgensen` | `250 year old danish watchmaker ` | `assets/urban-jurgensen-card.png` | `source/urban-jurgensen-bg-texture.png` 2000×1400 (red paper, 798×997, flipped horizontally, centered); `source/urban-jurgensen-site-screenshot.png` 3398×1812 (inset 18.5%) |
| Row 2 right (x738, top 1616) | `1392:233` | `Scroll NYC` | `Art Gallery based in Chinatown NY` | `assets/scroll-nyc-card.png` | `source/scroll-nyc-bg-photo.(png|jpg)` 3840×2563 (white brick wall, 799×998, flipped, centered); `source/scroll-nyc-site-screenshot.png` 3408×1812 (inset 18.5%) |

Copy notes (verbatim from Figma, flag before shipping):
- Desktop title is **"Dresen"**; mobile says **"Dresen Studio"**.
- Description is "Womens denim brand from Becca Rosen. Made in USA." There is **no "Luxury"** in Figma. "Womens" has no apostrophe.
- "Urban Jurgensen" has no umlaut (the brand is Urban Jürgensen). "danish" is lowercase, and the description has a trailing space.
- Title/description y-offsets drift by 5–23px between cards (desc tops 1536/1541/2145/2168; title tops 1489/1489/2097/2109). Normalize them.
- Suggested implementation: render the 2x composite PNG with `next/image` (aspect 625/469 = 4:3), or rebuild the layering (gradient + bg image `object-fit: cover` + screenshot centered at 89% width).

### 2.4 CONTACT (label top 2415, x56, Eurostile Extd Black 24px, `text-transform: uppercase` on source text "contact")
**Left column** (x56, max-w 635):
- Intro, EB Garamond 36px, top 2458:
  > Fill out this form and I’ll follow up with you, or email me at <u>tmytrn.com</u>

  "tmytrn.com" is underlined like a link, but it's a domain, not an email address. **Confirm the real address/target** (e.g. a mailto). Uses a curly apostrophe (I’ll).
- Bottom line, EB Garamond 18px, top 2917:
  > Want to schedule and intro call?  <u>Let’s do it</u>.

  Verbatim typo: "**and** intro" (should be "an intro"). Note the **two spaces** after "call?". Only "Let’s do it" is underlined, and the trailing period is not. The link target isn't specified (likely a Calendly or similar).

**Right column: form box** (`1394:269`): x720, top 2418, 643×517, `border: 1px solid #152057`. Inner left padding 36 gives a 549px content width. Children are positioned within the box:
| Field | Pos (x,y) | Width | Style |
|---|---|---|---|
| First Name | 36,44 | 264 | input: `border:1px solid #152057; padding:8px 12px;` EB Garamond 18px `#152057` placeholder |
| Last Name | 321,44 | 264 | same |
| Company | 36,97 | 264 | same |
| Title | 321,97 | 264 | same |
| Email | 36,150 | 549 | same |
| "Budget Range" label | centered over track, y213 | — | EB Garamond 14px |
| Range track | 37,259 | 549 | 1px line `#152057` (`assets/budget-slider-track.svg`) |
| Min handle | 233,249 (center x 243) | 20×20 | square `#152057`, no radius; label `$10k` 18px centered under it at y281 |
| Max handle | 373,249 (center x 383) | 20×20 | square; label `$25k` at y281 |
| More Details | 36,323 | 549×105 | textarea, same border; placeholder `More Details...` 18px at ~12px/11px inset (Figma uses black; use navy) |
| SUBMIT | 36,449 | auto | bg `#152057`, 1px border `#152057`, `padding: 8px 24px 4px`, Eurostile Extd Black 18px, color `#F3EDE1` |

- Field rows are 53px apart, so the vertical gap is about 12px. Column gap is 21px (36+264=300 → 321).
- Budget Range is a **dual-thumb range slider**. Figma shows handles at about 36% and 61% of the track with $10k/$25k labels. **Min/max/step are not defined in Figma, so ask Tommy.** Value labels follow their handles.
- No form backend is specified (Formspree/Resend/API route are all options; the existing repo may already have one).

### 2.5 Footer
- An empty frame `1395:325` (x55, top 3029, 1308×423) sits here. It's a placeholder with no content.
- Headline (`1395:326`), right-aligned with the right edge at x1413 (27px from the page edge, not 77), top 3298. Eurostile Extd Black 128px, `line-height: 76.86%`, uppercase, `#152057`. Two lines:
  ```
  I LOVE THE
  COMPUTER
  ```
  (The source text is " I love the" / "computer" with a leading space, uppercased via text-transform.)
- Computer line drawing at x56, top 3433, **108×90**. Asset: `assets/computer-drawing.png`. This is the only resolution that exists in Figma (a tiny 2-color raster: `#202040` lines on opaque white). Also provided: `assets/computer-drawing-transparent.png` (white made transparent) and `assets/computer-drawing-transparent@4x.png` (nearest-neighbor upscale for crisp pixels). Render with `image-rendering: pixelated`. In the Figma render it shows as a white box on cream. The transparent version is probably what's intended.
- Copyright: `2026 TMYTRN LLC`, EB Garamond 12px, black, at x1306, top 3561 (bottom-right).

---

## 3. Mobile (375): section by section

| y | Element | Spec |
|---|---|---|
| 24 | Wordmark | `assets/tmytrn-llc-wordmark-mobile.svg` 345×27 at x15 (same paths, scaled) |
| 61 | Subline | EB Garamond 18px, centered, w259, `#141F57`: "is the web design and development practice of Tommy Tran." (plus two empty paragraphs after it, 115px tall in total) |
| 135 | Hero box | 345×226 at x15, same gradient; halo 109×71.4 `rgba(235,193,65,.1)` and core 69×45.2 `#EBC141`, both centered |
| 382 | "I offer services for:" | EB Garamond 14px, centered |
| 405 | Services box | x15, w345, height auto, 1px `#162158` border, gap 10, py 21; Eurostile Extd Black 18px, ls −0.36px; same 7 items |
| 770 | SELECT WORK | Eurostile Extd Black 14px, x15 |
| 795 | Dresen card | `1392:185`, 345×259, `assets/dresen-card-mobile.png` (bg photo 346×432 at 0,−19, blur 0.5px; screenshot 292×155 at 27,52). Title "Dresen Studio" EB Garamond 24px, 4px below. **No description.** |
| ~1080–1824 | (empty) | |
| 1824 | ABOUT | Eurostile Extd Black 14px, x15 |
| 1841 | About photo | 345×460 at x15, `object-fit: cover`. Assets: `assets/about-photo.jpg` (full-res 3024×4032 original: Tommy standing on a dirt hillside trail at sunset) and `assets/about-photo-crop-690x920.jpg` (Figma's 2x crop). **No about copy.** |
| ~2301–3338 | (empty) | |
| 3338 | Computer drawing | 108×90 at x17 |
| 3452 | Footer headline | Eurostile Extd Black 32px, ls −0.64px, uppercase, right-aligned at x361: "I LOVE THE / COMPUTER" |

---

## 4. Asset inventory (`/workspace/v2-figma/assets/`)
| File | Size | What |
|---|---|---|
| `tmytrn-llc-wordmark.svg` | 1329×105 | Desktop wordmark (vector, `#141F57`) |
| `tmytrn-llc-wordmark-mobile.svg` | 345×27 | Same paths, mobile size |
| `hero-box.png` | 1250×858 (2x) | Hero navy/yellow box render (better built in CSS) |
| `websites-tile.png` | 690×452 (2x) | Unused off-canvas "WEBSITES" tile (Group 6, 1384:63) |
| `dresen-card.png` | 1250×938 (2x) | Desktop Dresen card composite |
| `dresen-card-mobile.png` | 690×518 (2x) | Mobile Dresen card composite (different crop) |
| `benjamin-edgar-card.png` | 1250×938 (2x) | Desktop Benjamin Edgar card |
| `urban-jurgensen-card.png` | 1250×938 (2x) | Desktop Urban Jurgensen card |
| `scroll-nyc-card.png` | 1250×938 (2x) | Desktop Scroll NYC card |
| `about-photo.jpg` | 3024×4032 | Mobile ABOUT photo, full-res original |
| `about-photo-crop-690x920.jpg` | 690×920 | Same photo as cropped in Figma, 2x |
| `computer-drawing.png` | 108×90 | Footer drawing, original (opaque white bg) |
| `computer-drawing-transparent.png` / `@4x.png` | 108×90 / 432×360 | Transparent-bg versions (derived) |
| `computer-drawing@2x-upscaled.png` | 216×180 | Figma 2x export (just upscaled) |
| `budget-slider-track.svg` | 549×1 | Slider track line |
| `source/dresen-bg-photo.png|.jpg` | 1500×2048 | Dresen bg photo (model seated in denim) |
| `source/dresen-site-screenshot.png` | 3398×1816 | dresen-studio.com screenshot |
| `source/benjamin-edgar-site-screenshot.png` | 3396×1822 | Benjamin Edgar site screenshot |
| `source/urban-jurgensen-bg-texture.png` | 2000×1400 | Red paper texture |
| `source/urban-jurgensen-site-screenshot.png` | 3398×1812 | Urban Jurgensen site screenshot ("UJ-1 / The 250th Anniversary Watch") |
| `source/scroll-nyc-bg-photo.png|.jpg` | 3840×2563 | White brick wall with a small blue painting |
| `source/scroll-nyc-site-screenshot.png` | 3408×1812 | Scroll NYC site screenshot (lanterns) |

The 2x card composites are about 1–1.7 MB PNGs. Convert them to WebP/AVIF or let `next/image` optimize.

## 5. Mobile vs desktop gaps
Mobile (Frame 7) is a partial draft. Compared to desktop, it is **missing**:
- Benjamin Edgar, Urban Jurgensen, and Scroll NYC cards (only Dresen is present)
- All project descriptions
- The entire CONTACT section: label, intro copy, form, budget slider, SUBMIT, and the "schedule an intro call" line
- The "2026 TMYTRN LLC" copyright
- Large empty vertical gaps (~1080→1824 and ~2301→3338)

Mobile **has, and desktop lacks**:
- An **ABOUT** section (label + 345×460 photo). It has no copy, and desktop has no ABOUT at all.
- The title "Dresen Studio" (desktop: "Dresen")

Recommended build: one responsive page. Mobile stacks the desktop sections in a single column, using the mobile type sizes from §1. Decide with Tommy whether ABOUT ships on desktop too, and with what copy. The repo's previous homepage had an about/bio that could be reused.

## 6. Project mockup frames (off-canvas, page 408:2)
Each frame is a bg image/texture (layer named "image 2", "image 3" or "LooseLeaf Boxes 110 1") plus a layer named "Screenshot 2026-10-07 at 10.02.25 AM 1". The layer names are stale (fills were swapped after duplicating), so names don't identify projects.

**Confirmed (actual fills seen via design context):**
- `1392:212` (in desktop): Dresen. `1392:185` (in mobile): Dresen. `1392:168` (in desktop): Benjamin Edgar. Its node id falls between Frame 21 (1392:165) and Frame 23 (1392:170), so it's almost certainly the original "Frame 22" moved into the page. `1392:228`: Urban Jurgensen. `1392:233`: Scroll NYC.

**Inferred from identical geometry (not visually verified; the Figma MCP quota ran out before export):**
| Frame | Size | Likely project | Evidence |
|---|---|---|---|
| `1386:156` Frame 19 | small | **Dresen** | identical geometry to mobile Dresen card 1392:185 (bg 346×432 @0,−19) |
| `1384:86` Frame 12 | small | **Benjamin Edgar** | the only small frame with no bg image, same as the BE desktop card |
| `1392:191` Frame 30 | large | **Urban Jurgensen** | bg 798×997 flipped, y −198: exact match to UJ desktop card |
| `1392:173` Frame 24 | large | **Scroll NYC** | bg 799×998 flipped, screenshot x43: exact match to Scroll desktop card |
| `1392:165` Frame 21 / `1384:73` Frame 11 | large / small | possibly Scroll NYC (alt) | "image 2" layer has 3:2 aspect (900×600, 597×398), matching the brick-wall photo's native 3840×2563 |
| `1392:188` Frame 29 / `1386:159` Frame 20 | large / small | unknown | "LooseLeaf Boxes 110" paper texture (16:9); a pair (1067×600 ≈ 461×259 ×2.31) |
| `1392:182` Frame 27 | large | unknown (maybe Dresen large) | unflipped 799×998 portrait bg |
| `1392:170` F23, `1392:176` F25, `1392:179` F26 | large | unknown | |
| `1384:95` F13, `1384:100` F14, `1384:103` F15, `1384:106` F16, `1386:143` F17, `1386:149` F18 | small | unknown | F13 (344×430 flipped, y−86) scales exactly ×0.43125 from F23, so F13/F23 are a pair |

To finish this mapping and export the unused mockups, export these frames at 2x from Figma (select, then Export PNG 2x). Another option is to rerun `download_assets` after the Figma MCP allowance resets or the seat is upgraded.
