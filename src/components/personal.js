import React from 'react'
import { css } from 'react-emotion'

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
  <article className={personalStyle}>
    {name}
    <img src={imgUrl} alt={imgAlt} className={photoStyle} />
    <h3 className={taglineStyle}>{tagline}</h3>
    {email}
  </article>
)
