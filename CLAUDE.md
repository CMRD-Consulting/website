# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for CMRD Consulting (boutique software engineering). Single-page Nuxt 3 app deployed as static HTML.

## Commands

Uses Yarn (pinned via `packageManager` in `package.json`); Node 22 (`.nvmrc`).

- `yarn dev` — dev server at `http://localhost:3000`
- `yarn generate` — **production build for deploy**. Outputs static HTML to `.output/public/`, which is symlinked from `./dist`.
- `yarn build` — SSR build (rarely used; this site ships as static)
- `yarn preview` — preview production build locally
- `yarn install` — runs `nuxt prepare` postinstall to regenerate `.nuxt/` types

There are no tests, linters, or formatters configured.

## Architecture

**Single-route site.** The only page is `pages/index.vue`, which composes the marketing sections in order: Hero, Problem, Philosophy, Process, Projects, Team, TrustSignals, Contact. `app.vue` is intentionally minimal; chrome (header/footer) lives in `layouts/default.vue`.

**Component auto-import is flat.** `nuxt.config.ts` sets `components: [{ path: '~/components', pathPrefix: false }]`. This means `components/sections/HeroSection.vue` is referenced as `<HeroSection>`, **not** `<SectionsHeroSection>`. When adding a component, its filename is its global name across the whole tree.

**Section composition pattern.** Every marketing section follows the same shape — keep new sections consistent:

```vue
<SectionContainer id="anchor-id">
  <SectionHeading title="..." subtitle="..." />
  <!-- content -->
</SectionContainer>
```

`SectionContainer` handles the vertical rhythm (`py-24 md:py-28 lg:py-32`) and max-width (`max-w-7xl`, or `max-w-4xl` with `narrow`). Don't reinvent this with raw `<section>` tags.

**Design system is the `carbon-*` palette.** All colors come from the custom palette in `tailwind.config.js` (`carbon-bg`, `carbon-surface`, `carbon-text-primary`/`secondary`/`tertiary`/`link`, `carbon-border`, etc.). Don't introduce arbitrary hex values or stock Tailwind grays — extend the palette in `tailwind.config.js` instead.

**Typography is two-font.** `font-sans` (IBM Plex Sans) is the default body face; `font-mono` (IBM Plex Mono) is reserved for small UI accents — button labels, form labels, footer text, eyebrow copy. Fonts load from Google Fonts via `<link>` tags in `nuxt.config.ts`.

**Fade-in animations.** Custom keyframes `fade-in`, `fade-in-up`, `fade-in-delay`, `fade-in-delay-2` are defined in Tailwind config and used on the Hero. Pair with `opacity-0` initial state so SSR'd HTML doesn't flash visible before the animation starts.

## SEO

`@nuxtjs/seo` and `@nuxtjs/robots` are wired up. Global defaults live in `nuxt.config.ts` under `app.head` and `site`. Per-page metadata uses the `useSeoMeta()` composable inside `<script setup>`.

## Contact form

`components/sections/ContactSection.vue` currently uses a `mailto:` fallback to `info@cmrd.dev`. The handler comment notes this is intended to be swapped for Formspree/Netlify Forms/etc. when ready — don't waste effort hardening the mailto path.

## Deployment

`dist` is a symlink to `.output/public`. After `yarn generate`, static hosts pick up `dist/` automatically.
