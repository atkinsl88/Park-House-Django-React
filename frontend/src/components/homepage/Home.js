import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Textimg3 from './modules/Textimg3'
import Textimg4 from './modules/Textimg4'

const Home = (props) => {
  const { widget } = props

  return (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Homepage</title>
      <meta name="description" content="Park House Care (UK) Ltd is a small twenty bedded eighteenth-century privately owned care home. Based in Martinstown (Near Dorchester), we are surrounded by beautiful countryside whilst still being very commutable from the nearby areas of Dorchester, Weymouth, and Bridport."/>
    </Helmet>
    <Hero />
    <Textimg />
    <Textimg2 />
    <Textimg3 />
    <Textimg4 widget = { widget }/>
  </section>
  )

}

export default Home