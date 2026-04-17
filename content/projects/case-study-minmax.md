---
title: "Min/Max game UI design — Revamping Min/Max's Combat Interface"
client: "Self-directed"
date: "2024-01-01"
description: "A self-directed case study about the Min/Max combat interface redesign."
tags: ["UI Design", "Case Study", "Game UI"]
thumbnail: "/media/projects/case-study-minmax/thumbnail.webp"
hidden: false
---

## Overview

A deep dive into redesigning the combat screen for Min/Max — an upcoming indie Sci-Fi RPG. The challenge: optimise the member panel layout, improve how action economy information is communicated, and create an interface that feels native to the game rather than borrowed from mobile conventions.

Also, full disclosure — I'm someone who secretly binge-plays fantasy RPGs. This one was personal.

---

## Design goals

- Optimise the member panel layout to comfortably accommodate 4–5 characters within the combat screen
- Improve the presentation of action economy information — clarity first, without sacrificing depth
- Ensure the design scales across different screen sizes and resolutions without breaking immersion

---

## Research and analysis

Every project starts the same way for me: understand what's already there before touching anything.

The current Min/Max interface had a clear problem — it was built around mobile design conventions. Characters appearing to interact with phones, oversized icons, interaction patterns that made sense on a touchscreen but felt off on PC. For a Sci-Fi RPG, it created a tonal mismatch alongside the usability issues.

![Current design — menu and member panel prototypes](/media/projects/case-study-minmax/minmax-current-design.webp)

With that diagnosed, I went looking for reference points. RPG UI design is its own discipline, and there are games that do it exceptionally well.

**Persona 5** was the obvious standout — bold, innovative, every screen meticulously designed to feel like part of the game world. But replicating that level of craft would have been the wrong move. Persona 5 works because the UI is inseparable from the game's identity. Borrowing its aesthetic without that context would feel hollow.

![Persona 5 UI reference](/media/projects/case-study-minmax/minmax-persona5-ref.webp)

Instead, I focused on dissecting how different RPGs handle the specific problem at hand: member status panels and action economy display. **Mario + Rabbids** and **Atelier Ryza** were particularly useful reference points — contrasting approaches, both instructive.

![RPG UI mood board — layout and action presentation approaches](/media/projects/case-study-minmax/minmax-moodboard.webp)

One pattern came up consistently: **two levels of glanceability**. Atelier Ryza handles this well — colour-filled bars give you an instant read on health and action points at a glance, with precise numerical values available if you look closer. During combat, you're moving fast. The UI needs to work at speed.

![Atelier Ryza combat screen — glanceability reference](/media/projects/case-study-minmax/minmax-atelier-ryza.webp)

**Key research insights:**
- Min/Max's current interface draws heavily from mobile conventions — misaligned with the PC RPG context
- Persona 5 is a strong reference for UI ambition, but too tightly coupled to its own game world to replicate directly
- Mario + Rabbids and Atelier Ryza offer contrasting but complementary approaches to panel layout and stat presentation
- Two-level glanceability (bar for speed, number for precision) is the established pattern for health and action economy — and for good reason
- Character turn order indication, screen scalability, and dual-level glanceability were the three non-negotiables going into ideation

---

## Ideation and prototyping

### Understanding the canvas

Combat in Min/Max unfolds within a dedicated space — a central isometric area surrounded by empty space on either side. That layout is actually a gift for UI design: the surrounding space is available for interface elements without encroaching on the game action in the centre.

![Min/Max prototype provided by developers](/media/projects/case-study-minmax/minmax-prototype-base.webp)

The first question was placement. Common options for member panels in RPGs are the bottom edge or the right side of the screen. Through sketching, it became clear that side placement would disrupt the visual consistency of the overlay and risk conflicting with central game elements. Bottom placement was the right call — visually cohesive and out of the way of the action.

![Ideation sketches — member panel placement](/media/projects/case-study-minmax/minmax-sketches-1.webp)
![Ideation sketches — member panel placement](/media/projects/case-study-minmax/minmax-sketches-2.webp)
### Member panel design

