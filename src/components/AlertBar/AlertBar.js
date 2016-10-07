import React from 'react'
import styles from '../../styles'
import NewMatchButton from './NewMatchButton'

function AlertBar(props) {
  const messageCreator = () => {
    switch (props.gameState) {
      case 'OPPONENT_DISCONNECTED': {
        return (
          <div>
            <span>oh no! your opponent left!</span>
            <NewMatchButton
              requestNewMatch={props.requestNewMatch}
            />
          </div>
        )
      }
      case 'LOOKING_FOR_MATCH': {
        return (
          <div>
            <p>let's go look for a match</p>
          </div>
        )
      }
      case 'LOOKING_FOR_OPPONENT': {
        return (
          <div>
            <p>ok, we've joined a waiting room, now we just need an opponent</p>
          </div>
        )
      }
      case 'MATCH_FOUND': {
        return (
          <div>
            <p>great! we found a match to join!</p>
          </div>
        )
      }
      case 'WAITING_FOR_OPPONENT_MOVE': {
        return (
          <div>
            <p>waiting on your opponent...</p>
          </div>
        )
      }
      case 'YOUR_TURN': {
        return (
          <div>
            <p>it's your turn!</p>
          </div>
        )
      }
      case 'YOU_WON': {
        return (
          <div>
            <span>yay you won. play again?</span>
            <NewMatchButton
              requestNewMatch={props.requestNewMatch}
            />
          </div>
        )
      }
      case 'YOU_LOST': {
        return (
          <div>
            <span>darn you lost. play again?</span>
            <NewMatchButton
              requestNewMatch={props.requestNewMatch}
            />
          </div>
        )
      }
      case 'TIE': {
        return (
          <div>
            <span>cat's game! play again?</span>
            <NewMatchButton
              requestNewMatch={props.requestNewMatch}
            />
          </div>
        )
      }
      default:
      case 'AWAITING_READY_ACTION': {
        return (
          <div>
            <NewMatchButton
              requestNewMatch={props.requestNewMatch}
            />
          </div>
        )
      }
    }
  }
  return (
    <div
      style={styles.alertBar}
    >
      {messageCreator()}
    </div>
  )
}

export default AlertBar
