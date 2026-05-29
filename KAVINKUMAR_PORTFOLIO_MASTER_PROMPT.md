# MASTER BUILD PROMPT — Kavinkumar S Portfolio
## Stack: Next.js 14 (App Router) · Tailwind CSS · HeroUI · Framer Motion
## UI Reference: Exact Folioblox-style dark-orange cinematic layout from design screenshot

---

## CRITICAL DESIGN DIRECTIVE

Replicate the **exact UI** from the Folioblox reference screenshot with pixel-level fidelity:
- Background: `#0D0D0D` deep near-black
- Primary accent: `#F04500` warm orange
- Font: **Syne** (display/headings, 700–800 weight) + **DM Sans** (body)
- CTA buttons: distinctive **pill-toggle shape** — dark bg, white text, orange circle dot on right
- Section labels: orange, ALL CAPS, `tracking-[0.2em]` uppercase tiny text
- Every section must match the screenshot layout, spacing, and visual hierarchy exactly
- Content: All Kavinkumar S's portfolio data mapped into each section

---

## 1. PROJECT SETUP

```bash
npx create-next-app@latest kavinkumar-portfolio --typescript --tailwind --app --src-dir=false
cd kavinkumar-portfolio
npm install @heroui/react framer-motion @heroui/theme next-themes lucide-react
npm install clsx tailwind-merge
```

---

### `tailwind.config.ts`

```ts
import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg:           "#0D0D0D",
        surface:      "#161616",
        surface2:     "#1F1F1F",
        surface3:     "#252525",
        border:       "#2A2A2A",
        accent:       "#F04500",
        "accent-h":   "#CC3A00",
        "accent-l":   "#FF6B35",
        text:         "#FFFFFF",
        muted:        "#888888",
        "muted-2":    "#555555",
        purple:       "#5B1DA8",
        "purple-d":   "#3B1270",
        "purple-l":   "#7B2DD8",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":    "radial-gradient(ellipse 90% 80% at 65% 40%, rgba(240,69,0,0.35) 0%, rgba(240,69,0,0.08) 40%, transparent 70%)",
        "orange-grad":  "linear-gradient(135deg, #F04500 0%, #FF6B35 40%, #1A0A00 100%)",
        "contact-grad": "linear-gradient(135deg, #F04500 0%, #FF8C42 50%, #1A0800 100%)",
        "purple-grad":  "linear-gradient(135deg, #3B1270 0%, #5B1DA8 50%, #1A0A2E 100%)",
        "hero-overlay": "linear-gradient(90deg, #0D0D0D 35%, rgba(13,13,13,0.75) 60%, transparent 100%)",
        "card-overlay": "linear-gradient(180deg, transparent 35%, rgba(13,13,13,0.95) 100%)",
      },
      animation: {
        "fade-up":  "fadeUp 0.75s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-in":  "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: { "0%": { opacity:"0", transform:"translateY(28px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn: { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
      },
    },
  },
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          primary: { DEFAULT: "#F04500", foreground: "#FFFFFF" },
          background: "#0D0D0D",
          foreground: "#FFFFFF",
        },
      },
    },
  })],
};
export default config;
```

