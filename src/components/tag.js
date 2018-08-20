import React from 'react'
import FA from 'react-fontawesome'
import { css } from 'emotion'
import { margins, colours } from './globals'

const tagIconStyle = css(`
  margin-right: ${margins.xsm}px;
`)

export const Tag = p => {
  const tagStyle = css(`
    margin: 0 ${margins.sm}px;
    padding: ${margins.xsm}px;
    border-radius: 5px;
    color: ${colours.background};
    background: ${colours.main};
    ${p.fontSize ? `font-size: ${p.fontSize}` : ''};
    line-height: 1.5em;
  `)
  return (
    <div className={tagStyle}>
      <FA name="tag" className={tagIconStyle} />
      {p.children}
    </div>
  )
}
