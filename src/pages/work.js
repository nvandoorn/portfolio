import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

const workHistory = [
  {
    name: 'Lead Software Developer',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Sept 2017 - Feb 2019',
    desc: '',
    imgUrl: '',
    url: '//brnkl.io'
  },
  {
    name: 'Software Developer, Contract',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Jul 2017 - Sept 2017',
    desc: <></>,
    imgUrl: '',
    url: '//brnkl.io'
  },
  {
    name: 'Software Developer, Co-op',
    brief: 'Forest Technology Systems',
    date: 'Sept 2016 - April 2017',
    desc: (
      <>
        During my time at FTS, I worked with a small team of engineers, product
        managers, and sales staff to launch a remote weather station targeted at
        the fire weather market. The system came equipped with up to four
        cameras that uploaded photos and videos over cellular to give customers
        complete situational awareness in hard to reach areas. The system was
        released as the Remove Automated Observation System (RAOS).
      </>
    ),
    url: '//ftsinc.com/'
  }
]

export default () => (
  <Layout>
    {workHistory.map(work => (
      <Project {...work} key={work.name} />
    ))}
  </Layout>
)
