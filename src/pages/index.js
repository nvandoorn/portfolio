import React from 'react'

import { FontAwesome } from '../components/font-awesome'
import Layout from '../components/layout'
import { Splash } from '../components/splash'

const indexData = {
  heading: 'Hello world',
  subHeadings: [`Let's build ethical technology for reasons that matter*`],
  emojiList: ['💻', '🖥', '🌎', '🚀', '💾'],
  heroBtnTo: '/about',
  heroBtnText: (
    <>
      Get in touch <FontAwesome name="send" />
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <Splash {...indexData} />
  </Layout>
)

export default IndexPage
