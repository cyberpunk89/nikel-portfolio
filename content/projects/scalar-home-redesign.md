---
title: "Scalar | Redesigning the fleet dispatcher's home screen"
client: "Scalar (ZF Group)"
date: "2026-04-25"
description: "How user research led to a modular, widget-based home screen for a B2B fleet management platform."
tags: ["UX Research", "UI Design", "B2B SaaS", "Case Study", "Information Architecture"]
thumbnail: "/media/projects/scala-home-redesign/thumbnail.png"
---

## Overview

18 months redesigning the central dashboard of a B2B fleet management platform used by 200+ organisations. The challenge: how do you design a single home screen that serves 20+ platform modules and dozens of fundamentally different dispatcher workflows?

The answer turned out to be less about perfect design, and more about *flexible* design — a system where dispatchers could assemble their own workspace from configurable widgets, tailored to their specific role, region, and workflow.

---

## Background

Scalar is a fleet management platform built by ZF Group, used by logistics companies to monitor and manage hundreds of vehicles in real time. Dispatchers — the primary users — rely on it to track asset locations, monitor driver compliance, manage reefer temperatures, handle alarms, and communicate with drivers throughout the day.

As the sole UX/UI designer on the product, I was responsible for the home module — the central screen dispatchers live in for most of their working day.

![Current design showing drill-down asset list](/media/projects/scala-home-redesign/current-design.png)

---

## The challenge

The existing home screen followed a simple pattern: a live asset list on the left, a detail panel in the center, and a map on the right. Selecting an asset opened a set of tabs — activity history, alarms, reefer data, service times — that users drilled through to find the information they needed.

This worked when the platform was small. But Scalar had grown to house 20–25 modules, and the drill-down approach couldn't keep up. Dispatchers were spending too much time navigating between tabs and screens to piece together a complete picture of their fleet.

The deeper problem was that every dispatcher's needs were different. A dispatcher managing refrigerated cargo cared about reefer temperatures and zone compliance. One handling long-haul routes prioritised driver remaining time and tachograph data. Another focused on alarms and communication. The single fixed layout couldn't serve any of them well.

The question became: how do you design a single home screen that adapts to 20+ modules and dozens of different workflows?

---

## Research and discovery

### Internal review

The first step wasn't user research — it was alignment. I worked closely with the Product Managers and Product Owners responsible for the home module to run an internal review of the current state. We mapped out every module the home screen needed to support, identified where dispatchers were dropping off or working around the interface, and established a shared understanding of the problem space before going external.

This internal review shaped the research plan: we knew the platform had grown beyond its original layout, but we needed to understand *how* dispatchers were actually coping with that complexity day-to-day.

### User interviews

From there, we conducted more than 25 user interviews with dispatchers across different companies, fleet types, and countries. These weren't just conversations — we brought prototype variations into each session, testing and refining concepts based on real-time feedback. Each round of interviews sharpened the direction, and the prototypes evolved alongside the findings.

Several clear patterns emerged:

- **Every dispatcher has their own workflow.** Not just preferences — fundamentally different ways of working. Each user had specific opinions about where and how they wanted to see certain information. What one dispatcher needed at a glance, another never looked at. A one-size-fits-all layout was always going to be wrong for most users.

- **Regional regulations create different priorities.** In some countries, tachograph compliance and service time tracking are the primary concern. In others, reefer temperature monitoring or driver communication takes precedence. The home screen needed to flex around these regulatory differences, not force a single hierarchy.

- **Dispatchers don't want to comb through data — data should come to them.** The core insight was about direction of flow. Dispatchers shouldn't spend their day hunting for information across tabs and modules. The right data should surface at the right moment, when it's most actionable, so dispatchers can respond rather than search.

- **Many users still rely on in-house tools alongside Scalar.** A fixed layout that dedicates screen space to features a particular company doesn't use means wasted real estate — and a reason to keep the spreadsheet or custom tool open in another window.

- **Context switching was the biggest source of friction.** Dispatchers needed to cross-reference data constantly — checking an asset's location on the map while reviewing its service time, or reading driver messages while monitoring alarms. The current design forced them to choose one view at a time.

