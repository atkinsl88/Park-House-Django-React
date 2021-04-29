import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Quality = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Quality Assurance</title>
      <meta name="description" content="We are always keen to provide the best possible service and to do this we continually check on what we are doing through talk with our staff, with outsiders who have opportunities to see/ evaluate our work, and above all listening to our service users." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Quality