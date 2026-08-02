09 — Custom Property Design System Rebuild

    A rebuild of 05-signin-form using CSS custom properties throughout — 
    colour palette, spacing scale, and font sizes. Focus is CSS architecture, 
    not visual novelty.

What's different from 05

    Simplified the project, dropping the glassmorphism effect and floating 
    label technique in favour of standard placeholders — keeping the focus 
    on the token system rather than visual complexity.

Token Architecture

    -Two-tier color system:
     5 core primitives (raw values) feeding into 
     7 semantic tokens (role-based names like --card-bg, --text-primary). 
     Some semantic tokens deliberately share a primitive where the same 
     visual weight applies (e.g. border-color and text-secondary both 
     reference the same gray)

    -Flat spacing scale:
     8 rem-based spacing tokens (--space-1 to --space-8). 
     Kept flat rather than two-tier, since a spacing value's number is 
     already its meaning — there's no separate "raw" layer needed

    -Fluid type scale:
     3 font-size tokens using clamp() for responsive 
     sizing without media queries (h1, body, small)

    -Applied mobile-first:
     base styles carry the full token-driven look; 
     media queries only adjust values (padding, max-width) rather than 
     introduce new properties at larger breakpoints

Skills practised

    -CSS architecture, custom property design, two-tier token systems, 
     mobile-first responsive scaling

Planned additions

    -None — this is a completed rebuild exercise