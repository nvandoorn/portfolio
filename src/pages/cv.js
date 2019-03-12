import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

import { projects } from './projects'
import { workHistory } from './work'
import { skills, tools } from './about'

const cleanProjectForCv = ({ desc, imgUrl, ...rest }) => rest

const cvProjects = projects.filter(k => k.showOnCv).map(cleanProjectForCv)

export default () => (
  <Layout>
    <h2>Work</h2>
    {workHistory.map(k => (
      <Project {...k} key={k.name} />
    ))}
    <h2>Projects</h2>
    {cvProjects.map(k => (
      <Project {...k} key={k.name} />
    ))}
    <h2>Teaching</h2>
    <h2>Skills</h2>
    <ul>
      {skills.map(k => (
        <li key={k}>{k}</li>
      ))}
    </ul>
    <h2>Tools</h2>
    <ul>
      {tools.map(k => (
        <li key={k}>{k}</li>
      ))}
    </ul>
  </Layout>
)
