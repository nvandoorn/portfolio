import React from 'react'

import Layout from '../components/layout'
import { Project } from '../components/project'

import startupOfTheYear from '../images/startup-of-the-year.jpg'
import brnklAppMap from '../images/brnkl-app-map-iphone.png'
import brnklAppAlerts from '../images/brnkl-app-alerts-iphone.png'
import brnklProduct from '../images/brnkl-product.jpg'
import raos from '../images/raos.jpg'

export const workHistory = [
  {
    name: 'Software Developer 💎🐧',
    brief: 'Super Good Software',
    date: 'Jan 2020 - Present',
    url: 'https://supergood.software/',
    desc: `Hooray! The people here are very kind and so is the software!`
  },
  {
    name: 'Software Developer, Contract',
    brief: 'Super Good Software',
    date: 'May 2019 - Dec 2019',
    url: 'https://supergood.software/',
    desc: `SUPER GOOD is a software development agency specializing in Ruby on Rails, Spree/Solidus, eCommerce,
          and React. We have been working together to launch a new Rails app!`
  },
  {
    name: 'Lead Software Developer',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Sept 2017 - Feb 2019',
    projectDetails: [
      {
        header: 'Awards',
        listItems: [
          <>
            <a href="https://sbbcawards.ca/winners/"> Best New Concept</a>,
            Small Business BC, Feb 2019
          </>,
          <>
            <a href="https://www.passagemaker.com/trawler-news/vancouver-boat-show-best-in-show-awards">
              {' '}
              Most Innovative (Best In Show)
            </a>
            , Vancouver International Boat Show, Feb 2019
          </>,
          <>
            <a href="http://viatecawards.com/2018-recipients/#elementor-tab-title-6044">
              {' '}
              Startup of The Year
            </a>
            , VIATEC, June 2018
          </>
        ],
        images: [
          { imgUrl: startupOfTheYear, caption: 'VIATEC Startup of The Year' }
        ]
      },
      {
        header: <a href="https://app.brnkl.io"> App</a>,
        listItems: [
          'Implemented with TypeScript, Angular, RxJS, and Redux',
          'Deployed on iOS, Android, and the web',
          'Live data using RxJS and Firebase Realtime Database',
          'Push alerts implemented over Firebase Cloud Messaging'
        ],
        images: [
          {
            imgUrl: brnklAppMap,
            caption: 'BRNKL App Map View',
            noShadow: true
          },
          {
            imgUrl: brnklAppAlerts,
            caption: 'BRNKL App Alert View',
            noShadow: true
          }
        ]
      },
      {
        header: 'Backend',
        listItems: [
          'Written in TypeScript and run on Node',
          'Covered by unit tests and integration tests',
          'Deployed on Google Cloud Pubsub and Firebase Functions',
          'Integrated with cellular network via Sierra Wireless'
        ]
      },
      {
        header: <a href="https://github.com/brnkl">Embedded</a>,
        listItems: [
          <>
            Written in C with the{' '}
            <a href="https://legato.io">Legato Framework</a>
          </>,
          <>
            Custom circuit board based on ARM chip with{' '}
            <a href="https://www.yoctoproject.org/">Yocto Linux</a>
          </>,
          'Custom drivers for hardware peripherals (userspace and kernelspace)',
          'Integration with backend to implement custom business logic',
          'Successful deploys of over the air updates to customers',
          'Test circuit boards against a suite of hardware tests',
          <>
            Active member of <a href="https://forum.legato.io">Legato</a> and{' '}
            <a href="https://forum.mangoh.io">mangOH</a> communities
          </>
        ],
        images: [{ imgUrl: brnklProduct, caption: 'BRNKL embedded device' }]
      }
    ],
    desc: `Barnacle Systems is a self bootstrapped company working on boat
        monitoring and security. I worked remotely as the sole implementer of
        the the BRNKL app, backend, embedded firmware, and production automation
        software (with thanks to many open source authors).`,
    url: 'https://brnkl.io'
  },
  {
    name: 'Software Developer, Contract',
    brief: 'BRNKL by Barnacle Systems',
    date: 'Jul 2017 - Sept 2017',
    desc: `One of my co-workers from Forest Technology Systems left to found their
        own company and approached me to help with the initial version of the
        app and backend.`,
    projectDetails: [
      {
        listItems: [
          'Transform mockups and prototype of app into initial commercial release',
          'Implement initial backend based on prototype implementation',
          `Design infrastructure such that it is self managed (i.e "stateless" or "serverless")`,
          'Design and implement local test environment for backend'
        ]
      }
    ],
    url: 'https://brnkl.io'
  },
  {
    name: 'Software Developer, Contract',
    brief: 'Forest Technology Systems',
    date: 'Sept 2016 - April 2017',
    projectDetails: [
      {
        listItems: [
          'Implement components of embedded camera product aimed at the fire weather market (FTS RAOS)',
          'Automate builds and installs of software updates',
          'Integrate with user facing software as a service product'
        ],
        images: [{ imgUrl: raos, caption: 'FTS RAOS camera system' }]
      }
    ],
    desc: `During my time at Forest Technology Systems, I worked with a small
          cross-functional team of engineers, product managers,
          and sales staff to transform a prototype camera system into a production ready product.`,
    url: 'https://ftsinc.com/'
  }
]

export default () => (
  <Layout>
    {workHistory.map(work => (
      <Project {...work} key={work.name} />
    ))}
  </Layout>
)
