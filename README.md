# Kyle Warren · Modern Initiator (kwinitiations.com)

Next.js App Router static export for Cloudflare Pages, laid out for the Affinity platform (Website Builder, SEO publisher, forms).

- Pages: `src/app/` (one folder per route), styles in `src/styles/`, page scripts in `public/js/`.
- Images: `public/assets/img/` (served at `/assets/img/...`).
- Blog: Markdown in `src/content/blog/` (drafts stay private).
- Forms: definitions in `src/lib/forms/`. Live capture currently posts to the GHL inbound webhook.
- Build/deploy: see `docs/deploy-cloudflare-pages.md`.

```
npm ci
npm run build      # -> dist/
npm run serve:dist
```
