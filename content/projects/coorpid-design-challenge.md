---
title: "CoorpID — Redesigning B2B Onboarding"
client: "CoorpID (ING Bank)"
date: "2021-01-01"
description: "Service design challenge for CoorpID."
tags: ["UX Research", "Service Design", "Case Study", "Banking"]
thumbnail: "/media/projects/coorpid-design-challenge/thumbnail.png"
---

## Overview

A two-month design challenge hosted by CoorpID — a platform that enables corporations to share KYC (Know Your Customer) documents with banks and partners. The brief: improve the onboarding experience from both a customer journey and UI/UX perspective. Working in an interdisciplinary team of five, we delivered multiple solutions, two of which were prototyped and immediately accepted for implementation.

---

## Background

Banks are legally required to collect specific documents from their clients to prevent money laundering and financing of terrorism — a process governed by KYC regulations. CoorpID exists to make that process less painful for everyone involved: it's a shared platform where corporations can manage and distribute their KYC documents to multiple banks and partners from one place.

The challenge with this kind of product is the user base. People interacting with CoorpID range widely in their comfort with technology and with complex document management systems. Designing for that spectrum — not just for the power user — was central to the brief.

---

## Problem statement

> Which improvements from a customer journey perspective and a UI/UX perspective are needed to increase customer satisfaction for the onboarding process of CoorpID?

We arrived at this framing after initial research into the brand, its stakeholder relationships, and the onboarding flow itself. The sections below walk through how we tackled it.

---

## Understanding the brand

We used the double diamond process with design thinking as our framework. The first phase was context — before proposing anything, we needed to genuinely understand what CoorpID was dealing with.

Several meetings with the CoorpID team helped us map the internal and external factors shaping the product. From those conversations, we built a **system map** — a visual representation of all stakeholders, ordered by their proximity to CoorpID. Closer stakeholders get lower numbers. The system map was then expanded into a **value network map**, showing the exchange of value between stakeholders.

![Stakeholder map](/media/projects/coorpid-design-challenge/coorpid-stakeholder-map.webp)

This process gave us a clear picture of CoorpID's company structure, its key capabilities, and the different forces shaping the onboarding experience before we'd looked at a single screen.

---

## Customer journey

To make the research concrete, we developed a persona: **Hendrik** — a 54-year-old working at a fictional company called Stark B.V., responsible for corporate banking.

Hendrik wasn't invented arbitrarily. His characteristics were developed in collaboration with CoorpID's customer success department, grounding the persona in who actually uses the platform. His emotions, actions, and pain points were mapped across the full customer journey.

![Customer journey map — Hendrik](/media/projects/coorpid-design-challenge/coorpid-customer-journey.webp)

Customer journey mapping from an outside perspective consistently surfaces things that internal teams have stopped seeing. That's exactly what happened here — the map gave us early, clear signals about where the onboarding process was creating friction.

---

## Interface analysis

With the journey mapped, I led a workshop to analyse the actual interface — approaching it as Hendrik would: a new user with no existing knowledge of the system.

The team walked through the onboarding flow from scratch, flagging anything that felt confusing, inconsistent, or broken. Red markers indicated friction points in the interaction flow. Green markers captured early thoughts on how to address them.

![Interface analysis — annotated onboarding flow](/media/projects/coorpid-design-challenge/coorpid-interface-analysis.webp)

The findings were significant. The application introduced terminology — *relationships*, *packages* — that wasn't explained anywhere and didn't map to standard KYC language outside the platform. Users were expected to understand terms that the product itself never defined. The navigation compounded this: during onboarding, users were constantly switching between sections with no clear sense of where they were or what came next.

The result was a system that put an enormous burden on the Customer Success team, who were regularly fielding calls from users who couldn't get through onboarding without help. We followed up the analysis with a questionnaire to the CS team to capture their perspective — they were the ones absorbing the friction every day.

---

## Define phase

With the research synthesised, we formalised the problem statement and broke it into four focused pain points — rather than trying to solve everything at once, and rather than narrowing to a single thread.

![Four major pain points identified](/media/projects/coorpid-design-challenge/coorpid-pain-points.webp)

The rationale for keeping the scope broad: in complex systems, design solutions rarely fix just one thing. A navigation improvement that helps users orient themselves will also reduce terminology confusion. A clearer setup flow reduces CS burden. By staying holistic, we created the possibility of compounding impact.

---

## Ideation phase

### SCAMPER analysis

For ideation, we used the SCAMPER method — laying out the onboarding process in chunks and colour-coding each step by type of problem:

