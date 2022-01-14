import React from 'react';

class HeadlineFeatured extends React.Component {
    render() {
        return (
            <section>
                <div className="row align-items-center m-5">
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>backend</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-red" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>frontend</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-green" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>database</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-yellow" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
                                        <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
                                        <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>devOps</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-blue" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>motion</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-purple" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>music</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-orange" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>book</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z" />
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-3">
                        <div className="card background-dark p-3">
                            <div className="row font-pills-title text-describe-light text-center">
                                <div className="col col-md-12 col-lg-12 col-xl-12"><h5>trip</h5></div>
                                <div className="col col-md-12 col-lg-12 col-xl-12">
                                    <svg className="bi bi-lightning-fill text-pink" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-muted fs-5 lh-sm'>
                            I have experience in several areas, where with competence and commitment I can work in the development of complex and comprehensive solutions
                        </p>
                        <a href="#"><span className='d-flex justify-content-end fw-bold lh-sm'>more</span></a>
                    </div>
                    {/* 
                    <div>
                        <p>
                            Buscando ser um profissional completo, tenho vasto conhecimento e experiência nas principais áreas de desenvolvimento de software. Sou capaz de
                            codificar regras de negócios e utilizar complexos padrões de projetos no backend para fazer com que todo o núcleo do sistema


                            condifico e programo backend orientado a objetos e
                        </p>
                    </div>
                    */}
                </div>
            </section>
        );
    }
}

export default HeadlineFeatured;