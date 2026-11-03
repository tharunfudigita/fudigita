# Fudigita – Digital Agency Website

React + TypeScript + Tailwind CSS (Vite) with scroll-linked parallax.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure

```
public/assets/        SVG images (hero, about, mountains, work mockup, favicon)
src/components/       navbar.tsx, footer.tsx, Logo, Icons, ParallaxLayer, Reveal, PageHero, CtaBanner
src/pages/            home.tsx, about.tsx, services.tsx, contact.tsx
src/hooks/            useParallax.ts, useReveal.ts
src/data/services.ts  shared service content
```

## Parallax

`ParallaxLayer` wraps any element and moves it at `speed` relative to scroll
(positive = slower than page, negative = faster). It respects
`prefers-reduced-motion`.

## Replacing images

The SVGs in `public/assets/` are illustrations. To use real photos, drop in files
with the same names (e.g. `hero-bg.jpg`) and update the `src` paths.
