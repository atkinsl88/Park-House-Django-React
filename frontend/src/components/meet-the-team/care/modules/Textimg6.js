import React from 'react'
import image from '../../../../assets/meet-the-team-care-team.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="introalternate-right-img">
        <img src={image} alt="logo" />
      </div>
      <div className="text-img-text">
        <h3>The Care Team</h3>
        <p>We recognise that for most our residents the most important people in our organisation are the Care Workers with whom they will have regular contact.  We take great care in recruiting, training and supervising our staff.</p>
        <p>Our staff have a wide range of qualifications which reflect the requirements within the Health and Social Care Act 2008.  These include National Vocational Qualifications/ Diploma level 2, 3, 4 and 5 in care or health and social care.  In addition, management qualifications and relevant administration skills also form part of the Diploma qualification.</p>
        <p>Our Health Care Assistants will usually be dressed in a peacock (bright blue) colour tunic with ID badges, to help you identify who they are.</p>
      </div>
    </div>

  </section>
)

export default Textimg