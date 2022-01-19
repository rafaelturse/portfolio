import React from 'react';
import LocalStorageService from '../service/localStorageService'
import TechnologyTableHead from './technologyTableHead';
import TechnologyTableSubject from './technologyTableSubject';
import TechnologyTableItem from './technologyTableItem';

class TechnologyTable extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <div>
                {/* <!-- SKILLS MENU --> */}
                <div className="font-skill tab-content borderless mt-5">
                    <nav className="nav nav-pills flex-column flex-md-row font-pills-title mb-3">
                        <a id="backend" className="flex-md-fill text-md-center nav-link m-2 active" data-bs-toggle="tab" href="#content-backend" onmouseover="doClick('backend')"><i className="fas fa-angle-right mr-2"></i>BACKEND</a>
                        <a id="frontend" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-frontend" onmouseover="doClick('frontend')"><i className="fas fa-angle-right mr-2"></i>FRONTEND</a>
                        <a id="database" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-database" onmouseover="doClick('database')"><i className="fas fa-angle-right mr-2"></i>DATABASE</a>
                        <a id="devops" className="flex-md-fill text-md-center nav-link m-2" data-bs-toggle="tab" href="#content-devops" onmouseover="doClick('devops')"><i className="fas fa-angle-right mr-2"></i>DEVOPS</a>
                    </nav>

                    {/* <!-- BACKEND SKILLS --> */}
                    <div id="content-backend" className="tab-pane fade show active px-2">
                        <div className="table-responsive">
                            <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="JSE - JEE" />
                                    <TechnologyTableItem title="Object Orientation" bar="success" />
                                    <TechnologyTableItem title="Java" bar="success" />
                                    <TechnologyTableItem title="JaMVCva" bar="success" />
                                    <TechnologyTableItem title="Reflexion" bar="success" />
                                    <TechnologyTableItem title="Annotation" bar="success" />
                                    <TechnologyTableItem title="Abstract Class" bar="success" />
                                    <TechnologyTableItem title="Encapsulation" bar="success" />
                                    <TechnologyTableItem title="Inheritance" bar="success" />
                                    <TechnologyTableItem title="Polymorphism" bar="success" />
                                    <TechnologyTableItem title="Lambda" bar="info" />
                                    <TechnologyTableItem title="JSF" bar="success" />
                                    <TechnologyTableItem title="JSP" bar="success" />
                                    <TechnologyTableItem title="Spring" bar="success" />
                                    <TechnologyTableItem title="Apache Struts" bar="danger" />
                                    <TechnologyTableItem title="Dependency Injection" bar="success" />
                                    <TechnologyTableItem title="Inversion of Control" bar="success" />

                                    <TechnologyTableSubject title="Java FX" />
                                    <TechnologyTableItem title="Java FX" bar="warning" />
                                    <TechnologyTableItem title="Scene Builder" bar="warning" />
                                    <TechnologyTableItem title="FXML" bar="warning" />

                                    <TechnologyTableSubject title="Spring" />
                                    <TechnologyTableItem title="STS - Spring Tool Suite" bar="success" />
                                    <TechnologyTableItem title="Spring Framework" bar="success" />
                                    <TechnologyTableItem title="Spring MVC" bar="success" />
                                    <TechnologyTableItem title="Spring Boot" bar="success" />
                                    <TechnologyTableItem title="Spring Batch" bar="success" />
                                    <TechnologyTableItem title="Spring Data-JPA" bar="success" />
                                    <TechnologyTableItem title="Spring Security" bar="success" />
                                    <TechnologyTableItem title="Spring Cloud" bar="success" />

                                    <TechnologyTableSubject title="Javascript" />
                                    <TechnologyTableItem title="javascript" bar="success" />
                                    <TechnologyTableItem title="ECMAScript" bar="success" />
                                    <TechnologyTableItem title="Node" bar="success" />
                                    <TechnologyTableItem title="Express" bar="success" />

                                    <TechnologyTableSubject title="Mobile" />
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
                                    <TechnologyTableSubject title="Dependency" />
                                    <tr>
                                        <td><span className="text-skill ml-3">CDI</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">EJB</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Apache Maven</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">NPM</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Gradle</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">JFrog</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Log" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Log4j</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Scheduler" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Quartz</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Cron</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Security" />
                                    <tr>
                                        <td><span className="text-skill ml-3">OAuth2</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Spring Security</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
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
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Report" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Apache POI</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Jasper - iReport</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Database - ORM" />
                                    <tr>
                                        <td><span className="text-skill ml-3">JPA - Hibernate</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Spring Data-JPA</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Criteria</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">HQL - JPQL</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Named - Native Query</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Data" />
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
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">JSON</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">XML</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
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
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Microservices</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Webservices</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Application Server" />
                                    <tr>
                                        <td><span className="text-skill ml-3">TomCat</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">WildFly</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Websphere</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Xampp</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="IDE" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Eclipse</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Spring Tool Suite</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">NetBeans</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Android Studio</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">IntelliJ IDEA</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Other" />
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
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
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
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="Template" />
                                    <tr>
                                        <td><span className="text-skill ml-3">HTML5</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">PUG</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-danger w-25" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Responsive</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Thymeleaf</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">EJS</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Primefaces 3</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">XHTML</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Regex</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Javascript</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">JQuery</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Ajax</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="CSS" />
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
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Material Design - Materialize</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="SPA" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Angular</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
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
                                    <TechnologyTableSubject title="Chart" />
                                    <tr>
                                        <td><span className="text-skill ml-3">ApexCharts.js</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Chart.js</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Design" />
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
                                    <TechnologyTableSubject title="Motion" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Adobe After Effects</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Adobe Premier</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Management" />
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
                                    <TechnologyTableSubject title="IDE" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Visual Studio Code</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Sublime</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Atom</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Notepad++</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="CMS" />
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
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="RDBMS" />
                                    <tr>
                                        <td><span className="text-skill ml-3">SQL Server</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">MySQL</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Oracle SQL Developer</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">PostgreSQL</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">SQLite</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">DBeaver</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">SQuirreL</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Apache Derby</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="SQL" />
                                    <tr>
                                        <td><span className="text-skill ml-3">Stored Procedure</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Function</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Trigger</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">View</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Complexes Selects </span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Join</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Subquery</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Count - Sum - AVG</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Group - Having</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>

                                    <TechnologyTableSubject title="NoSQL" />
                                    <tr>
                                        <td><span className="text-skill ml-3">MongoDB</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">MongoDB Compass</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-info w-75" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="ETL" />
                                    <tr>
                                        <td><span className="text-skill ml-3">SQL Server Integration Services</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Big Data" />
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
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="Automation" />
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
                                    <TechnologyTableSubject title="Tests" />
                                    <tr>
                                        <td><span className="text-skill ml-3">JUnit</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
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
                                    <TechnologyTableSubject title="Repository" />
                                    <tr>
                                        <td><span className="text-skill ml-3">GitLab</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">GitHub</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Bitbucket</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">Tortoise SVN</span></td>
                                        <td><div className="progress"><div className="progress-bar success" role="progressbar"></div></div></td>
                                    </tr>
                                    <tr>
                                        <td><span className="text-skill ml-3">JFrog</span></td>
                                        <td><div className="progress"><div className="progress-bar bg-warning w-50" role="progressbar"></div></div></td>
                                    </tr>
                                    <TechnologyTableSubject title="Cloud" />
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
        );
    }
}

export default TechnologyTable;