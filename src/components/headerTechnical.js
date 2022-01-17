import React from 'react';

class HeaderTechcnical extends React.Component {
    render() {
        return (
            <section>
                <div className="background-dark-main-header pb-5">
                    <div className="container px-5">
                        <div className="fs-1 font-text-title font-weight-bold text-title-light d-flex justify-content-end">
                            <span className="align-middle">
                                <svg className="bi bi-person-circle mx-3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                </svg>
                                Technical
                            </span>
                        </div>
                        <div className="fs-5 font-text-title text-subtitle-light d-flex justify-content-end mt-1">
                            Information about development skills and programming languages
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeaderTechcnical;