import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeaderProfessional from '../components/headerProfessional';
import ProfessionalComments from '../components/professionalComments';
import Personal from '../components/personal';

class Professional extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderProfessional />

        <div className="container">
          <Personal />
        </div>

        <ProfessionalComments />
        <Footer />
      </div>
    )
  }
}

export default Professional