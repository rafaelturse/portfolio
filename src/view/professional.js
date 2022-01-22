import React from 'react'

import Header from '../components/general/header'
import Footer from '../components/general/footer'
import HeaderProfessional from '../components/professional/headerProfessional'
import ProfessionalComments from '../components/comments/professionalComments'
import Personal from '../components/professional/personal'
import Education from '../components/professional/education'

class Professional extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderProfessional />

        <div className="container">
          <Personal />
          <Education />
        </div>

        <ProfessionalComments />
        <Footer />
      </div>
    )
  }
}

export default Professional