import React from 'react'
import { css } from '@emotion/core'
import { margins } from './globals'

const aboutEntryStyle = css`
  margin: 0 0 ${margins.lg}px 0;
`

export const AboutEntry = ({ headerMargin, listItems, header }) => {
  const headingStyle = css`
    margin: ${headerMargin || 0};
  `
  return (
    <article css={aboutEntryStyle}>
      <h2 css={headingStyle}>{header}</h2>
      {listItems ? (
        <ul>
          {listItems.map((item, i) => (
            <li key={`about-item-${i}`}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
