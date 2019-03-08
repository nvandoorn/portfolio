import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import { AboutEntry } from '../components/about-entry'
import { FontAwesome } from '../components/font-awesome'
import { Personal } from '../components/personal'
import { SplitContainer } from '../components/split-container'
import { margins } from '../components/globals'

import profilePic from '../images/profile.jpg'

const botStyle = css`
  margin: ${margins.sm}px 0 0 0;
  font-size: 10px;
`

const aboutLists = [
  {
    header: (
      <>
        Values and Ethics <FontAwesome name="heart" />
      </>
    ),
    listItems: [
      `Above all, we must use technology for good (not to be confused with commercial success)`,
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
    listItems: [
      'Building beautiful user applications using web technology',
      'Deploying function based infrastructure',
      'Designing software interfaces between modules',
      'Orchestrating fleets of cellular devices',
      'Designing embeded software'
    ]
  },
  {
    header: (
      <>
        Tools <FontAwesome name="wrench" />
      </>
    ),
    listItems: [
      `Languages: Expert in TypeScript/JavaScript, fluent in C, working knowledge of Python and Shell`,
      'Frontend: React, Angular, Ionic, RxJS',
      'Infrastructure: Node, Firebase, Google Cloud (Cloud Functions, Pubsub, Stackdriver)',
      'Embedded: Linux, Legato, Yocto, AirVantage'
    ]
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
      `Maybe write my own kernel with some basic threading (RTOS style)?`
    ]
  }
]

const personalProps = {
  name: <h2>Me</h2>,
  tagline: `Get in touch`,
  imgAlt: `Portrait photo of Nicholas Van Doorn`,
  imgUrl: profilePic,
  email: (
    <>
      <p>
        <i css="fa fa-envelope-o" /> nick <em>at</em> nv <em>dot</em> delivery
      </p>
      <p css={botStyle}>(be gone, bots)</p>
    </>
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
