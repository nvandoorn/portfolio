import React from 'react'
import { css } from '@emotion/core'
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
    css={socialEntryStyle}
    role="button"
  >
    {p.icon}
    {p.children || null}
  </a>
)

export const Social = p => (
  <div>
    {p.socialEntries.map(({ link, name, icon }) => (
      <SocialEntry href={link} icon={icon} key={name} />
    ))}
  </div>
)
