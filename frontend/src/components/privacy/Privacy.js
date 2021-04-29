import React from 'react'
import {Helmet} from 'react-helmet'

import Hero from './modules/Hero'
import Intro from './modules/Intro'

const Privacy = () => (

  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Park House Care | Privacy</title>
      <meta name="description" content="Park House care (UK) Ltd understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of all our service users and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under United Kingdom law." />
    </Helmet>
    <Hero />
    <Intro />
  </section>

)

export default Privacy