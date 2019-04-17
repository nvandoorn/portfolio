import React from 'react'
import { css } from '@emotion/core'

import { BaseLayout } from '../components/base-layout'
import { Project as BaseProject } from '../components/project'
import { cvTheme } from '../components/globals'

import { projects } from './projects'
import { workHistory } from './work'
import { skills, tools } from './about'

const Project = p => <BaseProject {...p} iconSize="14px" />

const cleanProjectDetailForCv = ({ images, ...rest }) => rest

const cleanProjectForCv = project => ({
  ...project,
  inProd: false,
  projectDetails: project.projectDetails
    ? project.projectDetails.map(cleanProjectDetailForCv)
    : null
})

const cvProjects = projects.filter(k => k.showOnCv).map(cleanProjectForCv)

const cvWork = workHistory.map(cleanProjectForCv)

const containerStyle = ({ margins }) =>
  css`
    margin: 0 0 ${margins.lg}px 0;
  `

export default () => (
  <BaseLayout theme={cvTheme}>
    <header
      css={({ margins }) =>
        css`
          margin-bottom: ${margins.lg}px;
        `
      }
    >
      <h1
        css={css`
          font-size: 2em;
        `}
      >
        Nicholas Van Doorn
      </h1>
      <div
        css={({ margins }) => css`
          & a {
            margin-right: 20px;
          }
        `}
      >
        <a href="mailto:vandoorn.nick@gmail.com">vandoorn.nick@gmail.com</a>
        <a href="https://github.com/nvandoorn">github.com/nvandoorn</a>
        <a href="https://twitter.com/nickvandoorn">twitter.com/nickvandoorn</a>
      </div>
    </header>

    <div
      css={({ margins }) => css`
        & h1 {
          margin-bottom: ${margins.lg}px;
        }
      `}
    >
      <h1>Work</h1>
      {cvWork.map((k, i) => (
        <Project {...k} key={`work-${i}`} />
      ))}
      <h1>Projects</h1>
      {cvProjects.map(k => (
        <Project {...k} key={k.name} />
      ))}
      <h1>Skills</h1>
      <article css={containerStyle}>
        <ul>
          {skills.map(k => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </article>
      <h1>Tools</h1>
      <article css={containerStyle}>
        <ul>
          {tools.map(k => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </article>
    </div>
  </BaseLayout>
)
