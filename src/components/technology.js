import React from 'react';
import LocalStorageService from '../service/localStorageService'

class Technology extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <section>
                {/* <!-- TECHNOLOGY TABLE --> */}
                <div className="container my-5">
                    <div className="row text-center">
                        <div className="fs-1 text-title-dark font-text-title fw-bold">
                            <svg className="bi bi-pie-chart-fill mx-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                            </svg>
                            Technology
                        </div>
                    </div>
                    <span className="underline underline-dark mx-auto"></span>

                    {/* <!-- SKILLS MENU --> */}
                    <div className="font-skill tab-content borderless mt-5">
                        <nav className="nav nav-pills flex-column flex-md-row font-pills-title">
                            <a id="backend" className="flex-md-fill text-md-center nav-link m-2 active" data-bs-toggle="tab" href="#content-backend" onmouseover="doClick('backend')"><i className="fas fa-angle-right mr-2"></i>BACKEND</a>
                            <a id="frontend" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-frontend" onmouseover="doClick('frontend')"><i className="fas fa-angle-right mr-2"></i>FRONTEND</a>
                            <a id="database" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-database" onmouseover="doClick('database')"><i className="fas fa-angle-right mr-2"></i>DATABASE</a>
                            <a id="devops" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-devops" onmouseover="doClick('devops')"><i className="fas fa-angle-right mr-2"></i>DEVOPS</a>
                        </nav>

                        {/* <!-- BACKEND SKILLS --> */}
                        <div id="content-backend" className="tab-pane fade show active">
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                    <thead>
                                        <tr>
                                            <th className="col-skill"><span className="font-skill-title text-skill text-light ml-3"><i className="fas fa-skull-crossbones mr-2"></i>Skill</span></th>
                                            <th className="col-level"><span className="font-skill-title text-skill text-light"><i className="fab fa-stack-overflow mr-2"></i>Fluency</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-subject"><td colspan="2"><span className="text-skill text-center"><h6>JSE - JEE</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Object Orientation</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Java</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">MVC</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Reflexion</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Annotation</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Abstract Class</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Encapsulation</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Inheritance</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Polymorphism</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Lambda</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JSF</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JSP</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache Struts</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Dependency Injection</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Inversion of Control</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Java FX</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Java FX</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Scene Builder</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">FXML</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Spring</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">STS - Spring Tool Suite</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Framework</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring MVC</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Boot</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Batch</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Data-JPA</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Security</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Javascript</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Node</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Express</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Javascript</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">ECMAScript 6 - ES6</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">TypeScript</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">React</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Redux</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="2"><span className="text-skill text-center"><h6>Mobile</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Android</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Swift</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Kotlin</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Cordova</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Ionic 3</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Dart Lang</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Google Firebase</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Dependency</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">CDI</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">EJB</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache Maven</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">NPM</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Gradle</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JFrog</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Log</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Log4j</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Scheduler</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Quartz</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Cron</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Security</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">OAuth2</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Security</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JavaCV</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache Shiro</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JWT</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Hibernate Envers</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Report</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache POI</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Jasper - iReport</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Database - ORM</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JPA - Hibernate</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Data-JPA</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Criteria</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">HQL - JPQL</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Named - Native Query</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Data</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">HTTP</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">API REST - RESTFul</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">End Point</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JSON</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">XML</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">YAML</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Soap</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">WSDL</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">XSD Schema</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SoapUI</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Swagger</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Postman</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Microservices</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Webservices</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Application Server</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">TomCat</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">WildFly</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Websphere</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Xampp</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>IDE</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Eclipse</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Spring Tool Suite</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">NetBeans</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Android Studio</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">IntelliJ IDEA</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="text-skill text-center"><h6>Other</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Visual Basic 6 (VB)</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Visual Basic Application (VBA)</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Delphi 4, 7, 2007</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Go - Golang</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Python 3</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">PHP 7 - POO</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end mt-3"><a href="#technology"><i className="mark-indicator-dark fas fa-angle-up"></i></a></div>
                            </div>
                        </div>

                        {/* <!-- FRONTEND SKILLS --> */}
                        <div id="content-frontend" className="tab-pane fade show" role="tabpanel">
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                    <thead>
                                        <tr>
                                            <th className="col-skill"><span className="font-skill-title font-weight-bold text-light ml-3"><i className="fas fa-skull-crossbones mr-2"></i>Skill</span></th>
                                            <th className="col-level"><span className="font-skill-title font-weight-bold text-light"><i className="fab fa-stack-overflow mr-2"></i>Fluency</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Template</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">HTML5</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">PUG</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Responsive</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Thymeleaf</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">EJS</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Primefaces 3</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">XHTML</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Regex</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Javascript</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JQuery</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Ajax</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>CSS</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">CSS3</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SCCS</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SASS</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">GRID</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Flexbox</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Bootstrap</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Material Design - Materialize</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>SPA</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Angular</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">React</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">React Native</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Vue</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Chart</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">ApexCharts.js</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Chart.js</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Design</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Corel Draw</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Inkscape</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Adobe Illustrator</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Adobe Photoshop</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Motion</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Adobe After Effects</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Adobe Premier</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Management</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Google Analytics</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SEO</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Chrome Developer Tools</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>IDE</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Visual Studio Code</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Sublime</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Atom</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Notepad++</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <h6 className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>CMS</h6></span></td></h6>
                                        <tr>
                                            <td><span className="text-skill ml-3">Joomla</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">WordPress</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end mt-3"><a href="#technology"><i className="mark-indicator-dark fas fa-angle-up"></i></a></div>
                            </div>
                        </div>

                        {/* <!-- DATABASE SKILLS --> */}
                        <div id="content-database" className="tab-pane fade show" role="tabpanel">
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                    <thead>
                                        <tr>
                                            <th className="col-skill"><span className="font-skill-title font-weight-bold text-light ml-3"><i className="fas fa-skull-crossbones mr-2"></i>Skill</span></th>
                                            <th className="col-level"><span className="font-skill-title font-weight-bold text-light"><i className="fab fa-stack-overflow mr-2"></i>Fluency</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>RDBMS</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SQL Server</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">MySQL</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Oracle SQL Developer</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">PostgreSQL</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SQLite</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">DBeaver</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SQuirreL</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache Derby</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>SQL</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Stored Procedure</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Function</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Trigger</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">View</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Complexes Selects </span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Join</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Subquery</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Count - Sum - AVG</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Group - Having</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>

                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>NoSQL</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">MongoDB</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">MongoDB Compass</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>ETL</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">SQL Server Integration Services</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Big Data</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Hadoop</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Apache Spark</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Python 3</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end mt-3"><a href="#technology"><i className="mark-indicator-dark fas fa-angle-up"></i></a></div>
                            </div>
                        </div>

                        {/* <!-- DEVOPS SKILLS --> */}
                        <div id="content-devops" className="tab-pane fade show" role="tabpanel">
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                    <thead>
                                        <tr>
                                            <th className="col-skill"><span className="font-skill-title font-weight-bold text-light ml-3"><i className="fas fa-skull-crossbones mr-2"></i>Skill</span></th>
                                            <th className="col-level"><span className="font-skill-title font-weight-bold text-light"><i className="fab fa-stack-overflow mr-2"></i>Fluency</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Automation</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Jenkins</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Kubernetes</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Elasticsearch</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Docker</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Tests</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JUnit</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Selenium</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Mockito</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">TDD</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Repository</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">GitLab</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">GitHub</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Bitbucket</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Tortoise SVN</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-success w-100" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">JFrog</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                        </tr>
                                        <tr className="table-subject"><td colspan="4"><span className="font-weight-bold text-center"><h6>Cloud Application Platform</h6></span></td></tr>
                                        <tr>
                                            <td><span className="text-skill ml-3">Heroku</span></td>
                                            <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="d-flex justify-content-end mt-3"><a href="#technology"><i className="mark-indicator-dark fas fa-angle-up"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Technology;