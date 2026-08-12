---
title: "How this site works"
date: "2026-08-12"
summary: "A short colophon: the stack, the design decisions, and the one rule all the content follows."
tags: ["meta", "engineering"]
---

This site is a static Next.js app — App Router, TypeScript, Tailwind — exported to plain HTML and served from GitHub Pages. No backend, no analytics, no tracking. The whole thing is a [public repository](https://github.com/sunkalpchandra/sunkalpchandra.github.io).

A few decisions worth writing down:

## Content is data

Every project, publication, and experience entry lives in a typed data file under `src/data/`. Pages are just renderers. When something changes — a paper gets accepted, a project ships — I edit one file and every page that mentions it updates. The "Currently" section on the homepage is a single 30-line file for exactly this reason.

## The one rule

Nothing on this site is aspirational. Publication entries were verified against arXiv, IEEE DOIs, and Semantic Scholar before going in the data file, and each one is labeled as what it actually is — workshop paper, conference paper, or preprint. Projects that are early say so. The repository that's private says it's private. A personal site is a claim about who you are; inflated claims compound badly.

## Motion is CSS

The scroll reveals, the hero manifold, the pipeline diagram pulses — everything animates through CSS transitions or SMIL, driven by at most an `IntersectionObserver`. If your system asks for reduced motion, all of it switches off and the site is just... a document. Which is what it was the whole time.

## Writing lives in Markdown

This note is a `.md` file with three lines of frontmatter. Adding a post means adding a file. That's the entire CMS.
