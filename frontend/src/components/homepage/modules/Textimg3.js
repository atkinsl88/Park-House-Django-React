import React from 'react'
import image from '../../../../src/assets/hp-img-1.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <p>Our Residents have access to all communal areas such as the lounge, Inglenook, Dining Room, and Gardens. We are able to provide within communal areas and resident’s bedrooms any equipment/ aids as necessary such as chair raisers, toilet raisers, and ramps. The home also has a passenger lift with access to the ground and first floor, in addition to an accessible staircase</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
  </section>
)

export default Textimg