import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { margins, breakpoints } from './globals'

const navStyle = css`
  display: flex;
  align-items: center;
`

export const Nav = p => {
  const linkStyle = css`
    padding: 0 ${margins.sm}px ${margins.sm}px ${margins.sm}px;
    @media (min-width: ${breakpoints[0].breakpoint}) {
      padding: 0 ${margins.md}px ${margins.md}px ${margins.md}px;
    }
    &:not(:last-child) {
      margin: 0 ${margins.sm}px 0 0;
    }
    text-decoration: none;
    border: ${p.hoverBorder};
    border-color: rgba(0, 0, 0, 0);
    &:hover {
      border-color: initial;
    }
  `
  return (
    <nav css={navStyle}>
      {p.links
        ? p.links.map(({ name, to }) => (
            <Link
              css={linkStyle}
              to={to}
              key={to}
              activeStyle={{ borderColor: 'initial' }}
            >
              {name}
            </Link>
          ))
        : null}
    </nav>
  )
}
