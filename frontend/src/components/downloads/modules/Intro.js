import React from 'react'

import StatementofPurposeResidential1804 from '../../../assets/downloads/StatementofPurpose(Residential)18.04.pdf'
import CareHomeQualityAssuranceReport2019 from '../../../assets/downloads/CareHomeQualityAssuranceReport2019.pdf'
import CareHomeQualityAssuranceReport2018 from '../../../assets/downloads/CareHomeQualityAssuranceReport2018.pdf'
import DomiciliaryQualityAssuranceReport2019 from '../../../assets/downloads/DomiciliaryQualityAssuranceReport2019.pdf'
import DomiciliaryQualityAssuranceReport2018 from '../../../assets/downloads/DomiciliaryQualityAssuranceReport2018.pdf'
import DomiciliaryStatementofPurpose2508 from '../../../assets/downloads/DomiciliaryStatementofPurpose25.08.pdf'

const Intro = () => (
  <section>

    <div className="intro12col">

      <div className="intro12col-block download">

        <p>Thanks for your request, you can find a link to our downloadable reports below. Simply click on the link and the document will open for you.</p>

        <p><b>Statement of Purpose (Residential)</b><br />
        <a href={StatementofPurposeResidential1804} download>Statement of Purpose (Residential) 18.04 (1.7MB)</a></p>

        <p><b>Care Home Quality Assurances</b><br />
        <a href={CareHomeQualityAssuranceReport2019} download>Care Home Quality Assurance Report 2019 (308KB)</a><br />
        <a href={CareHomeQualityAssuranceReport2018} download>Care Home Quality Assurance Report 2018 (302KB)</a></p>

        <p><b>Domiciliary Quality Assurance Reports</b><br />
        <a href={DomiciliaryQualityAssuranceReport2019} download>Domiciliary Quality Assurance Report 2019 (110KB)</a><br />
        <a href={DomiciliaryQualityAssuranceReport2018} download>Domiciliary Quality Assurance Report 2018 (113KB)</a><br />
        <a href={DomiciliaryStatementofPurpose2508} download>Domiciliary Statement of Purpose 25.08 (701KB)</a></p>

        <p>Our management and administration office is open Monday to Friday 09:00hrs till 17:00hrs, and does not close during these hours. If you wish to speak with somebody directly, our telephone number is 01305 889420.</p>

      </div>
  
    </div>

  </section>
)

export default Intro