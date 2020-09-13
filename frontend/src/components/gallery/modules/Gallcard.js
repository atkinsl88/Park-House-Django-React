import React from 'react'

const Gallcard = ({ img_url, img_alt_desc }) => (

  <section>
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={img_url} alt={img_alt_desc} loading="lazy" width="255" height="255" />
          </figure>
        </div>
      </div>
    </div>
  </section>

)

export default Gallcard