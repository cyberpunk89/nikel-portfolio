---
title: "BBC News App — UX Case Study"
client: "BBC"
date: "2018-01-01"
description: "One of my earliest case studies — a UX redesign of the BBC News app."
tags: ["UX Research", "Case Study", "Mobile App", "Media"]
thumbnail: "/media/projects/bbc/thumbnail.png"
hidden: false
---

## Overview

A self-initiated redesign of the BBC News Android app — one of the most downloaded news apps on the Play Store. The app had solid ideas underneath it; the execution wasn't matching up. This case study covers the full process: research, usability testing, pain point analysis, and a high-fidelity prototype.

---

## Background

Looking for a reliable news app, I landed on BBC News — over 10 million downloads on the Play Store. With that kind of reach, the experience should be exceptional. But spending time with the app made it clear there was a gap between what it could be and what it was: good instincts, inconsistent execution.

Reviewing other BBC apps to understand the brand's design approach, I found inconsistencies across platforms — largely the result of competing design guidelines from different internal teams. That friction showed up in the product.

**Hypothesis:** By reworking the navigation flow and establishing a clearer design standard — one that met Android's Material Design guidelines without abandoning the BBC's visual identity — the experience could be meaningfully improved for users, and easier to maintain for developers.

![BBC News Android app — current state](/media/projects/bbc/bbc-current-app.webp)

---

## Persona

Rather than designing for the BBC's existing core user — someone already embedded in the habit — I focused on a different target: a potential new user. Someone who could become a regular, but hadn't yet. Converting a first-time user into a habitual one is harder, and more valuable, than optimising for someone already sold on the product.

![User persona](/media/projects/bbc/bbc-persona.webp)

---

## Job story

I chose a job story format over a traditional user story deliberately. User stories lock you into a fixed sequence — *as a [user], I want [action], so that [outcome]* — without asking why. They describe behaviour without accounting for motivation or context.

Job stories reframe the problem around the triggering situation, the user's motivation, and the intended outcome. That context shapes better design decisions.

![Job story and scenario](/media/projects/bbc/bbc-job-story.webp)

---

## Guerrilla usability testing

To pressure-test the hypothesis and gather real data, a small test group used the app over three weeks. At the end of the period, I collected their feedback and overall experience.

The findings were clear: most users stopped opening the app after a while. They didn't feel pulled back to it. The navigation was the primary culprit — users felt lost, lost confidence in the app, and eventually stopped using it altogether. It wasn't that the content was bad. The system for getting to it was.

---

## Identifying and prioritising pain points

With testing data collected, I used affinity mapping to organise everything in one place and draw out the patterns.

Raw feedback and personal notes went onto yellow sticky notes. Blue notes distilled the clearest insights from the yellow ones — grouping related feedback into smaller, actionable chunks. The hierarchy moved from raw data at the bottom to clear feature-level insights at the top, building a view of what mattered most to users while staying aligned with what the BBC needed the app to achieve.

![Affinity mapping — pain point analysis](/media/projects/bbc/bbc-affinity-map.webp)

---

## Prototyping and validation

With a clear picture of what needed to change, I moved into design exploration — testing user flows, improving UI elements, and working toward compliance with both Material Design (Android) and Apple's Human Interface Guidelines to ensure the design felt native on both platforms.

Early feedback from peers was incorporated throughout the wireframing phase before moving to high-fidelity.


![Wireframes — layout explorations](/media/projects/bbc/bbc-wireframe-layouts.webp)
![Wireframes — article section testing](/media/projects/bbc/bbc-wireframe-article.webp)

After wireframing, I moved into Sketch to test the concept at higher fidelity, then built a fully interactive hi-fi prototype in InVision.

---

## Implementation

### #1 — Homepage

The current app leans on an app bar for navigation — a pattern that gets cluttered fast. Too many tabs, too much scrolling, no clear hierarchy. It felt stale and worked against the user's instinct to browse quickly.

