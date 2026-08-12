# sunkalpchandra.github.io

Personal website of [Sunkalp Chandra](https://sunkalpchandra.github.io) — computer science,
neuroscience, and AI. A static Next.js site: research portfolio, project case studies,
publications, experience, CV, and notes.

## Stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript** (strict)
- **Tailwind CSS 4** (CSS-first config; design tokens in `src/app/globals.css`)
- **Markdown notes** via `gray-matter` + `marked` — no CMS
- Zero client-side data fetching, no analytics, no tracking

All animation is CSS transitions / SMIL driven by `IntersectionObserver`; everything honors
`prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run typecheck
```

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (build → upload `out/` →
deploy). No server, no environment variables.

## Architecture

```
src/
  app/                 # routes (App Router, all statically generated)
    work/[slug]/       # project case studies, generated from data
    notes/[slug]/      # markdown notes
    sitemap.ts         # sitemap + robots generated at build
  components/          # nav, footer, reveal primitives, visualizations
    home/              # hero manifold canvas + homepage sections
    research/          # interactive research graph
    work/              # TRIDENT pipeline figure
  data/                # ← ALL content lives here, typed
    site.ts            # identity, links, nav
    currently.ts       # the "Currently" section (edit this often)
    projects.ts        # project case studies
    experience.ts      # experience entries
    publications.ts    # publications (verified links only)
    research.ts        # research themes
    timeline.ts        # homepage trajectory
  lib/                 # fonts, markdown loader
content/notes/         # markdown posts
```

Pages are renderers; **content is data**. Editing a data file updates every page that uses it.

## How to update content

**Add a project:** append an entry to `src/data/projects.ts` (slug, tagline, facts, sections).
The case-study page, work index, homepage, sitemap, and research graph links follow from data.
To feature it on the homepage, set `featured: <order>`.

**Add a publication:** append to `src/data/publications.ts` with a resolvable link (arXiv, DOI).
Label the `kind` honestly: `workshop` / `conference` / `preprint`.

**Add a note:** drop a Markdown file in `content/notes/`:

```markdown
---
title: "My note"
date: "2026-09-01"
summary: "One sentence."
tags: ["research"]
---

Body in Markdown.
```

**Update the "Currently" section:** edit `src/data/currently.ts`.

## Content policy

Nothing on this site is aspirational: publications are verified against arXiv / IEEE / Semantic
Scholar before entering the data file, statuses are labeled as what they are, and early-stage
work says it's early. Keep it that way.
