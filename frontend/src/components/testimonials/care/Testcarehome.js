import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Textimg3 from './modules/Textimg3'
import Textimg4 from './modules/Textimg4'
import Textimg5 from './modules/Textimg5'
import Textimg6 from './modules/Textimg6'
import Introalternate from './modules/Introalternate'

const Teamcarehome = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Testimonials</title>
      <meta name="description" content="At Park House we truly love to hear our residents and their representatives’ feedback on the service we provide. Below are some of the recent testimonials that we would like to share with you." />
    </Helmet>
    <Hero />
    <Textimg />
    <Textimg2 />
    <Textimg3 />
    <Textimg4 />
    <Textimg5 />
    <Textimg6 />
    <Introalternate />
  </section>

)

export default Teamcarehome