---

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-syne",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kavinkumar S — Actor | Assistant Director | Filmmaker",
  description: "Portfolio of Kavinkumar S — actor, assistant director, and filmmaker from Tamil Nadu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
      
        {children}
      
    
  );
}
```

---

### `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  * { box-sizing: border-box; }
  ::selection { background: #F04500; color: #fff; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #0D0D0D; }
  ::-webkit-scrollbar-thumb { background: #F04500; border-radius: 2px; }
}

@layer components {
  /* Orange label used before every section heading */
  .section-label {
    @apply text-accent text-[0.7rem] font-display font-semibold uppercase tracking-[0.22em];
  }

  /* Large section heading */
  .section-heading {
    @apply font-display font-extrabold text-white leading-[0.95] tracking-tight;
    font-size: clamp(2rem, 5vw, 4rem);
  }

  /* Extra large display heading (hero, about, contact) */
  .display-heading {
    @apply font-display font-extrabold text-white;
    font-size: clamp(4rem, 11vw, 9.5rem);
    line-height: 0.88;
    letter-spacing: -0.03em;
  }

  /* Body / description text */
  .body-text {
    @apply font-body text-muted leading-relaxed;
    font-size: clamp(0.85rem, 1.4vw, 0.975rem);
  }

  /*
    PILL TOGGLE BUTTON — the exact distinctive button from the screenshot.
    Dark pill, white text, orange circle with arrow on right.
  */
  .pill-btn {
    @apply inline-flex items-center gap-2.5 bg-surface2 text-white font-body font-medium
           px-4 py-2 rounded-full border border-border
           hover:border-accent/60 transition-all duration-300 text-sm cursor-pointer;
  }
  .pill-btn .dot {
    @apply w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0
           transition-colors duration-300;
  }
  .pill-btn:hover .dot { @apply bg-accent-h; }

  /* Card dark surface */
  .card-dark {
    @apply bg-surface border border-border rounded-2xl overflow-hidden
           hover:border-accent/30 transition-all duration-300;
  }

  /* Thin horizontal divider */
  .rule { @apply h-px w-full bg-border; }

  /* Max-width content wrapper */
  .wrap { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-10; }
}
```

---

## 2. FILE STRUCTURE

```
kavinkumar-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── nav/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── 01_HeroSection.tsx
│   │   ├── 02_BrandsBar.tsx
│   │   ├── 03_BehindTheWork.tsx
│   │   ├── 04_ProjectsHero.tsx
│   │   ├── 05_BringingStories.tsx
│   │   ├── 06_CuriousSection.tsx
│   │   ├── 07_ProcessSteps.tsx
│   │   ├── 08_AboutHero.tsx
│   │   ├── 09_AboutDetail.tsx
│   │   ├── 10_ServicesSection.tsx
│   │   ├── 11_AboutMe.tsx
│   │   ├── 12_PackagesSection.tsx
│   │   ├── 13_SkillsSection.tsx
│   │   ├── 14_ContactHero.tsx
│   │   ├── 15_ContactForm.tsx
│   │   ├── 16_LatestWork.tsx
│   │   ├── 17_ProjectCards.tsx
│   │   └── 18_Footer.tsx
│   └── ui/
│       ├── PillButton.tsx
│       ├── SectionLabel.tsx
│       └── FadeIn.tsx
├── public/
│   └── images/
│       ├── hero-portrait.jpg          ← warm-lit cinematic portrait (hero right side)
│       ├── about-portrait.jpg         ← purple About section portrait
│       ├── contact-portrait.jpg       ← orange Contact section portrait
│       ├── aboutme-photo.jpg          ← "About Me" column tall portrait
│       ├── projects-hero.jpg          ← full-bleed dramatic projects image
│       ├── skills-image.jpg           ← atmospheric image (skills/awards right col)
│       ├── acting-white-shirt.jpg     ← B&W acting: white shirt natural
│       ├── acting-black-tshirt.jpg    ← B&W acting: black T intense
│       ├── acting-side-profile.jpg    ← B&W acting: side profile cinematic
│       ├── work-grid-1.jpg            ← curious section image grid
│       ├── work-grid-2.jpg
│       ├── work-grid-3.jpg
│       ├── work-grid-4.jpg
│       ├── card-acting-natural.jpg    ← project card: natural look
│       ├── card-acting-intense.jpg    ← project card: intense look
│       ├── card-rugged.jpg            ← project card: rugged raw
│       └── card-emotional.jpg        ← project card: emotional closeup
```

---

## 3. SHARED UI COMPONENTS

### `components/ui/PillButton.tsx`
This is the **exact toggle pill button** from the screenshot. Dark background pill, white text left, orange filled circle with arrow icon right. Used for every CTA on the site.

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PillBtnProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PillButton({ label, href = "#", onClick, size = "md", className = "" }: PillBtnProps) {
  const sizes = {
    sm: { wrap: "px-3 py-1.5 gap-2 text-xs", dot: "w-5 h-5", icon: 10 },
    md: { wrap: "px-4 py-2 gap-2.5 text-sm", dot: "w-7 h-7", icon: 12 },
    lg: { wrap: "px-5 py-2.5 gap-3 text-base", dot: "w-8 h-8", icon: 14 },
  };
  const s = sizes[size];

  const inner = (
    <span className={`inline-flex items-center bg-surface2 text-white font-body font-medium
                      rounded-full border border-border hover:border-accent/60
                      transition-all duration-300 cursor-pointer group ${s.wrap} ${className}`}>
      {label}
      
        
      
    
  );

  if (onClick) return {inner};
  return {inner};
}
```

### `components/ui/SectionLabel.tsx`

```tsx
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return {children};
}
```

### `components/ui/FadeIn.tsx`
Scroll-triggered fade-up animation wrapper using Framer Motion.

```tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const init = {
    up:    { opacity: 0, y: 28 },
    left:  { opacity: 0, x: -28 },
    right: { opacity: 0, x: 28 },
    none:  { opacity: 0 },
  };
  const done = { opacity: 1, x: 0, y: 0 };

  return (
    
      {children}
    
  );
}
```

---

## 4. NAVBAR — `components/nav/Navbar.tsx`

Match the screenshot navbar exactly:
- Left: Logo `"Kavinkumar"` bold (small size, same style as Folioblox)
- Center: nav links — Home, About, Acting, Projects, Gallery, Contact
- Right: `PillButton` — `"Get in touch"` size sm

Transparent by default → frosted glass `bg-bg/88 backdrop-blur-2xl border-b border-border` on scroll.

Mobile: hamburger → full-overlay menu with large serif links.

```tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import PillButton from "@/components/ui/PillButton";

const links = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Acting",  href: "#acting" },
  { label: "Projects",href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? "bg-bg/88 backdrop-blur-2xl border-b border-border" : "bg-transparent"}`}>
      

        {/* Logo */}
        
          Kavinkumar
        

        {/* Desktop Links */}
        
          {links.map(l => (
            
              {l.label}
            
          ))}
        

        {/* Right CTA */}
        
          
          <button onClick={() => setOpen(!open)}
            className="md:hidden text-muted hover:text-white transition-colors">
            {open ?  : }
          
        
      

      {/* Mobile full-screen overlay */}
      
        {open && (
          
            {links.map((l, i) => (
              
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="block font-display font-extrabold text-4xl text-white/80 hover:text-accent
                             py-4 border-b border-border/50 transition-colors">
                  {l.label}
                
              
            ))}
            
              <PillButton label="Get in touch" href="#contact" onClick={() => setOpen(false)} />
            
          
        )}
      
    
  );
}
```

---

## 5. ALL SECTIONS — Exact UI + Kavinkumar Content

---

### SECTION 01 — Hero  `components/sections/01_HeroSection.tsx`
**id**: `#home`

