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
        <p>Email <br /> info@parkhousecare.org</p>
      </div>

      <div className="footer-col2">
        <h4>Useful Links</h4>
        <ul>
          <li>Working for us</li>
          <li>Quality Assurance</li>
          <li>Privacy Policy / GDPR</li>
          <li>Terms & Conditions</li>
          <li>COVID-19</li>
          <li>Admin</li>
        </ul>
      </div>

      <div className="footer-col3">
        <div>
          <h4>Social Media</h4>
          <img src={facebook} alt="logo" />
        </div>
        <div className="footer-col3-image">
          <img src={tree} alt="logo" />
        </div>
      </div>

    </div>

  </section>
)

export default Footer