import React from 'react'
import image from '../../../../src/assets/daycare-img-2.png'

const Textimg = () => (
  <section>

    <div className="text-img-container-2">
      <div className="text-img-text">
        <p>Day care facilities offer a breakfast, a hot midday meal with dessert, cold buffet tea, and hot/cold refreshments throughout the day along with daily activities.  In addition to assisted bathing or showering, hairdressing, and chiropody service as required.</p>
        <p>The day care service can be an ideal solution for those who wish to have more company and support during the daytime, but do not wish to leave their own homes.  The service also has proved very useful for those who may not wish to commit to respite or long-term residential care as they have concerns about what to expect.  The service can help support people to see what a ‘day in the life’ of a Park House resident is like.</p>
        <p>Day Care may also be a cheaper alternative to domiciliary care visits or respite care.  You can access more information about our Day Care Service by contacting the home direct.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>


  </section>
)

export default Textimg