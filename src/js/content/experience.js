import '../../sass/experience.scss';

import React from 'react';


export default class Experience extends React.Component {
  render() {
    return (
      <section className='experience'>
        <div className='experience__companies'>
          <div>
            <h3>Experience</h3>
            <h4 className='experience__company'>Yola.com</h4>
            <div className='clearfix'>
              <span className='experience__title'>
                Web Application Developer
              </span>
              <span className='experience__duration'>
                June 2014 - September 2015
              </span>
            </div>
            <ul className='experience__duties'>
              <li>
                Converted confusing, legacy javascript IIFEs into modern,
                 well tested modules with browserify, mocha.js, and chai.js.
                 Models saved state with Object-oriented design in mind.
              </li>
              <li>
                Engineer and develop npm-installable javascript client-side
                 libraries, designed to request for and consume JSON APIs.
                 Performed AJAX requests with superagent.js, and in one case
                 when handling binary data (.mo files), native XMLHttpRequests.
                 This reduced code duplication across applications.
              </li>
              <li>
                Made blocking, synchronous rendering asynchronous with javascript
                 promises (specifically Q.js) and functional programming, which
                 made user experience better by displaying HTML elements faster.
              </li>
              <li>
                Led the integration of Segment, a customer data hub,
                 across all web applications. Allowed Yola to conglomerate data
                 collection and making integration of other
                 analytics tools easier.
              </li>
              <li>
                Developed automated dev and build tasks with Gulp.js
                 (or Grunt.js), making development for other engineers simpler.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
