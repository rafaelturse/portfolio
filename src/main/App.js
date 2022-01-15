import React from 'react';

import SystemRoutes from './systemRoutes';

import Header from '../components/header';
import HeadlineMainSubjects from '../components/headlineMainSubjects';
import HeadlineFeatured from '../components/headlineFeatured';

import '../css/page.css'
import '../css/text.css'
import Footer from '../components/footer';

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <HeadlineMainSubjects />
        <HeadlineFeatured />

        <SystemRoutes />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
