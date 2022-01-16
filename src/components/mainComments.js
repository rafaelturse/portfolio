import React from 'react';

import logoPreFooter from '../art/logo/logo-rafaelturse-horizontal-dark.svg'

class MainComments extends React.Component {
    render() {
        return (
            <section>
                <div id="fb-root"></div>

                <div className="container-fluid background-prefooter-dark-light mt-5">
                    <div className="container pt-5 pb-5">
                        <h1 className="text-title-dark font-text-title fw-bold mx-auto">
                            <svg className="bi bi-award-fill mx-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                            </svg>
                            Celebrate
                        </h1>
                        <small className="font-footer-topic text-footer-dark fw-bold ">
                            <span>* don't make fun of me! I can moderate this ... lol</span>
                        </small>

                        <div
                            className="fb-like d-flex justify-content-end my-3 mr-3"
                            data-href="http://www.rafaelturse.ca/"
                            data-width=""
                            data-layout="box_count"
                            data-action="like"
                            data-size="small"
                            data-share="true">
                        </div>

                        <div className="fb-save d-flex justify-content-center mb-3" data-uri="http://www.rafaelturse.ca/" data-size="large"></div>

                        <div className="fb-comments w-100" data-href="http://www.rafaelturse.ca/" data-numposts="20" data-order-by="reverse_time" data-width="100%"></div>

                        <div className="mt-5">
                            <img className="img-fluid mx-auto d-block mb-2" src={logoPreFooter} width="300px" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainComments;