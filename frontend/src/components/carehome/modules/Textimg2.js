import React from 'react'
import image from '../../../../src/assets/image.png'

const Textimg2 = () => (
  <section>

    <div className="text-img-container-2">
      <div className="text-img-text">
        <h2>Life within the home</h2>
        <p>Park House offers it’s Residents a full choice of how they would like to ‘live their lives’.  We have no set routines and Residents are free to decide their own routines such as when to wake up, when to go to bed, where to eat their meals, and what they would like to do on any given day.  Where possible our staff will encourage positive lifestyle choices, however equally respect some people may have always done certain tasks at such a time.  This may include retired farmers waking up at 05:00hrs to those who may like to eat a meal later in the evening.  Our care truly is tailored to the individual residents needs and best interests.</p>
        <p>Our care and support staff are also trained to promote Resident’s independence as much as possible.  We pride ourselves on the levels of choice, dignity, and respect that we offer to our Residents.  It is our goal to ensure each and every Resident feels comfortable and happy within their home. </p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>

  </section>
)

export default Textimg2