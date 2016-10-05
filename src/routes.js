import React from 'react'
import {Route, IndexRoute} from 'react-router'
import TemplateContainer from './containers/Template/TemplateContainer'
import store from './store'

import Home from './views/Home/Home'
import About from './views/About/About'
import Admin from './views/Admin/Admin'
import Blog from './views/Blog/Blog'



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
        path="/blog"
        component={Blog}
      />
    </Route>
  )
}

export default makeRoutes
