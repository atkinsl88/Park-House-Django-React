import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Textimg3 from './modules/Textimg3'
import Textimg4 from './modules/Textimg4'
import Textimg5 from './modules/Textimg5'
import Textimg6 from './modules/Textimg6'
import Textimg7 from './modules/Textimg7'

const Teamcarehome = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Meet the Team</title>
      <meta name="description" content="All Staff within Park House are supervised and monitored regularly, and where possible we avoid the use of agency staff to ensure continuity of care is received." />
    </Helmet>
    <Hero />
    <Textimg />
    <Textimg2 />
    <Textimg3 />
    <Textimg4 />
    <Textimg5 />
    <Textimg6 />
    <Textimg7 />
  </section>

)

export default Teamcarehome