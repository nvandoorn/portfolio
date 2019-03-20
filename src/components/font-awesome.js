import React from 'react'
import { css } from '@emotion/core'

const DEFAULT_SIZE = '20px'

export const FontAwesome = ({ icon: outerIcon, size, fill }) => {
  const svgStyle = css`
    width: ${size || DEFAULT_SIZE};
    height: ${size || DEFAULT_SIZE};
    ${fill
      ? `& path {
      fill: ${fill};
    }`
      : ''}
  `
  const { icon, iconName } = outerIcon
  return (
    <svg css={svgStyle} viewBox={`0 0 ${icon[1]} ${icon[1]}`}>
      <path d={icon[4]} />
      <desc>{iconName}</desc>
    </svg>
  )
}
