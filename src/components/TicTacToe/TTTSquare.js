import React from 'react'
import styles from '../../styles'


function TTTSquare (props) {
  const handleSquareClick = () => {
    if (props.gameState === 'YOUR_TURN') {
      let position = props.position
      props.submitMove(position)
    }
  }
  return (
    <div
      style={styles.square}
      onClick={handleSquareClick}
    >
      <p>
        {props.squareState}
      </p>
    </div>
  )
}


export default TTTSquare
