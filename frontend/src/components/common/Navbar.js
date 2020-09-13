import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/logo.png'

class Navbar extends React.Component {

  state = {
    loggedIn: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render(){
  return (

      <nav className="navbar">
          <div className="navbar-brand">

            <Link to="/"><img src={logo} alt="logo" /></Link>

            <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>

          </div>

          <div className={`navbar-end navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
            
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/carehome" className="navbar-item">Care Home</Link>
                <div className="navbar-dropdown">
                  <Link to="/carehome/assessment-process" className="navbar-item">Assessment process</Link>
                  <Link to="/carehome/accomodation-fees" className="navbar-item">Accomodation Fees</Link>
                  <Link to="/carehome/admissions" className="navbar-item">Admission</Link>
                  <Link to="/carehome/care-reviewing" className="navbar-item">Care Reviewing</Link>
                </div>
              </div>

              <Link to="/daycare" className="navbar-item">Day Care</Link>

              <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/domiciliarycare" className="navbar-item">Domiciliary Care</Link>
                <div className="navbar-dropdown">
                  <Link to="/domiciliarycare/assessing-the-need" className="navbar-item">Assessing the need</Link>
                  <Link to="/domiciliarycare/client-care-plan" className="navbar-item">Client care plan</Link>
                  <Link to="/domiciliarycare/reassessing-the-need" className="navbar-item">Reassessing the Need and Reviewing the Care</Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item">Meet the Team</Link>
                <div className="navbar-dropdown">
                  <Link to="/meet-the-team/carehome" className="navbar-item">Care Home</Link>
                  <Link to="/meet-the-team/domiciliarycare" className="navbar-item">Domiciliary Care</Link>
                </div>
              </div>

              <Link to="/gallery" className="navbar-item">Gallery</Link>


              <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item">Testimonials</Link>
                <div className="navbar-dropdown">
                  <Link to="/testimonials/carehome" className="navbar-item">Care Home</Link>
                  <Link to="/testimonials/domicilary" className="navbar-item">Domiciliary Care</Link>
                </div>
              </div>

              <Link to="/contact" className="navbar-item navbar-end">Contact Us</Link>
            </div>

      </nav>

    )}
  }

export default withRouter(Navbar)