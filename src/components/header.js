import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { Social } from './social'
import { margins, breakpoints } from './globals'

const headerStyle = css`
  margin: 0 0 ${margins.lg}px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints[0].breakpoint}) {
    justify-content: space-between;
  }
`

const headerLinkStyle = css`
  border: none;
`

const headerLeftStyle = css`
  margin: 0 0 ${margins.md}px 0;
`

export const Header = p => (
  <header css={headerStyle}>
    <div css={headerLeftStyle}>
      <h1
        css={css`
          margin: 0;
        `}
      >
        <Link to="/" css={headerLinkStyle}>
          {p.siteName}
        </Link>
      </h1>
      <Social socialEntries={p.socialEntries} />
    </div>
    <Nav links={p.links} />
  </header>
)
