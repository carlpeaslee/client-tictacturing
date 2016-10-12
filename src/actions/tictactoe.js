// import fetch from 'isomorphic-fetch'
import store from '../store'
import { socketUrl} from '../config'
import io from 'socket.io-client';

const socket = io.connect(socketUrl)

export const INITIAL_STATE = {
  boardState: {
    0: 'EMPTY',
    1: 'EMPTY',
    2: 'EMPTY',
    3: 'EMPTY',
    4: 'EMPTY',
    5: 'EMPTY',
    6: 'EMPTY',
    7: 'EMPTY',
    8: 'EMPTY'
  },
  playerMark: null,
  gameState: 'AWAITING_READY_ACTION',
  playerId: null,
  matchId: null
}

export const RECORD_MOVE = "RECORD_MOVE"

export function recordMove(position, playerId) {
  let state = store.getState().tictactoe
  let newBoardState = {
    ...state.boardState
  }

  const mark = (playerId === state.playerId) ? state.playerMark : state.opponentMark

  newBoardState[position] = mark
  const nextPlayerTurn = (playerId === state.playerId) ? 'WAITING_FOR_OPPONENT_MOVE' : 'YOUR_TURN'

  return {
    type: RECORD_MOVE,
    boardState: newBoardState,
    gameState: nextPlayerTurn
  }
}

export const SUBMIT_MOVE = "SUBMIT_MOVE"

export function submitMove(position) {
  return function (dispatch) {
    const tictactoeState = store.getState().tictactoe
    const matchId = tictactoeState.matchId
    const playerId = tictactoeState.playerId

    socket.emit('moveMade', {
      matchId,
      position,
      playerId
    })
  }
}

export const SUBMIT_TURING_TEST = "SUBMIT_TURING_TEST"

export function submitTuringTest(robotGuess) {
  return function (dispatch) {
    const tictactoeState = store.getState().tictactoe
    const matchId = tictactoeState.matchId
    const playerId = tictactoeState.playerId

    socket.emit('turingGuess', {
      matchId,
      playerId,
      robotGuess
    })
    dispatch(startOver())
  }
}

export const START_OVER = "START_OVER"

export function startOver() {

  return {
    type: START_OVER,
    ...INITIAL_STATE,
    gameState: 'AWAITING_READY_ACTION'
  }
}

export const REQUEST_NEW_MATCH = 'REQUEST_NEW_MATCH'

export function requestNewMatch() {

  return function (dispatch) {
    dispatch(lookForMatch())

    socket.emit('matchReqest')

    socket.on('waitingRoomFound', (data) => {
      let playerId = data.player1
      let waitingRoomId = data.roomId
      dispatch(waitingRoomFound(playerId, waitingRoomId))
    })

    socket.on('matchFound', (data) => {
      let matchId = data.roomId
      let playerId = data.player2
      dispatch(matchFound(matchId, playerId))
    })

    socket.on('opponentFound', (data) => {
      let matchId = data.roomId
      let player1 = data.player1
      dispatch(opponentFound(matchId, player1))
    })

    socket.on('moveRecorded', (data)=>{
      let position = data.position
      let playerId = data.playerId
      dispatch(recordMove(position, playerId))
    })

    socket.on('winner', (data) => {
      const winner = data.winner
      const locationOfWin = data.locationOfWin
      if(locationOfWin === 'TIE') {
        dispatch(recordTie())
      } else {
        dispatch(recordWinner(winner, locationOfWin))
      }
    })

    socket.on('opponentDisconnected', () =>{

      dispatch(opponentDisconnected())
    })

  }
}

export const RECORD_TIE = 'RECORD_TIE'
export function recordTie() {
  return {
    type: RECORD_TIE,
    gameState: 'TIE'
  }
}


export const OPPONENT_DISCONNECTED = 'OPPONENT_DISCONNECTED'
export function opponentDisconnected() {
  return {
    type: OPPONENT_DISCONNECTED,
    ...INITIAL_STATE,
    gameState: 'OPPONENT_DISCONNECTED'
  }
}

export const RECORD_WINNER = 'RECORD_WINNER'
export function recordWinner(winner, locationOfWin) {
  const playerId = store.getState().tictactoe.playerId
  const gameState = (playerId === winner) ? 'YOU_WON' : 'YOU_LOST'
  return {
    type: RECORD_WINNER,
    gameState,
    locationOfWin
  }
}

export const LOOK_FOR_MATCH = 'LOOK_FOR_MATCH'
export function lookForMatch() {
  return {
    type: LOOK_FOR_MATCH,
    gameState: 'LOOKING_FOR_MATCH',
    locationOfWin: null,
    boardState: {
      ...INITIAL_STATE.boardState
    }
  }
}

export const WAITING_ROOM_FOUND = 'WAITING_ROOM_FOUND'
export function waitingRoomFound(playerId, waitingRoomId) {
  return {
    type: WAITING_ROOM_FOUND,
    gameState: 'LOOKING_FOR_OPPONENT',
    playerId,
    waitingRoomId
  }
}

export const MATCH_FOUND = 'MATCH_FOUND'
export function matchFound(matchId, playerId) {
  return {
    type: MATCH_FOUND,
    waitingRoomId: null,
    gameState: 'MATCH_FOUND',
    matchId,
    playerId,
  }
}

export const OPPONENT_FOUND = 'OPPONENT_FOUND'
export function opponentFound(matchId, player1) {
  const playerId = store.getState().tictactoe.playerId
  const firstMove = (player1 === playerId ) ? true : false
  const gameState = firstMove ? 'YOUR_TURN' : "WAITING_FOR_OPPONENT_MOVE"
  const playerMark = firstMove ? 'X' : 'O'
  const opponentMark = !firstMove ? 'X' : 'O'
  return {
    type: OPPONENT_FOUND,
    matchId,
    firstMove,
    gameState,
    playerMark,
    opponentMark,
  }
}
