import Board from './Board.svg'
import x from './x.svg'
import o from './o.svg'

let width = window.innerWidth
let height = window.innerHeight

function resize() {
  width = window.innerWidth
  height = window.innerHeight
  console.log('resize')
}

window.onResize = resize

const s = new class {

  get orientation() {
    if (width > height) {
      return 'LANDSCAPE'
    } else {
      return 'PORTRAIT'
    }
  }

  deviceSize () {
    if (width < 500) {
      return 'MOBILE'
    } else {
      return 'DESKTOP'
    }
  }

  get all () {
    let styles = {}
    if(this.deviceSize() === 'MOBILE') {
      styles = {
        ...styles,
        boardWidth: '93vw',
        boardHeight: '93vw',
        squareWidth: '31vw',
        squareHeight: '31vw',
        alertBarWidth: '93vw'
      }
    } else {
      styles = {
        ...styles,
        boardWidth: '75vh',
        boardHeight: '75vh',
        squareWidth: '25vh',
        squareHeight: '25vh',
        alertBarWidth: '75vh'
      }
    }
    return styles
  }
}


const styles = {
  blogPost: {
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: '16px',
  },
  board: {
    display: 'block',
    margin: '0 auto',
    width: s.all.boardWidth,
    height: s.all.boardHeight,
    background: 'url('+Board+')'
  },
  square: {
    display: 'inline-block',
    width: s.all.squareWidth,
    height: s.all.squareHeight,
    textAlign: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
  },
  O: {
    backgroundImage: 'url('+o+')',
  },
  X: {
    backgroundImage: 'url('+x+')',
  },
  centeredContainer: {
    margin: '0 auto',
  },
  alertBar: {
    display: 'block',
    margin: '0 auto',
    paddingTop: '1vh',
    width: s.all.alertBarWidth,
    height: '14vh',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none'
  },
  drawerLink: {
    color: 'black',
    textDecoration: 'none'
  }
}

export default styles
