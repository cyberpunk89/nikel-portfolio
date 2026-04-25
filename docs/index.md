# Documentation Index — Ninad Ketkale Portfolio

All project documentation in one place.

---

## Design

| File | Description |
|------|-------------|
| [`design-system.json`](design-system.json) | Importable design token file — colors, typography, spacing, components, animations. Use this as context when working with Claude on design tasks. |
| [`design-reference.html`](design-reference.html) | Visual design reference page. Open in a browser to see all color swatches, cards, tags, buttons, animations, and effects. |
| [`dev-rules.md`](dev-rules.md) | **Development rules** — quick reference for colour tokens, typography, card classes, tags, spacing, and how to add a new case study. |

---

## Project Setup

| File | Description |
|------|-------------|
| [`../README.md`](../README.md) | Getting started, dev server commands |
| [`../DEPLOYMENT.md`](../DEPLOYMENT.md) | Deployment guide (Vercel) |

---

## Agent / AI Instructions

| File | Description |
|------|-------------|
| [`../CLAUDE.md`](../CLAUDE.md) | Claude Code instructions — references AGENTS.md |
| [`../AGENTS.md`](../AGENTS.md) | Framework-specific agent rules (Next.js 16 breaking changes) |

---

## Content

| File | Description |
|------|-------------|
| [`../content/homepage-content.md`](../content/homepage-content.md) | Homepage copy and content |
| [`../content/workitems.md`](../content/workitems.md) | Work item descriptions |
| [`../content/projects/`](../content/projects/) | Individual project case studies (markdown) |
| [`../content/rec.json`](../content/rec.json) | LinkedIn recommendations / testimonials |

---

## Key Source Files

| File | Description |
|------|-------------|
| [`../src/app/globals.css`](../src/app/globals.css) | All CSS custom properties, utility classes, animations |
| [`../src/app/layout.tsx`](../src/app/layout.tsx) | Root layout — fonts, providers, header/footer |
| [`../src/app/page.tsx`](../src/app/page.tsx) | Home page — section order |
| [`../src/components/`](../src/components/) | All React components |
| [`../next.config.ts`](../next.config.ts) | Next.js config (image remotePatterns, standalone output) |

---

## Quick Reference

**Color variables** → `src/app/globals.css` lines 5–28  
**Tailwind theme mapping** → `src/app/globals.css` lines 30–48  
**Card classes** → `retro-card`, `retro-card-{color}`, `trading-card-{color}`  
**Tag classes** → `tag-{mauve|pink|green|teal|peach|yellow|blue|red}`  
**Button classes** → `btn-primary`, `ghost-btn`, `social-btn`  
**Gradient text** → `gradient-text`, `gradient-text-bold`  
**Animations** → `float-animation`, `float-3d`, `pixel-pulse`, `typewriter`, `cursor-blink`, `skills-ticker`
