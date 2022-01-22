import React from 'react'

import Header from '../components/general/header'
import Footer from '../components/general/footer'
import HeaderTechcnical from '../components/technical/headerTechnical'
import Data from '../components/technical/data'
import Technology from '../components/technical/technology'
import TechnicalComments from '../components/comments/technicalComments'
import Landscape from '../components/technical/landscape'

class Technical extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderTechcnical />

        <div className="container">
          <Data />
          <Technology />
        </div>

        <Landscape />
        <TechnicalComments />
        <Footer />
      </div>
    )
  }
}

export default Technical