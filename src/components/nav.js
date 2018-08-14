import React from 'react'
import { css } from 'emotion'
import { Link } from 'gatsby'
import { margins } from './globals'

const navStyle = css(`
  display: flex;
  align-items: center;
`)

export const Nav = p => {
  const linkStyle = css(`
    padding: 0 0 ${margins.md}px 0;
    &:not(:last-child) {
      margin: 0 ${margins.lg}px 0 0
    }
    text-decoration: none;
    border: ${p.hoverBorder};
    border-color: rgba(0, 0, 0, 0);
    &:hover {
      border-color: initial;
    }
  `)
  return (
    <div className={navStyle}>
      {p.links
        ? p.links.map(({ name, link }) => (
            <Link className={linkStyle} to={link} key={link}>
              {name}
            </Link>
          ))
        : null}
    </div>
  )
}
