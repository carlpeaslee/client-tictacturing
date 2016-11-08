import store from '../store'

class S {
  constructor(baseStyles, hoverStyles, element) {
    this.height = window.innerHeight
    this.width = window.innerWidth
    this.baseStyles = baseStyles
    this.hoverStyles = hoverStyles
    this.element = element
  }


  get base() {
    return {
      ...this.baseStyles,
    }
  }

  get hover() {
    return {
      ...this.hoverStyles,
    }
  }

  get all() {

    const currentHoverElements = store.getState().ui.hoverElements
    const checkForElement = (existing, index, array) => {
      if(existing === this.element) {
        return true
      }
    }

    if (currentHoverElements.find(checkForElement)) {
      return {
        ...this.base,
        ...this.hover,

      }
    } else {
      return {
        ...this.base,
      }
    }
  }
}

export default S
