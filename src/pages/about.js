import React from 'react'

import Layout from '../components/layout'
import { AboutEntry } from '../components/about-entry'
import { FontAwesome } from '../components/font-awesome'
import { Personal } from '../components/personal'
import { SplitContainer } from '../components/split-container'

import profilePic from '../images/profile.jpg'

export const skills = [
  'Building beautiful user applications using web technology',
  'Deploying function based infrastructure',
  'Designing software systems as modules with interfaces',
  'Orchestrating fleets of cellular devices',
  'Designing and implementing embeded software'
]

export const tools = [
  `Languages: Expert in TypeScript/JavaScript, fluent in C, working knowledge of Python and Shell`,
  'Frontend: React, Angular, Ionic, RxJS',
  'Infrastructure: Node, Firebase, Google Cloud (Cloud Functions, Pubsub, Stackdriver)',
  'Embedded: Linux, Legato, Yocto, AirVantage',
  'Automation: TSLint, ESLint, Prettier, clang-format'
]

const aboutLists = [
  {
    header: (
      <>
        Values and Ethics <FontAwesome name="heart" />
      </>
    ),
    listItems: [
      'Design should consider all users',
      'Design should be secure and prevent abuse by default',
      'People are most important',
      'Empower everyone to do amazing work'
    ]
  },
  {
    header: (
      <>
        Skills and Experience <FontAwesome name="map" />
      </>
    ),
    listItems: skills
  },
  {
    header: (
      <>
        Tools <FontAwesome name="wrench" />
      </>
    ),
    listItems: tools
  },
  {
    header: (
      <>
        Future Learning Ideas <FontAwesome name="flask" />
      </>
    ),
    listItems: [
      `Learn more languages. I love deriving influence from all languages. I would love to learn more
      about Ruby, Go, Rust, Smalltalk, ReasonML, and Elixir.`,
      `Write a drvier using the Linux framebuffer API. Although I never want to
      specialize in operating sytems, learning about them is fascinating and
      helps me write better code at all levels of abstraction.`,
      `Implement TCP from scratch in C (bonus for x86 Assembly). We send a lot of data over the network
      so I want to zoom in on how it's done.`,
      `Maybe write my own kernel with some basic threading (RTOS style)?`,
      'Reduce the overhead of declarative web primitives (React style API close to the metal).'
    ]
  }
]

const personalProps = {
  name: <h2>Me</h2>,
  tagline: `Get in touch`,
  imgAlt: `Portrait photo of Nicholas Van Doorn`,
  imgUrl: profilePic,
  email: (
    <p>
      <FontAwesome name="envelope-o" /> nick <em>at</em> nv <em>dot</em>{' '}
      delivery
    </p>
  )
}

export default () => (
  <Layout>
    <SplitContainer>
      <Personal {...personalProps} />
      <div>
        {aboutLists.map((entry, i) => (
          <AboutEntry {...entry} key={`about-entry-${i}`} />
        ))}
      </div>
    </SplitContainer>
  </Layout>
)
