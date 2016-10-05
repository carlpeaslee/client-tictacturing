import React from 'react'
import FlatButton from 'material-ui/FlatButton'


function LoginButton(props) {
  return (
    <FlatButton
      onClick={props.dShowLock}
    >
      Login
    </FlatButton>
  )
}

export default LoginButton;
