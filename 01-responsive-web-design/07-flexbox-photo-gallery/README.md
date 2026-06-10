Five Harmonies — Flexbox Photo Gallery

    A themed photo gallery built as part of my Reimagined Coddy HTML & CSS Projects set. This is Project 07 in my responsive web   design learning path.

About the Project

    Five Harmonies is a spiritual gallery exploring five Eastern philosophical traditions — Taoism, Shinto, Neo-Confucianism, Buddhism, and Zen. Each tradition is represented by two images showing a seed-to-bloom progression: the first image introduces a core concept, the second builds on it.
    The ten gallery images were generated using AI image generation tools (Microsoft Copilot) by crafting detailed prompts specifying style, palette, composition, and aspect ratio. The visual style draws from Samurai Jack's bold ink-line structure combined with Studio Ghibli's atmospheric watercolour washes, with each tradition carrying its own dominant colour.

Tech Used

    -HTML5 (semantic elements: section, figure, figcaption)
    -CSS3 (Flexbox, media queries, CSS reset)

What I Learned:

    -Flexbox layout

    -Using display: flex and flex-wrap: wrap to create a responsive multi-column gallery
    -Understanding flex: grow shrink basis and how each value affects item sizing
    -Using justify-content: center to centre cards with breathing room on either side
    -Why * { box-sizing: border-box } is essential — padding was causing items to overflow their flex-basis width and preventing two columns from fitting on a row

Responsive design

    -Implemented a @media (max-width: 600px) breakpoint that switches the gallery from two cards per row to one card per row on mobile
    -Disabled the hover lift effect on mobile inside the same breakpoint since hover doesn't apply to touch devices

Images and object-fit

    -Using object-fit: cover with a fixed height on images to maintain consistent card proportions regardless of the source image dimensions
    -The difference between contain (letterboxes) and cover (fills and crops)

AI image generation

    -Prompting an AI model (Microsoft Copilot) to generate images with specific style references, colour palettes, composition briefs, and aspect ratios
    -Generating images one at a time for consistency rather than in pairs

Part of

    -my-dev-journey — a structured self-taught development path documenting progress from HTML & CSS through to JavaScript and beyond.