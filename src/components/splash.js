import React from 'react'
import { css } from '@emotion/core'

import { Button } from './button'
import { colours, margins } from './globals'

const splashContainerStyle = css`
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const taglineStyle = css`
  margin: ${margins.md}px 0;
`

export const Splash = p => (
  <article css={splashContainerStyle}>
    <h2 css={taglineStyle}>{p.heroText}</h2>
    <Button
      fontSize="1.5em"
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
