import React from 'react'
import { css } from '@emotion/core'

import { margins } from './globals'

const personalStyle = css`
  margin: ${margins.lg}px 0 0 0;
`

const photoStyle = css`
  margin: ${margins.md}px 0;
`

const taglineStyle = css`
  margin: 0 0 ${margins.md}px 0;
`

export const Personal = ({ name, email, imgUrl, imgAlt, tagline }) => (
  <article css={personalStyle}>
    {name}
    <img src={imgUrl} alt={imgAlt} css={photoStyle} />
    <h3 css={taglineStyle}>{tagline}</h3>
    {email}
  </article>
)
