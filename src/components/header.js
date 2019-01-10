import React from 'react'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { Social } from './social'
import { margins, breakpoints } from './globals'

const headerStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints[0].breakpoint}px) {
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
  <header className={headerStyle}>
    <div className={headerLeftStyle}>
      <h1>
        <Link to="/" className={headerLinkStyle}>
          {p.siteName}
        </Link>
      </h1>
      <Social socialEntries={p.socialEntries} />
    </div>
    <Nav links={p.links} />
  </header>
)
