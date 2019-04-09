import React from 'react'
import { css } from '@emotion/core'

import { BaseLayout } from '../components/base-layout'
import { Project } from '../components/project'
import { cvTheme } from '../components/globals'

import { projects } from './projects'
import { workHistory } from './work'
import { skills, tools } from './about'

const cleanProjectDetailForCv = ({ images, ...rest }) => rest

const cleanProjectForCv = project => ({
  ...project,
  projectDetails: project.projectDetails
    ? project.projectDetails.map(cleanProjectDetailForCv)
    : null
})

const cvProjects = projects.filter(k => k.showOnCv).map(cleanProjectForCv)

const cvWork = workHistory.map(cleanProjectForCv)

export default () => (
  <BaseLayout theme={cvTheme}>
    <header
      css={({ margins }) =>
        css`
          margin-bottom: ${margins.lg}px;
        `
      }
    >
      <h1>Nicholas Van Doorn</h1>
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
      {cvWork.map(k => (
        <Project {...k} key={k.name} />
      ))}
      <h1>Projects</h1>
      {cvProjects.map(k => (
        <Project {...k} key={k.name} />
      ))}
      <h1>Skills</h1>
      <ul>
        {skills.map(k => (
          <li key={k}>{k}</li>
        ))}
      </ul>
      <h1>Tools</h1>
      <ul>
        {tools.map(k => (
          <li key={k}>{k}</li>
        ))}
      </ul>
    </div>
  </BaseLayout>
)
