import React from 'react'
import { css } from '@emotion/core'
import { FontAwesome } from '../components/font-awesome'
import {
  faHeart,
  faMap,
  faWrench,
  faFlask,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import { AboutEntry } from '../components/about-entry'
import { Personal } from '../components/personal'
import { SplitContainer } from '../components/split-container'

import profilePic from '../images/profile.jpg'

export const skills = [
  'Building beautiful user applications using web technology',
  'Deploying function based infrastructure',
  'Designing software systems as modules with interfaces',
  'Orchestrating fleets of cellular devices',
  'Designing and implementing embedded software'
]

export const tools = [
  `TypeScript/JavaScript`,
  `Ruby`,
  `Rails`,
  `Shell (I use zsh)`
]

const aboutLists = [
  {
    header: (
      <>
        Values and Ethics <FontAwesome icon={faHeart} />
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
        Skills and Experience <FontAwesome icon={faMap} />
      </>
    ),
    listItems: skills
  },
  {
    header: (
      <>
        Tools <FontAwesome icon={faWrench} />
      </>
    ),
    listItems: tools
  },
  {
    header: (
      <>
        Future Learning Ideas <FontAwesome icon={faFlask} />
      </>
    ),
    listItems: [
      `Learn more languages. I love deriving influence from all languages. In particular, I'm interested in 
      Rust, Smalltalk, ReasonML, and Elixir.`,
      `Write a driver using the Linux framebuffer API. Although I never want to
      specialize in operating systems, learning about them is fascinating and
      helps me write better code at all levels of abstraction.`,
      `Implement TCP from scratch in C (bonus for x86 Assembly). We send a lot of data over the network
      so I want to zoom in on how it's done.`,
      `Write my own kernel with some basic threading (RTOS style)?`,
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
      <FontAwesome icon={faEnvelope} size="12px" /> vandoorn.nick <em>at</em>{' '}
      gmail.com
    </p>
  )
}

export default () => (
  <Layout>
    <SplitContainer>
      <Personal {...personalProps} />
      <div
        css={({ margins }) =>
          css`
            & h2 {
              margin: 0 0 ${margins.md}px 0;
            }
          `
        }
      >
        {aboutLists.map((entry, i) => (
          <AboutEntry {...entry} key={`about-entry-${i}`} />
        ))}
      </div>
    </SplitContainer>
  </Layout>
)
