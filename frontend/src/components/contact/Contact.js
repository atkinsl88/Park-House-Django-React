import React from 'react'

import Hero from './modules/Hero'
import Twocolform from './modules/Twocolform'

const Contact = (props) => {
const { history } = props

  return (
    <section>
      <Hero />
      <Twocolform history = { history } />
    </section>
  )

}

export default Contact