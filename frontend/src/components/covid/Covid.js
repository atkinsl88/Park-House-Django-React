import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Covid = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | COVID-19</title>
      <meta name="description" content="Park House Care (UK) Ltd is pleased to announce it had remained COVID free throughout the current pandemic." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Covid