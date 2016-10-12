import React, {Component} from 'react'
import styles from '../../styles'
import NewMatchButton from './NewMatchButton'
import TuringTestDialog from './TuringTestDialog'

import {Snackbar, Stepper, Step, StepLabel, CircularProgress} from 'material-ui'

class AlertBar extends Component {
  constructor(props) {
    super(props)
    this.messageCreator = this.messageCreator.bind(this)
    this.stepIndex = this.stepIndex.bind(this)
    this.joinProgress = this.joinProgress.bind(this)
  }

  stepIndex = () => {
    switch (this.props.gameState) {
      default:
      case 'AWAITING_READY_ACTION':
      case 'OPPONENT_DISCONNECTED':
      case 'LOOKING_FOR_MATCH':
      case 'LOOKING_FOR_OPPONENT': {
        return 0
      }
      case 'MATCH_FOUND':
      case 'WAITING_FOR_OPPONENT_MOVE':
      case 'YOUR_TURN': {
        return 1
      }
      case 'YOU_WON':
      case 'YOU_LOST':
      case 'TIE': {
        return 2
      }
    }
  }
  joinProgress = () => {
    switch (this.props.gameState) {

      case 'AWAITING_READY_ACTION':
      case 'OPPONENT_DISCONNECTED':{
        return (
          <NewMatchButton
            requestNewMatch={this.props.requestNewMatch}
          />
        )
      }
      case 'LOOKING_FOR_MATCH':
      case 'LOOKING_FOR_OPPONENT':
      case 'WAITING_FOR_OPPONENT_MOVE':
      case 'MATCH_FOUND': {
        return (
          <CircularProgress
          />
        )
      }
      default:
      case 'YOUR_TURN':
      case 'YOU_WON':
      case 'YOU_LOST':
      case 'TIE':{
        return null
      }
    }
  }

  messageCreator = () => {
    switch (this.props.gameState) {
      case 'OPPONENT_DISCONNECTED': {
        return (
            <span>oh no! your opponent left!</span>
        )
      }
      case 'LOOKING_FOR_MATCH': {
        return (
            <span>let's go look for a match</span>
        )
      }
      case 'LOOKING_FOR_OPPONENT': {
        return (
            <span>ok, we've joined a waiting room, now we just need an opponent</span>
        )
      }
      case 'MATCH_FOUND': {
        return (
            <span>great! we found a match to join!</span>
        )
      }
      case 'WAITING_FOR_OPPONENT_MOVE': {
        return (
            <span>waiting on your opponent...</span>
        )
      }
      case 'YOUR_TURN': {
        return (
            <span>it's your turn!</span>
        )
      }
      case 'YOU_WON': {
        return (
            <span>yay you won. play again?</span>
        )
      }
      case 'YOU_LOST': {
        return (
            <span>darn you lost. play again?</span>
        )
      }
      case 'TIE': {
        return (
            <span>cat's game! play again?</span>
        )
      }
      default:
      case 'AWAITING_READY_ACTION': {
        return (
          <span>ready to play?</span>
        )
      }
    }
  }

  render() {
    return (
      <div
        style={styles.alertBar}
      >
        <Stepper
          activeStep={this.stepIndex()}
        >
          <Step>
            <StepLabel>join a game</StepLabel>
          </Step>
          <Step>
            <StepLabel>play</StepLabel>
          </Step>
          <Step>
            <StepLabel>human or robot?</StepLabel>
          </Step>
        </Stepper>
        <div>
          {this.joinProgress()}
        </div>
        <Snackbar
          open={true}
          message={this.messageCreator()}
        />
        <TuringTestDialog
          gameState={this.props.gameState}
          submitTuringTest={this.props.submitTuringTest}
        />
      </div>
    )
  }
}

export default AlertBar
