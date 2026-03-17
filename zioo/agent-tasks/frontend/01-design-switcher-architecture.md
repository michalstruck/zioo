# Epic: Design Switcher Architecture

## Background Context
We need to implement a mechanism to conditionally toggle between different UI designs (which will become an A/B testing mechanism in the future). The current design must remain fully intact.

## Features & Tasks

### Feature 1: Design Context & State Management
- [ ] Implement a state management solution (e.g., Next.js cookies or context) to store the currently active design theme (e.g., `default` vs `retro-surfer`).
- [ ] Create a `useDesign` hook or a `DesignProvider` that can be consumed by components to determine which design to render.
- [ ] Implement a development toggle (e.g., a URL parameter like `?design=retro-surfer` or a floating dev-only UI switch) to allow easy switching between designs during local development.

### Feature 2: Component Tree Splitting Strategy
- [ ] Refactor the app's parent layout or page entry points to conditionally render different component trees based on the active design state (e.g. `{activeDesign === 'retro' ? <RetroLayout/> : <DefaultLayout/>}`).
- [ ] For shared components, determine if they need a complete split (e.g., `<ButtonRetro />` vs `<Button />`) or just a CSS class addition, and document the standard approach.
- [ ] *Agent Skill Note*: Use the `vercel-react-best-practices` skill to ensure the conditional rendering strategy is performant and works seamlessly with Next.js Server Components and Server-Side Rendering.
