import React, {Component} from 'react'
import store from '../../store'

class Glitch extends Component {
  constructor(props) {
    super(props)
    this.message = this.props.message
    this.image = this.props.image
    this.hoverKey = this.props.hoverKey
    this.styles = this.props.styles
    this.setHoverElement = this.props.setHoverElement.bind(this)
    this.unhoverElement = this.props.unhoverElement.bind(this)
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  glitchStyle() {
    return {
      marginTop: this.getRandom(-3,3)+'px',
      marginLeft: this.getRandom(-3,3)+'px',
      color: 'rgb('+this.getRandom(0,255)+','+this.getRandom(0,255)+','+this.getRandom(0,255)+')',
      clip: 'rect('+this.getRandom(0,20)+'px, auto,'+this.getRandom(10,37)+'px, auto)',
      transition: 'margin 1s, clip 1s, color 1s',
    }
  }

  glitchImageStyle() {
    return {
      background: 'linear-gradient(rgba('+this.getRandom(0,255)+','+this.getRandom(0,255)+','+ this.getRandom(0,255)+', 0.45),rgba('+this.getRandom(0,255)+','+this.getRandom(0,255)+','+ this.getRandom(0,255)+', 0.45)), url('+this.image+')',
    }
  }

  baseSpan() {
    return (
      <span
        style={{
          position: 'flex',
          fontSize: '2em',
          zIndex: '3',
        }}
      >{this.message}</span>
    )
  }

  glitchSpan() {
    return (
      <span
        style={{
          position: 'absolute',
          fontSize: '2em',
          zIndex: '2',
          ...this.glitchStyle()
        }}
      >{this.message}</span>
    )
  }

  baseImage() {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: '5',
          height: '2em',
          width: '2em',
          backgroundImage: 'url('+this.image+')',
        }}
      />
    )
  }

  glitchImage() {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundImage: 'url('+this.image+')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: '4',
          height: '2em',
          width: '2em',
          ...this.glitchStyle(),
          ...this.glitchImageStyle()
        }}
      />
    )
  }

  renderImage() {
    if (this.hover()) {
      return ([
          this.baseImage(),
          this.glitchImage()
      ])
    }
  }

  hover() {

    const currentHoverElements = store.getState().ui.hoverElements
    const checkForElement = (existing, index, array) => {
      if(existing === this.hoverKey) {
        return true
      }
    }
    if (currentHoverElements.find(checkForElement)) {
      return true
    }
  }

  render(){
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          zIndex: 2,
        }}
        onMouseOver={() => this.setHoverElement('TIC')}
        onMouseLeave={() => this.unhoverElement('TIC')}
      >
      {this.baseSpan()}
      {this.glitchSpan()}
      {this.glitchSpan()}
      {this.glitchSpan()}
      {this.renderImage()}

      </div>
    )
  }
}

export default Glitch
