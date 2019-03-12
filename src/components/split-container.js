import React from 'react'
import { css } from '@emotion/core'

import { breakpoints } from './globals'

const splitSyle = css`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints[0].breakpoint}) {
    flex-wrap: nowrap;
  }
  > *:first-child {
    margin-right: 50px;
  }
`

export const SplitContainer = ({ children }) => (
  <div css={splitSyle}>{children}</div>
)
