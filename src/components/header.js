import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'
import { Nav } from './nav'
import { Social } from './social'

const headerStyle = css(`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`)

const headerLinkStyle = css(`
  border: none;
`)

export const Header = p => (
  <div className={headerStyle}>
    <div>
      <h1>
        <Link to="/" className={headerLinkStyle}>
          {p.siteName}
        </Link>
      </h1>
      <Social socialEntries={p.socialEntries} />
    </div>
    <Nav links={p.links} />
  </div>
)
