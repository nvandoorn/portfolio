import React from 'react'

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesome } from '../components/font-awesome'

import Layout from '../components/layout'
import { Splash } from '../components/splash'

const indexData = {
  heroText: `Hello world 👋`,
  heroTagline: `Let's build software for life`,
  heroBtnTo: '/about',
  heroBtn: (
    <>
      Get In Touch <FontAwesome icon={faPaperPlane} />
    </>
  )
}

const IndexPage = () => (
  <Layout height="100vh">
    <Splash {...indexData} />
  </Layout>
)

export default IndexPage
