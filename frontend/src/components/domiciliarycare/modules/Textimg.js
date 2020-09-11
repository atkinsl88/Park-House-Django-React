import React from 'react'
import image from '../../../../src/assets/image.png'

const Textimg = () => (
  <section>

    <div className="text-img-container-2">
      <div className="text-img-text">
        <h2>Initial Referral</h2>
        <p>When you need care you can be referred to us in many different ways, you can self-refer, or your family, friends, neighbour, your GP, district nurse or your local social services office can make the referral on your behalf.  In any of these scenarios, information about you which is passed to us will be dealt with sensitively and in confidence.</p>
        <p>Before providing any services we will need to undertake a care needs assessment visit which involves you, your family, or a representative as applicable in order that we can gather sufficient information to be sure that the services we provide are suitable for you.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>

  </section>
)

export default Textimg