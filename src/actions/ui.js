import store from '../store'

export const DUPLICATE_HOVER = "DUPLICATE_HOVER"
export const HOVER_ELEMENT = "HOVER_ELEMENT"

export function hoverElement(element) {
  const currentHoverElements = store.getState().ui.hoverElements
  function checkForElement (existing, index, array) {
    if(existing === element) {
      return array
    }
  }

  const newArray = currentHoverElements.find(checkForElement)

  if (newArray !== undefined) {
    return {
      type: DUPLICATE_HOVER,
    }
  } else {
    return {
      type: HOVER_ELEMENT,
      elements:[...currentHoverElements, element]
    }
  }
}

export const UNHOVER_ELEMENT = "UNHOVER_ELEMENT"

export function unhoverElement(element) {
  const currentHoverElements = store.getState().ui.hoverElements
  function checkForElement (existing, index, array) {
    if(existing === element) {
      array.splice(index, 1)
      return array
    }
  }

  const newArray = () => {
    currentHoverElements.find(checkForElement)
  }

  return {
    type: UNHOVER_ELEMENT,
    elements: newArray() || []
  }

}
