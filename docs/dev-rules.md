# Development Rules — Ninad Ketkale Portfolio

Quick reference for maintaining consistency when working on this project. Full design token data is in [`design-system.json`](design-system.json).

---

## Color Tokens

Always use CSS variables or Tailwind classes. Never write hardcoded hex or rgba for brand colours.

```css
/* Core */
var(--background)    #1e1e2e   bg-background / text-background
var(--foreground)    #cdd6f4   text-foreground
var(--accent)        #cba6f7   text-accent / bg-accent      ← primary brand colour
var(--surface)       #313244   bg-surface
var(--surface-hover) #45475a   bg-surface-hover
var(--border)        #6c7086   border-border

/* Palette */
var(--green)   #a6e3a1   text-green / bg-green
var(--peach)   #fab387   text-peach
var(--blue)    #89b4fa   text-blue
var(--teal)    #94e2d5   text-teal
var(--yellow)  #f9e2af   text-yellow
var(--mauve)   #cba6f7   text-mauve   (same as accent)
var(--pink)    #f5c2e7   text-pink
```

**Opacity on text-foreground** — use only: `/30` `/35` `/40` `/50` `/60` `/70` `/80`

---

## Typography

| Use case | Font | Tailwind class |
|----------|------|---------------|
| Body text, headings, card titles, labels | Plus Jakarta Sans | `font-sans` (default) |
| Dates, badges, section counters, terminal UI | JetBrains Mono | `font-mono` |

Section counter pattern (copy exactly):
```tsx
<p className="text-xs font-mono text-foreground/35 tracking-[0.2em] mb-2 flex items-center gap-2">
  <span className="text-accent">■</span> [01] SECTION NAME
</p>
```

---

## Cards

Three levels of card:

### 1. `card-bg` — background only
Use when you need the card gradient but with a custom border (e.g. per-project accent borders).
```tsx
<div className="card-bg rounded-xl p-6" style={{ border: `1px solid ${accent}30` }}>
```

### 2. `.retro-card` / `.retro-card-{color}` — standard card with hover
Includes the gradient background, rounded corners, lift-on-hover transform, and shadow.
```tsx
<div className="retro-card p-6">           {/* grey border */}
<div className="retro-card-mauve p-6">    {/* mauve border */}
```
Colour variants: `mauve`, `green`, `peach`, `blue`, `teal`, `yellow`, `red`

### 3. `.trading-card-{color}` — prominent card
Heavier 3px border. Used in the AboutV2 experience timeline entries.

---

## Tags & Badges

Always use the pre-built tag classes:
```tsx
<span className="tag-mauve">UX Research</span>
<span className="tag-green">Case Study</span>
<span className="tag-blue">Web App</span>
```
Available: `mauve` `pink` `green` `teal` `peach` `yellow` `blue` `red`

Never recreate these with inline styles.

---

## Buttons

```tsx
<button className="btn-primary">Primary action</button>   {/* filled, accent */}
<button className="ghost-btn">Secondary</button>           {/* outlined, mauve */}
<a className="social-btn">LinkedIn</a>                    {/* pill, mono font */}
```

---

## Text Effects

```tsx
<span className="gradient-text">Subtle blue-pink gradient text</span>
<span className="gradient-text-bold">Bold mauve→pink→peach heading</span>
```

---

## Spacing Rules

| Pattern | Value |
|---------|-------|
| Section padding | `py-24 px-6` |
| Content container | `max-w-6xl mx-auto` |
| Card padding | `p-6 md:p-8` |
| Border radius — small | `rounded-lg` (8px) |
| Border radius — medium | `rounded-xl` (12px) |
| Border radius — large | `rounded-2xl` (16px) |

---

## Project Colour Assignments

Each project slug maps to a palette colour. Used for card borders and accents:

| Slug | Colour |
|------|--------|
| `scalar-home-redesign` | red |
| `doula` | mauve |
| `sagefund-design-challenge` | green |
| `sirelo-homepage-redesign-journey` | peach |
| `coorpid-design-challenge` | blue |
| `sirelo-interaction-design` | teal |
| `bbc` | yellow |
| `beautiful-homes` | peach |
| `sagefund-branding` | green |
| `twitchapp` | mauve |

When adding a new project, register its colour in both `WorkV2.tsx` (`cardColors`) and `WorkMosaic.tsx` (`cardColors`).

---

## Adding a Case Study

1. **Markdown file** → `content/projects/{slug}.md`

   Required frontmatter:
   ```yaml
   ---
   title: "Client | Short project title"
   client: "Client Name"
   date: "YYYY-MM-DD"        # newest date = featured on homepage
   description: "One-sentence description."
   tags: ["Tag1", "Tag2"]    # must match filter categories in WorkFilter.tsx
   thumbnail: "/media/projects/{slug}/thumbnail.png"
   ---
   ```

2. **Images** → `public/media/projects/{slug}/`
   - All images referenced in the markdown must live here
   - Directory name must exactly match the `slug`

3. **Register in WorkV2** (`src/components/WorkV2.tsx`):
   - Add to `projectDescriptions` — 1-2 sentence card description
   - Add to `cardColors` — `{ border, glow, tag, accent }` using the colour hex values

4. **Register in WorkMosaic** (`src/components/WorkMosaic.tsx`):
   - Add to `cardColors` — colour name string (e.g. `"mauve"`)

---

## Accessibility Checklist

Before committing any interactive component:

- [ ] Buttons with no visible text have `aria-label`
- [ ] Images have descriptive `alt` text (`alt=""` only for decorative)
- [ ] Modals have `role="dialog"` + `aria-modal="true"` + focus trap
- [ ] Expandable elements have `aria-expanded` on the trigger
- [ ] Clickable non-button elements use `role="button"` + `tabIndex={0}` + Enter/Space handler
- [ ] Nav elements have `aria-label` to distinguish multiple landmarks
- [ ] New sections include an `id` attribute for anchor navigation

---

## File Map

```
src/app/globals.css           CSS variables, all utility classes, animations
src/app/layout.tsx            Root layout — skip link, fonts, Header, Footer
src/app/page.tsx              Homepage section order
src/app/work/page.tsx         Work listing page
src/app/projects/[slug]/      Case study page (dynamic)
src/components/HeroV2.tsx     Hero section
src/components/WorkV2.tsx     Featured project grid (homepage)
src/components/WritingV2.tsx  Medium articles
src/components/AboutV2.tsx    Bio, experience timeline, education
src/components/SkillsV2.tsx   Skills tabs
src/components/RecommendationsV2.tsx  Testimonial carousel
src/components/InterestsV2.tsx        Hobbies horizontal scroll
src/components/ContactV2.tsx          Terminal-style contact
src/components/WorkFilter.tsx         Filter + project list (work page)
src/components/WorkMosaic.tsx         Project card grid
src/components/Header.tsx             Fixed navigation header
src/components/Footer.tsx             Footer with social links
src/components/Lightbox.tsx           Image zoom modal (used in case studies)
src/lib/projects.ts           getAllProjects(), getProjectBySlug()
content/projects/             Markdown case studies
content/rec.json              Testimonials data
public/media/projects/        Case study images
docs/design-system.json       Full design token reference
```
