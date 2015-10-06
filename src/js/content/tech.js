import '../../sass/tech.scss';
import '../../sass/sprites.scss';

import React from 'react';
import scrollHook from 'simple-scroll-hook';

import TechItem from './tech-item';


export default class Tech extends React.Component {
  componentDidMount() {
    let techContent = React.findDOMNode(this.refs.techContent);
    let techList = React.findDOMNode(this.refs.techList);

    scrollHook.register(techContent, {
      initialStates: 'hidden',
      finalStates: 'slide-up'
    })
    .register(techList, { finalStates: 'animation--stagger-in' });
  }

  render() {
    return (
      <section className='tech'>
        <div className='tech__content hidden' ref='techContent'>
          <h3 className='common__section-title'>Technologies</h3>
          <ul className='tech__list' ref='techList'>
            {this.props.categories.map((category) => {
              return (<TechItem key={category.title}
                                techCategory={category} />);
            })}
          </ul>
        </div>
      </section>
    );
  }
}
Tech.propTypes = { categories: React.PropTypes.array };
Tech.defaultProps = {
  categories: [
    {
      title: 'Languages',
      items: [ 'Javascript', 'Ruby', 'Python' ]
    },
    {
      title: 'Markup and Styling',
      items: [ 'HTML5', 'CSS3', 'SASS', 'LESS' ]
    },
    {
      title: 'Back-end Frameworks',
      items: [ 'Rails', 'Django' ]
    },
    {
      title: 'Front-end Frameworks',
      items: [ 'Backbone', 'React' ]
    },
    {
      title: 'Front-end Testing Libraries',
      items: [ 'karma', 'mocha', 'chai', 'jasmine', 'jest' ]
    },
    {
      title: 'Javascript Development',
      items: [ 'webpack', 'browserify', 'gulp', 'grunt' ]
    }
  ]
};
