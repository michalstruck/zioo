# Epic: Formatted Hero Element Refinement

## Feature: Animated Product Cards Sequence

We are abandoning the previous organic SVG illustration direction. Instead, we want to create a highly dynamic, visual hero element using the actual product images located in the `public/` directory (e.g., `clear_mind_blend.png`, `deep_unwind_blend.png`, `social_spark_blend.png`).

The goal is to implement an incremental sequence animation where product images appear as a set of premium "cards" structured in a "cards-held-in-hand" or fanned-out pattern. This should feel tactile, bold, and fit our "Clinical Naturalism" and apothecary minimalism aesthetic.

## Tasks

- [x] **Create AnimatedHeroCards Component**
  - Use `frontend-design` and `ui-ux-pro-max` skills to create a new component (e.g., `AnimatedHeroCards`).
  - Style the images from `public/` as high-end, tactile cards. Apply a premium apothecary feel with subtle shadows, rounded corners, or neat borders.
- [x] **Implement "Cards-in-Hand" Layout and Animation**
  - Position the cards so they overlap and fan out from a common base or pivot, mimicking a hand of cards.
  - Add a staggered entrance animation where the cards appear one by one and spread out into their fanned position seamlessly.
- [x] **Add Interactive Hover Polish**
  - Use the `polish` and `delight` skills to add interactive states.
  - When hovering over a card in the fan, it should slightly elevate, scale up, or rotate forward. Ensure transitions are fluid and performant.
- [x] **Integrate into Hero Section**
  - Remove the geometric/old SVG illustrations from the main Hero section.
  - Drop in the new `AnimatedHeroCards` component.
  - Use `adapt` to ensure the fanning animation and layout gracefully scale down for mobile devices without breaking the viewport width.
