import React from 'react'
import Widget from '../../widget/Widget'

const Textimg2 = (props) => {
  const { widget } = props

  return (

  <section>

    <div className="widget-container">
      <div className="widget">
        <Widget history = { widget } />
      </div>
    <div className="widget-text">
      <h2>Registration Information</h2>
        <p>Park House is registered with the Care Quality Commission (CQC) who are the regulatory body within all Health and Social Care settings. Our most recent inspection report is available to view upon request, is also displayed within the entrance hall to the home, and can be found at the bottom of this page. Previous reports can be viewed upon request and on the Care Quality Commission website.</p>
        <a href="https://www.cqc.org.uk/provider/1-101682988" target="blank"><button type="button">Read More</button></a>
      </div>
    </div>

  </section>
  )
}

export default Textimg2