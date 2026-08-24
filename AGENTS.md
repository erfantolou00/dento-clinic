# Dento — Agent Instructions

## 1. Project Identity

Dento is a premium dental clinic website built with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, and Motion.

The visual reference is the existing Dento Framer design.

Primary goals:

* premium visual quality
* clean architecture
* strong responsive behavior
* accessible UI
* high performance
* intentional motion design
* maintainable React architecture

The project should feel like one coherent design and engineering system, not a collection of unrelated components.

---

# 2. Before Changing Code

Before modifying code:

1. Inspect the relevant existing files.
2. Search the repository for existing components/utilities before creating new ones.
3. Understand the current architecture.
4. Reuse existing abstractions when possible.
5. Check whether the requested behavior already exists elsewhere.
6. Avoid introducing dependencies unless clearly necessary.

Do not blindly rewrite existing components.

Do not create duplicate abstractions.

---

# 3. Current Architecture

Main structure:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── motion/
│   └── sections/
├── content/
├── hooks/
├── lib/
└── types/
```

Responsibilities:

### `app/`

Next.js App Router.

Contains:

* layouts
* pages
* global styles
* metadata

Keep pages as Server Components unless client behavior is actually required.

### `components/ui/`

Reusable visual primitives.

Examples:

* Button
* Input
* Card
* Container
* Section
* SectionHeader

Do not put page-specific business logic here.

### `components/motion/`

Reusable animation primitives and motion infrastructure.

Examples:

* FadeIn
* Reveal
* Stagger
* ImageReveal
* Parallax
* ScrollProgress
* SmoothScrollProvider

Do not duplicate animation logic inside every section.

### `components/sections/`

Page-level sections.

Examples:

* Hero
* About
* Services
* Process
* Team
* WhyUs
* Testimonials
* FAQ
* Appointment

Sections compose content, UI primitives and motion primitives.

### `content/`

Typed site content.

Examples:

* site configuration
* navigation
* services
* team
* testimonials
* FAQ
* statistics

Content should not be duplicated inside JSX.

### `lib/`

Shared technical utilities and configuration.

Examples:

* utility functions
* animation configuration
* technical constants

### `types/`

Shared TypeScript domain and form types.

---

# 4. Content Architecture

Content must remain data-driven.

Prefer:

```tsx
services.map(...)
```

over hardcoded repeated JSX.

Prefer:

```tsx
import { services } from "@/content/services";
```

over embedding service information directly inside components.

Never create multiple sources of truth for the same content.

If the same data exists in multiple files, consolidate it.

---

# 5. Component Rules

Components should be:

* small
* composable
* typed
* predictable
* reusable
* easy to reason about

Avoid:

* giant components
* duplicated components
* excessive boolean props
* unnecessary abstractions
* business logic inside presentational components

Prefer:

```tsx
<Card variant="featured" />
<Button size="lg" />
<Section spacing="lg" />
<MotionReveal delay={0.1} />
```

over APIs with many unrelated boolean flags.

---

# 6. Server / Client Components

Use Server Components by default.

Use `"use client"` only when required by:

* React state
* effects
* browser APIs
* event handlers
* Motion
* gestures
* interactive UI

Do not add `"use client"` to parent components unnecessarily.

Keep client boundaries as small as practical.

For example:

```text
page.tsx
  ├── Hero (client)
  ├── About
  ├── Services (client)
  └── Footer
