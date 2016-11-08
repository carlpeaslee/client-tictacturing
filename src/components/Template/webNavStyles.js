import theme from '../../styles/theme'
import S from '../../styles/S'

const menuBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center'
}

const menuHover = {
  backgroundColor: theme.secondaryColor,
}

export const menu = new S(menuBase, menuHover, 'WEB_MENU')

const titleBase = {
  display: 'flex',
}

const titleHover = {
}

export const titleContainer = new S(titleBase, titleHover, 'TITLE_CONTAINER')



const ticBase = {
  display: 'flex',
}

const ticHover = {
  backgroundImage: 'url('+ theme.oImg +')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
}

export const tic = new S(ticBase, ticHover, 'TIC')

const tacBase = {
  display: 'flex',
}

const tacHover = {
  backgroundImage: 'url('+ theme.xImg +')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
}

export const tac = new S(tacBase, tacHover, 'TAC')

const turingBase = {
  display: 'flex',
}

const turingHover = {
  backgroundColor: theme.primaryColor,
}

export const turing = new S(turingBase, turingHover, 'TURING')
