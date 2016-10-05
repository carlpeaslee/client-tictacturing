import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'


function AuthButtons(props) {
  function authDisplay() {
    if(props.profile) {
      return (
        <div>
          <p>Hi, {props.profile.name}!</p>
          <LogoutButton
            dLogout={props.dLogout}
          />
        </div>
      )
    } else {
      return (
        <LoginButton
          dShowLock={props.dShowLock}
        />
      )
    }
  }
  return(
    <div>
      {authDisplay()}
    </div>
  )
}

export default AuthButtons
