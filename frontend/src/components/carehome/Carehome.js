import React from 'react'

import Hero from './modules/Hero'
import Intro from './modules/Intro'
import Textimg from './modules/Textimg'
import Textimg2 from './modules/Textimg2'
import Introalternate from './modules/Introalternate'
import Boxes from './modules/Boxes'
import Centrebutton from './modules/Centrebutton'
import Widget from './modules/Widget'

const Carehome = (props) => {
  const { history } = props

  return (
    <section>
    <Hero />
    <Intro />
    <Textimg />
    <Textimg2 />
    <Introalternate />
    <Boxes />
    <Centrebutton history = { history } />
    <Widget />
  </section>
  )

}

export default Carehome