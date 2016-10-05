import fetch from 'isomorphic-fetch'
import store from '../store'
import {apiUrl, fetchOptions} from '../config'

export const INITIAL_STATE = {
  boardState: {
    TOP_LEFT: 'EMPTY',
    TOP_CENTER: 'EMPTY',
    TOP_RIGHT: 'EMPTY',
    MID_LEFT: 'EMPTY',
    MID_CENTER: 'EMPTY',
    MID_RIGHT: 'EMPTY',
    BOT_LEFT: 'EMPTY',
    BOT_CENTER: 'EMPTY',
    BOT_RIGHT: 'EMPTY'
  },
  playerMark: 'X',
  currentPlayerTurn: 'X',
  gameState: 'AWAITING_READY_ACTION',
  playerId: '',
  matchId: ''
}

export const RECORD_MOVE = "RECORD_MOVE"

export function recordMove(position, mark) {
  return {
    type: RECORD_MOVE,
    position,
    mark
  }
}

export const SUBMIT_MOVE = "SUBMIT_MOVE"

export function submitMove(position, mark) {

  const tictactoeState = store.getState().tictactoe

  const matchId = tictactoeState.matchId
  const playerId = tictactoeState.playerId

  fetchOptions.body = JSON.stringify({
    query: 'mutation {submitMove(matchId:"'+matchId+'", playerId: "'+playerId+'", position: "'+position+'")}'
  })

  let idToken = store.getState().auth.idToken

  if(idToken) {
    fetchOptions.headers.Authorization = 'Bearer ' + idToken
  }
  return function (dispatch) {
    dispatch(recordMove(position, mark))
    return fetch(apiUrl, fetchOptions).then((res) => {
      return res.json()
    }).then((response) => {
      if(response) {
        console.log(response)
      }
    })
  }
}
