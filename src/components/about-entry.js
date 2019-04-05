import React from 'react'
import { css } from '@emotion/core'

const aboutEntryStyle = ({ margins }) => css`
  margin: 0 0 ${margins.lg}px 0;
  & li {
    margin-bottom: ${margins.sm}px;
  }
`

export const AboutEntry = ({ headerMargin, listItems, header }) => {
  return (
    <article css={aboutEntryStyle}>
      <h2>{header}</h2>
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