**Exact layout from screenshot**: Full viewport height. Background `bg-bg` + warm orange radial glow (`bg-hero-glow`) centered on right half. Portrait image absolutely positioned right side with `bg-hero-overlay` gradient hiding the join. All text content on left.

```
┌──────────────────────────────────┬──────────────────────────┐
│                                  │                          │
│  ACTOR · AD · FILMMAKER          │  [hero-portrait.jpg]     │
│                                  │  object-cover top        │
│  Hey, I'm an                     │  warm orange rim-light   │
│  Actor &                         │  gradient fade to left   │
│  Filmmaker                       │                          │
│                                  │  "Stories first.         │
│  [tagline italic top-right]      │   Cinema forever."       │
│                                  │                          │
│  ─────────────────────────────── │                          │
│  01 Acting  02 AD  03 Films  04  │                          │
└──────────────────────────────────┴──────────────────────────┘
```

**Implementation:**

```tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";

const stats = [
  { num: "01", label: "Acting" },
  { num: "02", label: "Asst. Direction" },
  { num: "03", label: "Short Films" },
  { num: "04", label: "Filmmaking" },
];

export default function HeroSection() {
  return (
    

      {/* Warm orange radial glow background */}
      

      {/* Portrait — right side, full height */}
      
        
        {/* Gradient overlay fading portrait into bg on the left */}
        
        {/* Bottom fade */}
        
        {/* Warm right-edge glow */}
        
      

      {/* Left content */}
      
        

          {/* Role label */}
          
            Actor · Assistant Director · Filmmaker
          

          {/* Pre-heading */}
          
            Hey, I'm an
          

          {/* Main hero heading */}
          
            Actor &Filmmaker
          

          {/* Sub description top-right of heading — match screenshot style */}
          
            "An aspiring actor and assistant director focused on emotional storytelling,
            performance-driven cinema, and disciplined film production."
          

          {/* Buttons */}
          
            
            
            
          
        

        {/* Stats row — bottom of hero */}
        
          {stats.map((s) => (
            
              {s.num}
              
              {s.label}
            
          ))}
        
      

    
  );
}
```

---

### SECTION 02 — Brands Bar  `components/sections/02_BrandsBar.tsx`
**Exact match**: Single-row ticker bar from screenshot — thin, muted, logos with icons.

```tsx
import { Circle, X, Square, SlidersHorizontal } from "lucide-react";

const productions = [
  { icon: Circle,             name: "Film Tamil" },
  { icon: X,                  name: "Indie Works" },
  { icon: Square,             name: "Short Form" },
  { icon: SlidersHorizontal,  name: "Kollywood Ready" },
];

export default function BrandsBar() {
  return (
    
      
        
          Productions I've Been Part Of
        
        
          {productions.map(({ icon: Icon, name }) => (
            
              
              {name}
            
          ))}
        
      
    
  );
}
```

---

