import React from 'react'
import image from '../../../../src/assets/daycare-img-2.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text2">
        <h2>Overview</h2>
        <p>Park House Residential Care Home also offer a range of Day Care Services (subject to availability) which can be provided between the hours of 09:00hrs and 18:00hrs, a day care service package is tailored to the times you require and can be used on an ad-hoc basis providing your details are regularly reviewed.</p>
        <p>For many people who may live alone, taking advantage of a day care service offers a way of socialising with others in a similar situation and is also an opportunity of experiencing life in a residential care home so that an informed decision can be made if needs change in the future.</p>
      </div>
    </div>

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