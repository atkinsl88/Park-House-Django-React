import React from 'react'
import image from '../../../../src/assets/hp-img-1.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text-intro">
        <h2>Residential Care Home</h2>
        <p>Is our small twenty bedded eighteenth-century residential care home.  Based in Martinstown (Near Dorchester), we are surrounded by beautiful countryside whilst still being very commutable from the nearby areas of Dorchester, Weymouth, and Bridport. Park House is able to offer a range of care and support services from general welfare to end of life care. Park House also primarily specialises in care and support for those living with dementia and Alzheimer’s Disease.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
    <div className="text-img-text">
      <p>The two services work closely together and our staff frequently work in both the care home and domiciliary care service.  This means we are able to offer a full range of care services meaning you can transition through our services to suit your own individuals needs and preferences.  Giving you full continuity of care and support staff, which can often be lost when switching between domiciliary and care home services.</p>
      <p>Feedback from our residents and clients (current and past) suggests that it has been a perfect solution, to be able to change from care within your own home to care within a residential setting (or vice versa).  In addition to not being required to repeat the full assessment process, not having to change care providers, and most importantly being able to receive continuity of care from all your usual care and support staff.</p>
    </div>
  </section>
)

export default Textimg