import React from 'react'
import { css } from '@emotion/core'

const socialEntryStyle = ({ margins }) => css`
  margin: 0 ${margins.sm}px 0 0;
  border: none;
  font-size: 24px;
`

export const SocialEntry = p => (
  <a
    aria-label={p.name}
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

export const Social = ({ socialEntries }) => (
  <div>
    {socialEntries.map(entry => (
      <SocialEntry {...entry} key={entry.name} />
    ))}
  </div>
)
