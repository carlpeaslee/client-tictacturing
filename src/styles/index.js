import Board from './Board.svg'

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
  },
  centeredContainer: {
    margin: '0 auto',
  },
  alertBar: {
    display: 'block',
    margin: '0 auto',
    width: '75vh',
    height: '5vh',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '5vh'
  }
}

export default styles
