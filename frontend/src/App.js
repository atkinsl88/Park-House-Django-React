import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Subnav from './components/common/Subnav'
import Footer from './components/common/Footer'
import Home from './components/homepage/Home'
import Carehome from './components/carehome/Carehome'
import Assessmentprocess from './components/carehome/subpages/assessment-process/Assesmentprocess'
import Accomodationfees from './components/carehome/subpages/accomodation-fees/Accomodationfees'
import Admissions from './components/carehome/subpages/admissions/Admissions'
import Carereviewing from './components/carehome/subpages/care-reviewing/Carereviewing'
import Domiciliarycare from './components/domiciliarycare/Domiciliarycare'
import Assessingneed from './components/domiciliarycare/subpages/assessing-the-need/Assessingneed'
import Clientcare from './components/domiciliarycare/subpages/client-care-plan/Clientcare'
import Reassesingtheneed from './components/domiciliarycare/subpages/reassessing-the-need/Reassessingneed'
import Daycare from './components/daycare/Daycare'
import Teamcarehome from './components/meet-the-team/care/Teamcarehome'
import Teamdomiciliarycare from './components/meet-the-team/domiciliary/Teamdomiciliarycare'
import Testcarehome from './components/testimonials/care/Testcarehome'
import Testdomiciliarycare from './components/testimonials/domicilary/Testdomiciliarycare'

const App = () => {
  return (
    <BrowserRouter>
      <Subnav />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carehome" component={Carehome} />
        <Route exact path="/carehome/assessment-process" component={Assessmentprocess} />
        <Route exact path="/carehome/accomodation-fees" component={Accomodationfees} />
        <Route exact path="/carehome/admissions" component={Admissions} />
        <Route exact path="/carehome/care-reviewing" component={Carereviewing} />
        <Route exact path="/domiciliarycare" component={Domiciliarycare} />
        <Route exact path="/domiciliarycare/assessing-the-need" component={Assessingneed} />
        <Route exact path="/domiciliarycare/client-care-plan" component={Clientcare} />
        <Route exact path="/domiciliarycare/reassessing-the-need" component={Reassesingtheneed} />
        <Route exact path="/daycare" component={Daycare} />
        <Route exact path="/meet-the-team/carehome" component={Teamcarehome} />
        <Route exact path="/meet-the-team/domiciliarycare" component={Teamdomiciliarycare} />
        <Route exact path="/testimonials/carehome" component={Testcarehome} />
        <Route exact path="/testimonials/domicilary" component={Testdomiciliarycare} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App