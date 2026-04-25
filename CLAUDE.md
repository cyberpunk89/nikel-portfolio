@AGENTS.md

# Ninad Ketkale Portfolio — Project Rules

This is a personal portfolio site for UI/UX designer Ninad "Nikel" Ketkale. Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. Dark-only theme based on the Catppuccin Mocha palette.

---

## Project Structure

```
src/
  app/
    globals.css        ← ALL CSS variables, utility classes, animations
    layout.tsx         ← Root layout: fonts, skip-link, Header, main, Footer
    page.tsx           ← Homepage: section render order
    work/page.tsx      ← Work listing with WorkFilter
    projects/[slug]/   ← Individual case study pages
  components/          ← All React components (one per section)
  lib/projects.ts      ← getAllProjects(), getProjectBySlug() — reads content/projects/
  types/               ← TypeScript interfaces

content/
  projects/            ← Markdown files — one per case study (frontmatter + body)
  rec.json             ← LinkedIn recommendations
  homepage-content.md  ← Copy reference (not rendered directly)

public/
  media/projects/      ← Case study images (one subfolder per project slug)

docs/
  design-system.json   ← Full design token reference
  design-reference.html← Visual reference — open in browser
  dev-rules.md         ← Human-readable development rules
```

---

## Design System Rules — MUST FOLLOW

The full token reference is at `docs/design-system.json`. Violations introduced in any file should be fixed before committing.

### Colors — always use tokens, never hardcode hex/rgba

| Purpose | CSS Variable | Tailwind Class |
|---------|-------------|---------------|
| Page background | `var(--background)` | `bg-background` |
| Primary text | `var(--foreground)` | `text-foreground` |
| Primary accent (mauve) | `var(--accent)` | `text-accent` |
| Elevated card/surface | `var(--surface)` | `bg-surface` |
| Hover surface | `var(--surface-hover)` | `bg-surface-hover` |
| Borders / dividers | `var(--border)` | `border-border` |
| Green | `var(--green)` | `text-green` / `bg-green` |
| Peach | `var(--peach)` | `text-peach` |
| Blue | `var(--blue)` | `text-blue` |
| Teal | `var(--teal)` | `text-teal` |
| Yellow | `var(--yellow)` | `text-yellow` |

❌ **Never write:** `style={{ color: "#cdd6f4" }}` — use `className="text-foreground"`
❌ **Never write:** `rgba(30, 30, 46, ...)` inline — use `bg-background` with opacity modifier
❌ **Never write:** `rgba(108, 112, 134, ...)` inline — use `border-border` with opacity modifier

Dynamic per-project accent colors (e.g. `${accent}18`) are the one allowed exception when the value is computed at runtime.

### Text Opacity — standard set only

Use only these Tailwind opacity modifiers on `text-foreground`:
- `/80` — body text, slightly muted
- `/70` — secondary labels
- `/60` — captions, subtitles
- `/50` — placeholder, meta info
- `/40` — very muted, ghost text
- `/35` — section meta labels (e.g. `[01] SELECTED WORK`)
- `/30` — barely visible hints

Avoid arbitrary values like `/55`, `/45`, `/75`.

### Typography — two fonts only

| Font | Variable | Tailwind | Use for |
|------|----------|----------|---------|
| Plus Jakarta Sans | `var(--font-sans)` | `font-sans` (default) | Body text, headings, card titles, UI labels |
| JetBrains Mono | `var(--font-jetbrains)` | `font-mono` | Dates, badges, section labels, terminal UI, code |

The body font is set globally — only add `font-sans` explicitly when overriding a mono context.
Use `font-mono` for: section counters (`[01]`), date strings, tag meta labels, CLI/terminal elements.

### Card Backgrounds

Use `.card-bg` utility class (defined in globals.css) instead of repeating the gradient inline:
```tsx
// ✅ correct
<div className="card-bg rounded-xl" style={{ border: `1px solid ${accent}30` }}>

// ❌ wrong
<div style={{ background: "linear-gradient(145deg, rgba(49,50,68,0.95)...)" }}>
```

For cards that need hover transforms and a standard grey border, use the pre-built classes:
- `.retro-card` — standard card with lift-on-hover
- `.retro-card-{color}` — same but with colored border (`mauve`, `green`, `peach`, `blue`, `teal`, `yellow`, `red`)
- `.trading-card-{color}` — stronger border (3px), used in AboutV2 experience entries

### Tags / Badges

Always use `.tag-{color}` classes for pill badges. Never recreate them with inline styles.
```tsx
// ✅ correct
<span className="tag-mauve">UX Research</span>

// ❌ wrong
<span style={{ backgroundColor: "rgba(203,166,247,0.25)", border: "1px solid ...", color: "#cba6f7" }}>
```

Available: `tag-mauve`, `tag-pink`, `tag-green`, `tag-teal`, `tag-peach`, `tag-yellow`, `tag-blue`, `tag-red`

### Buttons

| Class | Use for |
|-------|---------|
| `.btn-primary` | Primary CTAs (filled, accent color) |
| `.ghost-btn` | Secondary actions (outlined, mauve tones) |
| `.social-btn` | Social media links (pill-shaped, mono font) |

### Section Labels

Every section has a consistent label pattern:
```tsx
<p className="text-xs font-mono text-foreground/35 tracking-[0.2em] mb-2 flex items-center gap-2">
  <span className="text-accent">■</span> [01] SECTION NAME
</p>
```

### Spacing

- Sections: `py-24 px-6`
- Container: `max-w-6xl mx-auto`
- Card padding: `p-6 md:p-8`

---

## Component Patterns

### Adding a new project case study

1. Add a markdown file to `content/projects/{slug}.md` with frontmatter:
   ```yaml
   ---
   title: "Client | Project title"
   client: "Client Name"
   date: "YYYY-MM-DD"
   description: "One-line description."
   tags: ["Tag1", "Tag2"]
   thumbnail: "/media/projects/{slug}/thumbnail.png"
   ---
   ```
2. Add images to `public/media/projects/{slug}/`
3. Add the slug → colour mapping to `WorkV2.tsx` (`cardColors`) and `WorkMosaic.tsx` (`cardColors`)
4. Add a short description to `WorkV2.tsx` (`projectDescriptions`)
5. The most recent date automatically becomes the featured case study on the homepage

### Section order (homepage)

HeroV2 → WorkV2 → WritingV2 → AboutV2 → SkillsV2 → RecommendationsV2 → InterestsV2 → ContactV2 → Footer

---

## Accessibility Rules

- Every `<button>` without visible text must have `aria-label`
- Every `<img>` must have a meaningful `alt` (empty `alt=""` only for purely decorative images)
- Modal/dialog elements must have `role="dialog"` + `aria-modal="true"` + focus trap
- Interactive `<div>` elements must use `role="button"` + `tabIndex={0}` + keyboard handler
- Navigation landmarks: `<nav aria-label="Main navigation">` and `<nav aria-label="Mobile navigation">`
- Expandable elements: `aria-expanded={isOpen}` on the trigger
- Carousels: `aria-live="polite"` on the content wrapper
- Smooth scroll is already globally set; `prefers-reduced-motion` override is already in globals.css

---

## Content

- `content/rec.json` — recommendations. Each entry: `name`, `title`, `company` (key for logo lookup), `date`, `relationship`, `text`
- `content/homepage-content.md` — reference copy; not rendered programmatically
- Project markdown renders via `remark` → HTML, displayed in `project-content` CSS scope
