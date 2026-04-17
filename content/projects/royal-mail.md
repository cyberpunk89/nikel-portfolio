---
title: "Royal Mail | Booking process redesign"
client: "Royal Mail"
date: "2022-01-01"
description: "A research-first approach to modernizing the package pickup experience."
tags: ["UX Research", "UI Design", "Redesign", "Web App", "Logistics"]
thumbnail: "/media/projects/royal-mail/thumbnail.jpg"
---

## Background

Royal Mail is the UK's primary postal service, handling millions of package shipments annually. Despite its essential role in the logistics ecosystem, the digital experience hadn't kept pace with modern e-commerce expectations. The booking process—a critical touchpoint for business and individual users—felt dated and unnecessarily complex.

The service itself was sound, but the interface buried the core task under layers of friction: unclear categorization, scattered information architecture, and a design language that didn't inspire confidence in users navigating an unfamiliar workflow.

---

## The challenge

This project began with a personal observation: my sister's frustration while using Royal Mail's booking service highlighted what many users experience—a gap between what the service *does* and how it *feels*.

The core problems were clear:
- **Unclear information hierarchy**: Users struggled to understand weight categories and service options
- **Fragmented workflow**: Sender and receiver information was split across separate sections, creating unnecessary context switching
- **Limited filtering and guidance**: Users had to manually parse through all available options without clear pathways to their most relevant choices
- **Dated visual language**: The design didn't communicate reliability or ease-of-use

The goal wasn't to reinvent Royal Mail's offering, but to make the existing service accessible and intuitive—to create an experience where users felt guided rather than overwhelmed.

---

## Research and approach

Before redesigning screens, I analyzed the current implementation to understand what was working and what wasn't.

The existing flow had some solid foundational ideas, but execution had created friction:
- Weight selection was presented as a flat list—no categorization or context
- Service options lacked visual distinction or filtering mechanisms
- The step-by-step flow forced users to re-enter or re-confirm information unnecessarily
- No clear affordances guided users through decision-making

The research phase informed three key design principles:
1. **Clarity through categorization**: Group weight options logically to reduce cognitive load
2. **Guided defaults with flexibility**: Present the most common choices first, but enable quick customization
3. **Consolidated information**: Keep related data (sender/receiver details) together to reduce friction

---

## Design solution

### Step 1: Package weight selection

![Package weight selection states](/media/projects/royal-mail/Step-1.gif)

The redesigned first step focuses on making weight selection intuitive and fast.

**The problem**: Weight categories were presented as an undifferentiated list, forcing users to estimate and cross-reference. This created hesitation at a moment where clarity mattered most.

**The solution**: Weight options are now grouped into logical categories—Small, Medium, Large, and Extra Large—with clear visual distinction and real-world context. Each category is anchored to common use cases (e.g., "Small: Documents, small items up to 1kg") so users can immediately recognize their package.

The categorization removes the guesswork. Instead of deciding between arbitrary weight ranges, users match their package to a relatable category. The design also introduces visual states—highlighting selected options and providing immediate feedback as users make choices.

**Key improvements:**
- Weight categories grouped by size and use case
- Clear visual hierarchy and selection states
- Real-world context anchors each category
- Faster decision-making for the most common scenarios
- Space for users to refine if their package doesn't fit standard categories

---

### Step 2: Service options and filtering

![Service filtering with tags](/media/projects/royal-mail/step-2.gif)

Step 2 presents users with available shipping services—but not all at once.

**The problem**: The original flow showed every available service option equally, forcing users to evaluate irrelevant options. A user sending a standard parcel had to mentally filter through premium services, international options, and specialized offerings.

**The solution**: Services are now presented with smart defaults—the most commonly used options appear first (e.g., Royal Mail Special Delivery, Standard Parcel). Users can instantly proceed with a popular choice, or use filter tags to customize their options based on delivery speed, insurance needs, or tracking requirements.

The tagging system acts as a thinking partner. Instead of presenting a wall of options, it guides users to options that match their priorities. Tags like "Next-day delivery," "Tracked," "Insured," and "International" let users quickly navigate to relevant services.

The interface respects both quick decision-making (use the default) and deliberate choice (filter for specifics). No extra steps; just clarity and control.

**Key improvements:**
- Popular services highlighted as intelligent defaults
- Tag-based filtering for fast customization
- Visual distinction between service tiers
- Reduced cognitive load through smart information architecture
- Maintains choice without overwhelming users

---

### Step 3: Consolidated sender and receiver information

![Sender and receiver information combined](/media/projects/royal-mail/Step-3.png)

Step 3 is where sender and receiver details converge into a single, cohesive view.

**The problem**: The original design split sender and receiver information across separate tabs or sections. This fragmentation forced users to context-switch, re-enter data unnecessarily, and manually verify that all required fields were complete. It transformed a simple task into a multi-step checklist.

**The solution**: All relevant information—sender address, receiver address, contact details, special instructions—now lives in one unified form. The layout uses clear visual zones to distinguish sender from receiver without fragmenting the experience.

Users can review and edit both sides of the transaction in a single pass. The design prevents errors by grouping related information and using consistent field patterns. If sender details can be pre-filled (for returning users), the cognitive load drops further.

This step becomes a final verification point: users can see the complete picture of their shipment in one place, catch any mistakes before submission, and feel confident about their booking.

**Key improvements:**
- Unified form layout reduces context switching
- Clear visual zones distinguish sender and receiver
- Pre-fill capability for returning users
- Comprehensive final verification before submission
- Reduced form friction through smart information architecture

---

## Motion and microinteractions

To bring the redesign to life, I prototyped key interactions using Principle. Motion serves a purpose here—not decoration, but clarity:

- **Smooth transitions** between steps guide users through the flow
- **Feedback animations** confirm selections and prevent accidental submissions
- **Contextual micro-interactions** (field focus states, hover effects, loading states) make the interface feel responsive and reliable
- **Subtle easing** on weight category selections and filter tags creates a sense of polish without distraction

These animations elevate the entire experience from functional to refined—the difference between "this works" and "this feels good to use."

---

## Summary of design decisions

**Step-by-step approach:**
- Weight selection uses logical categorization to reduce decision friction
- Service options employ smart defaults with flexible filtering
- Sender and receiver information is unified to prevent fragmentation
- Motion and microinteractions add responsiveness and confidence

**Guiding principles throughout:**
- Clarity without compromise: every element serves the user's task
- Guided defaults with flexibility: most users get quick answers; others can customize
- Consolidated workflows: related information stays together
- Responsive feedback: users always know what's happening and what's next
- Modern visual language: design reflects reliability and ease-of-use

**Outcomes:**
- Faster decision-making through smart categorization
- Reduced friction through filtering and smart defaults
- Lower error rates through consolidated information architecture
- Increased user confidence through polished, responsive interactions

---

## Reflection

This project demonstrated the value of a research-first approach—starting with real user frustration and designing backward to solve it. The Royal Mail booking experience was proof that refinement and modernization can coexist with simplicity. The existing service was sound; it just needed a design language that matched its reliability.

By respecting both speed and choice, grouping information intelligently, and adding responsive feedback, the redesigned flow transforms a necessary task into a straightforward experience.
