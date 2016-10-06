import React from 'react'

import styles from '../../styles'

import TTTSquare from './TTTSquare'


function TTTGrid(props) {
  function squareGenerator() {
    const tictactoeboard = props.boardState
    const squares = []
    // eslint-disable-next-line
    for (let square in tictactoeboard) {
      squares.push(
        <TTTSquare
          key={square}
          position={square}
          gameState={props.gameState}
          squareState={props.boardState[square]}
          submitMove={props.submitMove}
        />
      )
    }
    return squares
  }
  return (
    <div
      style={styles.board}
    >
      {squareGenerator()}
    </div>
  )
}

export default TTTGrid
