# portfolio

Portfolio for Nicholas Van Doorn

## Goals

1. Beautiful typography
1. Let the work/experience speak for itself
1. Small bundle
1. Responsive AF

## TODO

1. (style) Style `/cv` route such that PDF is usable

## Future Ideas

1. (build) Factor content into markdown/MDX files (basically anything that pulls the content away from the source code a bit more.)
1. (style) Design a splash screen with more art

## Testing

1. Google Lighthouse
1. A11y audit (`axe-core`?)
1. Typography audit (???)
1. Test on wide range of screens for consistent behaviour (???)

## Bugs

1. Loading page from URL does not apply `selected` css class to respective nav item (might be a Netlify related issue?)
1. Fonts on Windows do not look great, Linux story likely is not much better
1. Images and nav extends beyond container on really small viewport (iPhone 5)
1. "Selected" nav item uses same visual indicator as a normal link (confusing, inconsistent)
1. FontAwesome SVG sizing is not great (ideally it would change with text size)
