import React from 'react'

const Boxes = () => (
  <section>

    <div className="box-container">

      <div className="boxes">

        <div className="boxi">
          <h3>Assessment/ Admission Process</h3>
          <p>Before providing any services we will need to undertake a care needs assessment visit which involves you, your family, or a representative (as applicable) in order to allow us to gather sufficient information.</p>
          <a href="/carehome/assessment-process"><button type="button">Find out more</button></a>
        </div>

        <div className="boxi">
          <h3>Accommodation Fees</h3>
          <p>Often the individual assessing your care needs will be able to make a decision immediately at the end of the assessment process.</p>
          <a href="/carehome/accomodation-fees"><button type="button">Find out more</button></a>
        </div>

      </div>

      <div className="boxes">

        <div className="boxi">
          <h3>Admission</h3>
          <p>Once you have confirmed your decision to us, we will issue our Terms and Conditions of Residential Care which must be signed and returned prior to admission.</p>
          <a href="/carehome/admissions"><button type="button">Find out more</button></a>
        </div>

        <div className="boxi">
          <h3>Care Reviewing</h3>
          <p>After admission to the Care Home a continual assessment will be maintained to ensure that your individual needs are met.</p>
          <a href="/carehome/care-reviewing"><button type="button">Find out more</button></a>
        </div>

      </div>

    </div>


  </section>
)

export default Boxes