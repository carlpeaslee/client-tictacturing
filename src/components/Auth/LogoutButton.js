import React from 'react'
import FlatButton from 'material-ui/FlatButton';

function LogoutButton(props) {
  return (
    <FlatButton
      onClick={props.dLogout}
    >
      Logout
    </FlatButton>
  )
}

export default LogoutButton
