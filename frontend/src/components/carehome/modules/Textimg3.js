import React from 'react'
import image from '../../../../src/assets/carehome-img-8.png'

const Textimg = () => (
  <section>

    <div className="text-img-container">
      <div className="text-img-text">
        <h2>Activities</h2>
        <p>Park House offers a variety of activities every day from 09.00am-17.00pm. Our activities coordinators plan monthly themes and activities that can be adapted for all residents to participate and enjoy, or even just observe.  Activities can vary from 1-1 interaction to quizzes, bingo, cooking, exercises and village walks. </p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>
    
  </section>
)

export default Textimg