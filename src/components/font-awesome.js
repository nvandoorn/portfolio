import React from 'react'

export const FontAwesome = ({ name, css }) => (
  <i css={`fa fa-${name} ${css || ''}`} aria-hidden="true" />
)
