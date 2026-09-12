-Career Transition: Electrician → Developer

A personal portfolio page documenting my journey from 12 years as a senior electrician into software development, with a focus on daily learning and AI/ML.


--Project Structure
- **index.html** — Main content: header intro, FAQ, skills dashboard, glossary, footer links.
- **variables.css** — Design tokens (colors, spacing scale, typography, border radius).
- **reset.css** — Minimal reset: box-sizing, margin/padding zeroing, list-style removal, font smoothing.
- **layout.css** — Site-wide structure: max-width container, vertical rhythm, section card treatment.
- **components.css** — Component-specific styling: FAQ details/summary, skill rows grid alignment, glossary terms, mark highlights, footer links.


--Design System
- **Primitives**: raw color values, spacing units, font sizes.
- **Semantics**: background, text, accent colors mapped from primitives.
- **Spacing scale**: XS → XL (0.25rem → 1.5rem).
- **Typography**: font sizes (sm–xl), line-heights (tight–relaxed).
- **Border radius**: single token (--radius: 8px).


--Features
- **FAQ Section**: Expandable `<details>` elements using the browser’s native disclosure marker for open/closed state.
- **Skills Dashboard**: `<progress>` bars styled via CSS Grid for consistent label/bar/percent alignment, with visible percentage text for sighted users (hidden from screen readers since `<progress>` announces the value).
- **Glossary**: Semantic `<dl>` with custom abbreviation styling.
- **Header Highlights**: `<mark>` elements styled with accent highlight token.
- **Footer Links**: External links styled to match palette with hover states.


--Accessibility
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`).
- `<abbr>` with `title` attributes for clarity.
- `<progress>` elements expose values to assistive tech; visible percentage spans are `aria-hidden` to avoid redundancy.
- Color tokens chosen for contrast against dark background.


--Future Improvements
- Add responsive tweaks for mobile (flex/grid adjustments).
- Enhance interactivity (hover states for FAQ, glossary items).
- Expand skills dashboard with dynamic data.
