import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Working = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Working For Us</title>
      <meta name="description" content="Park House operates a robust recruitment procedure which includes all employees’ being criminal record (DBS) checked, a minimum of three references being obtained, and the completion of at least twenty-one courses before commencement of employment. A more practical induction is then provided upon the employee’s first day with Park House, which can last anywhere up until three months dependent on their experience and skills." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Working