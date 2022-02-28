import React from 'react'

import LocalStorageService from '../../service/localStorageService'

import GoTo from '../link/goTo'

import TechnologyTableHead from './technologyTableHead'
import TechnologyTableSubject from './technologyTableSubject'
import TechnologyTableItem from './technologyTableItem'

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
                                    <TechnologyTableItem title="Android" bar="warning" />
                                    <TechnologyTableItem title="Swift" bar="danger" />
                                    <TechnologyTableItem title="Kotlin" bar="danger" />
                                    <TechnologyTableItem title="Cordova" bar="danger" />
                                    <TechnologyTableItem title="Ionic" bar="danger" />
                                    <TechnologyTableItem title="Dart Lang" bar="danger" />
                                    <TechnologyTableItem title="Google Firebase" bar="danger" />

                                    <TechnologyTableSubject title="Dependency" />
                                    <TechnologyTableItem title="CDI" bar="success" />
                                    <TechnologyTableItem title="EJB" bar="success" />
                                    <TechnologyTableItem title="Apache Maven" bar="success" />
                                    <TechnologyTableItem title="NPM" bar="success" />
                                    <TechnologyTableItem title="Gradle" bar="info" />
                                    <TechnologyTableItem title="Composer" bar="warning" />
                                    <TechnologyTableItem title="JFrog" bar="warning" />

                                    <TechnologyTableSubject title="Log" />
                                    <TechnologyTableItem title="Log4J" bar="success" />

                                    <TechnologyTableSubject title="Scheduler" />
                                    <TechnologyTableItem title="Quartz" bar="success" />
                                    <TechnologyTableItem title="Cron" bar="success" />

                                    <TechnologyTableSubject title="Security" />
                                    <TechnologyTableItem title="JWT" bar="success" />
                                    <TechnologyTableItem title="OAuth2" bar="success" />
                                    <TechnologyTableItem title="Spring Security" bar="success" />
                                    <TechnologyTableItem title="Apache Shiro" bar="danger" />
                                    <TechnologyTableItem title="Hibernate Envers" bar="success" />

                                    <TechnologyTableSubject title="Report" />
                                    <TechnologyTableItem title="Apache POI" bar="success" />
                                    <TechnologyTableItem title="Jasper - iReport" bar="success" />

                                    <TechnologyTableSubject title="Database - ORM" />
                                    <TechnologyTableItem title="JPA - Hibernate" bar="success" />
                                    <TechnologyTableItem title="Spring Data-JPA" bar="success" />
                                    <TechnologyTableItem title="Criteria" bar="success" />
                                    <TechnologyTableItem title="HQL - JPQL" bar="success" />
                                    <TechnologyTableItem title="Named - Native Query" bar="success" />

                                    <TechnologyTableSubject title="Data" />
                                    <TechnologyTableItem title="HTTP" bar="success" />
                                    <TechnologyTableItem title="API REST - RESTFul" bar="success" />
                                    <TechnologyTableItem title="End Point" bar="success" />
                                    <TechnologyTableItem title="Postman" bar="success" />
                                    <TechnologyTableItem title="JSON" bar="success" />
                                    <TechnologyTableItem title="XML" bar="success" />
                                    <TechnologyTableItem title="YAML" bar="warning" />
                                    <TechnologyTableItem title="Soap" bar="warning" />
                                    <TechnologyTableItem title="Swagger" bar="warning" />
                                    <TechnologyTableItem title="Webservices" bar="success" />

                                    <TechnologyTableSubject title="Microservices" />
                                    <TechnologyTableItem title="Zuul API" bar="success" />
                                    <TechnologyTableItem title="Netflix Eureka Server" bar="success" />
                                    <TechnologyTableItem title="Postman" bar="success" />

                                    <TechnologyTableSubject title="Application Server" />
                                    <TechnologyTableItem title="TomCat" bar="success" />
                                    <TechnologyTableItem title="WildFly" bar="success" />
                                    <TechnologyTableItem title="Websphere" bar="success" />
                                    <TechnologyTableItem title="Xampp" bar="success" />

                                    <TechnologyTableSubject title="IDE" />
                                    <TechnologyTableItem title="STS - Spring Tool Suite" bar="success" />
                                    <TechnologyTableItem title="Eclipse" bar="success" />
                                    <TechnologyTableItem title="NetBeans" bar="success" />
                                    <TechnologyTableItem title="Android Studio" bar="success" />
                                    <TechnologyTableItem title="IntelliJ IDEA" bar="success" />
                                    <TechnologyTableItem title="Visual Studio Code" bar="success" />

                                    <TechnologyTableSubject title="Other" />
                                    <TechnologyTableItem title="Visual Basic 6 (VB)" bar="warning" />
                                    <TechnologyTableItem title="Visual Basic Application (VBA)" bar="info" />
                                    <TechnologyTableItem title="Delphi 4, 7, 2007" bar="success" />
                                    <TechnologyTableItem title="Go - Golang" bar="danger" />
                                    <TechnologyTableItem title="Python 3" bar="danger" />
                                    <TechnologyTableItem title="PHP 7 - POO" bar="danger" />
                                </tbody>
                            </table>
                            <GoTo type="dark" to="technology" />
                        </div>
                    </div>

                    {/* <!-- FRONTEND SKILLS --> */}
                    <div id="content-frontend" className="tab-pane fade show px-2" role="tabpanel">
                        <div className="table-responsive">
                            <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="Template" />
                                    <TechnologyTableItem title="HTML" bar="success" />
                                    <TechnologyTableItem title="Responsive" bar="success" />
                                    <TechnologyTableItem title="Thymeleaf" bar="success" />
                                    <TechnologyTableItem title="Primefaces 3" bar="success" />
                                    <TechnologyTableItem title="XHTML" bar="success" />
                                    <TechnologyTableItem title="XML" bar="success" />
                                    <TechnologyTableItem title="Regex" bar="info" />
                                    <TechnologyTableItem title="Javascript" bar="success" />
                                    <TechnologyTableItem title="JQuery" bar="warning" />
                                    <TechnologyTableItem title="Ajax" bar="warning" />
                                    <TechnologyTableItem title="CSS" bar="success" />
                                    <TechnologyTableItem title="GRID" bar="info" />
                                    <TechnologyTableItem title="Flexbox" bar="info" />
                                    <TechnologyTableItem title="Bootstrap" bar="success" />
                                    <TechnologyTableItem title="Material Design - Materialize" bar="info" />
                                    <TechnologyTableItem title="TypeScript" bar="info" />

                                    <TechnologyTableSubject title="SPA" />
                                    <TechnologyTableItem title="Angular" bar="info" />
                                    <TechnologyTableItem title="React" bar="success" />
                                    <TechnologyTableItem title="React Native" bar="info" />
                                    <TechnologyTableItem title="Redux" bar="success" />
                                    <TechnologyTableItem title="NextJS" bar="success" />
                                    <TechnologyTableItem title="Vue" bar="warning" />

                                    <TechnologyTableSubject title="Chart" />
                                    <TechnologyTableItem title="ApexCharts.js" bar="success" />
                                    <TechnologyTableItem title="Chart.js" bar="success" />

                                    <TechnologyTableSubject title="Design" />
                                    <TechnologyTableItem title="Corel Draw" bar="info" />
                                    <TechnologyTableItem title="Inkscape" bar="info" />
                                    <TechnologyTableItem title="Adobe Illustrator" bar="info" />
                                    <TechnologyTableItem title="Adobe Photoshop" bar="info" />
                                    <TechnologyTableItem title="Adobe After Effects" bar="info" />
                                    <TechnologyTableItem title="Adobe Premier" bar="info" />

                                    <TechnologyTableSubject title="IDE" />
                                    <TechnologyTableItem title="Visual Studio Code" bar="success" />
                                    <TechnologyTableItem title="Sublime" bar="info" />
                                    <TechnologyTableItem title="Atom" bar="info" />
                                    <TechnologyTableItem title="Notepad++" bar="success" />
                                    <TechnologyTableItem title="Chrome Developer Tools" bar="info" />

                                    <TechnologyTableSubject title="Digital Marketing" />
                                    <TechnologyTableItem title="Google Analytics" bar="info" />
                                    <TechnologyTableItem title="Google Tag Manager" bar="info" />
                                    <TechnologyTableItem title="Google Optimizer" bar="info" />
                                    <TechnologyTableItem title="SEO" bar="info" />

                                    <TechnologyTableSubject title="CMS - ECOMMERCE" />
                                    <TechnologyTableItem title="Joomla" bar="warning" />
                                    <TechnologyTableItem title="WordPress" bar="success" />
                                    <TechnologyTableItem title="Woocommerce" bar="success" />
                                </tbody>
                            </table>
                            <GoTo type="dark" to="technology" />
                        </div>
                    </div>

                    {/* <!-- DATABASE SKILLS --> */}
                    <div id="content-database" className="tab-pane fade show px-2" role="tabpanel">
                        <div className="table-responsive">
                            <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="RDBMS - NoSQL" />
                                    <TechnologyTableItem title="SQL Server" bar="success" />
                                    <TechnologyTableItem title="MySQL WorkBench" bar="success" />
                                    <TechnologyTableItem title="Oracle SQL Developer" bar="success" />
                                    <TechnologyTableItem title="PostgreSQL" bar="success" />
                                    <TechnologyTableItem title="SQLite" bar="success" />
                                    <TechnologyTableItem title="DBeaver" bar="success" />
                                    <TechnologyTableItem title="HeidiSQL" bar="success" />
                                    <TechnologyTableItem title="SQuirreL" bar="success" />
                                    <TechnologyTableItem title="Apache Derby" bar="success" />
                                    <TechnologyTableItem title="MongoDB" bar="info" />
                                    
                                    <TechnologyTableSubject title="SQL" />
                                    <TechnologyTableItem title="Stored Procedure" bar="success" />
                                    <TechnologyTableItem title="Function" bar="success" />
                                    <TechnologyTableItem title="Trigger" bar="success" />
                                    <TechnologyTableItem title="View" bar="success" />
                                    <TechnologyTableItem title="Complexes Selects" bar="success" />
                                    <TechnologyTableItem title="Join" bar="success" />
                                    <TechnologyTableItem title="Subquery" bar="success" />
                                    <TechnologyTableItem title="Count - Sum - AVG" bar="success" />
                                    <TechnologyTableItem title="Group - Having" bar="success" />
                                    
                                    <TechnologyTableSubject title="ETL" />
                                    <TechnologyTableItem title="SQL Server Integration Services" bar="success" />

                                    <TechnologyTableSubject title="Big Data" />
                                    <TechnologyTableItem title="Hadoop" bar="danger" />
                                    <TechnologyTableItem title="Apache Spark" bar="danger" />
                                    <TechnologyTableItem title="Python 3" bar="danger" />
                                </tbody>
                            </table>
                            <GoTo type="dark" to="technology" />
                        </div>
                    </div>

                    {/* <!-- DEVOPS SKILLS --> */}
                    <div id="content-devops" className="tab-pane fade show px-2" role="tabpanel">
                        <div className="table-responsive">
                            <table className="table table-sm table-borderless table-hover thead-dark text-content-dark">
                                <TechnologyTableHead />
                                <tbody>
                                    <TechnologyTableSubject title="Automation" />
                                    <TechnologyTableItem title="Jenkins" bar="warning" />
                                    <TechnologyTableItem title="Kubernetes" bar="danger" />
                                    <TechnologyTableItem title="Elasticsearch" bar="danger" />
                                    <TechnologyTableItem title="Docker" bar="warning" />
                                    
                                    <TechnologyTableSubject title="Tests" />
                                    <TechnologyTableItem title="JUnit" bar="info" />
                                    <TechnologyTableItem title="Selenium" bar="warning" />
                                    <TechnologyTableItem title="Mockito" bar="warning" />
                                    <TechnologyTableItem title="TDD" bar="danger" />
                                    
                                    <TechnologyTableSubject title="Repository" />
                                    <TechnologyTableItem title="GitLab" bar="success" />
                                    <TechnologyTableItem title="GitHub" bar="success" />
                                    <TechnologyTableItem title="Bitbucket" bar="success" />
                                    <TechnologyTableItem title="Tortoise SVN" bar="success" />
                                    <TechnologyTableItem title="JFrog" bar="warning" />
                                    
                                    <TechnologyTableSubject title="Cloud" />
                                    <TechnologyTableItem title="Heroku" bar="success" />
                                    <TechnologyTableItem title="Spring Cloud" bar="success" />
                                </tbody>
                            </table>
                            <GoTo type="dark" to="technology" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnologyTable