require('../sass/app.scss');

import React from 'react';

import Experience from './content/experience';
import Hero from './content/hero';
import scrollHook from 'simple-scroll-hook';


export default class App extends React.Component {
  componentDidMount() {
    scrollHook.start();
  }

  render() {
    return (
      <div>
        <Hero />
        <Experience />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
