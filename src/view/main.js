import React from 'react'

import Header from '../components/general/header'
import Footer from '../components/general/footer'
import HeadlineMainSubjects from '../components/main/headlineMainSubjects'
import HeadlineFeatured from '../components/main/headlineFeatured'
import MainComments from '../components/comments/mainComments'
import MainMotion from '../components/main/mainMotion'

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