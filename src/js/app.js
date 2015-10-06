require('../sass/app.scss');

import React from 'react';
import scrollHook from 'simple-scroll-hook';

import Experience from './content/experience';
import Hero from './content/hero';
import Tech from './content/tech';


export default class App extends React.Component {
  componentDidMount() {
    scrollHook.start();
  }

  render() {
    return (
      <div>
        <Hero />
        <Experience />
        <section className='dive'></section>
        <Tech />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
