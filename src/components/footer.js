import React from 'react'
import LocalStorageService from '../service/localStorageService';
import GoTo from './goTo';
import GoToPage from './goToPage';
import Contacts from './contacts'

class Footer extends React.Component {

    setDoClickComponent(component) { LocalStorageService.setItem('doClickComponent', component) }

    componentDidMount() { LocalStorageService.setItem('doClickComponent', '') }

    render() {
        return (
            <section>
                <div className="footer p-2">
                    <GoTo type="light" to="top" />

                    <div className="col">
                        <div className="row px-1">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                                <small>
                                    <a className="font-footer-title text-footer-dark-title fw-bold" href="#/professional">
                                        <svg className="bi bi-person-circle align-top mb-3 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                                            <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                                        </svg>
                                        Professional
                                    </a>
                                </small>
                                <div className="row ml-2">
                                    <small>
                                        <a className="font-footer-topic text-footer-dark fw-bold" href="/">
                                            <svg className="bi bi-caret-right-fill  align-middle mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            </svg>
                                            Personal
                                        </a>
                                    </small>
                                </div>
                                <div className="row ml-2">
                                    <small>
                                        <a className="font-footer-topic text-footer-dark fw-bold" href="/">
                                            <svg className="bi bi-caret-right-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            </svg>
                                            Education
                                        </a>
                                    </small>
                                </div>
                                <div className="row ml-2">
                                    <small>
                                        <a className="font-footer-topic text-footer-dark fw-bold" href="/">
                                            <svg className="bi bi-caret-right-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            </svg>
                                            Career
                                        </a>
                                    </small>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                                <small>
                                    <GoToPage
                                        to="/technical#top"
                                        title="Technical"
                                        className="font-footer-title text-footer-dark-title fw-bold"
                                        icon={
                                            <svg className="bi bi-person-circle align-top mb-3 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                            </svg>
                                        }
                                    />
                                </small>
                                <div className="row ml-2">
                                    <small>
                                        <GoToPage
                                            to="/technical#data"
                                            title="Data"
                                            className="font-footer-topic text-footer-dark fw-bold"
                                            icon={
                                                <svg className="bi bi-caret-right-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                </svg>
                                            }
                                        />
                                    </small>
                                </div>
                                <div className="row ml-2">
                                    <small>
                                        <GoToPage
                                            to="/technical#technology"
                                            title="Technology"
                                            className="font-footer-topic text-footer-dark fw-bold"
                                            icon={
                                                <svg className="bi bi-caret-right-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                </svg>
                                            }
                                        />
                                    </small>
                                </div>
                                <div className="row ml-2">
                                    <small>
                                        <GoToPage
                                            to="/technical#landscape"
                                            title="Landscape"
                                            className="font-footer-topic text-footer-dark fw-bold"
                                            icon={
                                                <svg className="bi bi-caret-right-fill mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                </svg>
                                            }
                                        />
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-5 p-2"><Contacts classes="text-footer-dark" size="22"/></div>

                        <div className="d-flex justify-content-center font-footer-developer text-footer-dark mt-3 mb-1">
                            <span>
                                developed by <strong>Rafael Turse </strong>
                                with <strong> React</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;