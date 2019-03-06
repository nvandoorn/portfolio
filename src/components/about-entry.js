import React from 'react'
import { css } from 'react-emotion'
import { margins } from './globals'

const { md, lg } = margins

const aboutListStyle = css`
  margin: ${lg}px 0 0 0;
  & ul {
    list-style-type: none;
    & li {
      margin: ${md}px 0;
    }
  }
`

export const AboutEntry = ({ header, listItems }) => (
  <article className={aboutListStyle}>
    <h2>{header}</h2>
    {listItems ? (
      <ul>
        {listItems.map((item, i) => (
          <li key={`about-item-${i}`}>{item}</li>
        ))}
      </ul>
    ) : null}
  </article>
)
