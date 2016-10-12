import React, {Component} from 'react'
import styles from '../../styles'
import Radium from 'radium'

class TTTSquare extends Component {
  constructor(props) {
    super(props)
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  handleSquareClick () {
    if (this.props.gameState === 'YOUR_TURN' && this.props.squareState === 'EMPTY') {
      let position = this.props.position
      this.props.submitMove(position)
    }
  }
  render() {
    return (
      <div
        style={[
          styles.square,
          (this.props.squareState !== 'EMPTY') ? styles[this.props.squareState] : null
        ]}
        onClick={this.handleSquareClick}
      />
    )
  }
}

TTTSquare = Radium(TTTSquare)

export default TTTSquare
