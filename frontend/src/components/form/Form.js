import React from 'react'
import { newEnquiry } from '../../../src/lib/api'
import Modal from 'react-modal'


Modal.setAppElement('#root')

class Form extends React.Component {
  
  state = {
    formData: {
      first_name: '',
      last_name: '',
      email: '',
      telephone: '',
      intrested_in: '',
      have_agreed: ''
    },
    modalIsOpen: false
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await newEnquiry(this.state.formData)
      this.props.history.push('/downloads')
      console.log(this.props)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  handleModal = (openState) => {
    this.setState( { modalIsOpen: openState } )
  }

  render() {
    const { formData }  = this.state
    console.log(formData)
    return (

      <section>

        <button type="button" onClick={() => this.handleModal(true)}>Request</button>
    
        <Modal 
        isOpen={this.state.modalIsOpen} 
        onRequestClose={() => this.handleModal(false)}
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
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            height: '750px'
          }
        }}
        >

        <div className="form-container">
          <div className="delete-button">
            <button className="delete" type="button" onClick={() => this.handleModal(false)}>Close</button>
          </div>
          <div className="form-content">
            <div>
              <h3>Contact Us</h3>
              <p>Fill in the form below to contact us.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">First Name</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Enter first name"
                      name="first_name"
                      onChange={this.handleChange}
                      value={formData.first_name}
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
                      onChange={this.handleChange}
                      value={formData.last_name}
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
                      onChange={this.handleChange}
                      value={formData.email}
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
                      onChange={this.handleChange}
                      value={formData.telephone}
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
                      onChange={this.handleChange}
                      checked={formData.intrested_in === 'carehome'}
                      value="carehome"
                    />
                      Care Home
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="intrested_in"
                      className="radio-circle"
                      onChange={this.handleChange}
                      checked={formData.intrested_in === 'daycare'}
                      value="daycare"
                    />
                      Day Care
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="intrested_in"
                      className="radio-circle"
                      onChange={this.handleChange}
                      checked={formData.intrested_in === 'domiciliarycare'}
                      value="domiciliarycare"
                    />
                      Domiciliary Care
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="intrested_in"
                      className="radio-circle"
                      onChange={this.handleChange}
                      checked={formData.intrested_in === 'livein'}
                      value="livein"
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
                      type="checkbox"
                      name="have_agreed"
                      className="check-square"
                      onChange={this.handleChange}
                      checked={formData.have_agreed}
                    />
                      I have read and understood how Park House processes personal data as set out in the Privacy Policy.
                  </label>
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button button-form">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </section>

    )
  }
}

export default Form