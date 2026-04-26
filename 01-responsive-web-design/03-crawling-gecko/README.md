Crawling Gecko

A pure HTML and CSS animated gecko that crawls across the screen.

-What it does
    A top-down gecko illustration built entirely with CSS, featuring a full body, four articulated legs with forearms and feet, and a diagonal gait crawling animation.

-Techniques used

    -border-radius to create organic body shapes including the body, head, tail, and limb segments

    -box-shadow to generate multiple toe pads and knuckle joints from single elements — avoiding the need for      dozens of extra HTML elements

    -transform: rotate() with transform-origin to position and animate each limb segment from its joint pivot point

    -@keyframes with percentage stops to create a pause in the leg swing cycle

    -animation-delay to offset diagonal leg pairs for a realistic gait

    -steps() timing function for the body crawl movement

-Challenges

    Getting the forearms to connect at the elbow rather than the shoulder was tricky — the key insight was understanding that transform-origin controls the pivot point, and that percentage-based positioning inside a rotated parent follows the parent's rotated coordinate system.

-What I learned
    
    CSS box-shadow can do far more than drop shadows — it can be used to clone and offset shapes, making it a powerful tool for complex illustrations without extra markup.