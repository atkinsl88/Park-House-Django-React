import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Centrebutton from './modules/Centrebutton'

const Daycare = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Day Care</title>
      <meta name="description" content="For many people who may live alone, taking advantage of a day care service offers a way of socialising with others in a similar situation and is also an opportunity of experiencing life in a residential care home so that an informed decision can be made if needs change in the future." />
    </Helmet>
    <Hero />
    <Textimg />
    <Textimg2 />
    <Centrebutton />
  </section>

)

export default Daycare