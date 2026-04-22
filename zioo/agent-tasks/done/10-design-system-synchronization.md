# Epic: Design System Synchronization

## Feature: Apothecary Palette Alignment

The current `globals.css` mismatch the source of truth in `MASTER.md`. This causes "mixed colors" and inconsistent UI across the store.

## Tasks

- [x] **Audit Component Usage**
  - Search for any hardcoded hex values in the project and replace them with CSS variables if possible.
  - Mention `ui-ux-pro-max` for color system validation.
