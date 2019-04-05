import React from 'react'
import { css } from '@emotion/core'

const DEFAULT_SIZE = '20px'

export const FontAwesome = p => {
  const { icon: outerIcon, size, fill, cssProp } = p
  const svgStyle = t => css`
    width: ${size || DEFAULT_SIZE};
    height: ${size || DEFAULT_SIZE};
    & path {
      fill: ${fill || t.colours.main};
    }
    ${typeof cssProp === 'function' ? cssProp(t) : cssProp}
  `
  const { icon, iconName } = outerIcon
  return (
    <svg css={svgStyle} viewBox={`0 0 ${icon[1]} ${icon[1]}`}>
      <path d={icon[4]} />
      <desc>{iconName}</desc>
    </svg>
  )
}
