## Design System: Zioo Retro Surfer

### Pattern

- **Name:** Hero-Centric Design
- **CTA Placement:** Above fold
- **Sections:** Hero > Features > CTA

### Style

- **Name:** Chill Retro Surfer
- **Keywords:** Sun-faded, 70s beach, organic, neo-brutalist, surfer-chill, bold, relaxed
- **Best For:** Zioo's new brand identity, standing out with a modern yet nostalgic feel
- **Performance:** ⚡ Excellent | **Accessibility:** ✓ WCAG AA

### Colors

| Role       | Hex     | Name           |
| ---------- | ------- | -------------- |
| Primary    | #FB923C | Sunset Orange  |
| Secondary  | #2DD4BF | Washed-out Teal|
| Accent     | #FEF08A | Sun Yellow     |
| Background | #FDFCF0 | Sun-faded Sand |
| Foreground | #000000 | Solid Black    |
| Border     | #000000 | Solid Black    |

_Notes: Hard contrasts with soft pastel backgrounds._

### Typography

- **Heading:** Fraunces (Retro touches) & Space Grotesk (Default loud headers)
- **Body:** Space Grotesk
- **Mood:** Bold, nostalgic, legible, striking
- **Best For:** Modern brands wanting a distinct, slightly vintage voice.
- **CSS Import:** Managed via `next/font/google` in Next.js layout.


### Key Effects

Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes

### Avoid (Anti-patterns)

- Inconsistent styling
- Poor contrast ratios

### Pre-Delivery Checklist

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
