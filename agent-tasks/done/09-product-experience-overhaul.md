# Epic: Product Experience Overhaul

The store needs a more immersive way to showcase products. Currently, cards provide data but lack visual "punch".

## Feature: Product Card Image Showcase

- [ ] **Card Layout Update**: Modify `ProductCard` to include a dedicated slot for product images.
- [ ] **Data Model Extension**: Update `lib/products.ts` to support an array of image URLs (`images: string[]`).
- [ ] **Visual Impact**: The image should be prominent—perhaps an organic-shaped frame or a full-width top section.

## Feature: Premium Product Experience (Page + Intercepting Routes)

- [ ] **Architecture**: Implement a dedicated product page at `/store/product/[id]`.
- [ ] **Delightful Navigation**: Use Next.js **Intercepting Routes** (`@modal` or `(..)`) to show the product details as an "editorial modal" when navigating from the store, while allowing a full page on refresh.
- [ ] **Content**:
    - Detailed descriptions.
    - Ingredient deep-dive (expanded "Receptura").
    - Usage instructions.
- [ ] **Image Carousel**: 
    - Implement a horizontal swipe/click carousel for multiple product images.
    - **Fullscreen Mode**: On clicking an image, open a high-end fullscreen carousel (Lightbox) with zoom/pan support.

### Relevant Skills
- `frontend-design`
- `ui-ux-pro-max`
- `shadcn`
- `delight`
- `onboard`
- `humanizer` (for better Polish copy)