### SECTION 03 — Behind The Work  `components/sections/03_BehindTheWork.tsx`
**Exact match**: Two-column layout — left: label + heading. Right: description + CTA. Below: 3 B&W photos in row (matching the product images in the screenshot but with Kavinkumar's acting shots).

```tsx
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const photos = [
  { src: "/images/acting-white-shirt.jpg",  caption: "Natural" },
  { src: "/images/acting-black-tshirt.jpg", caption: "Intense" },
  { src: "/images/acting-side-profile.jpg", caption: "Cinematic" },
];

export default function BehindTheWork() {
  return (
    
      
        {/* Two-column header */}
        
          
            Behind the Work
            
              Performances ThatMake You Feel Something
            
          
          
            
              "I'm an actor and assistant director focused on building clean, emotionally honest
              performances that solve real storytelling problems."
            
            
          
        

        {/* 3 B&W acting photos */}
        
          {photos.map((p, i) => (
            
              
                
                
                
                  {p.caption}
                
              
            
          ))}
        
      
    
  );
}
```

---

### SECTION 04 — Projects Hero  `components/sections/04_ProjectsHero.tsx`
**id**: `#projects`
**Exact match**: Full-bleed `min-h-[80vh]` image with dark overlay. Large "Projects" display heading bottom-left. "Selected Work" label. Right side short subtext. Matches screenshot exactly.

```tsx
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export default function ProjectsHero() {
  return (
    
      {/* Full bleed background image */}
      
      {/* Dark gradient overlay */}
      
      

      {/* Content */}
      
        
          Selected Work
          Projects
        
        
          
            Real stories,real emotions.
          
          
            A curated collection of acting work, assistant direction projects,
            and short film productions built for impact.
          
        
      
    
  );
}
```

---

### SECTION 05 — Bringing Stories  `components/sections/05_BringingStories.tsx`
**Exact match**: Two-column — left: label + bold heading. Right: body + CTA pill button. Matching "Bringing Brands to Life" layout from screenshot.

```tsx
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function BringingStories() {
  return (
    
      
        
          Selected Work
          
            Bringing Charactersto Life ThroughPerformance
          
        
        
          
            A curated collection of acting appearances, assistant direction work,
            and creative projects systems built for emotional impact and cinematic identity.
          
          
        
      
    
  );
}
```

---

### SECTION 06 — Curious / Work Grid  `components/sections/06_CuriousSection.tsx`
**Exact match**: Centered label + heading. Below: 4-image grid of BTS/work images. Matching "Curious What Else I've Created?" from screenshot.

```tsx
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const gridImages = [
  "/images/work-grid-1.jpg",
  "/images/work-grid-2.jpg",
  "/images/work-grid-3.jpg",
  "/images/work-grid-4.jpg",
];

export default function CuriousSection() {
  return (
    
      
        {/* Centered header */}
        
          Behind the Work
          Curious What Else I've Done?
          
            Explore more about how I approach roles, set work, screenplay planning,
            and my personal film projects and collaborations.
          
          
            
          
        

        {/* 4 image grid */}
        
          {gridImages.map((src, i) => (
            
              <div className={`relative rounded-2xl overflow-hidden group
                ${i === 1 ? "aspect-[3/4]" : "aspect-square"}`}>
                
                
              
            
          ))}
        
      
    
  );
}
```

---

### SECTION 07 — Process Steps  `components/sections/07_ProcessSteps.tsx`
**Exact match**: 4 equal columns with numbered steps and dividers — matching the "01 Strategy & Planning" layout from the screenshot.

```tsx
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  { num: "01", title: "Script Breakdown",  desc: "Analyzing screenplay structure, character arcs, and scene requirements for thorough preparation." },
  { num: "02", title: "Rehearsal & Prep",  desc: "Character research, dialogue delivery practice, and physical preparation for performance." },
  { num: "03", title: "On-Set Execution",  desc: "Disciplined set presence, continuity tracking, team coordination, and camera awareness." },
  { num: "04", title: "Post & Showreel",   desc: "BTS documentation, showreel curation, and project wrap with full production notes." },
];

export default function ProcessSteps() {
  return (
    
      
        {steps.map((s, i) => (
          
            
              {s.num}
              
              {s.title}
              {s.desc}
            
          
        ))}
      
    
  );
}
```

---

### SECTION 08 — About Hero  `components/sections/08_AboutHero.tsx`
**id**: `#about`
**Exact match**: Full-width section with **purple gradient background** (the only purple section — exact match to screenshot). Large "About" display heading. Portrait right. "Brand Designer" → "Actor & Filmmaker" label. "The Person Behind the Work" subtext top-right.

```tsx
import Image from "next/image";
import Navbar from "@/components/nav/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutHero() {
  return (
    
      {/* Purple gradient background */}
      

      
        {/* Left */}
        
          
            Actor & Filmmaker
          
          About
          
            Shaping meaningful stories through performance, direction, creativity, and collaboration.
          
        

        {/* Right — portrait */}
        
          
            
            
          
          {/* "The Person Behind the Frame" — floating top-right text matching screenshot */}
          
            The Person Behindthe Frame
          
        
      
    
  );
}
```

---

### SECTION 09 — About Detail  `components/sections/09_AboutDetail.tsx`
**Exact match**: Two-column — left: "Who I Am" label + bold heading. Right: full bio paragraph + CTA. Matches "Design with Purpose and Personality" section in screenshot.

```tsx
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutDetail() {
  return (
    
      
        
          Who I Am
          Perform with Purposeand Personality
        
        
          
            I'm Kavinkumar, an aspiring filmmaker and actor passionate about emotionally driven storytelling.
            I actively work on short film concepts, screenplay development, production planning, assistant
            direction, and performance-based cinema. My goal is to grow as both an actor and assistant
            director while building films rooted in strong emotions and visual storytelling.
          
          
            Whether you're looking for a committed actor, a reliable assistant director, or a creative
            collaborator — I bring discipline, emotional intelligence, and a deep passion for cinema to
            every project.
          
          
        
      
    
  );
}
```

---

### SECTION 10 — Services  `components/sections/10_ServicesSection.tsx`
**Exact match**: Two-column header row. Then 3 equal service cards with orange bottom-accent line. Matching "What I Can Help You With" from screenshot.

```tsx
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    label: "Your role, visually defined.",
    title: "Acting & Performance",
    desc:  "Natural performance, emotional dialogue delivery, character-driven scenes, Tamil & English language roles, improvisation, and camera awareness.",
  },
  {
    label: "Clarity behind the visuals.",
    title: "Assistant Direction",
    desc:  "Script breakdown, shot division, scene continuity, call sheet support, location scouting, rehearsal planning, and production coordination.",
  },
  {
    label: "Ongoing creative guidance.",
    title: "Creative Consulting",
    desc:  "Screenplay concept development, content reel planning, brand film structuring, storyboarding, and visual storytelling strategy.",
  },
];

export default function ServicesSection() {
  return (
    
      
        {/* Header row */}
        
          
            Services
            What I Bringto the Set
          
          
            
              From performance to production planning, I offer tailored contributions to help
              your project grow with clarity and cinematic impact.
            
          
        

        {/* 3 service cards */}
        
          {services.map((s, i) => (
            
              
                
                {s.label}
                {s.title}
                {s.desc}
              
            
          ))}
        
      
    
  );
}
```

---

### SECTION 11 — About Me  `components/sections/11_AboutMe.tsx`
**Exact match**: Two-column. Left: large tall portrait. Right: label, multi-line heading ("Designer.\nStrategist.\nCreative partner." style), bio, CTA. Matching right-column "About me" from screenshot.

```tsx
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutMe() {
  return (
    
      
        {/* Left — tall portrait */}
        
          
            
            
          
        

        {/* Right — text */}
        
          About me
          
            Actor.Storyteller.Filmmaker.
          
          
            Blending discipline and creativity to build cinematic work with purpose.
          
          
            Based in Tamil Nadu / Chennai-ready. Tamil, Tanglish, and English communication.
            I work at the intersection of performance and production, bringing both an actor's instinct
            and an assistant director's discipline to every project I join.
          

          {/* 4 mini process points */}
          
            {["Script Breakdown","Character Research","On-Set Discipline","BTS Documentation"].map(item => (
              
                
                {item}
              
            ))}
          

          
            
          
        
      
    
  );
}
```

---

### SECTION 12 — Packages  `components/sections/12_PackagesSection.tsx`
**id**: `#acting`
**Exact match**: Replicates the 3-tier pricing card layout from the screenshot. Center card (Pro plan) has orange background and is slightly elevated. Repurposed for Kavinkumar's collaboration/engagement packages.

```tsx
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

const packages = [
  {
    tier:  "Short Film",
    price: "Actor",
    sub:   "Acting Collaboration",
    features: ["Character performance", "Emotional scene work", "Tamil & English dialogue", "Portfolio documentation"],
    highlight: false,
  },
  {
    tier:  "Brand Content",
    price: "Actor + AD",
    sub:   "Dual Role Collaboration",
    features: ["Acting performance", "Script breakdown", "Shot division", "Continuity management", "Production coordination", "BTS documentation", "Storyboard support"],
    highlight: true,
    badge: "Full Stack",
  },
  {
    tier:  "Feature / Series",
    price: "Full AD",
    sub:   "Assistant Direction",
    features: ["Full pre-production support", "Call sheet management", "Location scouting", "Rehearsal direction"],
    highlight: false,
  },
];

export default function PackagesSection() {
  return (
    
      
        
          Collaboration
          Simple Packagesfor Every Stage
          
            Kavinkumar brings value at every stage of production — from short films to full features.
          
        

        
          {packages.map((p, i) => (
            
              

                {p.badge && (
                  
                    {p.badge}
                  
                )}

                <p className={`font-body text-xs uppercase tracking-widest ${p.highlight ? "text-white/80" : "text-muted"}`}>
                  {p.tier}
                
                
                  
                    {p.price}
                  
                  <p className={`font-body text-sm mt-1 ${p.highlight ? "text-white/70" : "text-muted"}`}>
                    {p.sub}
                  
                

                

                
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 font-body text-xs ${p.highlight ? "text-white/90" : "text-muted"}`}>
                      
                      {f}
                    
                  ))}
                

                
                  <PillButton label="Get in touch" href="#contact"
                    className={p.highlight ? "bg-white/10 border-white/30 text-white hover:border-white" : ""} />
                
              
            
          ))}
        
      
    
  );
}
```

---

### SECTION 13 — Skills & Recognition  `components/sections/13_SkillsSection.tsx`
**Exact match**: Two-column. Left: label + heading + list rows with dividers (matching "Awards & Recognition" from screenshot). Right: atmospheric tall image.

```tsx
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

