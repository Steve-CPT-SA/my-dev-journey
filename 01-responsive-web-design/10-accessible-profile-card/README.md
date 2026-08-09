Accessible Profile Card — Neon Ronin
A portfolio project demonstrating semantic HTML, accessible design patterns, and CSS 3D transforms. The card presents a fictional persona — Neon Ronin — and serves as a showcase of inclusive front‑end practices.
Features

Semantic HTML landmarks:
   -Used `<article>` with `<header>`, `<section>`, and `<footer>` for clear structure.
   -Dropped `role="region"` since `<article>` already has an implicit landmark role.
   -Chose `<section>` for the bio instead of `<main>` because this is a sub‑section of the page, not the primary content area.
Accessible link names:
   -Added `aria-label` to ambiguous links (“Contact” and “Portfolio”) so screen reader users hear “Contact Neon Ronin” and “View Neon Ronin’s portfolio.”
Keyboard/mouse parity:
   -Hover and focus‑within states both trigger the 3D tilt effect.
   -Ensures keyboard users experience the same interaction feedback as mouse users.
Layered focus indication:
   -Card‑level outline on `:focus-within`.
   -Link‑level outline on `:focus-visible` (keyboard focus only, not mouse clicks).
   -Provides redundant, visible focus cues beyond subtle transforms.
3D transforms with perspective:
   -`perspective` applied to the parent (`body`) rather than the card itself.
   -This creates a more realistic shared 3D space, instead of each card being its own isolated context.
Reduced motion handling:
   -Implemented `@media (prefers-reduced-motion: reduce)` to disable transitions, transforms, and animations.
   -Fixed a specificity bug by explicitly overriding hover/focus states inside the media query.
WCAG 2.2.2 awareness:
   -The avatar glow uses an infinite pulse animation.
   -WCAG requires a way to pause/stop/hide moving content >5s unless essential.
   -In this demo, the animation is decorative and subtle; rationale: respecting `prefers-reduced-motion` covers many users, and in production a pause toggle would be added.

Tech Stack:

-HTML5 — semantic structure, ARIA labeling.
-CSS3 — custom properties (`:root` primitives), transforms, transitions, focus states.
-Accessibility — screen reader–friendly markup, high‑contrast colors, WCAG awareness.
-Responsive sizing — via `max-width` constraint (single card scales to viewport).

What I Can Speak To:

-Why `<section>` was chosen over `<main>` for the card body.
-Why `role="region"` was dropped in favor of implicit semantics.
-How ambiguous link text was clarified with accessible names.
-The importance of keyboard/mouse parity and layered focus indicators.
-The difference between perspective on the parent vs. the element itself.
-How `prefers-reduced-motion` interacts with hover/focus specificity.
-WCAG 2.2.2 requirements for continuous animation, and the trade‑off rationale.

Future Improvements:

-Add a pause toggle for the pulse animation to fully meet WCAG 2.2.2.
-Expand to a grid of multiple cards, each with unique ARIA labels.
-Explore gradient themes inspired by Neon Ronin’s aura for visual cohesion.
-Add breakpoints for true mobile‑first layout (e.g., multi‑card grid on larger screens).