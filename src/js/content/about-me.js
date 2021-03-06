import me from '../../assets/img/ahoym.jpg';

import React from 'react';
import scrollHook from 'simple-scroll-hook';


export default class AboutMe extends React.Component {
  componentDidMount() {
    let { aboutContent, picture, description, contributions } = this.refs;

    scrollHook
      .register(aboutContent.getDOMNode(), {
        initialStates: 'hidden',
        finalStates: 'slide-up'
      })
      .register(picture.getDOMNode(), {
        initialStates: 'hidden',
        finalStates: 'slide-in-right'
      })
      .register(description.getDOMNode(), {
        initialStates: 'hidden',
        finalStates: 'about--stagger-in-p'
      })
      .register(contributions.getDOMNode(), {
        initialStates: 'hidden',
        finalStates: 'slide-up'
      });
  }

  renderOssContributions() {
    return this.props.contributions.map(contribution =>
        <li key={contribution.link}>
          <a href={contribution.link}>
            {contribution.repo}
          </a>
        </li>
    );
  }

  render() {
    let ossContributions = this.renderOssContributions();

    return (
      <section className='about'>
        <div className='about__content hidden' ref='aboutContent'>
          <h3 className='common__section-title'>
            About Me
          </h3>
          <div className='about__me'>
            <div className='about__picture hidden' ref='picture'>
              <img src={me} alt='Malcolm Ahoy' />
            </div>
            <div className='about__bio hidden' ref='description'>
              <p>
                Hi, I’m Malcolm. I like learning cool stuff.
              </p>
              <p>
                In my free time, I play video games, basketball, and
                 piano. I frequent reddit and read /r/javascript daily.
              </p>
              <p>
                When it comes to programming, the most relatable and truthful
                 advice I‘ve ever read was:
              </p>
              <p className='about__mantra'>
                "It's harder to read code than to write it."
              </p>
              <p>
                I’ve made this quote my mantra, and try to make my code as
                 simple and self-descriptive as possible. I think it encourages
                 code to be much more digestable, easier to unit test, and often
                 the simplest solution turns out to be the best one.
              </p>
              <p className='hide-when-mobile'>
                Here are a few repos I’ve made code contributions to:
              </p>
              <ul className='about__contributions hide-when-mobile hidden'
                  ref='contributions'>
                {ossContributions}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AboutMe.propTypes = {
  contributions: React.PropTypes.array
};
AboutMe.defaultProps = {
  contributions: [
    {
      repo: 'Node',
      link: 'https://github.com/nodejs/node/commits/master?author=ahoym'
    },
    {
      repo: 'smoothScroll',
      link: 'https://github.com/alicelieutier/smoothScroll/commits/master?author=ahoym'
    },
    {
      repo: 'qwerty-hancock',
      link: 'https://github.com/stuartmemo/qwerty-hancock/commits/master?author=ahoym'
    }
  ]
};
