import React from 'react'
import { css } from '@emotion/core'
import { margins } from './globals'

const imgContainerStyle = css`
  text-align: right;
  & a {
    border-bottom: none;
  }
`

export const Image = ({ imgUrl, caption, noShadow }) => {
  const imgStyle = css`
    max-height: 300px;
    max-width: 80vw;
    align-self: flex-end;
    ${!noShadow
      ? `box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);`
      : ''}
    0 15px 12px rgba(0, 0, 0, 0.22);
    margin-bottom: ${margins.md}px;
  `
  return (
    <div css={imgContainerStyle}>
      <a href={imgUrl} target="_blank" rel="noopener noreferrer">
        <img css={imgStyle} src={imgUrl} alt={caption} />
      </a>
    </div>
  )
}
