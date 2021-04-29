import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Home = () => (

  <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Park House Care | Accommodation Fees</title>
        <meta name="description" content="The cost of accommodation is tailored to your level of care, and also the size of bedroom. Our managing team has sufficient experience and training to explain the banding and fee structures to you during the initial assessment in more depth should you require." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Home