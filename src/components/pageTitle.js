import React from 'react';

function PageTitle({ ...props }) {
    return (
        <section>
            <div className="row text-center">
                <div className="fs-1 text-title-dark font-text-title fw-bold">
                    <svg className="bi bi-pie-chart-fill mx-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                        {props.icon}
                    </svg>
                    {props.title}
                </div>
            </div>
            <span className="underline underline-dark mx-auto"></span>
        </section>
    )
}

export default PageTitle