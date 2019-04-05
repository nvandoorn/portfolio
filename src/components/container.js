import React from 'react'
import { css } from '@emotion/core'

const mq = breakpoints =>
  breakpoints
    .map(
      ({ breakpoint, size }) => `
      @media (min-width: ${breakpoint}) {
        width: ${size};
      }
    `
    )
    .join('\n')

export const Container = p => {
  const containerStyle = ({ breakpoints, margins }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${margins.lg}px 0;
    width: 93%;
    height: ${p.height || '100%'};
    box-sizing: border-box;
    ${mq(breakpoints)}
  `
  return <div css={containerStyle}>{p.children}</div>
}
