import React from 'react'
import FlatButton from 'material-ui/FlatButton';

function LogoutButton(props) {
  return (
    <FlatButton
      onClick={props.dLogout}
      label={'Logout'}
    />
  )
}

export default LogoutButton
