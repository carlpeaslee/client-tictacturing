import React, {Component} from 'react'
// import styles from '../../styles'
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
    // const showAdmin = () => {
    //   if(this.props.profile) {
    //     return (
    //       <Link to={'/admin'}>Admin</Link>
    //     )
    //   }
    // }
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title={(
            <Link to={'/'}>TicTacTuring</Link>
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
              Hello text here
            </CardText>

          </Card>

          <Link to={'/about'}>
            <MenuItem
              onTouchTap={this.handleClose}
            >
              About
            </MenuItem>
          </Link>

          <Link to={'/blog'}>
            <MenuItem
              onTouchTap={this.handleClose}
            >
              Blog
            </MenuItem>
          </Link>

          <MenuItem
            onTouchTap={this.handleClose}
          >
            Github
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}

Navigation = Radium(Navigation)
export default Navigation
