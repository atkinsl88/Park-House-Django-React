import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Home = () => (

  <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Park House Care | Admissions</title>
        <meta name="description" content="Once you have confirmed your decision to us, we will issue our Terms and Conditions of Residential Care which must be signed and returned prior to admission. In addition to this we do require immediate payment upon admission." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Home