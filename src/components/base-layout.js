import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import { Container } from './container'

const globalStyles = ({ colours, transitions, fontStack, baseFontSize }) => css`
  *,
  html,
  body {
    margin: 0;
    padding: 0;
  }
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  div,
  button {
    font-family: ${fontStack};
    color: ${colours.main};
  }
  p,
  li {
    line-height: 2em;
  }
  li {
    list-style-position: outside;
    margin-left: 20px;
  }
  a {
    border-bottom: 1px dotted;
    text-decoration: none;
    &: hover {
      transition: ${transitions.hover};
    }
  }
  body {
    background: ${colours.background};
  }
`

export const BaseLayout = ({ helmetData, children, height, theme }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Helmet {...helmetData}>
      <html lang="en" />
    </Helmet>
    <Container height={height}>{children}</Container>
  </ThemeProvider>
)
