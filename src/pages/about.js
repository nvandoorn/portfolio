import React from 'react'

import Layout from '../components/layout'
import { AboutEntry } from '../components/about-entry'

const aboutLists = [
  {
    header: `Values and Ethics`,
    listItems: [
      `Above all, we must use technology for good (not to be confused with commercial success)`,
      'People are most important',
      'Empower everyone to do amazing work'
    ]
  },
  {
    header: 'Skills and Experience',
    listItems: [
      'Building beautiful user applications using web technology',
      'Deploying function based infrastructure',
      'Designing software interfaces between modules',
      'Orchestrating fleets of cellular devices',
      'Designing embeded software'
    ]
  },
  {
    header: 'Tools',
    listItems: [
      'Frontend: React, Angular, Ionic, RxJS',
      'Infrastructure: Node, Firebase, Google Cloud (Cloud Functions, Pubsub, Stackdriver)',
      'Embedded: C, Linux, Legato, Yocto, AirVantage'
    ]
  },
  {
    header: `Future Learning Ideas`,
    listItems: [
      'Ruby, Go, Rust, Smalltalk, ReasonML',
      'Linux framebuffer API',
      'Implement TCP from scratch'
    ]
  }
]

export default () => (
  <Layout>
    {aboutLists.map((entry, i) => (
      <AboutEntry {...entry} key={entry.header} />
    ))}
  </Layout>
)
