import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Textimg3 from './modules/Textimg3'
import Textimg4 from './modules/Textimg4'
import Textimg5 from './modules/Textimg5'
import Textimg6 from './modules/Textimg6'
import Boxes from './modules/Boxes'
import Centrebutton from './modules/Centrebutton'

const Carehome = (props) => {
  const { history } = props

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Park House Care | Care Home</title>
        <meta name="description" content="We try to work with residents in a positive and proactive way and are very reluctant to ever say ‘no’ to a service requirement." />
      </Helmet>
      <Hero />
      <Textimg />
      <Textimg2 />
      <Textimg3 />
      <Textimg4 />
      <Textimg5 />
      <Textimg6 />
      <Boxes />
      <Centrebutton history = { history } />
    </section>
  )

}

export default Carehome