- **Yellow** — could be improved with better UI/UX
- **Pink** — could be removed or merged with another step
- **Orange** — the benefit of this step is unclear to the user

![SCAMPER analysis](/media/projects/coorpid-design-challenge/coorpid-scamper.webp)

This gave us a structured view of where solutions should focus before we started generating ideas.

### Worst ideas brainstorming

The first brainstorming session wasn't working. The team felt the pressure to pitch viable ideas immediately, and it was stifling the thinking. So we switched to a deliberately counterintuitive method: **worst ideas**.

We split into pairs and spent 30 minutes coming up with the most unhelpful, impractical, absurd solutions we could imagine for each step in the onboarding process. It broke the tension. And — as tends to happen — several of the "worst" ideas contained the seed of something genuinely good.

One of them became a prototype.

---

## Proposed solutions

We brought four ideas to CoorpID. Two were prototyped. Two required legal team input that fell outside the project timeline — but CoorpID confirmed they'd pursue those independently.

---

### Solution 1: The goodie box

This one came directly from the worst-ideas session. The thought: *what if, for a fully digital platform, we sent users a physical package?* Obviously impractical. Obviously the wrong idea. And then — actually not.

The CoorpID user base includes people who are more comfortable with physical materials than digital onboarding flows. One of the consistent bottlenecks was users forgetting to complete steps — the onboarding process stalled because there was no meaningful prompt to continue.

A physical welcome pack changed that. It gave users something tangible that explained the process, introduced the platform's terminology in plain language, and acted as a persistent reminder sitting on their desk. For a user base that wasn't digitally native, it met them where they were.

![Goodie box prototype](/media/projects/coorpid-design-challenge/coorpid-goodie-box.webp)

---

### Solution 2: Interface redesign

The interface itself was one of the highest-potential areas for improvement. The problems were structural.

**The old design** used a top navigation bar with tabs that changed as users moved between sections. Combined with no clear indication of position within the system, this created consistent confusion — users frequently lost track of where they were and what they were supposed to do next.

![Old application design](/media/projects/coorpid-design-challenge/coorpid-old-interface.webp)

**The new navigation** replaced the tab system with a persistent side navigation panel. Features were reorganised into five clearly defined sections, each containing related sub-features. The side panel gives users a constant reference point — a visual map of the system that's always visible, always orientating.

**The setup wizard** replaced the blank start screen. Rather than being dropped into the application with no guidance, users are walked through a structured setup sequence. Small nudges indicate what to do next and — importantly — *why*. The goal wasn't just to get users through onboarding faster; it was to help them learn the system as they went, so they'd be more confident in it afterwards.

![Redesigned initialisation — setup wizard prototype](/media/projects/coorpid-design-challenge/coorpid-redesign-setup.webp)
![New interface — navigation and nudges](/media/projects/coorpid-design-challenge/coorpid-redesign-interface.webp)

**Info cards** addressed the terminology problem directly. Contextual cards in the navigation panel surface plain-language explanations of the terms used in each section — appearing dynamically based on where the user is. They're collapsible and can be hidden once a user no longer needs them. No more guessing what *relationships* or *packages* mean.

![Info cards in navigation](/media/projects/coorpid-design-challenge/coorpid-info-cards.webp)

---

## Outcome

CoorpID accepted all four proposed solutions. Two were prototyped and scoped for immediate implementation. Two were flagged for future development pending legal team involvement.

The combination of physical onboarding support (the goodie box), structural navigation improvements, a guided setup flow, and contextual info cards addressed the core problem from multiple angles — reducing user confusion, lightening the load on the CS team, and making the onboarding process something users could navigate independently.

---

## Key takeaways

**Complex systems need holistic thinking.** Narrowing too early would have meant missing the ways that problems in one part of the onboarding flow were creating problems elsewhere. Keeping scope broad — deliberately — made the solutions more robust.

**Interdisciplinary teams produce better ideas.** Working with communication designers and business designers brought perspectives that a pure design team wouldn't have had. The goodie box idea wouldn't have survived a room of only UX designers. The worst-ideas session wouldn't have worked without the team's range of viewpoints.

**Counterintuitive methods earn their keep.** The worst-ideas brainstorm was the most productive ideation session of the project. When the pressure to be right immediately is removed, thinking opens up.

**B2B UX has its own rules.** Users of enterprise platforms come with real constraints — varying technical literacy, high-stakes workflows, terminology that's specific to the domain. Meeting users where they are, rather than expecting them to adapt to the system, is what good B2B design looks like.
