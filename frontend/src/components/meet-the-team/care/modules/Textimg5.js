import React from 'react'
import image from '../../../../assets/tree.png'

const Textimg2 = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <h3>Senior Health Care Assistants</h3>
        <p>Senior Health Care Assistants are responsible for the day to day leadership of the care team and will usually be your first point of contact for any updates, quires, or concerns you may have.  At Park House we encourage our senior staff to be involved in the care giving and where applicable to act as mentors to our newer staff members. We aim to train all of our Senior Health Care Assistants to a minimum of Diploma/ NVQ Level 3.</p>
        <p>Our Senior Health Care Assistants will usually be wearing a dark navy tunic, and ID badge to help you identify the senior on shift.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>

  </section>
)

export default Textimg2