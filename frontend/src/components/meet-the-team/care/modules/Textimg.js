import React from 'react'
import image from '../../../../assets/image.png'

const Textimg = () => (
  <section>

    <div className="text-img-container-2">
      <div className="text-img-text">
        <h2>The Directors</h2>
        <p>Park House Care (UK) Limited is jointly owned by Mr Stephen and Mrs Karen Cannie.</p>
        <p>Karen started her working career in banking, before changing career and qualifying as a Registered Mental Health Nurse in 1997.  Karen worked for the NHS for two years before moving into the private care home sector, initially managing a 20 bedded care home for individuals over the age of 65 who had mental health problems.  Before moving on to manage a 50 bedded dementia care home, and then finally for the same owners a 70 bedded care home for individuals with dementia, residential, and nursing needs until the owners sold the business in 2006.  During this time Karen also completed her NVQ Level 4 in Care Management, which included her RMA (Registered Managers Award).</p>
        <p>Karen and her husband Steve purchased Park House in the autumn of 2006, and Karen was Registered Manager of Park House until 2010 when they employed a Registered Manager to take over the core management duties of the care home.</p>
        <p>Steve’s career background is within structural steel, and when purchasing Park House, he resigned from his job to concentrate on the extension of Park House and the general business expansion.</p>
        <p>Karen and Steve remain in daily contact with the management and staff of Park House, and visit the home regularly.</p>
      </div>
      <div className="text-img-img">
        <img src={image} alt="logo" />
      </div>
    </div>

  </section>
)

export default Textimg