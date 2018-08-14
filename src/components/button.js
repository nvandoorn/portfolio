import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'

import { margins, radius, transitions } from './globals'

export const Button = p => {
  const buttonStyle = css(`
  font-size: ${p.fontSize};
  font-weight: ${p.fontWeight}
  margin: ${margins.sm}px;
  padding: ${margins.md}px ${margins.md}px;
  border: 0.5px solid #ffffff;
  border-radius: ${radius.sm}px;
  display: block;
  transition: ${transitions.hover};
  text-decoration: none;
  background: ${p.background};
  &:hover {
    background: ${p.hoverBackground};
    border-color: ${p.background};
    color: ${p.hoverColour};
  }
`)
  return (
    <Link to={p.to} className={buttonStyle}>
      {p.children}
    </Link>
  )
}
