import {INITIAL_STATE, RECORD_MOVE} from '../actions/tictactoe'

function tictactoe(state = {...INITIAL_STATE}, action) {
  switch (action.type) {
    case RECORD_MOVE: {
      let newBoardState = {
        ...state.boardState
      }
      newBoardState[action.position] = action.mark
      const nextPlayerTurn = () => {
        if (state.currentPlayerTurn === 'X') {
          return 'O'
        } else {
          return 'X'
        }
      }
      return {
        ...state,
        boardState: newBoardState,
        currentPlayerTurn: nextPlayerTurn()
      }
    }
    default: {
      return state
    }
  }
}

export default tictactoe
