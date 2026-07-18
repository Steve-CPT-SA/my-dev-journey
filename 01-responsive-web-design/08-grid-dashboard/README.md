08-grid-dashboard — My Dev Journey Dashboard

A CSS Grid dashboard built as part of my Reimagined Coddy HTML & CSS Projects set. This is Project 08 in my responsive web design learning path.

About the Project

A personal dashboard showcasing my development journey so far. Built to demonstrate CSS Grid as a two-dimensional layout system using real content — not placeholder data.

The dashboard displays my project ladder (completed, in-progress, and planned), streaks across Coddy.tech, freeCodeCamp, and GitHub, skills and languages I am building on, certifications earned, and my goals and links to my profiles.

Tech Used

- HTML5 (semantic elements: header, main, section, article, aside, footer)
- CSS3
  - CSS Grid with named template areas and mobile-first responsive layout
  - Flexbox for internal article and details layout
  - Media queries for the desktop breakpoint
  - CSS custom properties for consistent theming
  - Focus and hover state styling for accessibility

What I Learned

CSS Grid

- Defining named grid areas with grid-template-areas and assigning elements using grid-area
- Why grid-template-rows needs to match the area order — not just the column definition
- The difference between height: 100vh and min-height: 100vh and why min-height is correct for content that may overflow a single viewport
- Mobile-first grid: writing the single-column default layout without a media query, then overriding with a two-column sidebar/main layout inside min-width: 992px

Flexbox inside Grid

- Using display: flex on article elements to place the project title and disclosure widget side by side on desktop
- Switching to flex-direction: column on mobile and flex-direction: row inside the media query — keeping layout decisions at the right breakpoint
- flex-grow: 0 on h3 to hold natural width, flex-grow: 1 on details to fill remaining space

Progressive Disclosure

- Using nested details and summary elements for two-level collapsible content
- details details { border: none } to remove the double-border problem when details elements are nested
- aside details vs details targeting — using descendant selectors to style sidebar widgets independently from project card disclosures

CSS Custom Properties

- Defining a design system in :root with semantic variable names (--bg-color, --bg-surface, --accent-blue, --accent-green)
- Using --accent-green for sidebar widget interactions to distinguish them from main content interactions styled with --accent-blue

Responsive Design

- Implemented a min-width: 992px breakpoint switching the layout from single-column mobile stack to a 250px sidebar beside a 1fr main area
- Moved article flex-direction into the same breakpoint rather than overriding it separately

Part of

my-dev-journey — a structured self-taught development path documenting progress from HTML & CSS through to JavaScript and beyond.