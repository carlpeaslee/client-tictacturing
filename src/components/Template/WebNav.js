import React, {Component} from 'react'
import Glitch from './Glitch'
import theme from '../../styles/theme'

import {menu, tic, tac, turing, titleContainer} from './webNavStyles'

class WebNav extends Component {
  constructor(props) {
    super(props)
    this.setHoverElement = this.props.setHoverElement.bind(this)
    this.unhoverElement = this.props.unhoverElement.bind(this)
    this.hoverElements = this.props.hoverElements
  }


  render() {

    return (
      <menu
        style={{...menu.all}}
        onMouseOver={() => this.setHoverElement('WEB_MENU')}
        onMouseLeave={() => this.unhoverElement('WEB_MENU')}
      >
        <div
          style={{...titleContainer.all}}
        >
          <Glitch
            message={'Tic'}
            image={theme.xImg}
            styles={tic}
            hoverKey={'TIC'}
            setHoverElement={this.setHoverElement}
            unhoverElement={this.unhoverElement}
          />

          <h1
            style={{...tac.all}}
            onMouseOver={() => this.setHoverElement('TAC')}
            onMouseLeave={() => this.unhoverElement('TAC')}
          >
            Tac
          </h1>
          <h1
            style={{...turing.all}}
            onMouseOver={() => this.setHoverElement('TURING')}
            onMouseLeave={() => this.unhoverElement('TURING')}
          >
            Turing
          </h1>
        </div>
        {/* <nav>
          <Link
            to={'/about'}
          >
            About
          </Link>
        </nav> */}
      </menu>
    )
  }
}

export default WebNav
