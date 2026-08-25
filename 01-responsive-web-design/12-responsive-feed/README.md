Featured Cards Feed

    A responsive card feed built with semantic HTML5 and modern CSS layout techniques. This project explores flexbox row variants and CSS Grid column spanning for featured posts.

Features

-Semantic HTML structure for clarity and maintainability.
-Responsive layouts:
   -Single‑column mobile feed.
   -Two‑column tablet grid.
   -Three‑column desktop grid with featured spans.
-Row‑layout variant (`.card--row`) for side‑by‑side media and content.
-Featured card variant (`.card--featured`) that spans multiple grid columns at larger breakpoints.-Image handling:
   -Default cards cap images at `300px`.
   -Featured cards override to fill available width.

CSS Highlights

-Flexbox for card internals (`.card--row`).
-CSS Grid for feed layout (`.feed`).
-Modifiers (`.card--row`, `.card--featured`) keep concerns separate and composable.
-Breakpoint rules:
   -`<600px`: single column, natural flow.
   -`600–899px`: two columns, featured behaves like normal.
   -`≥900px`: three columns, featured spans 2 tracks.

Design Decisions

-Max‑width override: Normal cards capped at `700px` for readability; featured cards remove the cap to fill their grid area.
-Image sizing: Featured cards expand images to match their larger footprint.
-Span logic: Featured treatment only applies at desktop, keeping tablet balanced.

Getting Started

1.Clone the my‑dev‑journey repo.
2.Navigate to `01-responsive-web-design/12-responsive-feed/`.
3.Open `index.html` in your browser.
4.Resize the viewport to see row‑layout and featured cards adapt across breakpoints.

Notes
This project is part of a learning lab:

-Row‑layout work focused on flexbox alignment and footer placement.
-Highlight‑zones lab introduced `grid-column: span` and variable sizing.
-Future stretch goal: experimenting with `grid-row: span` for taller featured posts.