These findings pointed clearly toward a modular, customisable approach — one where dispatchers could assemble their own workspace from the tools they actually used.

![Early sketches exploring layout concepts](/media/projects/scala-home-redesign/Concept-sketches.png)

---

## Exploring the solution space

### Sketching and early concepts

The initial exploration happened on paper — rough sketches mapping out how a widget-based layout might work, how asset selection could trigger contextual information, and how the map and data panels could coexist without competing for space.

![Concept explorations for the live view](/media/projects/scala-home-redesign/Concept-exploration-1.png)
![Concept explorations for the live view](/media/projects/scala-home-redesign/Concept-exploration-2.png)

I explored several fundamental questions at this stage: Should widgets be fixed or draggable? How many should be visible at once? What happens when no asset is selected? How does the grid behave on different screen sizes?

These sketches and early concepts were brought into subsequent interview rounds, stress-tested against real dispatcher workflows, and iterated based on the feedback we received.


---

## The widget system

### Core concept

Once the interviews were finalised and the direction validated, we moved into production. The solution was a widget-based home screen where dispatchers could assemble their workspace from a library of available panels. Each widget represented a module or data view — map, graphical overview, remaining driver time, messages, alarms, reefer insights, route planner, trips, documents, and reports.

Instead of navigating to information, information came to the dispatcher.

![Widget system with customisable panels](/media/projects/scala-home-redesign/Core-concept.png)

### Asset selection patterns

With the core concept established, one of the most critical production-phase decisions was what happens when a dispatcher selects an asset from the grid. I explored four distinct approaches:

**Option 1 — Inline shortcuts:** Navigation shortcuts for the selected asset appear directly within the row. Quick, but limited in how much context it could surface.

![Asset selection interaction patterns](/media/projects/scala-home-redesign/Grid-1.png)

**Option 2 — Overlay panel:** Selecting an asset reveals an overlay below the row with shortcuts to all related modules. Users could still interact with the rest of the grid, and deselecting was straightforward. This also opened the door for multi-select in the future.

![Asset selection interaction patterns](/media/projects/scala-home-redesign/Grid-2.png)

**Option 3 — Right-click context menu:** Standard desktop pattern, but risky — right-click interactions were rarely used elsewhere in Scalar, and hiding essential navigation behind an uncommon gesture felt like a discoverability problem.

![Asset selection interaction patterns](/media/projects/scala-home-redesign/Grid-3.png)

**Option 4 — Fixed header navigation:** A persistent navigation bar appears above the grid when an asset is selected, with clear indication of which asset is active. The bar hides when no asset is selected, keeping the interface clean.

![Asset selection interaction patterns](/media/projects/scala-home-redesign/Grid-4.png)

After evaluating each against the research findings — speed, discoverability, flexibility — the overlay and fixed header patterns emerged as the strongest candidates. Both kept users in context while providing fast access to related modules.



### Layout editor

Users access the layout editor through a simple entry point. The editor presents a grid (defaulting to 2×2) where widgets can be dragged into position. The available widget library sits alongside the grid, making it clear what can be placed where.

Key decisions in the editor design:

- **Grid-based placement** ensures layouts stay clean regardless of user configuration
- **Preset layout styles** offer quick starting points for common workflows
- **Legacy layout toggle** lets users switch back to the original view — reducing adoption risk and respecting existing habits
- **Reset to default** provides a safety net for experimentation

![Layout editor with drag-and-drop widget placement](/media/projects/scala-home-redesign/Design-Edit-layout.png)

### Widget interactions

Each widget has a consistent interaction model built around three zones:

- **Widget actions** (settings gear, minimise) — control the widget's behaviour
- **Content switcher** (e.g., "Graphical overview") — toggle between different views within the same widget
- **Widget content actions** (data source, driver, date selectors) — filter and configure the data displayed

![Widget interaction patterns and header terminology](/media/projects/scala-home-redesign/Design-Header-terminilogy.png)

