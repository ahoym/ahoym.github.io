import '../../sass/hero.scss';

import React from 'react';


export default class Hero extends React.Component {
  render() {
    return (
      <section className='hero'>
        <div className='hero__content'>
          <h1 className='hero__name'>Malcolm Ahoy</h1>
          <h2 className='hero__title'>Web Application Developer.</h2>
          <button>Get to know me</button>
        </div>
      </section>
    );
  }
}
