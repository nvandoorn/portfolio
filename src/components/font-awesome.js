import React from 'react'

export const FontAwesome = ({ name, className }) => (
  <i className={`fa fa-${name} ${className || ''}`} aria-hidden="true" />
)
