import React from 'react';

function HeaderSubtitle({ ...props }) {
    return (
        <section>
            <div className="background-dark-main-header pb-4">
                <div className="container">
                    <div className="fs-4 font-text-title font-weight-bold text-title-light d-flex justify-content-end">
                        <span className="align-middle">
                            <svg className="bi bi-person-circle mx-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                {props.icon}
                            </svg>
                            {props.subtitle}
                        </span>
                    </div>
                    <div className="fs-6 font-text-title text-subtitle-light d-flex justify-content-end mt-1">
                        {props.subtitleDescription}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSubtitle;