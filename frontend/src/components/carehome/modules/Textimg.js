import React from 'react'
import image from '../../../../src/assets/carehome-img-6.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <h2>Services We Provide</h2>
        <p>Park House is committed to providing quality personal-centered care, within a homely, relaxed, welcoming environment.  We pride ourselves on promoting a culture which is able to think outside of the box when trying to overcome any difficulties that may arise during the care assessment or reviewing phases.  We try to work with residents in a positive and proactive way and are very reluctant to ever say ‘no’ to a service requirement.</p>
        <p>Park House primarily provides residential accommodation for individuals over the age of 65 who require support on varying levels with various aspects of their daily lives; this may include personal care, medication administration or prompting, meal preparation/ serving, welfare checks, night care, and domestic duties.  This list is not exhaustive.</p>
      <p>Park House specialises in care for individuals with Dementia, Alzheimer’s, Parkinson’s, and strokes.  Our service ensures support is given to individuals appropriately by staff by providing only accredited knowledge and practical training in relation to these areas.  We also are able to care for individuals with physical difficulties, sensory loss, and those with dual sensory impairments.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
    
  </section>
)

export default Textimg