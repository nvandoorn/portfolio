import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag'
import { css } from '@emotion/core'
import { margins, colours } from './globals'

const tagIconStyle = css`
  margin-right: ${margins.xsm}px;
`

export const Tag = p => {
  const tagStyle = css`
    margin: 0;
    padding: ${margins.xsm}px;
    border-radius: 5px;
    color: ${colours.background};
    background: ${colours.main};
    ${p.fontSize ? `font-size: ${p.fontSize}` : ''};
    line-height: 1.5em;
  `
  return (
    <div css={tagStyle}>
      <FontAwesomeIcon icon={faTag} css={tagIconStyle} />
      {p.children}
    </div>
  )
}
