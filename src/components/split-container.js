import React from 'react'
import { css } from 'react-emotion'

import { breakpoints } from './globals'

const splitSyle = css`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints[0].breakpoint}px) {
    flex-wrap: nowrap;
  }
  > *:first-child {
    margin-right: 50px;
  }
`

export const SplitContainer = ({ children }) => (
  <div className={splitSyle}>{children}</div>
)
