import React from 'react'

function ModalCourse({ ...props }) {
    return (
        <div id={props.id} class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{props.title}</h5>
                    </div>
                    <div class="modal-body">
                        <div className="text-center">
                            <img class="card-img img-responsive image-education p-3" src={props.icon} alt="..." />
                            <div class="text-muted mx-1 mt-4">
                                <div class="text-subtitle-dark font-text-title fs-2 fw-bold">{props.course}</div>
                            </div>
                        </div>
                        <div><p class="text-muted pt-1 px-3">{props.description}</p></div>
                        <ul>
                            <div class="row mt-3">
                                <div class="col">
                                    <li><small class="text-muted">Duration: <strong>{props.duration} hours of video</strong></small></li>
                                    <li><small class="text-muted">Language: <strong>{props.language}</strong></small></li>
                                    <li><small class="text-muted">Conclusion Date: <strong>{props.conclusion}</strong></small></li>
                                </div>
                                <div class="col">
                                    <li>
                                        <small>
                                            <svg class="bi bi-link-45deg me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                            <a class="text-muted" href={props.urlCertificate} target="_blank" rel="noopener noreferrer">Certificate</a>
                                        </small>
                                    </li>
                                    <li>
                                        <small>
                                            <svg class="bi bi-link-45deg me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                            <a class="text-muted" href={props.urlSchool} target="_blank" rel="noopener noreferrer">Course page</a>
                                        </small>
                                    </li>
                                </div>
                            </div>
                        </ul>
                        <div><img src={props.certificate} class="img-fluid" alt="..." /></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-outline-dark fw-bold" data-bs-dismiss="modal">
                            <svg className="bi bi-caret-left-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCourse