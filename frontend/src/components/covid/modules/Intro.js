import React from 'react'

import CoronavirusVisitingPolicy from '../../../assets/downloads/CoronavirusVisitingPolicy.pdf'
import CoronavirusTestingandOutbreakPolicy from '../../../assets/downloads/CoronavirusTestingandOutbreakPolicy.pdf'
import CoronavirusEnglandMay2020 from '../../../assets/downloads/CoronavirusEnglandMay2020.pdf'

const Intro = () => (
  <section>

    <div className="intro12col">

      <div className="intro12col-block download">

        <p>Park House Care (UK) Ltd is pleased to announce it had remained COVID free throughout the current pandemic. You can find a link to our policies below:</p>

        <p><a href={CoronavirusVisitingPolicy} download>Coronavirus Visiting Policy (171KB)</a><br />
        <a href={CoronavirusTestingandOutbreakPolicy} download>Coronavirus Testing & Outbreak Policy (170KB)</a><br />
        <a href={CoronavirusEnglandMay2020} download>Coronavirus England May 2020 (49KB)</a></p>

      </div>
  
    </div>

  </section>
)

export default Intro