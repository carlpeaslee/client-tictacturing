import React from 'react'
import {Route, IndexRoute} from 'react-router'
import TemplateContainer from './containers/Template/TemplateContainer'
import Home from './views/Home/Home'
import About from './views/About/About'
import Programming from './views/Programming/Programming'
import Writing from './views/Writing/Writing'

import Admin from './views/Admin/Admin'
import store from './store'


const adminOnly = (nextState, replace) => {
  let permissions = store.getState().auth.permissions
  if (permissions && permissions.includes(0)) {
    console.log('welcome admin')
  } else {
    console.log('access denied')
    replace({ pathname: '/' })
  }
}

export const makeRoutes = () => {
  return (
    <Route path="/" component={TemplateContainer}>
      <IndexRoute component={Home} />
      <Route
        path="/admin"
        component={Admin}
        onEnter={adminOnly}
      />
      <Route
        path="/about"
        component={About}
      />
      <Route
        path="/programming"
        component={Programming}
      />
      <Route
        path="/writing"
        component={Writing}
      />
    </Route>
  )
}

export default makeRoutes
