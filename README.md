# client-kylewarren-website

Kyle Warren · Modern Initiator — **kwinitiations.com**

Next.js (App Router) site, exported as static files for Cloudflare Pages. Migrated from the original static HTML site (Oct 2026).

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to /out
```

## Cloudflare Pages settings
- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Output directory: `out`

## Structure
- `app/` one folder per page (`page.tsx`), shared `layout.tsx` (fonts, favicon)
- `styles/` one stylesheet per page (pages link to each other with plain `<a>` links, so each page loads only its own CSS)
- `public/js/` page scripts (Fire Audit popup + audit logic, scroll reveal, Threshold logic)
- `assets/img/` images (copied into `public/assets` automatically at build time by `scripts/copy-assets.mjs`)
- `public/_redirects` keeps the old `*.html` URLs working (e.g. `/fire-audit.html` → `/fire-audit`)
- `design.md` brand colours, type and integration notes — read before editing
