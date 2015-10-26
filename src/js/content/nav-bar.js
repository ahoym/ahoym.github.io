import React from 'react';
import scrollHook from 'simple-scroll-hook';

import NavBtn from './nav-btn';


export default class NavBar extends React.Component {
  componentDidMount() {
    let { navBar } = this.refs;

    // Update progress bar according to scroll position
    document.addEventListener('scroll', this.updateProgressBar.bind(this));

    scrollHook.register(navBar.getDOMNode(), {
      finalStates: [ 'pop-up', 'display' ],
      position: window.innerHeight + 10
    });
  }

  updateProgressBar() {
    let { progressBar } = this.refs;
    let appHeight = document.body.offsetHeight;
    let windowBottom = window.pageYOffset + window.innerHeight;
    let scrollPercentage = windowBottom / appHeight;

    progressBar.getDOMNode().setAttribute('value', scrollPercentage);
  }

  render() {
    return (
      <nav className='nav-bar' ref='navBar'>
        <progress value='0' ref='progressBar'></progress>
        <ul className='nav-bar__sections'>
          <NavBtn title='Intro' section='hero' />
          <NavBtn title='About Me' section='about' />
          <NavBtn title='Underwater' section='dive' />
          <NavBtn title='Experience' section='experience' />
          <NavBtn title='Twilight Zone' section='deep-dive' />
          <NavBtn title='Technologies' section='tech' />
          <NavBtn title='Contact Me' section='contact' />
        </ul>
      </nav>
    );
  }
}
