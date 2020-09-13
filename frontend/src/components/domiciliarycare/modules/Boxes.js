import React from 'react'

const Boxes = () => (
  <section>

    <div className="box-container">

      <div className="boxes">

        <div className="boxi">
          <h3>Assessing the Need</h3>
          <p>If someone comes to us from a social services department, the local authority Care Manager will have carried out an assessment of what you need and have a care diary prepared.</p>
          <a href="/domiciliarycare/assessing-the-need"><button type="button">Find out more</button></a>
        </div>

        <div className="boxi">
          <h3>Client Care Plan</h3>
          <p>Should you wish to continue and use Park House Care Services a comprehensive care plan will be tailored to suit your needs and be maintained regularly to ensure that your individual needs are met.</p>
          <a href="/domiciliarycare/client-care-plan"><button type="button">Find out more</button></a>
        </div>

      </div>

      <div className="boxes">

        <div className="boxi">
          <h3>Reviewing the Care</h3>
          <p>We will keep your needs under review and take decisions about the care accordingly.</p>
          <a href="/domiciliarycare/reassessing-the-need"><button type="button">Find out more</button></a>
        </div>

      </div>

    </div>


  </section>
)

export default Boxes