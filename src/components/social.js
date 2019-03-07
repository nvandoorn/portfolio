import React from 'react'
import { css } from 'react-emotion'
import { margins } from './globals'

import { FontAwesome } from './font-awesome'

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
    <FontAwesome name={p.iconName} />
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
