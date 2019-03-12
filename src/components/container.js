import React from 'react'
import { css } from '@emotion/core'
import { breakpoints, margins } from './globals'

const mq = breakpoints
  .map(
    ({ breakpoint, size }) => css`
      @media (min-width: ${breakpoint}) {
        width: ${size};
      }
    `
  )
  .join('\n')

export const Container = p => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${margins.lg}px 0;
    width: 93%;
    height: ${p.height || '100%'};
    box-sizing: border-box;
    ${mq}
  `
  return <div css={containerStyle}>{p.children}</div>
}
