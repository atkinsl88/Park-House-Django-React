import React from 'react'
import image1 from '../../../../assets/meet-the-team-clare.png'
import image2 from '../../../../assets/meet-the-team-snr.png'
import image3 from '../../../../assets/meet-the-team-snr2.png'
import image4 from '../../../../assets/meet-the-team-care-team.png'

const Introalternate = () => (
  <section>

    <div className="introalternate-container-2">

      <div className="introalternate-intro">
        <h2>Care Home Team</h2>
        <p>All Staff within Park House are supervised and monitored regularly, and where possible we avoid the use of agency staff to ensure continuity of care is received. To date, no agency or temporary staffing have been used at Park House since Karen and Steve Cannie purchased the home in 2006.</p>
      </div>

      <div className="introalternate-left">
        <div className="introalternate-left-text">
          <h3>Mrs Clare Clarke,<br />Assistant Manager </h3>
          <p>Clare has been working in the care industry since 1997 (beginning her career within childcare), before commencing work in adult care from 2011.  This has included domiciliary, dementia, and residential care.  During this time Clare has gained her NVQ 4 in Leadership and Management, and most recently her Level 5 Diploma in Leadership & Management among a variety of other care and management related courses.</p>
        </div>
        <div className="introalternate-left-img">
          <img src={image1} alt="logo" />
        </div>
      </div>
      <div className="text-img-text">
          <p>Clare has comprehensive knowledge and experience of Dementia and Learning Difficulties care.  Clare’s previous leadership roles have included Deputy Manager, Care Supervisor, and Management status’s within other industries.</p>
          <p>Clare’s role within Park House Care (UK) Ltd is to primarily co-ordinate and manage the Residential Care Services.  Clare provides administrative, organisational, and leadership skills within the Residential Care office and is responsible for quality assurance, auditing, recruitment, advertising, payroll, supervision of staff, staff rostering, staff training, risk assessing, care planning, client assessments/ reviews, and general record keeping.</p>
        </div>

      <div className="introalternate-right">
        <div className="introalternate-right-img">
          <img src={image2} alt="logo" />
        </div>
        <div className="introalternate-right-text">
        <h3>Senior Care Lead</h3>
          <p>Park House recognised some time ago that the key to providing excellent care was in the need to have a dedicated team within care planning and care co-ordination.  Therefore, we employ an individual in the role of ‘Senior Care Lead’ to assist both the management and care team in the care assessing, planning, and reviewing areas.</p>
          <p>The Senior Care Lead assists the care staff in the operation of the day to day care giving, and also assists/ leads the senior</p>
        </div>
      </div>

      <div className="introalternate-left">
        <div className="introalternate-left-text">
        <h3>Senior Health Care Assistants</h3>
        <p>Senior Health Care Assistants are responsible for the day to day leadership of the care team and will usually be your first point of contact for any updates, quires, or concerns you may have.  At Park House we encourage our senior staff to be involved in the care giving and where applicable to act as mentors to our newer staff members. We aim to train all of our Senior Health Care Assistants to a minimum of Diploma/ NVQ Level 3.</p>
          <p>Our Senior Health Care Assistants will usually be wearing a dark navy tunic, and ID badge to help you identify the senior on shift.</p>
        </div>
        <div className="introalternate-left-img">
          <img src={image3} alt="logo" />
        </div>
      </div>

      <div className="introalternate-right">
        <div className="introalternate-right-img">
          <img src={image4} alt="logo" />
        </div>
        <div className="introalternate-right-text">
          <h3>The Care Team</h3>
          <p>We recognise that for most our residents the most important people in our organisation are the Care Workers with whom they will have regular contact.  We take great care in recruiting, training and supervising our staff.</p>
        </div>
      </div>

      <div className="text-img-text">
        <p>Our staff have a wide range of qualifications which reflect the requirements within the Health and Social Care Act 2008.  These include National Vocational Qualifications/ Diploma level 2, 3, 4 and 5 in care or health and social care.  In addition, management qualifications and relevant administration skills also form part of the Diploma qualification.</p>
          <p>Our Health Care Assistants will usually be dressed in a peacock (bright blue) colour tunic with ID badges, to help you identify who they are.</p>
          <h3>Support Staff</h3>
          <p>We have a range of support staff at Park House covering housekeeping, activities, and catering. This includes a Senior Activities Co-ordinator whose role is to oversee and plan social activities within Park House, and a Catering Manager who is responsible for the day to day management of the kitchen.</p>
          <h4>Staff Recruitment</h4>
          <p>Park House operates a robust recruitment procedure which includes all employees’ being criminal record (DBS) checked, a minimum of three references being obtained, and the completion of twenty-one courses before commencement of employment.  A more practical induction is then provided upon the employee’s first day with Park House, which can last anywhere up until three months dependent on their experience and skills.</p>
        </div>
      
    </div>

  </section>
)

export default Introalternate