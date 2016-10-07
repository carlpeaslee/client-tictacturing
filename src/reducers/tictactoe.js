import {INITIAL_STATE, RECORD_MOVE, LOOK_FOR_MATCH, WAITING_ROOM_FOUND, MATCH_FOUND, OPPONENT_FOUND, RECORD_WINNER, RECORD_TIE, OPPONENT_DISCONNECTED} from '../actions/tictactoe'

function tictactoe(state = {...INITIAL_STATE}, action) {
  switch (action.type) {
    case OPPONENT_DISCONNECTED: {
      return {
        ...state,
        boardState: action.boardState,
        playerMark: action.playerMark,
        playerId: action.playerId,
        matchId: action.matchId,
        gameState: action.gameState
      }
    }
    case RECORD_WINNER: {
      return {
        ...state,
        locationOfWin: action.locationOfWin,
        gameState: action.gameState
      }
    }
    case RECORD_TIE: {
      return {
        ...state,
        gameState: action.gameState
      }
    }
    case RECORD_MOVE: {
      return {
        ...state,
        boardState: action.boardState,
        gameState: action.gameState
      }
    }
    case LOOK_FOR_MATCH: {
      return {
        ...state,
        gameState: action.gameState,
        locationOfWin: action.locationOfWin
      }
    }
    case WAITING_ROOM_FOUND: {
      return {
        ...state,
        gameState: action.gameState,
        playerId: action.playerId,
        waitingRoomId: action.waitingRoomId
      }
    }
    case MATCH_FOUND: {
      return {
        ...state,
        gameState: action.gameState,
        waitingRoomId: action.waitingRoomId,
        matchId: action.matchId,
        playerId: action.playerId
      }
    }
    case OPPONENT_FOUND: {
      return {
        ...state,
        matchId: action.matchId,
        gameState: action.gameState,
        firstMove: action.firstMove,
        playerMark: action.playerMark,
        opponentMark: action.opponentMark,
      }
    }
    default: {
      return state
    }
  }
}

export default tictactoe
