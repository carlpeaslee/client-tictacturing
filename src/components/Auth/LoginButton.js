import React from 'react'
import FlatButton from 'material-ui/FlatButton'


function LoginButton(props) {
  return (
    <FlatButton
      onClick={props.dShowLock}
      label={'Login'}
    />
  )
}

export default LoginButton;
