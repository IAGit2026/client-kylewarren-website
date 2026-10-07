# Kyle Warren · Modern Initiator — Design Notes

Reference for anyone (or any agent) editing this site. Match these before adding anything new.

## Brand
- **Voice:** fire, sovereignty, brotherhood. Grounded, direct, masculine, no hype.
- **Tagline:** "Awakening the heart of man."
- **Mark:** flame icon (`/assets/img/img-0e8561ba06.png` on the homepage nav).

## Colours (CSS variables, defined in each page's stylesheet)
| Token | Hex | Use |
|---|---|---|
| `--ember` | #8B2E1F | Primary deep red, buttons, accents |
| `--ember-light` | #C9583E | Hover / highlight red |
| `--red` | #C7251A | Strong accent |
| `--orange` | #F26A21 | Fire highlight |
| `--gold` | #FFC15A | Flame glow, small highlights |
| `--obsidian` | #1C1C1C | Dark section backgrounds |
| `--graphite` | #3A3A3A | Body text on light |
| `--bronze` / `--bronze-light` | #9B7B3E / #C9A668 | Eyebrows, rules, metallic detail |
| `--forest` | #2E4031 | Secondary accent |
| `--bone` | #F2EBDC | Text on dark, warm light panels |
| `--paper` | #FAF7F0 | Page background |
| `--stone` | #857E70 | Muted text |

## Type
- **Headings:** Cinzel (500–700), uppercase feel, wide letter-spacing.
- **Accent / quotes:** Cormorant Garamond, italic.
- **Body:** Inter (300–700), line-height 1.7.

## Layout
- Content width `.wrap` = 1100px, 32px side padding.
- Sections alternate light (`--paper` / `--bone`) and dark (`--obsidian` + mountain image `--mtn`).
- `.reveal` elements fade in on scroll (IntersectionObserver in `/public/js/*.js`).

## Pages
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Homepage + Fire Audit popup (exit-intent / 30s) |
| `/fire-audit` | `app/fire-audit/page.tsx` | 4-part audit, sends `audit_started` / `audit_completed` to GHL |
| `/iron-and-fire` | `app/iron-and-fire/page.tsx` | Offer page, GHL booking buttons |
| `/the-forge` | `app/the-forge/page.tsx` | Offer page |
| `/the-hearth` | `app/the-hearth/page.tsx` | Brotherhood page |
| `/forged` | `app/forged/page.tsx` | Men's group page |
| `/the-threshold` | `app/the-threshold/page.tsx` | Wheel of Life assessment — intentionally not linked yet |

## Integrations (do not break)
- **GHL webhook** (Kyle's own GHL, Fire Audit lead capture): set as `FA_ENDPOINT` in `public/js/index.js` and `FORM_ENDPOINT` in `public/js/fire-audit.js`.
- **GHL booking:** `api.leadconnectorhq.com/widget/booking/jcNuHaIos1H25H0lO6rA` (Fire Audit results) and `.../widget/bookings/30-minute-discovery-call-kw-initiations` (Iron and Fire).
- Buttons that call page scripts use `data-onclick="fn()"`; the first line of each page script turns these into real `onclick` handlers.
