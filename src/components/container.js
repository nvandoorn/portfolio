import React from 'react'
import { css } from 'emotion'
import { breakpoints, margins } from './globals'

const mq = breakpoints
  .map(
    ({ breakpoint, size }) => `
  @media (min-width: ${breakpoint}px) {
    width: ${size}px;
  }
  `
  )
  .join('\n')

const containerStyle = css(`
  display: block;
  margin: 0 auto;
  padding: ${margins.lg}px 0;
  width: 93%;
  ${mq}
`)

export const Container = p => <div className={containerStyle}>{p.children}</div>
