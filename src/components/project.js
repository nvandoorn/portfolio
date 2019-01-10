import React from 'react'
import { css } from 'react-emotion'

import { Tag } from './tag'
import { DefaultButton as Button } from './button'
import { margins, radius, transitions, breakpoints } from './globals'

const projectHeadingStyle = css`
  margin: 0 0 0 ${margins.sm}px;
`
const projectBriefStyle = css`
  margin: 0;
  font-weight: 300;
`

const projectBlockStyle = css`
  margin: ${margins.md}px 0;
  display: flex;
  flex-wrap: wrap;
`

const imgStyle = css`
  max-height: 85vw;
`

const linkStyle = css`
  display: flex;
  align-content: center;
  padding: ${margins.sm}px 0;
  border-color: rgba(0, 0, 0, 0);
  :hover {
    border-color: #ffffff;
  }
`

const imgContainerStyle = css``

const descStyle = css`
  font-weight: 300;
  line-height: 2em;
`

const projectStyle = css`
  margin: ${margins.lg}px 0;
`

const linkIconStyle = css`
  display: flex;
  align-items: center;
`

const projectHeadingContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${margins.md}px;
  flex-wrap: wrap;
`

const projectTagContainerStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const dateStyle = css`
  margin-bottom: ${margins.sm}px;
`

export const Project = p => {
  const marginRight = p.imgUrl ? margins.md : 0
  const descContainerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${margins.md}px 0 0 0;
    @media (min-width: ${breakpoints[0].breakpoint}px) {
      margin: 0 0 0 ${marginRight}px;
      flex: 1;
    }
  `
  return (
    <article className={projectStyle}>
      <div className={projectHeadingContainerStyle}>
        <div className={projectTagContainerStyle}>
          <a className={linkStyle} href={p.url}>
            <div className={linkIconStyle}>
              <i className="fa fa-link" />
              <h2 className={projectHeadingStyle}>{p.name}</h2>
            </div>
          </a>
          {p.inProd ? <Tag fontSize="0.8em">In Prod</Tag> : null}
        </div>
        <p className={dateStyle}>{p.date}</p>
      </div>
      <h3 className={projectBriefStyle}>{p.brief}</h3>
      <div className={projectBlockStyle}>
        {p.imgUrl ? (
          <div className={imgContainerStyle}>
            <img src={p.imgUrl} alt={p.imgAlt} className={imgStyle} />
          </div>
        ) : null}
        {p.desc ? (
          <div className={descContainerStyle}>
            <p className={descStyle}>{p.desc}</p>
            {p.links ? p.links : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
