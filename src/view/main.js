import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import HeadlineMainSubjects from '../components/headlineMainSubjects';
import HeadlineFeatured from '../components/headlineFeatured';
import MainComments from '../components/mainComments';
import MainMotion from '../components/mainMotion';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <HeadlineMainSubjects />
                    <HeadlineFeatured />
                    <MainMotion />
                </div>
                
                <MainComments />
                <Footer />
            </div>
        )
    }
}

export default Main