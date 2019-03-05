import React from "react"
import "../styles/Contact.css"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      websiteDesc: '',
      showSuccessMessage: false
    }
  }
  handleFocus(e) {
    e.target.placeholder = ''
  }
  handleChange(e) {
    let name = e.target.id
    this.setState({ [name]: e.target.value })
  }
  handleReset() {
    this.setState({ firstName: '', lastName: '', phoneNumber: '', email: '', websiteDesc: '' })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.handleReset()
    this.setState({ showSuccessMessage: true })
    setTimeout(() => this.clearMessage(), 3000)
  }
  clearMessage() {
    this.setState({ showSuccessMessage: false })
  }
  render() {
    return (
      <div>
        <div className="container text-center">
          <h1 className="font-weight-light mt-5">LET'S BEGIN OUR JOURNEY</h1>
          <hr />
          <p>We'll make great things together.</p>
        </div>
        <form className="container">
          {this.state.showSuccessMessage && <div className="alert alert-success" role="alert">
            <strong>Form submitted successfully!</strong>
          </div>}
          <div className="form-group">
            <label>Your Name *</label>
          </div>
          <div className="form-group">
            <div className="row justify-content-start">
              <label htmlFor="firstName" className="col">First</label>
              <label className="col-1" />
              <label htmlFor="lastName" className="col" style={{ marginRight: "30px" }}>Last</label>
              <div className="w-100 " />
              <input type="text" id="firstName" className="form-control col" placeholder='First Name' onBlur={(e) => e.target.placeholder = 'First Name'} onFocus={(e) => this.handleFocus(e)} onChange={(e) => this.handleChange(e)} value={this.state.firstName} />
              <label className="col-1" />
              <input type="text" id="lastName" className="form-control col" placeholder='Last Name' onBlur={(e) => e.target.placeholder = 'Last Name'} onFocus={(e) => this.handleFocus(e)} onChange={(e) => this.handleChange(e)} value={this.state.lastName} />
            </div>
          </div>
          <div className="form-group">
            <label>Your Phone *</label>
            <input type="tel" id="phoneNumber" className="form-control" placeholder='Your Phone - Please include your country code Eg. +91 9790397637' onBlur={(e) => e.target.placeholder = 'Your Phone - Please include your country code Eg. +91 9790397637'} onFocus={(e) => this.handleFocus(e)} onChange={(e) => this.handleChange(e)} value={this.state.phoneNumber} />
          </div>
          <div className="form-group">
            <label>Your Email *</label>
            <input type="email" id="email" className="form-control" placeholder='Please enter your email address' onBlur={(e) => e.target.placeholder = 'Please enter your email address'} onFocus={(e) => this.handleFocus(e)} onChange={(e) => this.handleChange(e)} value={this.state.email} />
          </div>
          <div className="form-group">
            <label>Your Website *</label>
            <textarea className="form-control" id="websiteDesc" placeholder='Please enter your website description' onBlur={(e) => e.target.placeholder = 'Please enter your website description'} onFocus={(e) => this.handleFocus(e)} onChange={(e) => this.handleChange(e)} value={this.state.websiteDesc} />
          </div>
          <button type="submit" className="btn btn-primary mb-2" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <button type="reset" style={{ marginLeft: '10px' }} className="btn btn-default mb-2" onClick={() => this.handleReset()}>Reset</button>
        </form>
      </div>
    )
  }
}

export default Contact