With placement settled, I started experimenting with how to display character stats within the panel. The Sci-Fi theme called for a structured, clean aesthetic — something that felt like actual technology rather than a UI layer pasted on top of a game.

![First draft — member panel](/media/projects/case-study-minmax/minmax-draft-v1.webp)

The first draft established the direction. From there, I refined it around a few priorities:

- **Character portraits front and centre** — the player needs to read the battlefield by character, not by stat row
- **Turn order tracking** — visible and unambiguous at all times
- **Ribbon-style layout with icon-based stats** — keeps the panel compact while giving each element a distinct visual identity
- **Opaque glass material** — consistent with the Sci-Fi aesthetic and harmonious with the existing game UI

I also planned for character portraits to animate when switching between active and non-active states — rotation and idle animations to add dynamism without cluttering the screen.

### Active vs. non-active states

One of the most important problems to solve: how does the player know whose turn it is?

Complex animations were off the table — in active combat, visual noise is the enemy. The solution was a subtle but effective scaling approach. When a character becomes active, their portrait enlarges slightly. Enough to draw the eye immediately, not enough to distract from the action.

![Member panel — active and non-active state comparison](/media/projects/case-study-minmax/minmax-active-states.webp)

It's a minimal interaction, but that's exactly why it works. Players can read turn order at a glance without breaking focus on their next move.

### Action bar and command UI

With the member panel resolved, I turned to the action bar — how combat controls are presented and how interactions are communicated during a turn.

A command bar style along the bottom edge of the screen kept things consistent with the existing game UI. Character portraits shifted slightly right for better balance and readability across the full layout.

![Final design — command bar and dialogue box](/media/projects/case-study-minmax/minmax-final-draft.webp)
![Final design — command bar and dialogue box](/media/projects/case-study-minmax/minmax-final-draft.gif)

The ability panel was designed as a flyout — expanding on demand rather than permanently occupying screen space. This keeps the combat view clean during movement and decision-making, with full ability detail available when the player needs it.

![Ability panel flyout design](/media/projects/case-study-minmax/minmax-ability-flyout.webp)
![Ability panel flyout design](/media/projects/case-study-minmax/minmax-ability-flyout.gif)

### Input compatibility

Throughout the prototype phase, I kept multi-input compatibility in mind — touch, controller, mouse, and keyboard. Combat UI in a PC RPG needs to work across all of them without any single input method feeling like a second-class citizen. The empty space on either side of the screen was treated as reserved — available for future overlays or features as the game develops.

---

## Envisioning user testing

This project didn't include formal user testing — the scope and timeline didn't allow for it. But thinking through how the design would be tested is part of the process, so I mapped out what that would look like.

**User testing sessions** via platforms like UserTesting or Maze — observing players interacting with the prototype, capturing where they hesitate or get confused, and gathering feedback on the combat flow.

**Expert reviews** — sharing the prototype with other UX and game UI designers for a fresh set of eyes on usability, information clarity, and visual consistency.

**Playtesting with the dev team** — even without external testers, playtesting with RPG-enthusiastic members of the Min/Max development team would surface real usability feedback early.

Alongside testing, close collaboration with the development team would be essential — not just for technical feasibility checks, but to make sure the design aligns with the broader game vision and existing mechanics.

---

## Conclusion

This project was a deliberate step outside my usual territory — and a good one.

Most of my work lives in product UX: dashboards, flows, design systems. Game UI is a different discipline. The information hierarchy is similar, but the stakes of clarity are higher — in combat, a player needs to read the screen and make a decision in seconds. There's no forgiving a confusing layout when someone's in the middle of a fight.

The most useful lesson: empathy doesn't stop at the edge of traditional UX. Understanding what a player needs — speed, clarity, confidence — is exactly the same process as understanding what a user of any other product needs. The tools are the same. The context just makes the constraints more visible.

---

[Read the original article on Medium →](https://medium.com/@nikel_design)
