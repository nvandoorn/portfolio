import React from 'react'
import { css } from '@emotion/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { Tag } from './tag'
import { margins, breakpoints } from './globals'

const projectHeadingStyle = css`
  margin: 0 ${margins.sm}px 0 0;
`
const projectBriefStyle = css`
  margin: 0;
  font-weight: 300;
`

const projectBlockStyle = css`
  display: flex;
  flex-wrap: wrap;
`

const imgStyle = css`
  max-height: 85vw;
`

const linkStyle = css`
  display: flex;
  align-content: center;
  margin: 0 ${margins.sm}px 0 0;
  padding: 0 0 ${margins.sm}px 0;
  border-color: rgba(0, 0, 0, 0);
  :hover {
    border-color: #ffffff;
  }
`

const projectStyle = css`
  margin: ${margins.lg}px 0 0 0;
`

const linkIconStyle = css`
  display: flex;
  align-items: center;
`

const projectHeadingContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    <article css={projectStyle}>
      <div css={projectHeadingContainerStyle}>
        <div css={projectTagContainerStyle}>
          <a
            css={linkStyle}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div css={linkIconStyle}>
              <h3 css={projectHeadingStyle}>{p.name}</h3>
              <FontAwesomeIcon icon={faLink} />
            </div>
          </a>
          {p.inProd ? <Tag fontSize="0.8em">In Prod</Tag> : null}
        </div>
        <p css={dateStyle}>{p.date}</p>
      </div>
      <h3 css={projectBriefStyle}>{p.brief}</h3>
      <div css={projectBlockStyle}>
        {p.imgUrl ? (
          <div css={imgContainerStyle}>
            <img src={p.imgUrl} alt={p.imgAlt} css={imgStyle} />
          </div>
        ) : null}
        {p.desc ? (
          <div css={descContainerStyle}>
            <div css={descStyle}>{p.desc}</div>
            {p.links ? p.links : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
