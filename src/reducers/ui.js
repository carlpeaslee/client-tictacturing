import {HOVER_ELEMENT, UNHOVER_ELEMENT, DUPLICATE_HOVER} from '../actions/ui'

function ui(state = {hoverElements: [],}, action) {
  switch (action.type) {
    case HOVER_ELEMENT: {
      return {
        ...state,
        hoverElements: action.elements,
      }
    }
    case UNHOVER_ELEMENT: {
      return {
        ...state,
        hoverElements: action.elements,
      }
    }
    case DUPLICATE_HOVER:
    default: {
      return state
    }
  }
}

export default ui
