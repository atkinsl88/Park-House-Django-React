import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Home = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Care Reviewing</title>
      <meta name="description" content="After admission to the Care Home a continual assessment will be maintained to ensure that your individual needs are met. Each plan of care will be reviewed on a monthly basis unless there is a needs change, in which case it will be reviewed immediately and changed." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Home