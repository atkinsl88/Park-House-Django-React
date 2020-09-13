import React from 'react'
import image from '../../../../src/assets/image.png'

const Introimgtext = () => (
  <section>

    <div className="intro-img-text-container">
      <div className="intro-img-text-intro">
        <h2>Park House Home Care Services</h2>
        <p>Is our small care service providing care and support to those living within the community, and is operated from the Residential Care Home.  Park House Home Care provides a service which is truly tailored to the individual needs of their Client.  Domiciliary Care and Live in Care are the two primary services offered to people within their own homes.  We additionally can offer individuals night care, sitting services, respite care, and care for individuals wishing to go on holiday.</p>
      </div>
      <div className="intro-img-text-indv">
        <div className="intro-img-text-img">
          <img src={image} alt="logo" />
        </div>
        <div className="intro-img-text-text">
          <h3>Domiciliary Care</h3>
          <p>We also provide a domiciliary care (Home Care Service) locally in order to provide service users with a choice of their preferred place of care.  We aim to keep the service local, so that we can respond appropriately and accordingly to our service user’s needs.</p>
          <a href="/domiciliarycare"><button type="button">Domiciliary Care</button></a>
        </div>
      </div>
      <div className="intro-img-text-indv">
        <div className="intro-img-text-img">
          <img src={image} alt="logo" />
        </div>
        <div className="intro-img-text-text">
          <h3>Live in Care</h3>
          <p>Is available seven days a week, everyday throughout the year.  The Live-in care service is a service where a Care Worker will live in your own home on a continuing basis.  Live in care is an excellent alternative to care home admission.</p>
          <p>The two services work closely together and our staff frequently work in both the care home and domiciliary care service.  This means we are able to offer a full range of care services meaning you can transition through our services to suit your own individuals needs and preferences.  Giving you full continuity of care and support staff, which can often be lost when switching between domiciliary and care home services.</p>
          <p>Feedback from our residents and clients (current and past) suggests that it has been a perfect solution, to be able to change from care within your own home to care within a residential setting (or vice versa).  In addition to not being required to repeat the full assessment process, not having to change care providers, and most importantly being able to receive continuity of care from all your usual care and support staff.</p>
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