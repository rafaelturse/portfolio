import React from 'react'

import PageTitle from '../general/pageTitle'
import Job from './job';

import CompanyXAU from '../../art/company/company-egr.png'
import CompanyGDI from '../../art/company/company-gdi.png'
import CompanyFCC from '../../art/company/company-fcc.png'
import CompanySamsung from '../../art/company/company-samsung.png'
import CompanyMagna from '../../art/company/company-magna.jpg'
import CompanyMMCS from '../../art/company/company-mmcs.png'
import CompanyIbope from '../../art/company/company-ibope.png'
import CompanySiscart from '../../art/company/company-siscart.jpg'
import CompanyCultura from '../../art/company/company-lvrariacultura.png'
import CompanyAdvanta from '../../art/company/company-advanta.png'
import CompanyAtento from '../../art/company/company-atento.png'

class Career extends React.Component {
    render() {
        return (
            <section id="career" className="my-5">
                <PageTitle
                    icon={
                        <>
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                        </>
                    }
                    title="Career"
                />

                <Job
                    path={CompanyXAU}
                    range="jan/2022 - currently"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Express Gold Refining Ltd."
                    description={
                        <span>
                            In this challenge, I lead the company's website improvements project, doing frontend customization, implementation of new features, and 
                            bug fixing in templates and environments of 
                            <span class="badge bg-dark m-1">WordPress</span>and 
                            <span class="badge bg-dark m-1">WooCommerce</span>, through
                            <span class="badge bg-dark m-1">HTML</span>,
                            <span class="badge bg-dark m-1">CSS</span>,
                            <span class="badge bg-dark m-1">Javascript</span>,
                            <span class="badge bg-dark m-1">PHP</span>,
                            <span class="badge bg-dark m-1">MySQL</span>,
                            <span class="badge bg-dark m-1">Git</span>,
                            <span class="badge bg-dark m-1">UX/UI</span>,
                            <span class="badge bg-dark m-1">SEO</span>,
                            <span class="badge bg-dark m-1">Google Analytics</span>.
                        </span>
                    }
                    mapTitle="mapXAU"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6710636131497!2d-79.38101738450219!3d43.655011579121194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb34d6967d53%3A0xd87607794638b22e!2sExpress%20Gold%20Refining%20Ltd.!5e0!3m2!1spt-BR!2sca!4v1645748338773!5m2!1spt-BR!2sca"
                />

                <Job
                    path={CompanyGDI}
                    range="jun/2020 - jan/2022"
                    roleIcon={<path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z" />}
                    role="Operation Supervisor"
                    company="GDI Integrated Facility Services · Full-time"
                    description="I guided the cleaning team as an operation supervisor, delegating daily functions and overseeing day-to-day operations 
                                within the building. Moreover, it facilitated the distribution of chemical products and the process of cleaning machines, 
                                blowers, and robots for flooding areas containment. I Provided cleaning, stocking, and supplying for designated facility 
                                areas (dusting, sweeping, vacuuming, mopping, cleaning ceiling vents, washroom cleaning)."
                    mapTitle="mapGDI"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6986270210255!2d-79.38288808338073!3d43.6544381791211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb510746bd%3A0x8b89147b8cbbc837!2sToronto%20Eaton%20Centre!5e0!3m2!1spt-BR!2sca!4v1645747889194!5m2!1spt-BR!2sca"
                />

                <Job
                    path={CompanyFCC}
                    range="apr/2019 - dec/2019"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Fundação Carlos Chagas"
                    description={
                        <span>
                            I acted as a backend development of WEB applications, create news classes according to documentation to improve the system,
                            bug fix and sync the code with team, build and improve databases to fit new features and solve merging and commit reviewed
                            codes for approval on DevOps Mat.

                            <div className="fs-5 fw-bold mt-3 ">Main Projects</div>
                            <ul>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">
                                        Implementation of Public Tender Systems and Portals to consultation test scores and miscellaneous information
                                    </div>
                                    <p>
                                        Where I was always developing legacy systems in
                                        <span class="badge bg-dark m-1">Java 7</span>
                                        <span class="badge bg-dark m-1">JSP</span>
                                        <span class="badge bg-dark m-1">Mentawai</span>
                                        <span class="badge bg-dark m-1">Javascript</span>
                                        <span class="badge bg-dark m-1">Hibernate</span>
                                        <span class="badge bg-dark m-1">MySQL</span>and
                                        <span class="badge bg-dark m-1">Eclipse</span>.
                                        The architecture required that new codes be made to meet the demand for new public tenders. My team started the renewal of
                                        this system using
                                        <span class="badge bg-dark m-1">Java 8</span>with
                                        <span class="badge bg-dark m-1">Spring Boot</span>on
                                        <span class="badge bg-dark m-1">STS</span>with
                                        <span class="badge bg-dark m-1">Microservices</span>
                                        <span class="badge bg-dark m-1">Spring Cloud</span>
                                        <span class="badge bg-dark m-1">Eureka server</span> to register and balance microservices,
                                        <span class="badge bg-dark m-1">Zuul API Gateway</span>
                                        <span class="badge bg-dark m-1">JSON</span>
                                        <span class="badge bg-dark m-1">REST / Restful API</span>
                                        <span class="badge bg-dark m-1">Postman</span>
                                        <span class="badge bg-dark m-1">MySQL</span>
                                        <span class="badge bg-dark m-1">Jenkins</span>
                                        <span class="badge bg-dark m-1">GitLab</span>and
                                        <span class="badge bg-dark m-1">Tomcat</span>.
                                    </p>
                                </li>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">Billing generation Systems, file remittance and handling of return bank files</div>
                                    <p>
                                        where I worked on systems analysis, generation of reports using
                                        <span class="badge bg-dark m-1">SQL Server</span>
                                        and bug fixes to process batch files, identify payment and registration problems.
                                    </p>
                                </li>
                            </ul>
                        </span>
                    }
                    mapTitle="mapFCC"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6249897670828!2d-46.7178206850219!3d-23.58190843467261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56fb7f2979bf%3A0x17e0646c2cb7d6a1!2sFunda%C3%A7%C3%A3o%20Carlos%20Chagas!5e0!3m2!1sen!2sca!4v1587681579030!5m2!1sen!2sca"
                />

                <Job
                    path={CompanySamsung}
                    range="oct/2018 - apr/2019"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Samsung SDS Cello Logistics (Latin America)"
                    description={
                        <span>
                            My responsibilities as software developer were to handle backend web application development.

                            <div className="fs-5 fw-bold mt-3 ">Main Projects</div>
                            <ul>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">Samsung WMS, Warehouse Management</div>
                                    <p>
                                        I participated in this project as backend programmer of the web application running in
                                        <span class="badge bg-dark m-1">WildFly</span>
                                        where my main activities were to fix bugs and implement new CRUD features such as new fields and business rules using
                                        <span class="badge bg-dark m-1">Java 8</span>
                                        <span class="badge bg-dark m-1">Quartz</span>
                                        <span class="badge bg-dark m-1">Maven</span>
                                        <span class="badge bg-dark m-1">JSF</span>
                                        <span class="badge bg-dark m-1">Primefaces</span>
                                        <span class="badge bg-dark m-1">Hibernate</span>
                                        <span class="badge bg-dark m-1">Criteria</span>
                                        <span class="badge bg-dark m-1">JPQL</span>
                                        <span class="badge bg-dark m-1">Oracle SQL Developer</span>
                                        <span class="badge bg-dark m-1">Tortoise SVN</span>and
                                        <span class="badge bg-dark m-1">Eclipse</span>.
                                    </p>
                                </li>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">Mais Brasil - File Reader</div>
                                    <p>
                                        Using <span class="badge bg-dark m-1">Java 8</span>
                                        I built a simple standalone application to process files in batch, reading text files from an FTP server and writing them to a
                                        <span class="badge bg-dark m-1">MySQL</span> database.
                                    </p>
                                </li>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">Gerdau - Bucket Tracking</div>
                                    <p>
                                        Web Application bug fixing in
                                        <span class="badge bg-dark m-1">Java 7</span>and in
                                        <span class="badge bg-dark m-1">Javascript</span>for
                                        <span class="badge bg-dark m-1">Google MAPs API</span>.
                                        I also made some settings on the
                                        <span class="badge bg-dark m-1">Google Cloud</span>Platform account
                                        to make changes in the integration of maps with the system.
                                    </p>
                                </li>
                            </ul>
                        </span>
                    }
                    mapTitle="mapSamsung"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4326809394906!2d-46.70375408535436!3d-23.624670869817578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50dc8b722e33%3A0x67affaf291c79aa0!2sSamsung%20SDS%20Global%20SCL%20Latin%20America!5e0!3m2!1sen!2sca!4v1587682936521!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyMagna}
                    range="jul/2017 - oct/2018"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Magna Sistemas"
                    description={
                        <span>
                            I worked as a backend developer of WEB applications allocated to government clients and also private companies contracting the
                            Magna Sistemas systems consultancy.

                            <div className="fs-5 fw-bold mt-3 ">Main Projects</div>
                            <ul>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">DIPOL Electronic Police Report (São Paulo State Civil Police Intelligence)</div>
                                    <p>
                                        I worked mainly as a backend programmer using
                                        <span class="badge bg-dark m-1">Java 8</span>
                                        <span class="badge bg-dark m-1">JSF</span>
                                        <span class="badge bg-dark m-1">Hibernate Criteria</span>and
                                        <span class="badge bg-dark m-1">JPQL</span>.
                                        I also programmed other points of the application when necessary, configuring
                                        <span class="badge bg-dark m-1">Apache Maven</span>for package management;
                                        <span class="badge bg-dark m-1">Primefaces</span>
                                        <span class="badge bg-dark m-1">HTML</span>
                                        <span class="badge bg-dark m-1">CSS</span>
                                        <span class="badge bg-dark m-1">Javascript</span>and
                                        <span class="badge bg-dark m-1">Ajax</span>
                                        for the frontend;
                                        <span class="badge bg-dark m-1">MySQL</span>
                                        as a database language;
                                        <span class="badge bg-dark m-1">Apache POI</span>and
                                        <span class="badge bg-dark m-1">Jasper Reports</span>
                                        to generate reports and dashboards;
                                        <span class="badge bg-dark m-1">JUnit</span>for testing;
                                        <span class="badge bg-dark m-1"></span>Log4J for logs;
                                        <span class="badge bg-dark m-1">Git</span>and
                                        <span class="badge bg-dark m-1">GitLab</span>as devOps mat;
                                        <span class="badge bg-dark m-1">Hibernate Envers</span>for auditing;
                                        <span class="badge bg-dark m-1">WildFly</span>and
                                        <span class="badge bg-dark m-1">Websphere</span>as application servers and
                                        <span class="badge bg-dark m-1">Eclipse</span> as IDE.
                                        Basically, I developed java classes for the various CRUDs, created reports and acted strongly in the construction
                                        of the MVC architecture.
                                    </p>
                                </li>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">TOTVS-HR Integration for IBM Case Manager at JBS Friboi</div>
                                    <p>
                                        Acted as the only backend programmer in the team, using
                                        <span class="badge bg-dark m-1">Java 8</span>
                                        <span class="badge bg-dark m-1">reflection</span>and
                                        <span class="badge bg-dark m-1">ORM</span>
                                        to build a simple stand alone application to converge data from the
                                        <span class="badge bg-dark m-1">TOTVS-RH</span>application to the
                                        <span class="badge bg-dark m-1">IBM Case Manager</span>tool.
                                    </p>
                                </li>
                                <li className="mt-1">
                                    <div className="fs-6 fw-bold">Implementation of the Integrated System of Fines of Detran (State Department of Transit of São Paulo)</div>
                                    <p>
                                        I worked mainly as a backend programmer using
                                        <span class="badge bg-dark m-1">Java 8</span>using technologies and frameworks in
                                        <span class="badge bg-dark m-1">JSF</span>
                                        <span class="badge bg-dark m-1">Hibernate</span>
                                        <span class="badge bg-dark m-1">Criteria</span>
                                        <span class="badge bg-dark m-1">JPQL</span>and
                                        <span class="badge bg-dark m-1">MySQL</span>
                                        to fix bugs in the system.
                                    </p>
                                </li>
                            </ul>
                        </span>
                    }
                    mapTitle="mapMagna"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0288204798085!2d-46.686625485355776!3d-23.567408367699958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5776774592a9%3A0xafad307805963e69!2sMagna%20Sistemas!5e0!3m2!1sen!2sca!4v1587683757123!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyMMCS}
                    range="mar/2016 - jun/2017"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="MMCS Sistemas"
                    description={
                        <span>
                            In my position as software developer I handled bug fixing, backend development of reports and new features for Web Application
                            ERP System about Freight Forwarder Management, using
                            <span class="badge bg-dark m-1">Java 8</span>
                            <span class="badge bg-dark m-1">JSF</span>
                            <span class="badge bg-dark m-1">MVC</span>and
                            <span class="badge bg-dark m-1">Reflection</span>as backend;
                            <span class="badge bg-dark m-1">Apache Maven</span>for package management;
                            <span class="badge bg-dark m-1">Primefaces</span>
                            <span class="badge bg-dark m-1">HTML</span>
                            <span class="badge bg-dark m-1">CSS</span>
                            <span class="badge bg-dark m-1">Javascript</span>
                            <span class="badge bg-dark m-1">Ajax</span>and
                            <span class="badge bg-dark m-1">XHTML</span>as frontend;
                            <span class="badge bg-dark m-1">XML</span>for data transfer;
                            <span class="badge bg-dark m-1">JUnit</span>for unitary tests;
                            <span class="badge bg-dark m-1">Log4J</span>for application log;
                            <span class="badge bg-dark m-1">JPA</span>
                            <span class="badge bg-dark m-1">Hibernate</span>
                            <span class="badge bg-dark m-1">Criteria</span>
                            <span class="badge bg-dark m-1">HQL</span>
                            <span class="badge bg-dark m-1">MySQL</span>and
                            <span class="badge bg-dark m-1">Flyway</span>for database;
                            <span class="badge bg-dark m-1">Tomcat</span>and
                            <span class="badge bg-dark m-1">WildFly</span>for application server;
                            <span class="badge bg-dark m-1">Apache POI </span>and
                            <span class="badge bg-dark m-1">Jasper Reports</span>for reports;
                            <span class="badge bg-dark m-1">NetBeans</span>as IDE and
                            <span class="badge bg-dark m-1">Fedora Linux</span>as OS.
                        </span>
                    }
                    mapTitle="mapMMCS"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.641546398695!2d-46.64348698535632!3d-23.545391566887112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce585210199c93%3A0x609eb7e44c6622e6!2sMMCS%20do%20Brasil%20Servi%C3%A7os%20de%20Inform%C3%A1tica!5e0!3m2!1sen!2sca!4v1587683539683!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyIbope}
                    range="jun/2015 - mar/2016"
                    roleIcon={
                        <>
                            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
                            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
                            <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
                        </>
                    }
                    role="Business Intelligence Analyst"
                    company="IBOPE DTM Marketing de Relacionamento"
                    description={
                        <span>
                            In this role, I worked as a BI analyst to join the customer relationship marketing team of the CAOA Group, where we carried
                            out marketing campaigns for the sale of HB20, Azera and Subaru cars (various models). Moreover, reports and dashboards were
                            generated to the client in Tableau, which enabled better decision making. I facilitated database analysis with
                            <span class="badge bg-dark m-1">SQL Server 2015</span>and
                            <span class="badge bg-dark m-1">Oracle SQL Developer</span>,
                            where I built procedures, functions and generated reports from complex SQL queries and performed implementations and corrections
                            on
                            <span class="badge bg-dark m-1">ETL</span>artifacts with
                            <span class="badge bg-dark m-1">Microsoft Integration Services</span>.
                        </span>
                    }
                    mapTitle="mapIbope"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1858080542297!2d-46.6760658853569!3d-23.525818566165043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd7fa49d7d%3A0x1961e8565a2a5ddc!2sIBOPE%20DTM!5e0!3m2!1sen!2sca!4v1587684015710!5m2!1sen!2sca"
                />

