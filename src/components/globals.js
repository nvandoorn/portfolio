export const colours = {
  background: '#0484EA',
  main: '#FFFFFF'
}

const margins = {
  xsm: 6,
  sm: 12,
  md: 28,
  lg: 50,
  xl: 75
}

const transitions = {
  hover: '0.4s cubic-bezier(0.7, 0, 0.3, 1)'
}

const radius = {
  sm: 8
}

const fontStack = 'Helvetica Neue,Helvetica,Arial,sans-serif;'

const breakpoints = [
  {
    breakpoint: '600px',
    size: '90%'
  },
  {
    breakpoint: '850px',
    size: '750px'
  },
  {
    breakpoint: '992px',
    size: '920px'
  },
  {
    breakpoint: '1170px',
    size: '1100px'
  }
]

export const mainTheme = {
  colours,
  fontStack,
  transitions,
  margins,
  breakpoints,
  radius
}

const highContrastTheme = {
  ...mainTheme,
  colours: {
    background: '#ffffff',
    main: '#000000'
  }
}

export const themes = {
  mainTheme,
  highContrastTheme
}
