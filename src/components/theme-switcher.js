import React from 'react'
import { css } from '@emotion/core'

const buttonStyle = ({ margins, colours, radius }) => css`
  border: none;
  background: none;
  margin: ${margins.sm}px;
  font-size: 1.3em;
`

export const ThemeSwitcher = ({ themes, onClick, currentTheme }) => {
  const nextTheme = themes.find(theme => theme.key !== currentTheme)
  return (
    <div
      css={css`
        top: 0;
        right: 0;
        position: absolute;
      `}
    >
      <button
        css={buttonStyle}
        key={nextTheme}
        onClick={e => onClick(nextTheme.key)}
      >
        {nextTheme.name}
      </button>
    </div>
  )
}
