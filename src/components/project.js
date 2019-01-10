import React from 'react'
import { css } from 'react-emotion'

import { Tag } from './tag'
import { DefaultButton as Button } from './button'
import { margins, radius, transitions, breakpoints } from './globals'

const projectHeadingStyle = css(`
  margin: 0;
`)
const projectBriefStyle = css(`
  margin: 0;
  font-weight: 300;
`)

const projectBlockStyle = css(`
  margin: ${margins.md}px 0;
  display: flex;
  flex-wrap: wrap;
`)

const imgStyle = css(`
  max-height: 85vw;
`)

const imgContainerStyle = css(`
`)

const descStyle = css(`
  font-weight: 300;
  line-height: 2em;
`)

const projectStyle = css(`
  margin: ${margins.lg}px 0;
`)

const projectHeadingContainerStyle = css(`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${margins.md}px;
`)

const projectTagContainerStyle = css(`
  display: flex;
`)

export const Project = p => {
  const marginRight = p.imgUrl ? margins.md : 0
  const descContainerStyle = css(`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${margins.md}px 0 0 0;
    @media (min-width: ${breakpoints[0].breakpoint}px) {
      margin: 0 0 0 ${marginRight}px;
      flex: 1;
    }
  `)
  return (
    <article className={projectStyle}>
      <div className={projectHeadingContainerStyle}>
        <div className={projectTagContainerStyle}>
          <h2 className={projectHeadingStyle}>{p.name}</h2>
          {p.inProd ? <Tag fontSize="0.8em">In Prod</Tag> : null}
        </div>
        <p>{p.date}</p>
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
