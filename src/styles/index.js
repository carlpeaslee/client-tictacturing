import Board from './Board.svg'
import x from './x.svg'
import o from './o.svg'

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
    width: '75vh',
    height: '75vh',
    background: 'url('+Board+')'
  },
  square: {
    display: 'inline-block',
    width: '25vh',
    height: '25vh',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '25vh',
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
    width: '75vh',
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