This consistent header pattern meant that once a user understood one widget, they understood all of them. But consistency didn't mean rigidity — the header adapts to the content it presents. When a widget displays richer data, the header morphs to surface additional actions and contextual controls. When content is minimal, the header stays compact. The result is an interface that scales its complexity to match what's actually on screen, rather than showing every possible control at all times.

- **Minimising and resizing:** Within a column, one widget can be minimised to a compact header, giving the other widget more vertical space. Maximising restores the previous state. Resizing is constrained to prevent layouts from breaking — maximum height and width limits keep the interface functional.

- **Widget-level customisation:** Beyond choosing *which* widgets appear, users control *what data* each widget displays. The remaining time widget, for example, lets dispatchers toggle individual fields — current driving time, daily remaining, weekly remaining, bi-weekly, amplitude, or specific compliance metrics. A dispatcher in a country with strict tachograph enforcement sees different fields than one managing a local delivery fleet. The widget adapts to the user; the user doesn't adapt to the widget.

![Widget interaction patterns and header terminology](/media/projects/scala-home-redesign/Widget-custamisation.png)

### Map interactions

The map widget integrates tightly with the grid. Selecting an asset highlights it on the map with location details — address, GPS coordinates, street view link — accessible through a popover. Map layers (traffic, places, satellite, terrain) are configurable per user. Message clusters on the map aggregate multiple activities at a single location, expandable for detail.

![Widget interaction patterns for maps](/media/projects/scala-home-redesign/Map-interaction.png)

---

## What changed

The original home screen asked dispatchers to navigate *to* information. The redesigned home brings information *to* dispatchers — organised the way they think, customised to what they need, and responsive to the asset they're focused on.

**Before:** A fixed layout with drill-down tabs. Every dispatcher saw the same interface regardless of their role, fleet type, or priorities. Finding cross-referenced data meant switching between views.
![Current design showing drill-down asset list](/media/projects/scala-home-redesign/current-design.png)

**After:** A modular workspace where 20+ platform modules surface as configurable widgets. Each dispatcher builds their own layout — reefer-focused, compliance-focused, communication-focused — and the interface adapts to their selection context.

![Current design showing drill-down asset list](/media/projects/scala-home-redesign/Final-variation.png)

**Key outcomes:**
- Platform modules brought together in a single, flexible workspace
- Dispatchers can configure layouts to match their specific workflow and regional requirements
- Widget-level content customisation means users control not just *which* panels they see, but *what data* appears within them
- Consistent interaction patterns across all widgets reduce learning curve
- Legacy layout option de-risks adoption and respects existing user habits
- Context-aware interactions (asset selection → widget updates) eliminate unnecessary navigation

---

## About this work

This project spanned 18 months at **Scalar (ZF Group)**, where I worked as the sole UX/UI designer for the product. The home screen redesign was part of a broader initiative to evolve Scalar from a feature-rich platform into a flexible, user-centred system.

Working on this project meant:

- **Leading end-to-end design** for the home module without a dedicated design team — from research through production and post-launch refinement
- **Running 20–25 user interviews** across different regions, fleet types, and company sizes — understanding not just what users needed, but *why*
- **Collaborating with 10 engineers and a product manager** to balance research insights with technical feasibility
- **Designing at scale** — building a system that needed to support 20+ modules and hundreds of different user configurations
- **Shipping something that moved real metrics** — the redesign was rolled out to 200+ organisations using Scalar

This work demonstrated the value of research-led design in B2B products: deeply understanding your users' workflows, constraints, and context leads to solutions that are more than cosmetic improvements — they fundamentally change how users interact with the product.

---

## Reflection

This project reinforced something I've found consistently in B2B design: the users who live in a tool eight hours a day have deeply specific needs that no single default layout can serve. The value wasn't in designing one perfect home screen — it was in designing a system that let each dispatcher build their own.

The research phase was essential. Without those 20–25 interviews, the solution would have been a better-looking version of the same fixed layout. The interviews surfaced the real insight: dispatchers don't need more features on screen — they need the *right* features, in the *right* arrangement, for *their* workflow. The widget system was the answer to that.
