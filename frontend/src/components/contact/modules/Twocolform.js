import React from 'react'
import { newEnquiry } from '../../../lib/api'
// import { Link } from 'react-router-dom'

class Twocolform extends React.Component {

  state = {
    formData: {
      first_name: '',
      last_name: '',
      email: '',
      telephone: '',
      intrested_in: '',
      have_agreed: false
    }
  }

  handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const formData = { ...this.state.formData, [event.target.name]: value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await newEnquiry(this.state.formData)
      console.log(this.props)
      this.props.history.push('/thankyou')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    const { formData } = this.state
    console.log(formData)
    return (
      <section>
      
      <div className="twocolform-container">

        <div className="twocolform-container-intro">
          <h2>Information</h2>
        </div>

        <div className="twocolform-container-box">
          <div className="twocolform-container-box-text">
            <h3>Management and Administration Office Hours</h3>
            <p>Our management and administration office is open Monday to Friday 09:00hrs till 17:00hrs, and does not close during these hours.  The office however does close on Public Bank Holidays and has limited opening hours over the Christmas and New Year period.  Our office address is:</p>
            <p>Park House Care (UK) Ltd,<br /> Park House,<br /> Martinstown,<br /> Dorchester,<br /> Dorset,<br /> DT2 9JN</p>
            <p>Our Telephone Number is: 01305 889420<br />Our Fax Number is: 01305 889027</p>
            <p>Our directors and management team are often available outside of the above hours, by appointment only.</p>
          </div>

          <div className="twocolform-container-box-form">

            <form onSubmit={this.handleSubmit}>
            <h3>Contact Us</h3>
            <p>Fill in the form below to contact us.</p>

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
                  {/* <label className="radio">
                    <input
                      type="radio"
                      name="intrested_in"
                      className="radio-circle"
                      onChange={this.handleChange}
                      checked={formData.intrested_in === 'domiciliarycare'}
                      value="domiciliarycare"
                    />
                      Domiciliary Care
                  </label> */}
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

        <div className="text-img-text2">
            <p>When calling us via telephone, you can select the following options to get through to who you need quickly. Please can we add to the contact us page that all telephone calls are recorded for training and monitoring purposes.</p>
            <p>Option 1: To speak to a member of the Senior Care Team or to a Resident<br />Option 2: To speak to the Registered Manager</p>
            <h3>Out of Hours (On-Call)</h3>
            <p>Park House operates a full ‘Out of Hours’ (On-Call) service which is operated by the Directors, Registered Manager, and Senior Care Team.  The purpose of the service is to provide 24/7 support to staff outside of office hours with any matters that may arise.</p>
            <p>Should you need to speak to a member of the management team urgently, a senior member of staff on shift will be able to contact a member of the management team for you.</p>
            <h3>Website and E-mail</h3>
            <p>Our services can be viewed with some additional information at: www.parkhousecare.org</p>
            <p>The Park House Care office can be contacted via e-mail if preferred at:<br />Residential Care Home: info@parkhousecare.org</p>
          </div>

      </div>

      </section>

    )
  }
}

export default Twocolform
