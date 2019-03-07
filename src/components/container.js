import React from 'react'
import { css } from '@emotion/core'
import { breakpoints, margins } from './globals'

const mq = breakpoints
  .map(
    ({ breakpoint, size }) => `
  @media (min-width: ${breakpoint}px) {
    width: ${size};
  }
  `
  )
  .join('\n')

const containerStyle = css`
  display: block;
  margin: 0 auto;
  padding: ${margins.lg}px 0;
  width: 93%;
  ${mq}
`

export const Container = p => <div css={containerStyle}>{p.children}</div>
