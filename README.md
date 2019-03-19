# portfolio

Portfolio for Nicholas Van Doorn

## Goals

1. Beautiful typography
1. Let the work/experience speak for itself
1. Small bundle
1. Responsive AF

## TODO

1. (style) Design a simple splash screen (big bold impactful heading, nice on brand image)
1. (style) Responsive images
1. (content) Add links to tools on about page
1. (content) Compose BRNKL descriptions
1. (build) Write a build step to render a PDF from the `/cv` page
1. (style) Write components or theme for cv content
1. (style) Add colour to all FontAwesome icons

## Future Ideas

1. Factor content into markdown/MDX files (basically anything that pulls the content away from the source code a bit more.)
1. (style) Design a fucking stellar splash screen

## Testing

1. Google Lighthouse
1. A11y audit (`axe-core`?)
1. Typography audit (???)
1. Test on wide range of screens for consistent behaviour (???)

## Bugs

1. FontAwesome SVGs are huge on load (also a problem for making the CV PDF)
1. Loading page from URL does not apply `selected` css class to respective nav item (might be a Netlify issue?)
1. Fonts on Windows do not look great, Linux story likely is not much better
1. Nav extends beyond container on really small viewport (iPhone 5)
