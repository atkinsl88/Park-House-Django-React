import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Home = () => (

  <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Park House Care | Assessment / Admission Process</title>
        <meta name="description" content="In any of the referral scenarios, information about you which is passed to us will be dealt with sensitively and in confidence. Before providing any services we will need to undertake a care needs assessment visit which involves you, your family, or a representative (as applicable) in order to allow us to gather sufficient information, to be sure that the services we provide are suitable for you." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Home