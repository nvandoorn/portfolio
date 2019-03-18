import React from 'react'
import { css } from '@emotion/core'

import { Button } from './button'
import { colours } from './globals'

const splashContainerStyle = css`
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const heroTextStyle = css`
  font-size: 3em;
`

export const Splash = p => (
  <article css={splashContainerStyle}>
    <div>
      <h2 css={heroTextStyle}>{p.heroText}</h2>
      <h3>{p.heroTagline}</h3>
    </div>
    <Button
      fontSize="1.2em"
      fontWeight="800"
      background={colours.background}
      hoverBackground={colours.main}
      hoverColour={colours.background}
      to={p.heroBtnTo}
    >
      {p.heroBtn}
    </Button>
  </article>
)
