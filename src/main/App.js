import React from 'react';

import SystemRoutes from './systemRoutes';

import Header from '../components/header';
import HeadlineMainSubjects from '../components/headlineMainSubjects';
import HeadlineFeatured from '../components/headlineFeatured';
import Footer from '../components/footer';
import MainComments from '../components/mainComments';
import MainMotion from '../components/mainMotion';

import '../css/carousel.css'
import '../css/page.css'
import '../css/text.css'

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <HeadlineMainSubjects />
        <HeadlineFeatured />
        <MainMotion />

        <SystemRoutes />
      </div>
      
      <MainComments />
      <Footer />
    </div>
  );
}

export default App;
