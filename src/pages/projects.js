import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

import camera from '../images/camera.png'
import gpsMonitor from '../images/gps-monitor.png'
import slask from '../images/slask.png'
import cnakedTestSuite from '../images/cnaked-test-suite.png'
import naiveChat from '../images/naive-chat.png'

export const projects = [
  {
    name: 'cnaked',
    brief:
      'A Battlesnake so close to the metal, 6 CVEs have been opened while reading',
    date: 'Feb 2019 - Present',
    url: '//github.com/nvandoorn/cnaked',
    projectDetails: [
      {
        listItems: [
          'Prototype for Battlesnake 2019, will be entered in contest in 2020',
          `Dangerously close to the metal`,
          `All in on test driven development`,
          'Likely to be re-written in Rust'
        ],
        images: [
          {
            imgUrl: cnakedTestSuite,
            caption: 'cnaked Test Suite'
          }
        ]
      }
    ]
  },
  {
    name: 'naive',
    brief: 'A naive implementation of a NoSQL database',
    date: 'Jan 2019 - Present',
    projectDetails: [
      {
        listItems: [
          'Designed to mimic the Firebase Realtime Database API',
          'Written in TypeScript for the browser and Node',
          'Code organized as monorepo with independent builds and integration tests',
          'Can be used with a local filesystem or remote filesystem',
          `Persisted in a static JSON file (don't use this in prod)`
        ],
        images: [
          {
            imgUrl: naiveChat,
            caption: 'Chat Client Using Naive'
          }
        ]
      }
    ],
    url: '//github.com/nvandoorn/naive',
    showOnCv: true
  },
  {
    name: 'Pipefitter',
    brief: 'Automated audits and monitoring for your ISP',
    date: 'Nov 2018 - Present',
    desc: (
      <p>
        My home internet performance is consistently below spec and my ISP never
        believes me. Hopefully they will soon. Designed for maximum
        plug-ability.
      </p>
    ),
    url: '//github.com/nvandoorn/pipefitter',
    showOnCv: true
  },
  {
    name: 'funCtional',
    brief: 'Functional programming in C with statically allocated memory',
    date: 'Aug 2018',
    desc: (
      <p>
        I like functional programming and I like C, so I tried to combine the
        two. In reality, a simple for loop is better, but I had fun trying this.
      </p>
    ),
    inProd: true,
    url: '//github.com/nvandoorn/functional'
  },
  {
    name: 'Legato Storage Service',
    brief: 'Non-volatile time series data storage',
    date: 'Jun 2018 - Present',
    desc: (
      <p>
        The Legato Linux framework offers out of the box support for uploading
        time series data, but not storing it locally. For this reason, we
        created this service to persist data for offline cases.
      </p>
    ),
    url: '//github.com/brnkl/legato-storage-service'
  },
  {
    name: 'Legato GPS Monitor',
    brief:
      'Monitor GPS in a separate process to avoid blocking single threaded apps',
    date: 'April 2018',
    projectDetails: [
      {
        listItems: [
          'Allow single threaded apps to read the latest position without blocking',
          'Dynamically poll and cache GPS location based on accuracy',
          'Expose GPS API as synchronous methods reading from cache',
          'Cache is updated in background using event-loop based timer (much like in JavaScript)'
        ],
        images: [
          {
            imgUrl: gpsMonitor,
            caption: 'GPS Monitor with BRNKL App',
            noShadow: true
          }
        ]
      }
    ],
    inProd: true,
    url: '//github.com/brnkl/gps-monitor',
    showOnCv: true
  },
  {
    name: 'CF3 Config App',
    brief: 'Automatically configure common settings for CF3 based modules',
    date: 'April 2018',
    desc: <p>Automatically configure Sierra Wireless CF3 based modules</p>,
    inProd: true,
    url: '//github.com/brnkl/cf3-config'
  },
  {
    name: 'Legato Camera Driver',
    brief: 'Support for the VC0706 camera on a Legato based project',
    date: 'Nov 2017 - Dec 2017',
    projectDetails: [
      {
        listItems: [
          'Port of an Arduino style driver to Linux',
          'Integrated with Sierra Wireless Legato Framework',
          'In use at Sierra Wireless and with their customers (see forums)'
        ],
        images: [
          {
            imgUrl: camera,
            caption: 'Camera Driver with BRNKL App',
            noShadow: true
          }
        ]
      }
    ],

    inProd: true,
    url: '//github.com/brnkl/VC0706-cam-lib',
    showOnCv: true
  },
  {
    name: 'ccss',
    brief: 'A slightly more polite variant of CSS',
    date: 'Jul 2017',
    desc: `ccss transforms the correct spelling of colour to color in your CSS. This was intended
          to be part one of a series of awful CSS transforms.`,
    url: '//github.com/nvandoorn/ccss'
  },
  {
    name: 'slask',
    brief: 'A lightweight log viewer and server all in one',
    date: 'Mar 2017 - Present',
    url: '//github.com/nvandoorn/slask',
    projectDetails: [
      {
        listItems: [
          'Log server implemented run in Node',
          'Log client implemented with React',
          'Support for custom configs and custom log parsing'
        ],
        images: [
          {
            imgUrl: slask,
            caption: 'slask Client Screenshot'
          }
        ]
      }
    ]
  },
  {
    name: 'IE Media Queries',
    brief: 'Support media queries in Internet Explorer 8',
    date: 'April 2013',
    desc: `IE Media Queries is a Javascript polyfill for Internet Explorer 8's lack of
          media query support. IE8 is more or less dead and unsupported, but I still
          enjoyed re-creating unsupported functionality`,
    url: '//github.com/nvandoorn/IEMediaQueries'
  },
  {
    name: 'times-table-tester',
    brief: 'Code is easier than mental math',
    date: 'March 2007',
    url: '//github.com/nvandoorn/times-table-tester',
    desc: 'In 6th grade I made command line app to quiz myself on times tables.'
  }
]

export default () => (
  <Layout>
    {projects.map(project => (
      <Project {...project} key={project.name} />
    ))}
  </Layout>
)
