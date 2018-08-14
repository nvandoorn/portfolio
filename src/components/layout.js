import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import { colours, fontStack, transitions } from './globals'
import { Container } from './container'
import { Header } from './header'

import '../../node_modules/font-awesome/css/font-awesome.min.css'

injectGlobal(`
  *, html, body {
    margin: 0;
    padding: 0;
  }
  p, a, h1, h2, h3, h4, h5 {
    font-family: ${fontStack};
    color: ${colours.main};
  }
  a {
    border-bottom: 1px dotted;
    text-decoration: none;
    &: hover {
      transition: ${transitions.hover}
    }
  }
  body {
    background: ${colours.background};
  }
`)

const siteData = {
  siteName: 'Nicholas Van Doorn',
  navLinks: [
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Work',
      link: '/work'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ],
  socialEntries: [
    {
      link: '//github.com/nvandoorn',
      name: 'github'
    },
    {
      link: '//twitter.com/nickvandoorn',
      name: 'twitter'
    },
    {
      link: '//www.linkedin.com/in/nvdoorn/',
      name: 'linkedin'
    },
    {
      link: '//open.spotify.com/user/pontonn',
      name: 'spotify'
    }
  ]
}

export default ({ children, data }) => (
  <>
    <Helmet
      title="Hello world"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Container>
      <Header
        siteName={siteData.siteName}
        links={siteData.navLinks}
        socialEntries={siteData.socialEntries}
      />
      {children}
    </Container>
  </>
)
