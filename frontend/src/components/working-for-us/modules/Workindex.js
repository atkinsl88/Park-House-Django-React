import React from 'react'
import { getAllJobs } from '../../../lib/api'

import Workcard from './Workcard'

class Workindex extends React.Component {

  state = {
    jobs: []
  }

  async componentDidMount() {
    try {
      const res = await getAllJobs()
      console.log(res)
      this.setState({ jobs: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section>
        <div>
        {this.state.jobs.map(job => (
              <Workcard key={job._id} {...job}/>
            ))}
        </div>
      </section>
    
    )
  }
  
}

export default Workindex