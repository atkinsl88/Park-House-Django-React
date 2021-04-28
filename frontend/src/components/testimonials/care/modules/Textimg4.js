import React from 'react'
import image from '../../../../assets/testimonial-img-1.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <p><i>“My mother was a resident at Parkhouse for over 4 years. During her stay she could not have been looked after better. She was always treated with dignity, care and compassion. She became very fond of her carers and treated them like family and this was how we felt when visiting. There was always a warm welcome, a cup of tea and an insightful update on how Mum was doing. There were times when she became very poorly and they were always on top of the situation, calling in the doctors or nurses promptly and ensuring any treatment or recommendations were swiftly put in place. Their care was always exceptional and even more so in the weeks leading up to Mum’s passing. They cared for her and us as a family and made a difficult time so much more bearable, leaving us with good memories of Mum’s final years.”</i></p>
        <p><strong>Jackie M (Daughter of Past Resident) <br /> Supplied: July 2020</strong></p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
    
  </section>
)

export default Textimg