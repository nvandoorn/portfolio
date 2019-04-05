import React from 'react'
import { FontAwesome } from './font-awesome'
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag'
import { css } from '@emotion/core'

const tagIconStyle = ({ margins }) => css`
  margin-right: ${margins.xsm}px;
`

export const Tag = p => {
  const tagStyle = ({ colours, margins }) => css`
    margin: ${margins.sm}px 0;
    padding: ${margins.xsm}px;
    border-radius: 5px;
    color: ${colours.background};
    background: ${colours.main};
    ${p.fontSize ? `font-size: ${p.fontSize}` : ''};
    line-height: 1.5em;
    & svg path {
      fill: ${colours.background};
    }
  `
  return (
    <div css={tagStyle}>
      <FontAwesome icon={faTag} cssProp={tagIconStyle} size="10px" />
      {p.children}
    </div>
  )
}
