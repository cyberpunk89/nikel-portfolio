---
title: "Case study: Twitch app"
client: "Self-directed"
date: "2022-01-01"
description: "A self-directed case study about Twitch app."
tags: ["UI Design", "Case Study", "Mobile App", "Information Architecture"]
thumbnail: "/media/projects/twitchapp/thumbnail.webp"
---

## Overview

A self-initiated look at the navigation flow of the Twitch mobile app — what's redundant, what's inconsistent with the web version, and what a cleaner information architecture might look like. Includes a proposed redesign and prototype.

---

## Background

Twitch has built one of the most engaged audiences in digital entertainment — a platform where creators and viewers meet in real time around live content. By Q4 2021, the Twitch mobile app had generated approximately 15.54 million downloads worldwide in a single quarter. With an audience that size, the experience deserves to be designed with care.

While using the mobile app, something felt off about how content and features were structured. That friction was enough to make me want to dig deeper — to understand the design decisions behind the navigation and figure out whether they were holding up.

This case study focuses on the Information Architecture (IA) of the Twitch mobile app, specifically the primary navigation. The goal: identify what's redundant, what's inconsistent with the desktop experience, and propose a cleaner structure.

---

## The goal

Create a clearer navigation flow with less redundancy — and bring the mobile experience into closer alignment with the web version.

---

## Information architecture analysis

After spending time across both the mobile and web versions of Twitch, the inconsistency in content structure became hard to ignore.

Twitch's core purpose as a platform is to deliver live content and surface new content based on user interests. The web version accomplishes this across **two sections**. The mobile app uses **three**. That discrepancy alone warranted a closer look.

It's common for mobile apps to restructure navigation due to screen real estate constraints — a mobile app is usually a more compact version of its desktop counterpart. But in this case, the mobile version introduces an entirely new section. I needed to understand whether that section was earning its place.

To make sense of it, I mapped out the full IA of the current mobile app.

![IA for current Twitch mobile application](/media/projects/twitchapp/twitch-ia-current.webp)

### The three sections

**Following** — A feed of live streams from channels the user follows, alongside recommendations for new live content. Also surfaces unfinished streams and offline channels.

**Discover** — Focused on surfacing and recommending similar live channels based on the user's interests.

**Browse** — Allows users to explore all content categories and discover new ones. Also shows a live feed from followed channels and general stream recommendations.

The IA maps each feature as a node, ordered by where it appears in the app. Green nodes represent primary sections; colour groupings highlight similar features appearing across different sections. Laid out this way, patterns emerge quickly.

---

## The problem with Browse

When compared to the desktop version, **Browse only exists in the mobile app**. It was added after launch, originally described as a dedicated space for exploring content by category. That was a reasonable addition at the time — but over the years, as features were added to the other sections, Browse's unique value quietly eroded.

The IA analysis makes this visible: most of what Browse offers already exists elsewhere.

- Live followed streams? Already in **Following**.
- Content recommendations? Already in **Following** and **Discover**.
- Category exploration? Duplicated across sections.

The one genuinely unique feature in Browse is **sort and filter by tags** — a powerful tool for finding content that matches specific preferences. But even that is misplaced: it belongs in **Discover**, where users are actively trying to find new content. Its absence from Discover is the more puzzling design decision.

![Current Twitch web version](/media/projects/twitchapp/twitch-web.webp)

---

## Deconstructing Browse

With redundancy as the target, I decided to dismantle Browse and redistribute what was actually useful.

- Repeated features (live feeds, category lists, recommendations) removed — they already exist in other sections
- Sort and filter moved to **Discover**, where it has direct utility for content discovery
- With those features redistributed, Browse had no remaining reason to exist as a standalone section

That left an open third slot in the navigation — and an opportunity.

Looking at community feedback and common user requests, there's clear demand for better creator tooling within the app. A creator-dedicated section is a logical candidate for that empty space, though properly validating that would require dedicated user research beyond the scope of this project.

![Proposed new IA](/media/projects/twitchapp/twitch-ia-proposed.webp)

The proposed IA reduces redundancy, aligns the mobile experience more closely with the web version, and creates room for future features to breathe.

---

## Prototyping

With the new IA mapped out, I built a prototype to demonstrate the proposed changes. I kept to Twitch's established design language while making some considered additions of my own.

---

### Following section

The Following section is the user's primary content feed — channels and categories they've chosen to follow. The redesign makes this section work harder.

The layout for live channels was updated to display streams in a larger preview format, making it easier to peek at what's happening without committing to a tap. This also brings it into visual consistency with other sections and the web version.

More significantly, the section was restructured with three dedicated navigation tabs:

**Live channels** — Currently live streams from followed channels, alongside recommendations. Followed categories appear as section breaks between content groups.

**Offline channels** — Previously buried at the bottom of the Following feed, now a dedicated tab. This makes followed channels that aren't currently live genuinely accessible rather than an afterthought. The web version handles this well; the mobile version now follows suit.

![Following section — live and offline tabs](/media/projects/twitchapp/twitch-following.webp)

**Guide** — One of the most underused features in both web and mobile Twitch. The guide gives users a timetable view of upcoming streams from followed creators. Currently it's only accessible via a mobile widget — tucking it inside the app as a proper tab makes it a first-class feature rather than a hidden one.

![Guide tab addition](/media/projects/twitchapp/twitch-guide.webp)

---

### Discover section

The Discover section's purpose is to help users find new content and communities based on their interests. The section itself didn't need major structural changes — the main addition was bringing **sort and filter** over from Browse, where it was always a better fit.

Giving users the ability to filter by tags directly within Discover makes the content discovery experience significantly more useful. It's the feature that should have been here from the start.

![Improved Discover section with sort and filter](/media/projects/twitchapp/twitch-discover.webp)

---

## Conclusion

This project was a focused exercise in IA analysis and navigation design — working out where an app's structure has drifted from its original intent and proposing a more coherent alternative.

Twitch has a strong product, but the mobile app's three-section navigation has accumulated redundancy over time. Removing Browse, redistributing its one genuinely useful feature, and tightening the overall structure results in a cleaner, more consistent experience that better reflects what the app is actually for.

The proposed changes would benefit from user testing before any real implementation — and the question of what fills that third navigation slot is worth a proper research sprint. There's potential there, particularly around creator tooling. But that's a project for another time.

---

[Read the original article on Medium →](https://medium.muz.li/case-study-twitch-app-b1f134b7fe88) how I approach visual decisions on real projects.
