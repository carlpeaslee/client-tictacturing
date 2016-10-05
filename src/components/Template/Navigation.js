import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'
import Auth from '../Auth/Auth'

import styles from '../../styles'
import Radium from 'radium'

class Navigation extends Component {
  render(){
    const showAdmin = () => {
      if(this.props.profile) {
        return (
          <LinkContainer to={'/admin'}>
            <NavItem>Admin</NavItem>
          </LinkContainer>
        )
      }
    }
    return (
      <Navbar
        fixedTop
        style={styles.nav}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>TicTacTuring</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <LinkContainer to={'/about'}>
              <NavItem>About</NavItem>
            </LinkContainer>
            <NavDropdown title={'Work'} id={'dropdown'}>
            <LinkContainer to={'/programming'}>
              <MenuItem>Programming</MenuItem>
            </LinkContainer>
            <LinkContainer to={'/writing'}>
              <MenuItem>Writing</MenuItem>
            </LinkContainer>

            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {showAdmin()}
            <NavDropdown title={this.props.profile? "sign out" : "sign in"} id={'auth-dropdown'}>
              <MenuItem>
                <Auth
                  dLogout={this.props.dLogout}
                  dShowLock={this.props.dShowLock}
                  profile={this.props.profile}
                />
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Navigation = Radium(Navigation)
export default Navigation
