import React from 'react'
import { css } from '@emotion/core'

import { FontAwesome } from './font-awesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { Tag } from './tag'
import { ProjectDetail } from './project-detail'
import { margins } from './globals'

const projectHeadingStyle = css`
  margin: 0 ${margins.sm}px 0 0;
`
const projectBriefStyle = css`
  font-weight: 300;
`

const projectBlockStyle = css`
  display: flex;
  flex-wrap: wrap;
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
  margin: 0 0 ${margins.lg}px 0;
  & > * {
    margin: 0 0 ${margins.md}px 0;
  }
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
              <h2 css={projectHeadingStyle}>{p.name}</h2>
              <FontAwesome icon={faLink} />
            </div>
          </a>
          {p.inProd ? <Tag fontSize="0.8em">In Prod</Tag> : null}
        </div>
        <p css={dateStyle}>{p.date}</p>
      </div>
      <h3 css={projectBriefStyle}>{p.brief}</h3>
      <div css={projectBlockStyle}>
        {p.desc ? (
          <div
            css={css`
              margin-bottom: ${margins.md}px;
            `}
          >
            {p.desc}
          </div>
        ) : null}
        {p.projectDetails
          ? p.projectDetails.map((k, i) => (
              <ProjectDetail key={`project-detail-${i}`} {...k} />
            ))
          : null}
      </div>
    </article>
  )
}
