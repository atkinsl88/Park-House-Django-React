import React from 'react'

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