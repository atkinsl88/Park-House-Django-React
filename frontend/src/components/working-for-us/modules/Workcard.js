import React from 'react'

const Workcard = ({ job_title, job_desc, job_contact }) => (

  <section>
    <div>
      <p><strong>{job_title}</strong><br />{job_desc}<br />{job_contact}</p>
    </div>
  </section>

)

export default Workcard