const skills = [
  { name: "Sony a6100 Handling",         category: "Camera",    year: "Tech" },
  { name: "DaVinci Resolve Editing",     category: "Post",      year: "Tech" },
  { name: "Script Breakdown & Shot Div.",category: "Direction", year: "AD" },
  { name: "Emotional Performance",       category: "Acting",    year: "Core" },
  { name: "Storyboarding",               category: "Pre-Prod",  year: "AD" },
  { name: "Framing & Composition",       category: "Camera",    year: "Tech" },
];

export default function SkillsSection() {
  return (
    
      
        {/* Left */}
        
          Skills & Recognition
          Proud Moments,Shared Success
          
            A few highlights from practical filmmaking preparation, on-set experience,
            and technical skill development.
          
          
            {skills.map((s, i) => (
              
                
                  
                    {s.category}
                    
                      {s.name}
                    
                  
                  
                    {s.year}
                  
                
              
            ))}
          
        

        {/* Right — atmospheric image */}
        
          
            
            
            
          
        
      
    
  );
}
```

---

### SECTION 14 — Contact Hero  `components/sections/14_ContactHero.tsx`
**id**: `#contact`
**Exact match**: Full-width section with **orange gradient background** (same as hero orange gradient). Large "Contact" display heading. Portrait right. "Get in touch" label. Subtext. Must match screenshot Contact section exactly.

