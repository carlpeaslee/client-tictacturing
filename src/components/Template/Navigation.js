import React, {Component} from 'react'
import styles from '../../styles'
import Radium from 'radium'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import {Link} from 'react-router'

import AuthButtons from '../Auth/AuthButtons'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false});


  render(){
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title={(
            <Link
              to={'/'}
              style={styles.navLink}
              >TicTacTuring
            </Link>
          )}
          iconElementRight={(
            <AuthButtons
              profile={this.props.profile}
              dLogout={this.props.dLogout}
              dShowLock={this.props.dShowLock}
            />
          )}

        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <Card>
            <CardHeader
              title={"My Account"}
            />
            <CardText>
              Welcome to TicTacTuring
            </CardText>

          </Card>

          <Link
            to={'/about'}
            style={styles.drawerLink}
          >
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={'About'}
            />
          </Link>

          {/* <Link
            to={'/blog'}
            style={styles.drawerLink}
          >
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={'Blog'}
            />
          </Link> */}

        </Drawer>
      </div>
    )
  }
}

Navigation = Radium(Navigation)
export default Navigation
