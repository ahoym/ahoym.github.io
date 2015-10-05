# 0.1.4
+ Add `simple-scroll-hook`, a library for making scroll transitions simpler.
+ Add fade-in, slide-up transition for experience text.

# 0.1.3
+ Summarize experience at Yola more succinctly
+ Flexbox the #app containing div, as well as the company title/duration.

# 0.1.2
+ Add `<meta>` tag for viewport, for responsive mobile improvements.
+ Add favicon

# 0.1.1
+ Make the 'Get to know me' button in the Hero section to smooth scroll
  to my experience section.
+ Add `smoothscroll` npm package. I helped this library become
  `npm install`-able and allows jQuery-less smooth scroll transitions
+ Add click handler for Hero component button, and test to confirm it.

# 0.1.0
+ Add Experience React component, styles, spec.

# 0.0.1
+ Add configurations for everything:
  + `npm`
  + `eslint`
  + `git`
  + Webpack
  + React
  + Jest
+ Add webpack loaders for:
  + Babel   - For ES6 syntax
  + css     - For bundling CSS and sourcemaps
  + sass    - For SASS syntax
  + postcss - For auto vendor prefixing (last 2 versions of all browsers)
  + file    - For porting and hashing assets
+ Add Hero (it's a marketing term, I don't know why) React component
  + Add associated styles. SASS written with the BEM methodology for
     consistency and semantic meaning for classes.
  + Add simple jest test.


### Nota Bene
Yes, I know versioning is usually for libraries that you can download, but
this I'm making this as a personal log of changes. The versions correspond
to when a new bundle is built (basically when a new /public is made), not
necessarily when each change happens.
