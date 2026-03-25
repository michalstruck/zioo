# Epic: Hero & Interaction Polish

## Feature: Fluid Motion & UX Detail

The hero section needs to feel "Premium" and "Gentle". Current mechanical scale transitions and copy violations need immediate attention. The new hero cards are already adjusted -- leave them as is, unless repositioning is needed. Make sure to use tailwind's built in classes (without shorthands) where possible

## Tasks

- [ ] **Regulatory Copy Fix**
  - Locate line 39 in `app/page.tsx`.
  - Replace "Żaden dym" (BANNED) with a compliant alternative. See COPY_DICTIONARY.md and use `humanizer` for copy.
- [ ] **Enhance Hero Background**
  - Adjust the `/dark-moss-bg.png` background. Make it more creative, maybe add more of similar to other parts of the page. Be bold, but keep to the style.
- [ ] **Interactions Quality Pass**
  - Use `polish` skill to ensure all spacing (padding/margins) in the hero aligns with the "Minimalism" principle.
  - Use `delight` to add a micro-animation to the primary CTA (e.g., subtle icon slide on hover). Refer to the store to see how it's done.
