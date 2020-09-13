import React from 'react'
import facebook from '../../assets/facebook.png'
import tree from '../../assets/tree-border-white.png'

const Footer = () => (
  <section>

    <div className="footer-container">

      <div className="footer-col1">
        <h4>Contact Details</h4>
        <p>Park House <br /> Care Home & Home Care Service Martinstown, Dorchester, Dorset DT2 9JN</p>
        <p>Telephone <br /> 01305 889420</p>
        <p>Email <br /> <a href="mailto:info@parkhousecare.orgm">info@parkhousecare.org</a></p>
      </div>

      <div className="footer-col2">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="/working-for-us">Working for us</a></li>
          <li><a href="/quality-assurance">Quality Assurance</a></li>
          <li><a href="/privacy-policy">Privacy Policy / GDPR</a></li>
          <li><a href="/covid-19">COVID-19</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </div>

      <div className="footer-col3">
        <div>
          <h4>Social Media</h4>
          <a href="url"><img src={facebook} alt="logo" /></a>
        </div>
        <div className="footer-col3-image">
          <img src={tree} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Footer