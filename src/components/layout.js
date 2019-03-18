import React from 'react'
import Helmet from 'react-helmet'
import { css, Global } from '@emotion/core'
import { colours, fontStack, transitions, margins } from './globals'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpotify,
  faGithub,
  faTwitter,
  faKeybase
} from '@fortawesome/free-brands-svg-icons'

import { Container } from './container'
import { Header } from './header'

const globalStyles = css`
  *,
  html,
  body {
    margin: 0;
    padding: 0;
  }
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  div {
    font-family: ${fontStack};
    color: ${colours.main};
  }
  h1,
  h2 {
    margin: 0 0 ${margins.lg}px 0;
  }
  h3 {
    margin: 0 0 ${margins.md}px 0;
  }
  h4,
  h5 {
    margin: 0 0 ${margins.sm}px 0;
  }
  ul {
    list-style-type: none;
  }
  ul li:not(:first-of-type):not(:last-child) {
    margin: ${margins.md}px 0;
  }
  a {
    border-bottom: 1px dotted;
    text-decoration: none;
    &: hover {
      transition: ${transitions.hover};
    }
  }
  body {
    background: ${colours.background};
  }
  // TODO remove this hack (FontAwesome SVGs are huge on load)
  .svg-inline--fa {
    max-height: 50px;
  }
`

const siteData = {
  siteName: 'Nicholas Van Doorn',
  navLinks: [
    {
      name: 'Work',
      to: '/work'
    },
    {
      name: 'Projects',
      to: '/projects'
    },
    {
      name: 'About',
      to: '/about'
    }
  ],
  socialEntries: [
    {
      href: '//github.com/nvandoorn',
      name: 'GitHub',
      icon: <FontAwesomeIcon icon={faGithub} />
    },
    {
      href: '//twitter.com/nickvandoorn',
      name: 'Twitter',
      icon: <FontAwesomeIcon icon={faTwitter} />
    },
    {
      href: '//keybase.io/nvandoorn',
      name: 'Keybase',
      icon: <FontAwesomeIcon icon={faKeybase} />
    },
    {
      href: '//open.spotify.com/user/pontonn',
      name: 'Spotify',
      icon: <FontAwesomeIcon icon={faSpotify} />
    }
  ]
}

export default ({ children, height }) => (
  <>
    <Global styles={globalStyles} />
    <Helmet
      title="Nicholas Van Doorn"
      meta={[
        { name: 'description', content: 'Portfolio for Nicholas Van Doorn' },
        { name: 'keywords', content: 'software, engineer, development, web' }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Container height={height}>
      <Header
        siteName={siteData.siteName}
        links={siteData.navLinks}
        socialEntries={siteData.socialEntries}
      />
      {children}
    </Container>
  </>
)
