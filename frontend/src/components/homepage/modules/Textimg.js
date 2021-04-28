import React from 'react'
import image from '../../../../src/assets/hp-img-1.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text intro">
        <h2>About Us</h2>
        <p>Park House Care (UK) Ltd is a small twenty bedded eighteenth-century privately owned care home. Based in Martinstown (Near Dorchester), we are surrounded by beautiful countryside whilst still being very commutable from the nearby areas of Dorchester, Weymouth, and Bridport. Park House is able to offer a range of care and support services from general welfare to end of life care. Park House also primarily specialises in care and support for those living with dementia and Alzheimer’s disease.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
  </section>
)

export default Textimg