import React from 'react'
import { css } from '@emotion/core'
import { margins } from './globals'

const aboutListStyle = css`
  margin: ${margins.lg}px 0 0 0;
`

export const AboutEntry = ({ header, listItems }) => (
  <article css={aboutListStyle}>
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
