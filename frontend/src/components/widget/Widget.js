import React from 'react'
import image from '../../assets/cqc.jpg'

class Widget extends React.Component {
  render() {
    return (
      // <script type="text/javascript" src="//www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-136474516&data-host=www.cqc.org.uk&type=location"></script>
      <a href="https://www.cqc.org.uk/provider/1-101682988" target="blank"><img src={image} alt="logo" /></a>
    )
  }
}

export default Widget