The redesigned home screen prioritises the content. Spacing between articles was tightened in the original to the point of feeling cramped — rather than just adding space, I rethought the layout entirely. The most prominent article from each topic leads its section, drawing the eye naturally. Each article is tagged with a colour band beneath the thumbnail — a system borrowed from the BBC website, where colour is already used to distinguish content types quickly and clearly.

'Home' has to feel like home: welcoming, legible, and quick to scan.

![Redesigned homepage](/media/projects/bbc/bbc-homepage-redesign.webp)

---

### #1.5 — Stories

Stories — BBC's short-form video news format — were buried in the original design. It's a genuinely strong feature, and one that differentiates the app from straightforward news readers. It just needed to be visible.

In the redesign, Stories move to the top of the home screen — the first thing a user sees. A notification indicator for new stories keeps the feature feeling live and gives users a reason to come back. Short-form, video-led news consumption is a natural fit for mobile; the design should reflect that.

![Redesigned homepage](/media/projects/bbc/bbc-homepage-Stories.webp)
---

### #2 — Navigation bar

One of the clearest wins: replacing the app bar navigation with a persistent bottom navigation bar. Both Apple and Google support this in their guidelines — it's intuitive, thumb-friendly, and consistent across platforms. Removing the app bar also freed up vertical space for the content that actually matters.

The navigation bar is divided into five sections: **Home · My Feed · Saved · Video · Live**. The app's five core features, always visible, always accessible.

![Redesigned navigation bar](/media/projects/bbc/bbc-navigation-bar.webp)

---

### #3 — Index navigation

Even with a cleaner navigation bar, users still had to scroll through a large number of topics to find what they wanted. That friction added up.

The solution: an **Index** — a collapsible topic navigator accessible via a subtle indicator on the right edge of the Home and My Feed screens. Tapping it takes users to a dedicated index page where all topics are listed linearly. On the left side of each topic, a count shows how many new articles have been added since the user's last visit.

The index keeps the main screen clean while giving users a faster, more deliberate path to specific topics. Two ways to navigate; neither gets in the way of the other.
![Redesigned navigation bar](/media/projects/bbc/bbc-navigation-index.webp)
---

### #4 — My Feed

Setting up My Feed in the original design was unnecessarily tedious — and once set up, the experience of using it created new problems. Selected topics were added directly to the main navigation bar, which became cluttered quickly. Users responded by selecting fewer topics to keep things manageable. A feature meant to personalise the experience was actively discouraging personalisation.

The redesign separates My Feed clearly from Home. Home is for broad, general news. My Feed is for curated, topic-specific content — tighter layout, more topics visible, the same Index navigation available but scoped to the user's chosen topics. The distinction is clear, and neither section undermines the other.
![Redesigned navigation bar](/media/projects/bbc/bbc-feed.webp)
---

### #5 — Reading an article

Reading is the primary action in a news app. The article view needed to protect that — no unnecessary chrome, no competing elements.

The redesigned article layout uses varied font weights to establish hierarchy from headline to body text. Accessibility controls sit in the app bar where they're reachable without interrupting reading. Share and save actions — the most-used article-level features — are anchored below the cover image, where a thumb naturally rests after scrolling past it.

---

## Outcome

After the redesign prototype was shared with the original test group, the response was noticeably different. Users who had found the original experience disorienting responded positively to the improvements — particularly the navigation clarity and the restructured home screen.

The core insight: the BBC News app's problems weren't about content. The BBC's journalism is strong. The app's failure was structural — a navigation system that made users feel lost, and a layout that buried the content they came for. Solving those structural problems, with no change to the underlying content, was enough to substantially change how users related to the app.

Published in Muzli Design Inspiration on Medium. The article has received **12,000+ views**.

---

[Read the full article on Medium →](https://medium.muz.li/ux-case-study-bbc-news-app-android-7de05781413b)