```

does not require `page.tsx` itself to be a Client Component.

---

# 7. Design System

Do not introduce arbitrary visual values when an existing design token can represent them.

Use the existing semantic tokens for:

* colors
* typography
* spacing
* surfaces
* borders
* radius
* shadows
* z-index
* motion

Avoid unnecessary values such as:

```tsx
text-[#123456]
bg-[#abcdef]
rounded-[27px]
duration-[437ms]
```

when an existing semantic token is appropriate.

If a new visual concept is genuinely required, add it to the design system instead of scattering it across components.

---

# 8. Typography

Use the established typography vocabulary:

```text
display
h1
h2
h3
body-lg
body
body-sm
caption
eyebrow
```

Do not invent arbitrary typography styles for individual sections unless there is a clear design reason.

Typography should remain visually consistent throughout the website.

---

# 9. Layout

Use the shared:

* Container
* Section
* spacing
* grid
* stack

primitives whenever applicable.

Do not independently redefine container widths or section spacing in every section.

Responsive layouts should be intentionally composed for:

* mobile
* tablet
* laptop
* desktop
* large desktop

Do not simply shrink desktop layouts.

---

# 10. Motion System

Motion is a first-class architectural concern.

Do not add animation simply because an animation library is available.

Every meaningful animation should have a purpose.

Animation may communicate:

* hierarchy
* spatial relationships
* state changes
* continuity
* user feedback
* emphasis

Avoid applying the same generic fade-up animation to everything.

---

# 11. Motion Technology

The project uses Motion for website interaction and animation.

Use Motion for:

* entrance animations
* layout transitions
* gestures
* hover
* press
* scroll-linked animation
* parallax
* stagger
* spring interactions
* exit transitions

Use Lenis for global smooth scrolling when it is already configured.

Do not implement a second smooth-scroll system.

Do not use:

```css
scroll-behavior: smooth;
```

as a replacement for the existing smooth-scroll architecture.

---

# 12. Motion Performance

Prefer animations based on:

* transform
* opacity

Avoid animations that repeatedly trigger layout when unnecessary.

Be careful with:

* width
* height
* top
* left
* margin
* padding

for continuous animation.

Do not add `will-change` everywhere.

Use it only where continuous animation genuinely benefits from it.

---

# 13. Reduced Motion

Accessibility is mandatory.

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

* disable unnecessary motion
* simplify transitions
* avoid large parallax effects
* avoid continuous ambient animation
* preserve usability and hierarchy

Do not assume every user wants animated interfaces.

---

# 14. Scroll Animation

Use:

```text
Lenis
   ↓
page scroll
   ↓
Motion useScroll
   ↓
useTransform / useSpring
   ↓
section animation
```

Do not use `useScroll()` as a smooth-scroll implementation.

`useScroll()` reads scroll progress; it does not replace the smooth scrolling layer.

Do not scale the entire website root for scroll effects unless there is a deliberate design requirement.

Prefer section-level scroll choreography.

---

# 15. Hero

The Hero is a high-priority visual area.

Potential motion:

* text reveal
* image reveal
* subtle parallax
* CTA entrance
* card entrance
* service tag stagger

Do not overload it with effects.

The Hero must remain fast and readable.

Use `next/image` correctly.

Hero images that contribute to LCP may use `priority` when justified.

---

# 16. Sections

Expected major sections:

```text
Hero
About
Services
Process
Team
Why Us
Testimonials
FAQ
Appointment
Footer
```

Each section should have:

* clear semantic structure
* responsive layout
* appropriate accessibility
* intentional motion
* consistent spacing
* visual consistency

---

# 17. Services

Services currently use carousel behavior.

When modifying Services:

* preserve existing carousel architecture
* do not make Motion and the carousel library fight over the same transform
* preserve touch interaction
* preserve keyboard accessibility
* preserve responsive behavior

Prefer animating inner content rather than breaking the carousel's positioning system.

---

# 18. Forms

Appointment forms use:

* React Hook Form
* Zod
* typed values
* validation states

Forms must support:

* labels
* validation errors
* loading state
* success state
* error state
* keyboard navigation
* accessible feedback

Do not connect the form to a real backend unless explicitly requested.

---

# 19. Accessibility

Always consider:

* semantic HTML
* heading hierarchy
* keyboard navigation
* focus-visible states
* accessible labels
* `aria-invalid`
* `aria-describedby`
* carousel controls
* reduced motion
* meaningful alt text

Do not use ARIA when native HTML already provides the correct semantics.

---

# 20. Images

Use `next/image`.

For every important image consider:

* correct `alt`
* appropriate dimensions
* correct `sizes`
* lazy loading when appropriate
* `priority` only when justified
* correct object positioning
* visual crop

Do not use the same placeholder image for unrelated sections when the design requires distinct imagery.

---

# 21. Performance

Protect:

* LCP
* CLS
* INP
* hydration cost
* JavaScript bundle size
* image performance
* animation performance

Prefer Server Components.

Keep Client Components small.

Do not install large libraries for simple functionality.

Do not add animation that creates unnecessary rendering work.

---

# 22. Dependencies

Before adding a dependency, check:

1. Does the project already solve this?
2. Can native browser APIs solve it?
3. Can an existing dependency solve it?
4. Is the dependency worth its bundle/runtime cost?
5. Does it introduce overlapping functionality?

Avoid dependency duplication.

---

# 23. Remotion

Remotion is not a replacement for Motion.

Use:

### Motion

For:

```text
website UI
scroll interaction
hover
gestures
layout animation
micro-interactions
parallax
```

### Remotion

For:

```text
generated video
marketing videos
treatment explainers
social media videos
data-driven video
programmatic motion graphics
```

Do not introduce Remotion merely to animate normal website UI.

---

# 24. Implementation Workflow

For every task:

### Step 1 — Inspect

Read the relevant files first.

### Step 2 — Search

Search for existing abstractions and similar implementations.

### Step 3 — Plan

Determine the smallest architectural change required.

### Step 4 — Implement

Make the change while preserving existing conventions.

### Step 5 — Validate

Check:

* TypeScript
* lint
* build
* responsive behavior
* accessibility
* performance

### Step 6 — Review

Ask:

* Did I duplicate anything?
* Did I create an unnecessary abstraction?
* Did I introduce unnecessary client rendering?
* Did I break existing responsive behavior?
* Did I introduce inconsistent visual values?
* Did I introduce unnecessary animation?

---

# 25. Do Not Do These Things

Never:

* rewrite the repository without inspecting it
* create duplicate components
* install dependencies without justification
* turn the entire app into Client Components
* put content directly into repeated JSX
* add animation everywhere
* add Remotion for normal UI animation
* create a second smooth-scroll implementation
* ignore reduced motion
* ignore mobile
* ignore accessibility
* optimize only for visual appearance
* introduce abstractions without a real use case

---

# 26. Definition of Done

A task is not complete merely because it compiles.

Before considering it complete, verify:

* functionality
* TypeScript correctness
* responsive behavior
* accessibility
* design-system consistency
* motion consistency
* performance
* maintainability
* no unnecessary dependency
* no duplicated abstraction

---

# 27. Communication Rules for the Agent

When making changes:

* be concise
* explain important architectural decisions
* mention files changed
* mention important tradeoffs
* do not explain obvious code line-by-line
* do not invent requirements
* ask before making destructive architectural changes

If the repository already has a convention, follow it unless there is a concrete reason to change it.

When uncertain, inspect the repository before making assumptions.

---

# 28. Priority Order

When multiple concerns conflict, prioritize:

1. Correctness
2. Accessibility
3. Performance
4. Maintainability
5. Design-system consistency
6. Motion quality
7. Visual polish

Never sacrifice correctness, accessibility or performance merely for visual effects.

---

# 29. Current Project Direction

The project should progress in this order:

```text
Foundation
    ↓
Content Architecture
    ↓
Design System
    ↓
Visual Fidelity
    ↓
Motion System
    ↓
Interaction Polish
    ↓
Accessibility / Performance QA
    ↓
Production Readiness
```

Do not jump to advanced features before the foundation is stable.

Do not introduce Remotion, backend systems, CMS, authentication or unrelated features unless the current project stage requires them.

---

# 30. Final Principle

Build Dento as a coherent system.

Content decides:

"What is displayed?"

Design System decides:

"How does it look?"

Components decide:

"How is it composed?"

Motion decides:

"How does it move?"

Next.js architecture decides:

"Where does it execute?"

Performance and accessibility decide:

"Can everyone use it efficiently?"

Every implementation should preserve these boundaries.
