# Deploy: Cloudflare Pages

| Setting | Value |
| --- | --- |
| Production branch | `main` (promote only after Paul/David approve) |
| Preview branch | `test` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 (`.nvmrc`, `engines`) |
| Install | `npm ci` |

`npm run build` runs `next build` (static export to `out/`) then `scripts/prepare-cloudflare-output.mjs`, which moves `out/` to `dist/`.

Redirects for the old `.html` URLs are in `public/_redirects`. `robots.txt` and `sitemap.xml` are static files in `public/`.

## Local check
```
npm ci
npm run type-check && npm run lint && npm run build
npm run serve:dist   # http://localhost:3000
```

## Restore
Roll back to the previous deployment in Cloudflare Pages, or revert the commit on the branch and redeploy. The old GitHub Pages site stays on `main` until cutover.

## Open items
- Pages project name in `wrangler.toml` must match the project Paul creates.
- Cloudflare's GitHub app needs access to the `IAGit2026` org.
- DNS cutover is Paul's process.
