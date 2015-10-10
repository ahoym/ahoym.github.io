import '../../sass/hero.scss';

import React from 'react';
import smoothScroll from 'smoothscroll';


export default class Hero extends React.Component {
  scrollToExperience(event) {
    event.preventDefault();

    let experienceSection = document.querySelector('section.about');
    smoothScroll(experienceSection, 1000);
  }

  render() {
    return (
      <section className='hero'>
        <div className='hero__content'>
          <h1 className='hero__name'>Malcolm Ahoy</h1>
          <h2 className='hero__title'>Web Application Developer.</h2>
          <button className='hero__btn'
                  onClick={this.scrollToExperience}>
            Get to know me
          </button>
        </div>
      </section>
    );
  }
}
