import '../../sass/tech.scss';
import '../../sass/sprites.scss';

import React from 'react';
import scrollHook from 'simple-scroll-hook';

import TechItem from './tech-item';


export default class Tech extends React.Component {
  componentDidMount() {
    let techContent = this.refs.techContent.getDOMNode();
    let techList = this.refs.techList.getDOMNode();

    scrollHook.register(techContent, {
      initialStates: 'hidden',
      finalStates: 'slide-up'
    })
    .register(techList, { finalStates: 'animation--stagger-in' });
  }

  render() {
    let techCategories = this.props.categories.map((category) => {
      return (<TechItem key={category.title} techCategory={category} />);
    });

    return (
      <section className='tech'>
        <div className='tech__content hidden' ref='techContent'>
          <h3 className='common__section-title'>Technologies</h3>
          <ul className='tech__list' ref='techList'>
            {techCategories}
          </ul>
        </div>
      </section>
    );
  }
}
Tech.propTypes = {
  categories: React.PropTypes.array
};
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
      title: 'Javascript Development',
      items: [ 'babel', 'webpack', 'browserify', 'gulp', 'grunt' ]
    },
    {
      title: 'Front-end Testing Libraries',
      items: [ 'karma', 'mocha', 'jasmine', 'jest' ]
    },
    {
      title: 'Front-end MV*',
      items: [ 'Backbone', 'React' ]
    },
    {
      title: 'Back-end Frameworks',
      items: [ 'Rails', 'Django' ]
    }
  ]
};
