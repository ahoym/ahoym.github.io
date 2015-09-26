require('../sass/app.scss');

import React from 'react';

import Hero from './content/hero';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
