Responsive Login Form (Matrix Theme)

A rebuilt login form designed to work cleanly across mobile and desktop, with accessibility and responsiveness at its core. Styled with a Matrix‑inspired digital rain aesthetic.

Features:
    -Responsive design: Flexbox layout adapts seamlessly from small screens to larger desktops.
    -Accessible labels: Each input field includes proper (<label>) elements for screen readers.
    -Focus indicators: Custom neon green outlines highlight active inputs and buttons.
    -Error states: Inline error messages with (aria-describedby) and (role="alert") for assistive technology support.
    -Reduced motion support: Hover/active animations gated behind (prefers-reduced-motion) media query.
    -Matrix theme: Dark background with glowing green accents, translucent card overlay, and optional digital rain background.

Skills Demonstrated:
    -Forms: Semantic HTML5 structure with accessible labels and error handling.
    -Responsive design: Flexbox, fluid widths, and media queries for adaptive layouts.
    -Accessibility: Borders and key text colors tested for ≥3:1 (UI components) and ≥4.5:1 (text) contrast ratios; focus indicators; error messaging; reduced‑motion handling.
    -Theming: CSS custom properties (:root tokens) for primitives and semantic colors, enabling easy theme swaps.

Project Structure:
    -(index.html) — semantic markup for the login form.
    -(styles.css) — Matrix theme styling, responsive layout, accessibility enhancements.
    -(image/matrix-rain.png) — background image for digital rain effect.

Usage:
1. Clone or download the project.
2. Open (index.html) in your browser.
3. Adjust (styles.css) tokens to customize colors, spacing, or typography.
4. Replace (matrix-rain.png) with your own background if desired.

Preview:
    -Mobile view: stacked inputs, full‑width card, centered vertically.
    -Desktop view: wider card with increased padding, consistent spacing.
    -Theme: glowing green accents on a black background, inspired by The Matrix.

Accessibility Checklist:
    -Labels visible and programmatically associated.
    -Focus indicators visible and high‑contrast.
    -Error messages announced by screen readers.
    -Motion effects disabled for users with reduced‑motion preference.
    -Borders and text colors manually tested for ≥3:1 (UI components) and ≥4.5:1 (text) contrast ratios.