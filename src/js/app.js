require('../sass/app.scss');

import React from 'react';

import Experience from './content/experience';
import Hero from './content/hero';


export default class App extends React.Component {
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
