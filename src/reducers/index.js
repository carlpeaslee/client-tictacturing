import {combineReducers} from 'redux'
import { modelReducer, formReducer } from 'react-redux-form';


import auth from './auth'
import blog from './blog'
import tictactoe from './tictactoe'
import ui from './ui'

const rootReducer = combineReducers({
  blogPostEditor: modelReducer('blogPostEditor'),
  blogPostEditorForm: formReducer('blogPostEditor'),
  auth,
  blog,
  tictactoe,
  ui
})

export default rootReducer
