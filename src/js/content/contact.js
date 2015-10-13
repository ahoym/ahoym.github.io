import '../../sass/contact.scss';

import React from 'react';
import scrollHook from 'simple-scroll-hook';


export default class Contact extends React.Component {
  componentDidMount() {
    let contactContent = this.refs.contactContent.getDOMNode();
    let contactMethods = this.refs.contactMethods.getDOMNode();

    scrollHook
      .register(contactContent, {
        initialStates: 'hidden',
        finalStates: 'slide-up'
      })
      .register(contactMethods, {
        initialStates: 'hidden',
        finalStates: 'slide-in-right'
      });
  }

  render() {
    let contactMethods = this.props.contactMethods.map((method) => {
      let contactClass = 'contact__' + method.site.toLowerCase();
      let contactLink = contactClass + '-link';

      return (
        <li key={method.site} className={contactClass}>
          <a href={method.link} className={contactLink}>{method.site}</a>
        </li>
      );
    });

    return (
      <section className='contact'>
        <div className='contact__content hidden' ref='contactContent'>
          <h1 className='common__section-title'>Contact Me</h1>
          <ul className='contact__methods hidden' ref='contactMethods'>
            {contactMethods}
          </ul>
        </div>
      </section>
    );
  }
}
Contact.propTypes = {
  contactMethods: React.PropTypes.array
};
Contact.defaultProps = {
  contactMethods: [
    {
      site: 'Github',
      link: 'https://github.com/ahoym'
    },
    {
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/pub/malcolm-ahoy/78/909/a41'
    },
    {
      site: 'Email',
      link: 'malcolmahoy@gmail.com'
    }
  ]
};
