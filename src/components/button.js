import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { margins, radius, transitions, colours } from './globals'

const makeButtonStyle = p =>
  css`
  font-size: ${p.fontSize || '1em'};
  font-weight: ${p.fontWeight || '500'}
  margin: ${margins.sm}px;
  padding: ${margins.md}px ${margins.md}px;
  border: 0.5px solid #ffffff;
  border-radius: ${radius.sm}px;
  display: block;
  transition: ${transitions.hover};
  text-decoration: none;
  background: ${p.background || 'none'};
  &:hover {
    background: ${p.hoverBackground || 'none'};
    border-color: ${p.background || 'none'};
    color: ${p.hoverColour || 'initial'};
  }
`

export const Button = p => {
  const buttonStyle = makeButtonStyle(p)
  return (
    <Link to={p.to} css={buttonStyle} role="button">
      {p.children}
    </Link>
  )
}

export const DefaultButton = p => (
  <Button
    {...p}
    background={colours.background}
    hoverBackground={colours.main}
    hoverColour={colours.background}
  />
)
