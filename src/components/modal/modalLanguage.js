import React from 'react'

function pickBar(i) {
    switch (i.props.bar) {
        case 'success':
            return 'bg-success w-100';
        case 'info':
            return 'bg-info w-75';
        case 'warning':
            return 'bg-warning w-50';
        case 'danger':
            return 'bg-danger w-25';
        default:
            return 'bg-success w-0';
    }
}

function ModalLanguage({ ...props }) {
    return (
        <div id={props.id} className="modal fade" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                    </div>
                    <div className="modal-body">
                        <img className="card-img img-responsive p-3" src={props.image} height="200" width="200" alt="..." />
                        <small className="d-flex justify-content-end text-muted text-hover">{props.period}</small>
                        <div className="mx-1">
                            <h2 className="text-subtitle-dark font-text-title fw-bold">
                                <svg className="bi bi-globe mx-2" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                </svg>
                                {props.language}
                            </h2>
                        </div>
                        <div className="row mx-1"><small className="text-muted text-hover">{props.country}</small></div>
                        <div class="mt-4 px-3">
                            <div className="fs-5 mb-2">{props.fluency}</div>
                            <div class="progress"><div class={`progress-bar ${pickBar({ props })}`} role="progressbar"><strong>{props.percentage}</strong> </div></div>
                        </div>
                        <div className="row no-gutters px-4">
                            <p className="text-muted mt-2 p-2">{props.description}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
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

export default ModalLanguage