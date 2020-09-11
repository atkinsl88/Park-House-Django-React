import React from 'react'
import image from '../../../../src/assets/image.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <h2>Park House Residential Care Home</h2>
        <p>Is our small twenty bedded eighteenth-century residential care home.  Based in Martinstown (Near Dorchester), we are surrounded by beautiful countryside whilst still being very commutable from the nearby areas of Dorchester, Weymouth, and Bridport. Park House is able to offer a range of care and support services from general welfare to end of life care. Park House also primarily specialises in care and support for those living with dementia and Alzheimer’s Disease.</p>
        <p>The Philosophy of care at Park House Residential Care Home is to create a secure, relaxed, happy, and homely atmosphere for our Residents to live in. Whilst always remembering… “Our Residents do not live in our workplace, we work in their home”</p>
        <p>We also offer a range of Day Care Services (subject to availability) which can be provided between the hours of 07:00hrs and 22:00hrs, a day care service package is tailored to the times you require and can be used on an ad-hoc basis providing your details are regularly reviewed. </p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>

  </section>
)

export default Textimg