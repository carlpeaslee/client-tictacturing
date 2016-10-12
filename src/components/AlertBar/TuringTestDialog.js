import React, {Component} from 'react'
// import styles from '../../styles'
import {Dialog, FlatButton} from 'material-ui'

class TuringTestDialog extends Component {
  constructor(props) {
    super(props)
    this.showDialog = this.showDialog.bind(this)
  }
  showDialog = () => {
    switch (this.props.gameState) {
      default:
      case 'AWAITING_READY_ACTION':
      case 'OPPONENT_DISCONNECTED':
      case 'LOOKING_FOR_MATCH':
      case 'LOOKING_FOR_OPPONENT':
      case 'MATCH_FOUND':
      case 'WAITING_FOR_OPPONENT_MOVE':
      case 'YOUR_TURN': {
        return false
      }
      case 'YOU_WON':
      case 'YOU_LOST':
      case 'TIE': {
        return true
      }
    }
  }
  render() {
    const actions = [
      <FlatButton
        label="Human"
        primary={true}
        onTouchTap={() => {
          this.props.submitTuringTest(false)
        }}
      />,
      <FlatButton
        label="Robot"
        primary={true}
        onTouchTap={() => {
          this.props.submitTuringTest(true)
        }}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Take a guess"
          actions={actions}
          modal={false}
          open={this.showDialog()}
        >
          What do you think? Was your opponent a human or a robot?
        </Dialog>
      </div>
    );
  }
}

export default TuringTestDialog