```tsx
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactHero() {
  return (
    
      {/* Orange gradient background — exact match to screenshot */}
      

      {/* Portrait right */}
      
        
        
        
      

      {/* Content */}
      
        
          
            
              Get in touch
            
            Contact
            
              Let's build something great together — start the conversation today.
            
          
        
      
    
  );
}
```

---

### SECTION 15 — Contact Form  `components/sections/15_ContactForm.tsx`
**Exact match**: Two-column. Left: label + big heading + description. Right: form fields (Name, Email, Message + Submit button). Matching "Let's Create Something Meaningful" from screenshot. Uses HeroUI `Input` and `Textarea`.

```tsx
"use client";
import { Input, Textarea } from "@heroui/react";
import SectionLabel from "@/components/ui/SectionLabel";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
  return (
    
      
        {/* Left */}
        
          Contact me
          Let's CreateSomethingMeaningful
          
            Whether you're starting from scratch or need a dedicated actor / AD for your project,
            I'm here to help bring your vision to life.
          
          {/* Contact info */}
          
            
              kavinkumars773@gmail.com
            
            
              @kavinkumars773
            
            Tamil Nadu / Chennai-ready
          
        

        {/* Right — form */}
        
          
            
              <Input
                label="First Name" placeholder="Arjun" variant="bordered" size="md"
                classNames={{ input: "bg-transparent text-text font-body", inputWrapper: "bg-surface border-border hover:border-accent/50 focus-within:border-accent" }} />
              <Input
                label="Last Name" placeholder="Kumar" variant="bordered" size="md"
                classNames={{ input: "bg-transparent text-text font-body", inputWrapper: "bg-surface border-border hover:border-accent/50 focus-within:border-accent" }} />
            
            <Input
              label="Email" type="email" placeholder="your@email.com" variant="bordered"
              classNames={{ input: "bg-transparent text-text font-body", inputWrapper: "bg-surface border-border hover:border-accent/50 focus-within:border-accent" }} />
            <Textarea
              label="Message" placeholder="Tell me about your project..." minRows={5} variant="bordered"
              classNames={{ input: "bg-transparent text-text font-body", inputWrapper: "bg-surface border-border hover:border-accent/50 focus-within:border-accent" }} />
            
          
        
      
    
  );
}
```

