import React from 'react'
import { getAllJobs } from '../../../lib/api'

import Workcard from './Workcard'

class Gallindex extends React.Component {

  state = {
    images: []
  }

  async componentDidMount() {
    try {
      const res = await getAllJobs()
      this.setState({ jobs: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.jobs)
    return (

      <section className="section">
        <div className="container">

          <div className="columns is-multiline">
            {this.state.images.map(job => (
              <Workcard key={job._id} {...job}/>
            ))}
          </div>

        </div>
      </section>
      
    )
  }
  
}

export default Gallindex