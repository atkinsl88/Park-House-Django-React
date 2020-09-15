import React from 'react'

const Gallcard = ({ img_url, img_alt_desc }) => (

  <section>

    <div className="gallery-wrapper">
        <div className="gallery-image">
          <img src={img_url} alt="" loading="lazy"/>
        </div>
        <div className="card-header-title">
          <p>{img_alt_desc}</p>
        </div>
    </div>

  </section>

)

export default Gallcard