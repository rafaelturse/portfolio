import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeaderProfessional from '../components/headerProfessional';
import ProfessionalComments from '../components/professionalComments';
import Personal from '../components/personal';
import Education from '../components/education';

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