import React from 'react'
import { css } from '@emotion/core'

const splitSyle = ({ breakpoints, margins }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${breakpoints[0].breakpoint}) {
    flex-wrap: nowrap;
  }
  > *:first-of-type {
    margin-right: ${margins.md}px;
  }
`

export const SplitContainer = ({ children }) => (
  <div css={splitSyle}>{children}</div>
)
