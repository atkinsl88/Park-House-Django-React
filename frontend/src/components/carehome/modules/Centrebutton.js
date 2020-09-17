import React from 'react'

import Form from '../../form/Form'

const Centrebutton = (props) => {
  const { history } = props

  return (
    <section>

    <div className="centreimage-container">
      <div className="centreimage-text">
        <h2>Residental Statement of Purpose</h2>
        <p>Request a copy of our residential statement of purpose.</p>
        <Form history = { history } />
      </div>
    </div>

  </section>
  )

}

export default Centrebutton