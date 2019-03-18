import React from 'react'
import { css } from '@emotion/core'

import { breakpoints, margins } from './globals'

const splitSyle = css`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints[0].breakpoint}) {
    flex-wrap: nowrap;
  }
  > *:first-child {
    margin-right: ${margins.md}px;
  }
`

export const SplitContainer = ({ children }) => (
  <div css={splitSyle}>{children}</div>
)
