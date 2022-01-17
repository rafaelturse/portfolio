import React from 'react';
import ChartInterest from '../components/chart/chartInterest'

class Data extends React.Component {
    render() {
        return (
            <section>
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="fs-1 text-title-dark font-text-title fw-bold">
                            <svg className="bi bi-pie-chart-fill mx-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
                            </svg>
                            Data
                        </div>
                    </div>
                    <span className="underline underline-dark mx-auto"></span>

                    {/* PERSONAL MENU */}
                    <div className="font-skill tab-content borderless mt-5">
                        <nav className="nav nav-pills flex-column flex-md-row font-pills-title">
                            <a id="interest" className="flex-md-fill text-md-center nav-link m-2 active" data-bs-toggle="tab" href="#content-interest"><i className="fas fa-angle-right mr-2"></i>INTEREST</a>
                            <a id="focus" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-focus"><i className="fas fa-angle-right mr-2"></i>FOCUS</a>
                            <a id="resume" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-resume"><i className="fas fa-angle-right mr-2"></i>RESUME</a>
                        </nav>

                        {/* INTEREST */}
                        <div id="content-interest" className="tab-pane fade show active" role="tabpanel"><ChartInterest /></div>

                        {/* FOCUS */}
                        <div id="content-focus" className="tab-pane fade show" role="tabpanel">
                            <div className="container font-text">
                                <div className="row">
                                    <div className="col-xl-7 my-auto">
                                        <div className="row px-4">
                                            <p className="text-describe-dark">
                                                The current demand for software development is increasingly demanding. In addition to developing
                                                <span className="font-spotlight text-green">backend</span> for <span className="font-spotlight text-green">WEB applications</span>,
                                                I have specialized with <span className="font-spotlight text-green">frontend</span> and <span className="font-spotlight text-green">
                                                    mobile applications</span>.
                                            </p>
                                            <p className="text-describe-dark">
                                                Being self-sufficient, I'm also a professional in <span className="font-spotlight text-blue">database</span>,
                                                <span className="font-spotlight text-blue">usability</span>, <span className="font-spotlight text-blue">javascript</span>
                                                and <span className="font-spotlight text-blue">devOps</span>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-5 d-flex justify-content-center">
                                        <div id="focusChart" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RESUME */}
                        <div id="content-resume" className="tab-pane fade show" role="tabpanel">
                            <div className="row rounded mt-5 mx-3 p-3">
                                <div className="col-12 mt-4 text-muted d-flex justify-content-center">
                                    <h6>Download my resume. It's always completed and updated</h6>
                                </div>
                            </div>
                            <div className="row rounded mt-2 mx-3 p-3">
                                <object data="../doc/resume/resume-rafael-turse.pdf" type="application/pdf" width="100%" height="1200px">
                                    <p>You don't have a <strong>PDF plugin</strong> for this browser. Don't worry, you can download at 
                                    <a href="../doc/resume/resume-rafael-turse.pdf">here</a></p>
                                </object>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Data;