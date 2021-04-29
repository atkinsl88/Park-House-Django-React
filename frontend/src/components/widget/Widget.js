import React from 'react'
import image from '../../assets/cqc.jpg'

class Widget extends React.Component {
  render() {
    return (
      <a href="https://www.cqc.org.uk/provider/1-101682988" target="blank"><img src={image} alt="logo" /></a>
    )
  }
}

export default Widget