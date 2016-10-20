import React, {Component} from 'react'
import styles from '../../styles'

import s from '../../styles/appBarStyles'

// import Radium from 'radium'
import AppBar from 'material-ui/AppBar'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import {Link} from 'react-router'

import AuthButtons from '../Auth/AuthButtons'

import Menu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'


class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }


  handleToggle = () => {
    console.log('toggle')
    this.setState({open: !this.state.open})
  }
  handleClose = () => this.setState({open: false});


  mouseOver = () => {
    console.log('in')
    this.setState({
      hover: true,
    })
  }

  mouseOut = () => {
    console.log('out')
    this.setState({
      hover: false,
    })
  }


  render(){
    const hoverStyle = (this.state.hover) ? {...s.hover} : {}
    return (
      <div>
        <AppBar
          style={{
            ...s.main,
            ...hoverStyle
          }}
          onMouseOver={this.mouseOver}
          onMouseLeave={this.mouseOut}
          iconElementLeft={(
            <IconButton
              onTouchTap={this.handleToggle}
            >
              <Menu
                color={'black'}
              />
            </IconButton>)}
          title={(
            <Link
              to={'/'}
              style={styles.navLink}
              >TicTacTuring
            </Link>
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

          <AuthButtons
            profile={this.props.profile}
            dLogout={this.props.dLogout}
            dShowLock={this.props.dShowLock}
          />

          <Link
            to={'/about'}
            style={styles.drawerLink}
          >
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={'About'}
            />
          </Link>


        </Drawer>
      </div>
    )
  }
}

export default Navigation
