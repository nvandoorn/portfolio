import React from 'react'
import { css } from 'react-emotion'

export const AboutEntry = p => (
  <article>
    <h2>{p.header}</h2>
    {p.listItems ? (
      <ul>
        {p.listItems.map((item, i) => (
          <li key={`aboutItem${i}`}>{item}</li>
        ))}
      </ul>
    ) : null}
  </article>
)
