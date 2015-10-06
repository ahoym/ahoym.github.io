import classnames from 'classnames';
import React from 'react';


export default class TechItem extends React.Component {
  render() {
    return (
      <li className='tech__item'>
        <div className='tech__category'>
          <p className='tech__list-title'>
            {this.props.techCategory.title}
          </p>
          <p className='tech__list-content'>
            {this.props.techCategory.items.join(', ')}
          </p>
        </div>
        <div className='tech__sprites'>
          {this.props.techCategory.items.map((item) => {
            let specificSprite = 'sprite--' + item.toLowerCase();
            let classes = classnames('sprite', specificSprite);
            return (<span key={specificSprite} className={classes}></span>);
          })}
        </div>
      </li>
    );
  }
}
TechItem.propTypes = {
  techCategory: React.PropTypes.object
};
