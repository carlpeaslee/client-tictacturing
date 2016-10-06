import React, { Component } from 'react'
import { connect } from 'react-redux'
import {submitMove, checkGameState, requestNewMatch} from '../../actions/tictactoe'

import Radium from 'radium'
import styles from '../../styles'

import AlertBar from '../../components/AlertBar/AlertBar'

import TTTGrid from '../../components/TicTacToe/TTTGrid'





class TicTacToeContainer extends Component {

  render() {

    return (
      <div
        style={styles.centeredContainer}
      >
        <AlertBar
          gameState={this.props.gameState}
          requestNewMatch={this.props.requestNewMatch}
        />
        <TTTGrid
          boardState={this.props.boardState}
          gameState={this.props.gameState}
          submitMove={this.props.submitMove}
          currentPlayerTurn={this.props.currentPlayerTurn}
        />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    boardState: state.tictactoe.boardState,
    gameState: state.tictactoe.gameState,
    playerMark: state.tictactoe.playerMark,
    currentPlayerTurn: state.tictactoe.currentPlayerTurn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitMove: (position) => {
      dispatch(submitMove(position))
    },
    checkGameState: () => {
      dispatch(checkGameState())
    },
    requestNewMatch: () => {
      dispatch(requestNewMatch())
    },
  }
}

TicTacToeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToeContainer)


TicTacToeContainer = Radium(TicTacToeContainer)

export default TicTacToeContainer
