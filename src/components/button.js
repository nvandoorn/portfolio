import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export const Button = p => {
  const buttonStyle = ({ margins, transitions, radius, colours }) =>
    css`
      font-size: ${p.fontSize || '1em'};
      font-weight: ${p.fontWeight || '500'};
      margin: 0;
      padding: ${margins.md}px ${margins.md}px;
      border: 0.5px solid ${colours.main};
      border-radius: ${radius.sm}px;
      display: block;
      transition: ${transitions.hover};
      text-decoration: none;
      background: ${colours.background || 'none'};
      & path {
        transition: ${transitions.hover};
      }
      &:hover {
        background: ${colours.main || 'none'};
        border-color: ${colours.background || 'none'};
        color: ${colours.background || 'initial'};
        & path {
          fill: ${colours.background || 'initial'};
        }
      }
    `
  return (
    <Link to={p.to} css={buttonStyle} role="button">
      {p.children}
    </Link>
  )
}
