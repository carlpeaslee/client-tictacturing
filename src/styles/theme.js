import o from './images/o.svg'
import x from './images/x.svg'

const theme = new class {
  get primaryColor() {
    return 'rgb(44,137,218)'
  }

  get secondaryColor() {
    return 'pink'
  }

  get oImg () {
    return o
  }

  get xImg () {
    return x
  }


}

export default theme
