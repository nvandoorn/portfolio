import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

const workHistory = [
  {
    name: 'Software Lead',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Sept 2017 - Present',
    desc: '',
    imgUrl: ''
  },
  {
    name: 'Software Developer, Contract',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Jul 2017 - Sept 2017',
    desc: `After leaving FTS, one of my colleagues shared some details about a side project
          he was working on. His boat broke moorage earlier that year, so he got to work
          building a product to remotely monitor and track boats. From a customer perspective,
          this product, the BRNKL, allows users to monitor the health of their boat by monitoring batteries,
          bilge activity, and GPS location, and the ability to configure alert rules to let
          them know when something has gone wrong. From a technical perspective, this product consists of
          a small piece of cellular based hardware placed on the vessel, back-end infrastructure,
          and a user facing application where users can see all of their data.
          Eventually, the product became serious enough that he quit his job at FTS
          to work full time on this new product. He approached me about joining as a contractor to
          help build the initial version of the user application.

          I was given a set of requirements for the application
          and the rest was up to me. I decided to build the app using progressive web app technologies (PWA)
          along with a layer to support native app functionality (Ionic and Cordova). This decision has served us
          well as we deploy to web, iOS, and Android all from the same codebase. In terms of integration
          into a back-end, our founder had already started using Google Firebase to store data collected from the boats,
          so I started integrating the app with this existing infrastructure.

          I completed two 80 hour contracts for Barnacle Systems, each focused on the app, with some work
          on the infrastructure and integration, but no work on the hardware itself (i.e firmware).
          This time was sufficient to deliver the complete set of features required for the minimum viable product.`,
    imgUrl: ''
  },
  {
    name: 'Software Developer, Co-op',
    brief: 'Forest Technology Systems',
    date: 'Sept 2016 - April 2017',
    desc: `During my time at FTS, I worked with a small team of engineers,
          product managers, and sales staff to launch a remote weather station
          targeted at the fire weather market. The system came equipped
          with up to four cameras that uploaded photos and videos over cellular to give
          customers complete situational awareness in hard to reach areas.
          The system was released as the Remove Automated Observation System (RAOS).
          The RAOS comes fully integrated with the FTS360 service
          which allows users to review uploaded data and set station configuration
          I was responsible for implementing a series of services to:
          receive configuration from the front-end,
          transmit captured photos and videos,
          monitor system health (battery condition, storage space,
          cell strength), and handle local logging. The services were implemented in
          JavaScript running in Node on Yocto Linux and
          communicated over a local messaging protocol.`
  }
]

export default () => (
  <Layout>
    {workHistory.map(work => (
      <Project {...work} key={work.name} />
    ))}
  </Layout>
)
