import React from 'react';

import LocalStorageService from '../../service/localStorageService'

import ContactLogo from '../../art/logo/logo-rafaelturse-vertical.svg'

import PageTitle from '../general/pageTitle'
import Contacts from '../general/contacts'

class Personal extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <section id="personal" className="my-5">
                <PageTitle
                    icon={
                        <>
                            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </>
                    }
                    title="Personal"
                />

                {/* PERSONAL MENU */}
                <div className="font-skill tab-content borderless mt-5">
                    <nav className="nav nav-pills flex-column flex-md-row font-pills-title">
                        <a className="flex-md-fill text-md-center nav-link m-2 active" data-bs-toggle="tab" href="#content-summedUp"><i className="fas fa-angle-right mr-2"></i>SUMMED UP</a>
                        <a className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-about"><i className="fas fa-angle-right mr-2"></i>ABOUT</a>
                        <a className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-place"><i className="fas fa-angle-right mr-2"></i>PLACE</a>
                        <a className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-contact"><i className="fas fa-angle-right mr-2"></i>CONTACT</a>
                    </nav>

                    {/* SUMMED UP */}
                    <div id="content-summedUp" className="tab-pane fade show active" role="tabpanel">
                        <div className="px-3 pt-4 my-2">
                            <p className="text-muted">
                                Brazilian, born in September 1989. Bachelor in Information Systems from São Judas Tadeu University - São Paulo, Brazil.
                                Programmer since 2011 with professional goal of becoming Systems Architect and Senior Programmer. Self-taught, language student,
                                guitarist passionate about music and recently, I started writing a book and discovered the wonders of being a writer.
                            </p>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div id="content-about" className="tab-pane fade show" role="tabpanel">
                        <div className="border-0 font-badge flex-wrap d-flex mt-5 mx-3">
                            <span className="badge bg-dark p-2 m-1">development</span>
                            <span className="badge bg-dark p-2 m-1">systems</span>
                            <span className="badge bg-dark p-2 m-1">programming</span>
                            <span className="badge bg-dark p-2 m-1">database</span>
                            <span className="badge bg-dark p-2 m-1">web design</span>
                            <span className="badge bg-dark p-2 m-1">design 3d</span>
                            <span className="badge bg-dark p-2 m-1">solve problems</span>
                            <span className="badge bg-dark p-2 m-1">challenges</span>
                            <span className="badge bg-info p-2 m-1">self-taught</span>
                            <span className="badge bg-info p-2 m-1">read, write books</span>
                            <span className="badge bg-info p-2 m-1">kindle</span>
                            <span className="badge bg-info p-2 m-1">to study</span>
                            <span className="badge bg-info p-2 m-1">to draw</span>
                            <span className="badge bg-info p-2 m-1">robotic</span>
                            <span className="badge bg-info p-2 m-1">drones</span>
                            <span className="badge bg-info p-2 m-1">woodwork</span>
                            <span className="badge bg-info p-2 m-1">mechanic</span>
                            <span className="badge bg-info p-2 m-1">poetry</span>
                            <span className="badge bg-warning p-2 m-1">religion</span>
                            <span className="badge bg-warning p-2 m-1">politics</span>
                            <span className="badge bg-warning p-2 m-1">technology</span>
                            <span className="badge bg-warning p-2 m-1">architecture</span>
                            <span className="badge bg-warning p-2 m-1">languages</span>
                            <span className="badge bg-warning p-2 m-1">physics</span>
                            <span className="badge bg-warning p-2 m-1">history</span>
                            <span className="badge bg-warning p-2 m-1">astronomy</span>
                            <span className="badge bg-warning p-2 m-1">philosophy</span>
                            <span className="badge bg-warning p-2 m-1">psychology</span>
                            <span className="badge bg-warning p-2 m-1">anthropology</span>
                            <span className="badge bg-warning p-2 m-1">documentaries</span>
                            <span className="badge bg-success p-2 m-1">music</span>
                            <span className="badge bg-success p-2 m-1">dance</span>
                            <span className="badge bg-success p-2 m-1">instruments</span>
                            <span className="badge bg-success p-2 m-1">dj</span>
                            <span className="badge bg-success p-2 m-1">games</span>
                            <span className="badge bg-success p-2 m-1">collectibles</span>
                            <span className="badge bg-success p-2 m-1">series</span>
                            <span className="badge bg-success p-2 m-1">cooking</span>
                            <span className="badge bg-success p-2 m-1">gym</span>
                            <span className="badge bg-success p-2 m-1">swim</span>
                            <span className="badge bg-success p-2 m-1">hiking</span>
                            <span className="badge bg-success p-2 m-1">jogging</span>
                            <span className="badge bg-success p-2 m-1">bike</span>
                            <span className="badge bg-success p-2 m-1">travel</span>
                            <span className="badge bg-success p-2 m-1">cruise</span>
                            <span className="badge bg-success p-2 m-1">to drive</span>
                            <span className="badge bg-success p-2 m-1">beach</span>
                            <span className="badge bg-success p-2 m-1">sea</span>
                            <span className="badge bg-success p-2 m-1">sky</span>
                            <span className="badge bg-success p-2 m-1">mountains</span>
                            <span className="badge bg-success p-2 m-1">sights</span>
                            <span className="badge bg-success p-2 m-1">nature</span>
                            <span className="badge bg-success p-2 m-1">trees</span>
                            <span className="badge bg-success p-2 m-1">animals</span>
                            <span className="badge bg-success p-2 m-1">waterfall</span>
                            <span className="badge bg-success p-2 m-1">winter</span>
                            <span className="badge bg-success p-2 m-1">snow</span>
                            <span className="badge bg-success p-2 m-1">pizza</span>
                            <span className="badge bg-success p-2 m-1">ice cream</span>
                            <span className="badge bg-success p-2 m-1">cheese cake</span>
                            <span className="badge bg-success p-2 m-1">movie</span>
                            <span className="badge bg-success p-2 m-1">theater</span>
                            <span className="badge bg-success p-2 m-1">stand up</span>
                            <span className="badge bg-success p-2 m-1">photography</span>
                            <span className="badge bg-success p-2 m-1">sculptures</span>
                            <span className="badge bg-danger p-2 m-1">my wife</span>
                            <span className="badge bg-danger p-2 m-1">family</span>
                            <span className="badge bg-danger p-2 m-1">accomplish</span>
                            <span className="badge bg-danger p-2 m-1">to live</span>
                        </div>
                    </div>

                    {/* PLACE */}
                    <div id="content-place" className="tab-pane fade show" role="tabpanel">
                        <div className="row border-0 mt-5 mx-3">
                            <iframe
                                title="home"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290182926!2d-79.51814296517406!3d43.718155660701214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C+ON%2C+Canada!5e0!3m2!1sen!2sbr!4v1564700079447!5m2!1sen!2sbr"
                                width="100%" height="500px" frameborder="0" style={{ border: 0 }} allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div id="content-contact" className="tab-pane fade show m-5" role="tabpanel">
                        <div className="d-flex justify-content-center mt-3">
                            <img class="img-fluid mx-auto d-block mb-2" src={ContactLogo} width="300px" alt="..." />
                        </div>
                        <div className="d-flex justify-content-center mt-4"><Contacts size="52" /></div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Personal