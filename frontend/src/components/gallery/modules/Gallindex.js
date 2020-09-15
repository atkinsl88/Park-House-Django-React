import React from 'react'
import { getAllImages } from '../../../lib/api'

import Gallcard from './Gallcard'

class Gallindex extends React.Component {

  state = {
    images: []
  }

  async componentDidMount() {
    try {
      const res = await getAllImages()
      console.log(res)
      this.setState({ images: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section>
        <div className="gallery-container">
          {this.state.images.map(image => (
              <Gallcard key={image._id} {...image}/>
            ))}
        </div>
      </section>
    )
  }
  
}

export default Gallindex