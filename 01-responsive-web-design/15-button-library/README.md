Button Component Demo

Overview
    A demo showcasing a button component library with semantic HTML and accessible states. Open index.html in any browser to view the grid of buttons.

File Structure
    The project uses four CSS files: tokens.css, base.css, variants.css, and demo.css. Splitting them makes the system easier to manage and extend. The brief suggested one file, but this separation was a deliberate choice for clarity.

Token Layers
    Tokens are organized into primitives (palette, spacing, radius, typography) and semantic tokens (button background, foreground, borders). Slots like --btn-hover-bg and --btn-active-bg let variants plug in their own values consistently.

States
    Hover, active, and focus-visible are shown in the demo grid using is-* classes (is-hover, is-active, is-focus). Disabled and loading states are set with the disabled attribute and aria-busy="true".

Usage
    Every button must wrap its text in a .btn__label span so the sliding fill sits behind it.
    Example:
        <button type="button" class="btn btn--primary">
        <span class="btn__label">Click me</span>
        </button>

    A loading button adds a spinner and hidden text:
        <button type="button" class="btn btn--primary" disabled aria-busy="true">
        <span class="btn__label">Submit</span>
        <span class="btn__spinner" aria-hidden="true"></span>
        <span class="visually-hidden">Loading…</span>
        </button>

Accessibility

    Visible focus ring on all variants (confirmed by tabbing through the demo).

    Reduced-motion handling removes transitions and spinner rotation.

    Hidden “Loading…” text adds that word to the button’s accessible name; this has not been tested with a screen reader.

    Native disabled attribute is used deliberately: disabled buttons leave the tab order.

    Known Limitations

    Loading buttons are wider than the rest, since no space is reserved for the spinner.

    A real app must set disabled and aria-busy when loading starts — this library only styles them.

    Contrast is estimated, not fully audited. Secondary’s border is the weak spot (roughly 2.5:1 by estimate).

    Sizes are not included.

    Disabled buttons leave the tab order (trade-off of native disabled).