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
                                            <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
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

                        <div className="d-flex justify-content-end mt-5 p-2"><Contacts classes="text-footer-dark" size="22" /></div>

                        <div className="d-flex justify-content-center font-footer-developer text-footer-dark mt-3 mb-1">
                            <span>
                                developed by <strong>Rafael Turse </strong>
                                with <strong> React</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer