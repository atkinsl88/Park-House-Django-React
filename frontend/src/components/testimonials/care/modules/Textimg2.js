import React from 'react'
import image from '../../../../assets/testimonial-img-2.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
    <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
      <div className="text-img-text">
        <p><i>“When Mum was widowed in 2016, she needed support to live at home and Park House Domiciliary Care provided a great level of care and support.  We also arranged for Mum to go to Park House for lunch occasionally as we knew living at home was short term as her Dementia progressed. When crisis hit, we were lucky that there was a room available at Park House and that the staff already knew Mum so transition was easier. In the home, all the staff are so kind and really get to know their residents, offering suitable activities and spending time with each person as well as meeting the care needs to a high standard. I was always welcomed when visiting and kept well informed of any concerns and changes. It was great to know when the review dates were planned so that I could attend if I wished.</i></p>
        <p><strong>Carolyn F (Daughter of Past Resident) <br /> Supplied: July 2020</strong></p>
      </div>
    </div>
    
  </section>
)

export default Textimg