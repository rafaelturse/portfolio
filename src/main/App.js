import React from 'react';

import SystemRoutes from './systemRoutes';

import Header from '../components/header';
import HeadlineMainSubjects from '../components/headlineMainSubjects';
import HeadlineFeatured from '../components/headlineFeatured';

import '../css/page.css'
import '../css/text.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <HeadlineMainSubjects />
        <HeadlineFeatured />

        <SystemRoutes />
      </div>
    </div>
  );
}

export default App;
