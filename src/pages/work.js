import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

export const workHistory = [
  {
    name: 'Lead Software Developer',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Sept 2017 - Feb 2019',
    desc: (
      <>
        <h4>Awards</h4>
        <ul>
          <li>Best New Concept, Small Business BC, Feb 2019</li>
          <li>
            Most Innovative (Best In Show), Vancouver International Boat Show,
            Feb 2019
          </li>
          <li>Startup of the Year, VIATEC, June 2018</li>
        </ul>
        <h4>App</h4>
        <ul>
          <li>Written in TypeScript with Angular</li>
          <li>Deployed on iOS, Android, and web</li>
          <li>Realtime data from Firebase Realtime Database</li>
          <li>Push alerts implemented over Firebase Cloud Messaging</li>
        </ul>
        <h4>Backend</h4>
        <ul>
          <li>Written in TypeScript and run on Node</li>
          <li>Covered by unit tests and integration tests</li>
          <li>Deployed on Google Cloud Pubsub and Firebase Functions</li>
          <li>Integrated with cellular network via Sierra Wireless</li>
        </ul>
        <h4>Embedded</h4>
        <ul>
          <li>Written in C with the Legato Framework</li>
          <li>Custom board based on ARM chip with Linux</li>
          <li>
            Custom drivers for hardware peripherals (userspace and kernelspace)
          </li>
          <li>Integration with backend to implement custom business logic</li>
          <li>Successful deploys of over the air updates to customers</li>
        </ul>
      </>
    ),
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
      <ul>
        <li>
          Worked with small cross-functional team of engineers, product
          managers, and sales staff
        </li>
        <li>
          Implement components of embedded camera product aimed at the fire
          weather market (FTS RAOS)
        </li>
        <li>Automate builds and installs</li>
        <li>Integrate with user facing software as a service product</li>
      </ul>
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