---

### SECTION 16 — Latest Work  `components/sections/16_LatestWork.tsx`
**Exact match**: Two-column. Left: label + heading + description. Right: stacked project list rows with dividers, category label, project name, year. Matching "Latest Projects & Collaborations" from screenshot.

```tsx
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { category: "Acting & Direction",  name: "Short Film Concept Development",year: "2025", desc: "Story ideation, screenplay planning, scene breakdown, performance preparation." },
  { category: "Content Creation",    name: "Brand Reel Content Planning",   year: "2025", desc: "Hook writing, reel structure, visual planning, and production flow." },
  { category: "Independent Film",    name: "Independent Film Preparation",  year: "2024", desc: "Character preparation, shot division, location planning, team coordination." },
  { category: "Art Direction",       name: "Emotional Short Film Concept",  year: "2024", desc: "Script development and performance planning for an emotionally driven narrative." },
];

export default function LatestWork() {
  return (
    
      
        {/* Left */}
        
          Recent Work
          Latest Projects& Collaborations
          
            A look at what I've been working on lately — acting prep, production planning,
            and creative story partnerships.
          
        

        {/* Right — project list */}
        
          
            {projects.map((p, i) => (
              
                
                  {p.category}
                  
                    {p.name}
                  
                  {p.desc}
                
                
                  {p.year}
                  
                
              
            ))}
          
          
            * More projects and showreel links will be added here as work progresses.
          
        
      
    
  );
}
```

---

### SECTION 17 — Project Cards  `components/sections/17_ProjectCards.tsx`
**Exact match**: 2×2 image card grid with title, description, and "View" PillButton on each card. Dark overlay on hover. Caption bottom-left. Exactly matching "Orange Blox / Nova Scene / Arched Pink / Liquid" card layout from screenshot.

```tsx
import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import FadeIn from "@/components/ui/FadeIn";

const cards = [
  { src: "/images/card-acting-natural.jpg",  title: "Natural Look",     desc: "Warm natural lighting setup. Approachable South Indian look for commercial and romantic roles." },
  { src: "/images/card-acting-intense.jpg",  title: "Intense Look",     desc: "Bold, raw intensity. Strong visual energy for dramatic and action-heavy scenes." },
  { src: "/images/card-rugged.jpg",          title: "Rugged Raw Look",  desc: "Grounded, textured look. Built for villain shades, gritty drama, and strong character roles." },
  { src: "/images/card-emotional.jpg",       title: "Emotional Close-Up",desc: "Deeply expressive close-up. The face that tells the full story without a single word." },
];

export default function ProjectCards() {
  return (
    
      
        
          {cards.map((c, i) => (
            
              
                {/* Image */}
                
                {/* Gradient overlay — always present at bottom */}
                
                {/* Content */}
                
                  
                    {c.title}
                  
                  {c.desc}
                  
                
              
            
          ))}
        
      
    
  );
}
```

---

### SECTION 18 — Footer  `components/sections/18_Footer.tsx`
**Exact match**: Full-width footer bar with logo left, nav links center, copyright right. Clean, minimal.

```tsx
import Link from "next/link";

const footerLinks = [
  { label: "Acting",    href: "#acting" },
  { label: "Direction", href: "#ad" },
  { label: "Projects",  href: "#projects" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Contact",   href: "#contact" },
];

export default function FooterSection() {
  return (
    
      
        
          
            Kavinkumar S
          
          
            Actor · Assistant Director · Filmmaker
          
        
        
          {footerLinks.map(l => (
            
              {l.label}
            
          ))}
        
        
          © 2025 Kavinkumar S. All rights reserved.
        
      
    
  );
}
```

---

## 6. MAIN PAGE — `app/page.tsx`

