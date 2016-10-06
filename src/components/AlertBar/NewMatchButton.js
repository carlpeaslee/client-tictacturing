import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


function NewMatchButton(props) {
  return (
    <RaisedButton
      onClick={props.requestNewMatch}
      primary={true}
      label={'Request New Match'}
    />
  )
}

export default NewMatchButton
