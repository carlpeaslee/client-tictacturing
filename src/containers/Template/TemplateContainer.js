//React and Redux
import React, {Component} from 'react'
import {connect} from 'react-redux'

//Styling
import Radium from 'radium'
// import styles from '../../styles'

//Components
import Navigation from '../../components/Template/Navigation'

//Actions
import {checkLocalStore, showLock, listenForAuthentication, logout} from '../../actions/auth'

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
        <nav>
          <Navigation
            profile={this.props.profile}
            dLogout={this.props.dLogout}
            dShowLock={this.props.dShowLock}
          />
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          This is the footer
        </footer>
      </div>
      // <Grid>
      //   <Navigation
      //     profile={this.props.profile}
      //     dLogout={this.props.dLogout}
      //     dShowLock={this.props.dShowLock}
      //   />
      //   <Row
      //     style={styles.view}
      //   >
      //     {this.props.children}
      //   </Row>
      // </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    idToken: state.auth.idToken,
    isListeningForAuthentication: state.auth.isListeningForAuthentication
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
  }
}

Template = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template)

Template = Radium(Template)

export default Template
