import React, { Component } from 'react'
import { themes } from './globals'
import {
  faSpotify,
  faGithub,
  faTwitter,
  faKeybase
} from '@fortawesome/free-brands-svg-icons'

import { Header } from './header'
import { FontAwesome } from './font-awesome'
import { ThemeSwitcher } from './theme-switcher'
import { BaseLayout } from './base-layout'
import { parseQuery, writeQuery } from '../lib/url'

const helmetData = {
  title: 'Nicholas Van Doorn',
  meta: [
    {
      name: 'description',
      content: 'Portfolio for Nicholas Van Doorn'
    },
    {
      name: 'keywords',
      content: 'software, engineer, development, web'
    }
  ]
}

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
      href: 'https://github.com/nvandoorn',
      name: 'GitHub',
      icon: <FontAwesome icon={faGithub} size="30px" />
    },
    {
      href: 'https://twitter.com/nickvandoorn',
      name: 'Twitter',
      icon: <FontAwesome icon={faTwitter} size="30px" />
    },
    {
      href: 'https://keybase.io/nvandoorn',
      name: 'Keybase',
      icon: <FontAwesome icon={faKeybase} size="30px" />
    },
    {
      href: 'https://open.spotify.com/user/pontonn',
      name: 'Spotify',
      icon: <FontAwesome icon={faSpotify} size="30px" />
    }
  ]
}

const themeSwitcherThemes = [
  { name: '👔', key: 'mainTheme' },
  { name: '📰', key: 'highContrastTheme' }
]

const getThemeKeyFromUrl = () => {
  const queryObj = parseQuery()
  return queryObj && queryObj.themeKey
}

const initState = () => {
  let currentThemeKey = getThemeKeyFromUrl() || 'mainTheme'
  return {
    theme: themes[currentThemeKey],
    currentThemeKey
  }
}

// persist state globally
// (theme should stay
//  across page changes)
let lastState = initState()

export default class Layout extends Component {
  state = lastState

  changeTheme = themeKey => {
    const theme = themes[themeKey]
    const newState = { theme, currentThemeKey: themeKey }
    lastState = newState
    this.setState(newState)
    writeQuery({ themeKey })
  }

  render() {
    const { children, height } = this.props
    return (
      <BaseLayout
        height={height}
        theme={this.state.theme}
        helmetData={helmetData}
      >
        <Header
          siteName={siteData.siteName}
          links={siteData.navLinks}
          socialEntries={siteData.socialEntries}
        />
        {children}
        <ThemeSwitcher
          currentTheme={this.state.currentThemeKey}
          themes={themeSwitcherThemes}
          onClick={t => this.changeTheme(t)}
        />
      </BaseLayout>
    )
  }
}
