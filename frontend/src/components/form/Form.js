import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (

    <section>

      <button type="button" onClick={() => setModalIsOpen(true)}>Request</button>

      <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '100px',
          left: '40px',
          right: '40px',
          bottom: '450px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      >

        <h3>Contact Us</h3>
        <p>Fill in the form below to contact us.</p>

        <form>

          <div className="field">
            <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Enter first name"
                  name="first_name"
                />
              </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Enter last name"
                  name="last_name"
                />
              </div>
          </div>

          <div className="field">
            <label className="label">Email Address</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Enter email address"
                  name="email"
                />
              </div>
          </div>

          <div className="field">
            <label className="label">Contact Telephone</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Enter telephone number"
                  name="telephone"
                />
              </div>
          </div>

          <div className="field">
            <label className="label">Intrested In?</label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="intrested_in"
                  className="radio-circle"
                />
                  Care Home
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="intrested_in"
                  className="radio-circle"
                />
                  Day Care
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="intrested_in"
                  className="radio-circle"
                />
                  Domiciliary Care
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="intrested_in"
                  className="radio-circle"
                />
                  Live In
              </label>
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  name="have_agreed"
                  className="radio-circle"
                />
                  I have read and understood how Park House processes personal data as set out in the Privacy Policy.
              </label>
            </div>
          </div>

          <div className="field">
            <button type="button">Submit</button>
          </div>

        </form>

        <button type="button" onClick={() => setModalIsOpen(false)}>Close</button>

      </Modal>

    </section>

  )
}

export default Form