//React and Redux
import React, {Component} from 'react'
import {connect} from 'react-redux'

//Styling
import Radium from 'radium'
// import styles from '../../styles'

//Components
import WebNav from '../../components/Template/WebNav'

//Actions
import {checkLocalStore, showLock, listenForAuthentication, logout} from '../../actions/auth'
import {hoverElement, unhoverElement} from '../../actions/ui'

class Template extends Component {

  componentWillMount() {
    if (!this.props.idToken && !this.props.isListeningForAuthentication){
      this.props.dCheckLocalStorage()
    }
    if (!this.props.idToken && !this.props.isListeningForAuthentication){
      this.props.dListenForAuthentication()
    }
  }
  render() {
    return(
      <div>
          {/* <Navigation
            profile={this.props.profile}
            dLogout={this.props.dLogout}
            dShowLock={this.props.dShowLock}
          /> */}
        <WebNav
          setHoverElement={this.props.setHoverElement}
          unhoverElement={this.props.unhoverElement}
          hoverElements={this.props.hoverElements}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    idToken: state.auth.idToken,
    isListeningForAuthentication: state.auth.isListeningForAuthentication,
    hoverElements: state.ui.hoverElements,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dShowLock: () => {
      dispatch(showLock())
    },
    dListenForAuthentication: () => {
      dispatch(listenForAuthentication())
    },
    dCheckLocalStorage: () => {
      dispatch(checkLocalStore())
    },
    dLogout: () => {
      dispatch(logout())
    },
    setHoverElement: (element) => {
      dispatch(hoverElement(element))
    },
    unhoverElement: (element) => {
      dispatch(unhoverElement(element))
    }
  }
}

Template = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template)

Template = Radium(Template)

export default Template
