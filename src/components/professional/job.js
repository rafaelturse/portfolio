import React from 'react'

import GoTo from '../link/goTo'

function Job({ ...props }) {
    return (
        <div className="card card-job border-0 my-5">
            <div className="row r-100 no-gutters">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 my-auto"><img className="card-img img-fluid p-3" src={props.path} width="200" alt="..." /></div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
                    <div className="card-body">
                        <div className="row d-flex flex-row-reverse">
                            <div className="col-lg-4 col-xl-3 d-flex justify-content-end"><small className="text-muted text-hover">{props.range}</small></div>
                            <div className="col-lg-8 col-xl-9">
                                <div className="text-subtitle-dark font-text-title fs-2 fw-bold">
                                    <svg className="bi bi-headset me-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                        {props.roleIcon}
                                    </svg>
                                    {props.role}
                                </div>
                                <svg className="bi bi-building me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                                </svg>
                                <small className="text-muted">{props.company}</small>
                            </div>
                            <div className="mt-3 px-3"><p className="text-muted">{props.description}</p></div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center w-auto">
                                <iframe title={props.mapTitle} src={props.map} width="100%" height="200px" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <GoTo className="me-2 mb-1" type="top" to="career" />
                </div>
            </div>
        </div>
    )
}

export default Job