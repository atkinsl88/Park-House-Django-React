import React from 'react'
import image from '../../../../src/assets/hp-img-2.png'

const Introimgtext = () => (
  <section>

    <div className="intro-img-text-container">
      <div className="intro-img-text-indv">
        <div className="intro-img-text-img">
          <img src={image} alt="logo" />
        </div>
        <div className="intro-img-text-text">
          <h2>Live in Care</h2>
          <p>Is available seven days a week, everyday throughout the year.  The Live-in care service is a service where a Care Worker will live in your own home on a continuing basis.  Live in care is an excellent alternative to care home admission.</p>
          <div className='intro-img-text-button'>
            <a href="/carehome"><button type="button" href="carehome">Care Home</button></a>
            <a href="/daycare"><button type="button" href="carehome">Day Care</button></a>
          </div>
        </div>
      </div>
    </div>

  </section>
)

export default Introimgtext