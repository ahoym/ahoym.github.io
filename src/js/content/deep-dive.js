import '../../sass/deep-dive.scss';

import React from 'react';


import largeParticleLayer from '../../assets/img/large-particles.png';
import medParticleLayer from '../../assets/img/med-particles.png';
import smallParticleLayer from '../../assets/img/small-particles.png';


export default class DeepDive extends React.Component {
  componentDidMount() {
    let diveEl = this.refs.deepDiveSection.getDOMNode();
    let diveElDimensions = diveEl.getBoundingClientRect();
    let diveElCenter = diveElDimensions.width / 2;

    this.setState({
      center: diveElCenter,
      largeLayer: this.refs.largeLayer.getDOMNode(),
      medLayer: this.refs.medLayer.getDOMNode(),
      smallLayer: this.refs.smallLayer.getDOMNode()
    });
  }

  computeMouseDeltas(mouseX, mouseY) {
    let particleDeltaX = (this.state.center - mouseX) / 30;
    let particleDeltaY = -(mouseY - window.innerHeight / 2) / 10;

    return [ particleDeltaX, particleDeltaY ];
  }

  moveLayer(mouseDeltas, magnitude) {
    let [ deltaX, deltaY ] = mouseDeltas;
    let layerDeltaX = deltaX * Math.pow(magnitude, 2);
    let layerDeltaY = deltaY * magnitude;

    return `translate3d(${layerDeltaX}px, ${layerDeltaY}px, 0px)`;
  }

  mouseUpdate(event) {
    event.preventDefault();
    let mouseDeltas = this.computeMouseDeltas(event.clientX, event.clientY);

    this.state.largeLayer.style.transform = this.moveLayer(mouseDeltas, 1.75);
    this.state.medLayer.style.transform = this.moveLayer(mouseDeltas, 2.5);
    this.state.smallLayer.style.transform = this.moveLayer(mouseDeltas, 3.25);
  }

  render() {
    return (
      <section className='deep-dive' ref='deepDiveSection'
               onMouseMove={this.mouseUpdate.bind(this)}>
        <ul className='deep-dive__particles'>
          <li className='deep-dive__large-particles' ref='largeLayer'>
            <img src={largeParticleLayer}
                 alt='large particle layer'/>
          </li>
          <li className='deep-dive__med-particles' ref='medLayer'>
            <img src={medParticleLayer}
                 alt='medium particle layer'/>
          </li>
          <li className='deep-dive__small-particles' ref='smallLayer'>
            <img src={smallParticleLayer}
                 alt='small particle layer'/>
          </li>
        </ul>
      </section>
    );
  }
}
