import React from 'react';
import smoothScroll from 'smoothscroll';


export default class NavBtn extends React.Component {
  handleClick(event) {
    event.preventDefault();

    let sectionSelector = `section.${this.props.section}`;
    let sectionEl = document.querySelector(sectionSelector);

    smoothScroll(sectionEl, 1000);
  }

  render() {
    return (
      <li onClick={this.handleClick.bind(this)}>
        <p>{this.props.title}</p>
      </li>
    );
  }
}

NavBtn.propTypes = {
  title: React.PropTypes.string,
  section: React.PropTypes.string
};
