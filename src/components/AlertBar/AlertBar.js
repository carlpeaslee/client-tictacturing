import React from 'react'
import styles from '../../styles'


function AlertBar(props) {
  return (
    <div
      style={styles.alertBar}
    >
      <p>gameState: {props.gameState}</p>
    </div>
  )
}

export default AlertBar
