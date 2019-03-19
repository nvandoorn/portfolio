import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import { Splash } from '../components/splash'

const indexData = {
  heroText: `Hello world 👋`,
  heroTagline: `Let's build software for life`,
  heroBtnTo: '/about',
  heroBtn: (
    <>
      Get In Touch <FontAwesomeIcon icon={faPaperPlane} />
    </>
  )
}

const IndexPage = () => (
  <Layout height="100vh">
    <Splash {...indexData} />
  </Layout>
)

export default IndexPage