                <Job
                    path={CompanySiscart}
                    range="may/2014 - apr/2015"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Siscart"
                    description={
                        <span>
                            To generate stability and more coverage, I worked on bug fixing and developing new features for registry systems based on
                            <span class="badge bg-dark m-1">Delphi 4</span>
                            <span class="badge bg-dark m-1">Tortoise SVN</span>
                            <span class="badge bg-dark m-1">MySQL 4</span>and
                            <span class="badge bg-dark m-1">Rave Reports</span>.
                        </span>
                    }
                    mapTitle="mapSiscart"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5170.042047621802!2d-46.635835245824545!3d-23.612516041754123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a23dd383585%3A0xcf9f4b2ea78a693f!2sSiscart%20Sistemas!5e0!3m2!1sen!2sca!4v1587684280433!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyCultura}
                    range="jun/2011 - feb/2014"
                    roleIcon={<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />}
                    role="Software Developer"
                    company="Livraria Cultura S.A"
                    description={
                        <span>
                            In this role, I provided development of ERP systems with
                            <span class="badge bg-dark m-1">Delphi 2007</span>
                            <span class="badge bg-dark m-1">SQL Server 2005</span>
                            <span class="badge bg-dark m-1">Tortoise</span>
                            <span class="badge bg-dark m-1">SVN</span>and
                            <span class="badge bg-dark m-1">Rave Reports</span>.
                            I developed the customer service module on
                            <span class="badge bg-dark m-1">ERP</span>
                            where it was possible to record and monitor the issue, extracting reports and enhancing customer experience.
                        </span>
                    }
                    mapTitle="mapCulturaDev"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2705517043823!2d-46.662325885356!3d-23.55872466737929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd631ba419%3A0xf4ddea8a1b94701f!2sLivraria%20Cultura%20-%20Conjunto%20Nacional!5e0!3m2!1sen!2sca!4v1587684333699!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyCultura}
                    range="feb/2011 - jun/2011"
                    roleIcon={<path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />}
                    role="Technical Support"
                    company="Livraria Cultura S.A"
                    description="I performed on-site technical support for Livraria Cultura stores and logistic sites, including assembly, configuration and 
                                 maintenance of computers, servers, routers, printers and fiscal printers. Furthermore, I handled with technical issues and 
                                 internal customer support for processes on store ERP."
                    mapTitle="mapCulturaSup"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2705517043823!2d-46.662325885356!3d-23.55872466737929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd631ba419%3A0xf4ddea8a1b94701f!2sLivraria%20Cultura%20-%20Conjunto%20Nacional!5e0!3m2!1sen!2sca!4v1587684333699!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyAdvanta}
                    range="dec/2009 - aug/2010"
                    roleIcon={<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />}
                    role="IT auxiliary"
                    company="Advanta Conectividade Inteligente"
                    description="In my role, I executed administrative reports in Microsoft Excel. Moreover, I managed work orders for technical issues in 
                                 computer equipment for Real Bank and Santander Bank branches."
                    mapTitle="mapAdvanta"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.378397553082!2d-46.725260513185056!3d-23.653757780907444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce510a497278bb%3A0xe92fa56aeea18f3c!2sPanamerica%20Park!5e0!3m2!1sen!2sca!4v1587684210113!5m2!1sen!2sca"
                />

                <Job
                    path={CompanyAtento}
                    range="feb/2008 - jul/2009"
                    roleIcon={<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />}
                    role="Technical Support"
                    company="Atento Brasil"
                    description="In this role, I provided broadband support, home network configuration, formatting and configuration of operating systems and 
                                 miscellaneous programs for customers, enhancing customer services skills."
                    mapTitle="mapAtento"
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29269.241005122018!2d-46.69865856044919!3d-23.508928399999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8179a085997%3A0x66d19018258faad9!2sAtento%20Brasil!5e0!3m2!1sen!2sca!4v1587684396239!5m2!1sen!2sca"
                />
            </section >
        )
    }
}

export default Career