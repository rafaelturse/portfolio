import React from 'react'

import LocalStorageService from '../../service/localStorageService'

import ChartInterest from '../chart/chartInterest'
import ChartFocous from '../chart/chartFocous'

import PageTitle from '../general/pageTitle'

class Data extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <section id="data" className="my-5">
                <PageTitle
                    icon={<path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />}
                    title="Data"
                />

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
                        <div className="container mt-5">
                            <div className="mb-3">
                                <p className="text-muted">
                                    The current demand for software development is increasingly demanding. In addition to developing
                                    <span className="font-spotlight text-green"> backend</span> for
                                    <span className="font-spotlight text-green"> WEB applications</span>,
                                    I have specialized with <span className="font-spotlight text-green"> frontend</span>, always using
                                    <span className="font-spotlight text-green"> SOLID</span> and
                                    <span className="font-spotlight text-green"> Clean Code</span>.
                                </p>
                                <p className="text-muted">
                                    Being self-sufficient, I'm also a professional in
                                    <span className="font-spotlight text-blue"> database</span>,
                                    <span className="font-spotlight text-blue"> usability</span>,
                                    <span className="font-spotlight text-blue"> javascript</span> and
                                    <span className="font-spotlight text-blue"> devOps</span>.
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <ChartFocous />
                            </div>
                        </div>
                    </div>

                    {/* RESUME */}
                    <div id="content-resume" className="tab-pane fade show" role="tabpanel">
                        <div className="row mt-2 mx-3 p-3">
                            <div className="col card-link text-center p-5">
                                <a href="https://github.com/rafaelturse/portfolio/raw/gh-pages/doc/resume/resume-rafael-turse.docx">
                                    <svg className="bi bi-file-earmark-word mb-4" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" />
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                    </svg>
                                    <div className='fs-2'>Resume</div>
                                    <p>Download my resume in <strong>.docx</strong> format, it's completed and updated</p>
                                </a>
                            </div>
                            <div className="col card-link text-center p-5">
                                <a href="https://github.com/rafaelturse/portfolio/raw/gh-pages/doc/resume/resume-rafael-turse.pdf">
                                    <svg className="bi bi-file-earmark-word mb-4" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                        <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                                    </svg>
                                    <div className='fs-2'>Resume</div>
                                    <p>Download my resume in <strong>.pdf</strong> format, it's completed and updated</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Data