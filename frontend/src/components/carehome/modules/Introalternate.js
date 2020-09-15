import React from 'react'
import image from '../../../../src/assets/image.png'

const Introalternate = () => (
  <section>

    <div className="intro-alternate-container">

      <div className="introalternate-intro">
        <h2>Activities</h2>
        <p>Park House offers it’s Residents a full choice of how they would like to ‘live their lives’.  We have no set routines and Residents are free to decide their own routines such as when to wake up, when to go to bed, where to eat their meals, and what they would like to do on any given day.  Where possible our staff will encourage positive lifestyle choices, however equally respect some people may have always done certain tasks at such a time.  This may include retired farmers waking up at 05:00hrs to those who may like to eat a meal later in the evening.  Our care truly is tailored to the individual residents needs and best interests.</p>
        <p>Our care and support staff are also trained to promote Resident’s independence as much as possible.  We pride ourselves on the levels of choice, dignity, and respect that we offer to our Residents.  It is our goal to ensure each and every Resident feels comfortable and happy within their home.</p>
      </div>

      <div className="introalternate-left">
        <div className="introalternate-left-text">
          <h3>Hairdressing/ Chiropody</h3>
          <p>Park House offers it’s Residents a full choice of how they would like to ‘live their lives’.  We have no set routines and Residents are free to decide their own routines such as when to wake up, when to go to bed, where to eat their meals, and what they would like to do on any given day.  Where possible our staff will encourage positive lifestyle choices, however equally respect some people may have always done certain tasks at such a time.  This may include retired farmers waking up at 05:00hrs to those who may like to eat a meal later in the evening.  Our care truly is tailored to the individual residents needs and best interests. Our care and support staff are also trained to promote Resident’s independence as much as possible.  We pride ourselves on the levels of choice, dignity, and respect that we offer to our Residents.  It is our goal to ensure each and every Resident feels comfortable and happy within their home.</p>
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
          <h3>Laundry Service</h3>
          <p>Park House offers a full in-house laundry and housekeeping service, which is complimentary.  We try to take as much care as possible when completing any laundry or housekeeping tasks, however we unfortunately do not accept any liability for any damage or misplaced items.  Unless as a result of staff negligence. Should you wish to complete your own laundry or/ and housekeeping this can be arranged by advising a member of staff. </p>
        </div>
      </div>

      <div className="introalternate-left">
        <div className="introalternate-left-text">
          <h3>Twenty-Four Hour Call Bell System</h3>
          <p>We also operate a twenty-four hour call bell system within the home.  All of our bedrooms have at least two remote controlled call bells, usually one by the bed and one in the en-suite facility.  All communal area have at least one call bell per room and alternately Residents are able to carry their own system from their rooms with them should they choose.  We also have a range of call bell’s available such as call bell leads with push button, sensor matts, door alarms, and neck pendants.  These can be used to minimise your risk of falls, for your own personal security, or to make life at Park House more comfortable.  Our call bell system also audits our response times and has confirmed an average response time for general bells within three minutes.</p>
        </div>
        <div className="introalternate-left-img">
          <img src={image} alt="logo" />
        </div>
      </div>


    </div>

  </section>
)

export default Introalternate