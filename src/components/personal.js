import React from 'react'
import { css } from '@emotion/core'

const personalStyle = ({ margins }) => css`
  & > * {
    margin: 0 0 ${margins.md}px 0;
  }
`

export const Personal = ({ name, email, imgUrl, imgAlt, tagline }) => (
  <article css={personalStyle}>
    {name}
    <img src={imgUrl} alt={imgAlt} />
    <h3>{tagline}</h3>
    {email}
  </article>
)
