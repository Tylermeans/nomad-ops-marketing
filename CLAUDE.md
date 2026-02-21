# Nomad Ops — Marketing Site

## What this is

Marketing website for Nomad Ops, a remote web design agency for small businesses. Four pages: Home, Services, About, Contact. Lead magnet is a free website audit.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 with custom theme tokens defined in `app/globals.css`
- Lucide React for icons
- Geist / Geist Mono fonts (loaded via `next/font`)
- No CMS, no database — static marketing site

## Project structure

```
app/           — pages (layout.tsx, page.tsx, /services, /about, /contact)
components/    — shared components (nav.tsx, footer.tsx)
public/        — logo SVGs, favicon, images (JPGs for photography, SVGs for illustrations)
```

## Color system

Defined as CSS custom properties in `app/globals.css`, mapped to Tailwind via `@theme inline`. Key tokens: `copper` (accent/CTAs), `charcoal` (dark backgrounds/headings), `stone` (body text), `warm-white` (page background), `cream` (section alternation). Do not introduce new color tokens without discussion.

## How to work

- `npm run dev` — local dev server
- `npm run build` — production build (use this to verify changes compile)
- `npm run lint` — ESLint

## Conventions

- All pages export metadata (title, description) for SEO. Maintain this pattern.
- Structured data (JSON-LD) is used on Home (FAQPage, ProfessionalService) and Services (ItemList). Preserve and extend these as pages grow.
- Copy tone is direct, confident, no-BS. Speak to small business owners. Avoid jargon, avoid fluff.
- The primary CTA across the site is "Get Your Free Audit" linking to /contact.
- Images in the `public/images/` directory: JPGs are photography, SVGs are custom illustrations.
- Components are colocated in page files unless shared across pages (then in `components/`).
