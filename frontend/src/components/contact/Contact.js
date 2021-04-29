import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Twocolform from './modules/Twocolform'

const Contact = (props) => {
const { history } = props

  return (
    <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Contact</title>
      <meta name="description" content="Our management and administration office is open Monday to Friday 09:00hrs till 17:00hrs, and does not close during these hours." />
    </Helmet>
      <Hero />
      <Twocolform history = { history } />
    </section>
  )

}

export default Contact