# 0.7.7
+ Use ES6 interpolation for class name constructions.
+ Always indent markup content for code clarity.
+ Remove stylesheet `import` from `nav-bar.js`. This was missed in the previous
   patch. Increase specificity of nav-bar class to implement intended display
   properties.

# 0.7.6
+ Use ES6 destructuring assignment for React component references.
+ Remove stylesheet `import`s from js files. Since stylesheets are bundled
   in a separate file anyway, they weren't really necessary. This also reduces
   the stylesheet bundle size because it removes nested scss imports for common
   styles. (Separate stylesheet enables browser cache-ing to do its thing)
+ Add an updated resume.   

# 0.7.5
+ Fix Hero section spacing for landscape mobile view.

# 0.7.4
+ Hide NavBar for mobile
+ Style improvements for mobile

# 0.7.3
+ Add resume to contact view, add and update tests.

# 0.7.2
+ Remove fontello cruft to make styles bundle smaller;
   only keep `woff` file for icons.

# 0.7.1
+ Limit app width in the `#app` container. This resolves an issue where a
   horizontal scroll bar would be introduced in larger screens.

# 0.7.0
+ Add NavBar and NavBtn react components, styles, specs.

# 0.6.2
+ Hide overflow of particle layers in deep-dive section.
+ Grammar fix in Experience section

# 0.6.1
+ Add media query induced style changes for mobile improvements
+ More spacing and text alignment for contact view.

# 0.6.0
+ Add Contact React component, styles, specs.
+ Add webpack loader for handling icon files (ttf, eot, svg, woff).
+ Add fontello, a specifically pruned down font-awesome.

# 0.5.1
+ `display: none;` code contributed repos when on mobile.

# 0.5.0
+ Prune and update content of Technology section.
  + Remove chai from "Front-end Testing". This leaves only testing frameworks
     and test runners in the section. It also narrows the sprite list.
  + Add babel to "Javascript Development" to show knowledge of ES6. This also
     expands the category sprite list to be a consistent.
  + Re-order categories so the categories with more sprites are focused top.
  + Add new spritesheet and .scss file to only have sprites that are used.
+ Code clean up and enforce consistency.
  + Alphabetize scss classes, modifiers, and their properties.
  + Consistent spacing in JS files and tests.
  + Consistent `import` structure in JS files. Imported assets are now at top.
+ Expand unit test coverage. Mock and test external libraries and their `args`.

# 0.4.0
+ Add AboutMe React component, styles, specs.
+ Change order of sections. AboutMe is now below Hero.
+ Change styles of sections, add transition classes.

# 0.3.1
+ Make DeepDive particles move away from mouse move on the Y-axis as well.

# 0.3.0
+ Add DeepDive React component, styles, specs. This section is purely CSS only
   but has high interactivity. Just a fun project to do and have.

# 0.2.2
+ Add interim picture between content

# 0.2.1
+ Add transition to last item in Technology section, make animation time longer.

# 0.2.0
+ Add Technology React component, styles, specs.
+ Make the colors across the website a little more consistent.

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
