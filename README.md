# My (Malcolm Ahoy's) Personal Website

## Major Technologies Used
+ [webpack][webpack] for module bundling and devlopment.
+ [babel][babel] for ES6 goodness.
+ [React][React] for views, and component specific event handling.
+ [Jest][Jest] for testing React components.
+ [SASS][SASS] for more powerful CSS class declarations.
  + Used [BEM][BEM] methodology for for structured naming of CSS classes.
+ [autoprefixer][autoprefixer] for automatic vendor-prefixing CSS.

Libraries used:
+ [smoothScroll][smoothScroll] for smoothScroll animation from button press.
+ [simple-scroll-hook][s-s-h] for all the animations linked to scrolling.

[webpack]: https://webpack.github.io/
[babel]: https://babeljs.io/
[React]: https://facebook.github.io/react/
[Jest]: https://facebook.github.io/jest/
[SASS]: http://sass-lang.com/
[BEM]: https://en.bem.info/method/
[autoprefixer]: https://github.com/postcss/autoprefixer
[smoothScroll]: https://github.com/alicelieutier/smoothScroll/
[s-s-h]: https://github.com/ahoym/simple-scroll-hook


## Changelog
The [CHANGELOG.md][CHANGELOG] has history of this website's progression.

[CHANGELOG]: https://github.com/ahoym/ahoym.github.io/blob/master/CHANGELOG.md


## Reflections
I had a lot of fun creating this site from scratch. It was a good learning experience to tinker with webpack, its various loaders, and React. This also let me sharpen my CSS3 skills while trying out BEM naming. Here are my thoughts and first experiences with some key technologies that I used:


##### On ES6
I'm positively sure I haven't used all of what ES6 offers, but I really like it from what I've seen. The first thing I noticed was how clean javascript becomes after using syntactic sugar like arrow functions, ES6 `class`es, and functions within those classes. There were a lot of times when out of habit I would type out `function()` for callbacks and such, only to realize they weren't needed anymore.

The introductions of `const` and `let` are great since it makes you really think about the scope of the variable you're declaring. I understand the difference between the two, but I'm interested in the semantics that companies use in production.

The new `import` and `export` syntax is pretty sweet. Having the ability to export multiple objects from a module, and selectively importing does wonders for code clarity. Before, I remember having multiple lines for importing functions of one module. Now, they can be done in one.

I think the features I like the most are destructuring and spreading. Not only because they reduce replication of boiler plate code, but I think they also allowed me to think about solutions to problems that I normally wouldn't have. Had I implemented them in ES5, the solution would have been hard to read and difficult to explain.


#### On Webpack
Webpack is automagical to me. I'm used to writing grunt/gulp tasks, which intimately take you into the trenches of knowing exactly what you're doing each step. My other side-project - which I've benched for now - uses gulp and its [gulpfile][gulpfile] is already 100+ lines long and it doesn't even handle production builds yet. Meanwhile, my current `webpack.config` is only about 60 lines long and it handles dev *and* production builds. Crazy!

A lot of it has to do with webpack loaders. All the heavy work that I would have coded myself inside gulp tasks is already done through them. The only thing that I have to do is write a regex for the files to apply the loader to, and that's it.

I really like webpack for its convenience, and will probably use it in the future over gulp. However I do this knowingly that I'll lose an important benefit that gulp has over webpack: customizability. In gulp, if I wanted to do a very specific step or task, I would figure out how to do it, convert it into a stream (if it wasn't one already), and insert it into my gulp chain. In webpack, you surrender all that control to the maintainers of your loaders.

[gulpfile]: https://github.com/ahoym/ahoymal/blob/9e11a9c8d635c5aa17b0ffa621aeee28edebf0ce/gulpfile.js


#### On React and Jest
In combination with webpack, React makes code more compact, organized, and sensible. Each component essentially scopes a specific cluster of HTML, which may have specific javascript targeted at these elements. With webpack, you can take it a step further and import stylesheets and assets specific to the HTML classes held in a component. Once I got used to the React syntax, it felt like components were LEGO blocks - able to fit in with each other flawlessly, interchangeably, and effortlessly.

Using React for this website may have been a little overkill, but I did it because I wanted to play around with the library and get comfortable with its syntax. I've read a great deal about it and maybe in the near future I'll be able to use React and a Flux implementation (redux looks awesome) to their full capabilities.

I'm still getting used to Jest. I only say this because for a website this simple, I haven't had to test anything too complex. I've written some really crazy unit and integration tests with the combination of mocha, chai, and sinon at my old job, and I'm really curious how I would approach the same tests with Jest. It's a weird transition from having to blacklist modules (with sinon mocks), to having to whitelist them. I like that this library forces you to write and think about everything as units, since everything is mocked out by default.


#### On SASS and BEM
SASS was very similar to LESS, which I've used before so I don't have much to say about it.

This is my second time using the BEM methodology of CSS class naming. BEM is great if you've never followed a structured system for naming before. I immediately noticed my CSS classes were drastically slimmer and I didn't deeply cascade styles which often happens with highly nested elements. Slimmer classes resulted in more `@extend`ables, and DRYer CSS which I always struggled with.
