import largeParticleLayer from '../../assets/img/large-particles.png';
import medParticleLayer from '../../assets/img/med-particles.png';
import smallParticleLayer from '../../assets/img/small-particles.png';

import React from 'react';


export default class DeepDive extends React.Component {
  componentDidMount() {
    let { deepDiveSection, largeLayer, medLayer, smallLayer } = this.refs;

    let diveElDimensions = deepDiveSection.getDOMNode().getBoundingClientRect();
    let diveElCenter = diveElDimensions.width / 2;

    this.setState({
      center: diveElCenter,
      largeLayer: largeLayer.getDOMNode(),
      medLayer: medLayer.getDOMNode(),
      smallLayer: smallLayer.getDOMNode()
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
            <img src={largeParticleLayer} alt='large particle layer'/>
          </li>
          <li className='deep-dive__med-particles' ref='medLayer'>
            <img src={medParticleLayer} alt='medium particle layer'/>
          </li>
          <li className='deep-dive__small-particles' ref='smallLayer'>
            <img src={smallParticleLayer} alt='small particle layer'/>
          </li>
        </ul>
      </section>
    );
  }
}
