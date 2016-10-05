import React from 'react'
import styles from '../../styles'


function TTTSquare (props) {
  const handleSquareClick = () => {
    if (props.currentPlayerTurn === props.playerMark) {
      let position = props.position
      let mark = props.playerMark
      props.submitMove(position, mark)
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
