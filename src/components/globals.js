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

const fontSizes = {
  h1: '2em',
  h2: '1.5em',
  h3: '1.3em',
  h4: '1.1em'
}

export const mainTheme = {
  colours,
  fontStack,
  transitions,
  margins,
  breakpoints,
  radius,
  fontSizes,
  lineHeight: 2
}

const highContrastTheme = {
  ...mainTheme,
  colours: {
    background: '#ffffff',
    main: '#343a40'
  }
}

export const cvTheme = {
  ...highContrastTheme,
  margins: {
    xsm: 2,
    sm: 3,
    md: 4,
    lg: 4
  },
  fontSizes: {
    h1: '1.3em',
    h2: '1.2em',
    h3: '1.1em',
    h4: '1.05em'
  },
  lineHeight: 1.4
}

export const themes = {
  mainTheme,
  highContrastTheme
}
