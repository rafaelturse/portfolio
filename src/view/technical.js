import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeaderTechcnical from '../components/headerTechnical';
import Data from '../components/data';

class Technical extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderTechcnical />

        <div className="container">
          <Data />
        </div>

        <Footer />
      </div>
    )
  }
}

export default Technical