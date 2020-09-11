import React from 'react'
import image from '../../../../src/assets/image.png'

const Introalternate = () => (
  <section>

    <div className="introalternate-container-2">

      <div className="introalternate-intro">
        <h2>Services Provided</h2>
      </div>

      <div className="introalternate-left">
        <div className="introalternate-left-text">
          <h3>Domiciliary Care </h3>
          <p>Is available seven days a week, every day throughout the year.  It is usually delivered between the hours of 07:00hrs and 22:30hrs with a sleep-in or waking night as required.  Domiciliary Care is defined as care visits within your own home.  The purpose of Domiciliary Care is to enable you to remain as independent as possible whilst receiving visits as determined by your care needs.</p>
        </div>
        <div className="introalternate-left-img">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="introalternate-right">
        <div className="introalternate-right-img">
          <img src={image} alt="logo" />
        </div>
        <div className="introalternate-right-text">
          <h3>Live in Care</h3>
          <p>Is available seven days a week, everyday throughout the year.  The Live in care service is a service where a Care Worker will live in your own home on a continuing basis.  Live in care is an excellent alternative to care home admission, and is often cheaper.</p>
          <p>We aim to keep our domiciliary care service locally based in order that we can respond appropriately and accordingly to our client’s needs.  This generally means we cover approximately a twenty-minute driving radius of the office in Martinstown (DT2 9JN).  Some areas that we cover but not limited to are: The Winterbourne Valley, Dorchester, Weymouth, The Piddle Valley, and Puddletown.</p>
          <p>The Live-in care services will cover up to approximately a three-hour radius from our Martinstown office.  This means that geographically, we can provide our Live in Care Service up to an approximate radius of radius of 150 miles from our Martinstown Office.</p>
        </div>
      </div>

    </div>

  </section>
)

export default Introalternate