```tsx
import Navbar                from "@/components/nav/Navbar";
import HeroSection           from "@/components/sections/01_HeroSection";
import BrandsBar             from "@/components/sections/02_BrandsBar";
import BehindTheWork         from "@/components/sections/03_BehindTheWork";
import ProjectsHero          from "@/components/sections/04_ProjectsHero";
import BringingStories       from "@/components/sections/05_BringingStories";
import CuriousSection        from "@/components/sections/06_CuriousSection";
import ProcessSteps          from "@/components/sections/07_ProcessSteps";
import AboutHero             from "@/components/sections/08_AboutHero";
import AboutDetail           from "@/components/sections/09_AboutDetail";
import ServicesSection       from "@/components/sections/10_ServicesSection";
import AboutMe               from "@/components/sections/11_AboutMe";
import PackagesSection       from "@/components/sections/12_PackagesSection";
import SkillsSection         from "@/components/sections/13_SkillsSection";
import ContactHero           from "@/components/sections/14_ContactHero";
import ContactForm           from "@/components/sections/15_ContactForm";
import LatestWork            from "@/components/sections/16_LatestWork";
import ProjectCards          from "@/components/sections/17_ProjectCards";
import FooterSection         from "@/components/sections/18_Footer";

export default function Home() {
  return (
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
  );
}
```

---

## 7. NEXT.JS CONFIG — `next.config.ts`

```ts
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
};
export default nextConfig;
```

**Placeholder images** (use until real photos are added):
```
/images/hero-portrait.jpg      → https://placehold.co/900x1100/1F1F1F/F04500?text=KS+HERO
/images/about-portrait.jpg     → https://placehold.co/700x900/3B1270/C9A96E?text=KS+ABOUT
/images/contact-portrait.jpg   → https://placehold.co/700x900/1A0800/FF6B35?text=KS+CONTACT
/images/aboutme-photo.jpg      → https://placehold.co/700x950/161616/F04500?text=KS+PHOTO
/images/projects-hero.jpg      → https://placehold.co/1600x900/0D0D0D/F04500?text=PROJECTS
/images/skills-image.jpg       → https://placehold.co/700x950/161616/888888?text=KS+SKILLS
/images/acting-white-shirt.jpg → https://placehold.co/600x800/161616/FFFFFF?text=WHITE+SHIRT
/images/acting-black-tshirt.jpg→ https://placehold.co/600x800/111111/888888?text=BLACK+TSHIRT
/images/acting-side-profile.jpg→ https://placehold.co/600x800/111111/888888?text=SIDE+PROFILE
/images/work-grid-*.jpg        → https://placehold.co/600x600/1F1F1F/F04500?text=WORK+GRID
/images/card-*.jpg             → https://placehold.co/700x875/1F1F1F/F04500?text=LOOK
```

---

## 8. DESIGN RULES — ABSOLUTE, DO NOT CHANGE

| Rule | Value |
|------|-------|
| Background | `#0D0D0D` — never pure `#000` |
| Accent / Orange | `#F04500` — same orange from screenshot |
| CTA Button | Always `PillButton` — dark pill + orange circle arrow dot |
| Section labels | Orange, `tracking-[0.22em]`, ALL CAPS, `text-[0.7rem]` |
| Heading font | `Syne` — extrabold 800 for hero, bold 700 for sections |
| Body font | `DM Sans` — 400/500 weight |
| About section bg | Purple gradient `#3B1270 → #5B1DA8` — ONLY this section |
| Contact hero bg | Orange gradient `#F04500 → #1A0800` — ONLY this section |
| Cards | `#161616` surface, `1px #2A2A2A` border, hover `border-accent/30` |
| Packages card center | `bg-accent` orange background, elevated `scale-[1.03]` |
| Dividers | `border-border (#2A2A2A)` — thin, subtle |
| Max width | `max-w-7xl` via `.wrap` class |
| B&W photos | `grayscale` by default, `grayscale-0` on hover |
| No glow / neons | No bright neons or gradients outside the designated hero/contact/about sections |

---

## 9. RESPONSIVE RULES

| Screen | Behavior |
|--------|----------|
| `< 640px` | Single column all. Hero: text only, portrait hidden. Process steps: 2×2. Project cards: 1 col. Packages: stack vertically. |
| `640–768px` | 2-col for product photos row, packages, some grids. |
| `768–1024px` | 2-col main layouts, 3-col services + packages. |
| `> 1024px` | Full layouts as described. Portrait visible in hero, about, contact. |

---

## 10. EXECUTION ORDER FOR CLAUDE CODE

1. `tailwind.config.ts` + `globals.css` + `layout.tsx`
2. Shared UI: `PillButton`, `SectionLabel`, `FadeIn`
3. `Navbar` — verify scroll state and mobile overlay
4. `01_HeroSection` — test portrait + gradient overlay
5. Sections `02` → `18` in order
6. `page.tsx` — compose all imports
7. Add `FadeIn` wrappers with stagger delays throughout
8. Test responsive: 375px, 768px, 1440px
9. Replace placeholder images with real photos from `/public/images/`
10. `npm run build` — fix TypeScript before done

> All text content is final (Kavinkumar S, kavinkumars773@gmail.com, @kavinkumars773, Tamil Nadu). Only images need to be replaced with real photos.
