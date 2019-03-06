import React from 'react'
import { css } from 'react-emotion'
import { margins } from './globals'

const socialEntryStyle = css`
  margin: 0 ${margins.sm}px 0 0;
  border: none;
  font-size: 24px;
`

export const SocialEntry = p => (
  <a
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    className={socialEntryStyle}
    role="button"
  >
    <i className={`fa fa-${p.iconName}`} />
    {p.children || null}
  </a>
)

export const Social = p => (
  <div>
    {p.socialEntries.map(({ link, name }) => (
      <SocialEntry href={link} iconName={name} key={name} />
    ))}
  </div>
)
