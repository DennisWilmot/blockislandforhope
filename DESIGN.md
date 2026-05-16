# Design System

## Colors

### Brand Palette
- **Forest**: `#1a6b4a` — Primary brand color. Used for CTAs, active states, eyebrow labels, links.
- **Forest Dark**: `#145639` — Hover/pressed states, CTA banner background.
- **Navy**: `#1f365c` — Secondary accent for medical missions, alternate overlays.
- **Amber**: `#8f5a2a` — Warm accent for feeding programmes, tertiary category.
- **Coral**: `#cb6f59` — Accent for community development, partner paths.
- **Cream**: `#f8f5ef` — Page background. Warm, not white.
- **Cream Dark**: `#f0ebe1` — Subtle differentiation for nested surfaces.
- **Ink**: `#223128` — Primary text color. Dark green-black, not pure black.

### Functional Colors
- Borders: `brand-forest` at 10-15% opacity
- Shadows: Green-tinted (`rgba(26, 107, 74, 0.08-0.12)`)
- Selection: Forest at 15% opacity

## Typography

### Families
- **Display**: Playfair Display (serif) — Headlines, section titles, statement text
- **Body**: DM Sans (sans-serif) — Body copy, labels, UI text

### Scale
- Display/hero: `text-6xl` (60px) down to `text-4xl` (36px) responsive
- Section headings: `text-3xl` to `text-[2.75rem]` responsive
- Card headings: `text-2xl` (24px)
- Body: `text-base` (16px) to `text-lg` (18px)
- Small/meta: `text-sm` (14px)
- Eyebrows: `text-xs` (12px), uppercase, tracked `0.18-0.22em`

### Rules
- Line length capped at 50-65ch on body text
- `tracking-tight` on all display headings
- `leading-relaxed` on body paragraphs

## Spacing

### Scale (Tailwind)
- Tight grouping: `gap-3` to `gap-4` (12-16px)
- Section inner padding: `p-6` to `p-10` (24-40px)
- Section vertical rhythm: `py-16` to `py-20` (64-80px)
- Between major sections: `mt-16` (64px)

## Components

### Button
- Variants: primary (forest bg), ghost (transparent border), white (white bg)
- Shape: `rounded-full`, `px-6 py-2.5`
- States: hover darkens/elevates, focus-visible ring

### Card
- Shape: `rounded-2xl`
- Border: `border-brand-forest/10`
- Shadow: `shadow-soft`
- Hover: `shadow-glow`, subtle border darken

### SectionHeading
- Eyebrow (optional) + display title + description
- Left-aligned by default, center option

### PageHeader
- Full-width dark section with optional background image
- Overlay tint + gradient for text contrast
- Eyebrow + display title + description in white

## Do's
- Use cream (#f8f5ef) as page background, white for card surfaces
- Use forest green as primary action color
- Use Playfair for headlines, DM Sans for everything else
- Cap body text line length
- Use FadeInSection for scroll-triggered entrance

## Don'ts
- No pure black or pure white backgrounds
- No gradient text
- No sparkle/shimmer decorative animations
- No nested cards
- No glassmorphism
- No purple/cyan/neon colors
