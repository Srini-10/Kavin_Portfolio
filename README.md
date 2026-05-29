# Kavinkumar S — Portfolio

A cinematic, dark-orange portfolio for **Kavinkumar S** — Actor · Assistant Director · Filmmaker.
Built in a Folioblox-style layout with a deep near-black background (`#0D0D0D`) and a warm orange
accent (`#F04500`).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3** — custom dark/orange theme
- **HeroUI v2** — form inputs + provider
- **Framer Motion** — scroll reveal + hero animations
- **lucide-react** — icons
- Fonts: **Syne** (display) + **DM Sans** (body) via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # fonts, metadata, HeroUI provider, forced dark theme
  page.tsx          # composes the 18 sections
  providers.tsx     # HeroUIProvider (client)
  globals.css       # Tailwind layers + design-system component classes
components/
  nav/Navbar.tsx                # sticky nav, frosted-on-scroll, mobile overlay
  ui/PillButton.tsx             # the signature dark pill + orange arrow-dot CTA
  ui/SectionLabel.tsx           # orange ALL-CAPS section label
  ui/FadeIn.tsx                 # scroll-triggered reveal wrapper
  sections/01_HeroSection.tsx … 18_Footer.tsx
lib/cn.ts           # clsx + tailwind-merge helper
public/images/      # portfolio photos (served, web-optimized)
```

## Sections

1. Hero · 2. Productions bar · 3. Behind the Work (B&W trio) · 4. Projects hero (full-bleed)
5. Bringing Characters to Life · 6. Gallery grid · 7. Process steps · 8. About (purple)
9. About detail · 10. Services · 11. About Me · 12. Packages (orange center card)
13. Skills & Recognition · 14. Contact (orange) · 15. Contact form · 16. Latest Work
17. Project cards · 18. Footer

## Content & contact

All copy is final: Kavinkumar S · `kavinkumars773@gmail.com` · `@kavinkumars773` · Tamil Nadu / Chennai.
The contact form opens the visitor's mail client to `kavinkumars773@gmail.com` (no backend required).

## Images

The high-resolution source photos live in the top-level `images/` folder. Web-optimized copies
(resized + compressed, ~3.7 MB total) are what the site actually serves, in `public/images/`.
To swap a photo, replace the matching file in `public/images/` (keep the same filename).

> The `images/` source folder is large (~140 MB of originals). It is safe to delete or move it out
> of the repo once you're happy with the optimized versions in `public/images/`.
