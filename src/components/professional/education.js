import React from 'react';
import LocalStorageService from '../../service/localStorageService'

import PageTitle from '../general/pageTitle'
import GoTo from '../link/goTo';

import EducationTableHead from './educationTableHead'
import EducationTableSubject from './educationTableSubject'
import EducationTableItem from './educationTableItem'
import EducationTableItemProgress from './educationTableItemProgress'

import ModalCollege from '../modal/modalCollege'
import ModalLanguage from '../modal/modalLanguage'
import ModalCourse from '../modal/modalCourse'

import CourseSaojudas from '../../art/course/course-saojudas.png'
import LanguagePortuguese from '../../art/icon/language/language-portuguese.svg'
import LanguageEnglish from '../../art/icon/language/language-english.svg'
import LanguageFrench from '../../art/icon/language/language-french.svg'
import LanguageSpanish from '../../art/icon/language/language-spanish.svg'

import CourseTypeScriptStarting from '../../art/course/course-ts.png'
import CourseJavaScriptStarting from '../../art/course/course-js.png'
import CourseBootstrap4 from '../../art/course/course-bootstrap.png'
import CourseJavaScriptNinja from '../../art/course/course-js.png'
import CourseNodeJSMongoDB from '../../art/course/course-nodejs.png'
import CourseSpringExperts from '../../art/course/course-spring-experts.png'
import CourseSpring1 from '../../art/course/icon-spring-boot-thymeleaf.svg'
import CourseSpring2 from '../../art/course/course-spring-framework.svg'
import CourseJava1 from '../../art/course/course-java.svg'
import CourseDockerEssentialTool from '../../art/course/course-docker.png'
import CourseModalGitNinja from '../../art/course/course-git.png'

import CertificateTypeScriptStarting from '../../art/certificate/certificate-UC-HOPBUD1TYR.png'
import CertificateJavaScriptStarting from '../../art/certificate/certificate-AW-SZ6LX7M5BW.jpg'
import CertificateBootstrap4 from '../../art/certificate/certificate-UC-IJPOB9W1.jpg'
import CertificateJavaScriptNinja from '../../art/certificate/certificate-UC-5bbc35ec-9846-43b8-aba6-ca4b88c91bff.jpg'
import CertificateNodeJSMongoDB from '../../art/certificate/certificate-UC-112c43d1-b059-4e18-ae02-60ad73a5b0ba.jpg'
import CertificateSpringExperts from '../../art/certificate/certificate-AW-FW246DZIH2.jpg'
import CertificateSpring1 from '../../art/certificate/certificate-UC-H0G0QEEF.jpg'
import CertificateSpring2 from '../../art/certificate/certificate-UC-QTC9JIJ0.jpg'
import CertificateJava1 from '../../art/certificate/certificate-UC-Z9BO5PN9.jpg'
import CertificateDockerEssentialTool from '../../art/certificate/certificate-UC-QYLSSW9H.jpg'
import CertificateModalGitNinja from '../../art/certificate/certificate-UC-9f4ffc10-ba3c-480c-8ae8-99e483a61dcc.jpg'

class Education extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <section id="education" className="my-5">
                <PageTitle
                    icon={
                        <>
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </>
                    }
                    title="Education"
                />

                <div class="container mt-5">
                    <div class="table-responsive my-5">
                        <table class="table table-sm table-borderless table-hover thead-dark text-content-dark">
                            <EducationTableHead />
                            <tbody>
                                <EducationTableSubject title="University Graduate" />
                                <EducationTableItem title="Information Systems" duration="2012 - 2016" target="modalInformationSystems" />

                                <EducationTableSubject title="Language" />
                                <EducationTableItemProgress title="Portuguese" bar="success" target="modalPortuguese" />
                                <EducationTableItemProgress title="English" bar="info" target="modalEnglish" />
                                <EducationTableItemProgress title="French" bar="danger" target="modalFrench" />
                                <EducationTableItemProgress title="Spanish" bar="danger" target="modalSpanish" />

                                <EducationTableSubject title="Frontend" />
                                <EducationTableItem title="Starting with TypeScript" duration="8h" target="modalTypeScriptStarting" />
                                <EducationTableItem title="Starting with JavasSript" duration="6h" target="modalJavaScriptStarting" />
                                <EducationTableItem title="Bootstrap 4" duration="11.5h" target="modalBootstrap4" />
                                <EducationTableItem title="Javascript Ninja" duration="42.5h" target="modalJSNinja" />

                                <EducationTableSubject title="Backend" />
                                <EducationTableItem title="NodeJS and MongoDB" duration="15.5h" target="modalNodeJSMongoDB" />
                                <EducationTableItem title="Spring Framework Expert" duration="120h" target="modalSpringExperts" />
                                <EducationTableItem title="Spring Boot and MVC with Thymeleaf" duration="8.5h" target="modalSpring1" />
                                <EducationTableItem title="Spring Framework 5 and Spring Boot 2" duration="7.5h" target="modalSpring2" />
                                <EducationTableItem title="Full Java" duration="41.5h" target="modalJava1" />

                                <EducationTableSubject title="DevOps" />
                                <EducationTableItem title="Docker: Essential Tool for Developers" duration="5.5h" target="modalDockerEssentialTool" />
                                <EducationTableItem title="Git and GitHub Ninja" duration="9h" target="modalGitNinja" />
                            </tbody>
                        </table>

                    </div>

                    <GoTo type="dark" to="education" />
                </div>

                {/* MODAL COLLEGE*/}
                <ModalCollege
                    id="modalInformationSystems"
                    title="University Graduate"
                    image={CourseSaojudas}
                    period="2012 - 2016"
                    course="Information Systems"
                    college="São Judas Tadeu University"
                    description={
                        `Bachelor of Information Systems from São Judas Tadeu University in São Paulo - SP, Brazil. In the work of conclusion of 
                        course, was developed a mobile application for the Android platform that managed chords of songs with diverse functions and 
                        interactivity with the user.`
                    }
                />

                {/* MODAL LANGUAGE*/}
                <ModalLanguage
                    id="modalPortuguese"
                    title="Language"
                    image={LanguagePortuguese}
                    period="1989 - Today"
                    language="Portuguese"
                    country="Brazil"
                    fluency="Fluence in Brazilian Portuguese"
                    bar="success"
                    percentage="100%"
                    description={
                        `I was born and raised in Brazil, I'm Brazilian. I lived in this beautiful country until the age of 30, so my mother language 
                        is Brazilian Portuguese.`
                    }
                />

                <ModalLanguage
                    id="modalEnglish"
                    title="Language"
                    image={LanguageEnglish}
                    period="2014 - Today"
                    language="English"
                    country="United States, England and Canada"
                    fluency="Fluence in English"
                    bar="info"
                    percentage="75%"
                    description={
                        `My favorite foreign language. My second language. I am very easy to learn English, easy to understand, listen to, speak and write. 
                        I took several courses at Cultura Inglesa in São Paulo and also studied online courses at Udemy.`
                    }
                />

                <ModalLanguage
                    id="modalFrench"
                    title="Language"
                    image={LanguageFrench}
                    period="2018 - Today"
                    language="French"
                    country="Canadá"
                    fluency="Fluence in French"
                    bar="danger"
                    percentage="25%"
                    description={
                        `I started to study French recently, with books and audio-CDs. I also bought an online course and I'm excited about the language, 
                        it has many similarities with Portuguese.`
                    }
                />

                <ModalLanguage
                    id="modalSpanish"
                    title="Language"
                    image={LanguageSpanish}
                    period="2001 - 2007"
                    language="Spanish"
                    country="Spain"
                    fluency="Fluence in Spanish"
                    bar="danger"
                    percentage="25%"
                    description={
                        `This one I studied at school and never practiced much, although living among the Latin people and similarities with the Portuguese 
                        language, my Spanish is very basic and rusty.`
                    }
                />

                {/* MODAL TECHNICAL*/}
                <ModalCourse
                    id="modalTypeScriptStarting"
                    title="Frontend"
                    icon={CourseTypeScriptStarting}
                    course="Starting with TypeScript"
                    description="A presentation of the powerful TypeScript language, demonstrating the main aspects and their application."
                    duration="8"
                    language="Brazilian Portuguese"
                    conclusion="sep-2019"
                    urlCertificate="https://www.algaworks.com/certs/HOPBUD1TYR/"
                    urlSchool="https://www.algaworks.com/"
                    certificate={CertificateTypeScriptStarting}
                />

                <ModalCourse
                    id="modalJavaScriptStarting"
                    title="Frontend"
                    icon={CourseJavaScriptStarting}
                    course="Starting with JavaScript"
                    description="A presentation of the powerful Javascript language, demonstrating the main aspects and their application."
                    duration="6"
                    language="Brazilian Portuguese"
                    conclusion="sep-2019"
                    urlCertificate="https://www.algaworks.com/certs/SZ6LX7M5BW/"
                    urlSchool="https://www.algaworks.com/"
                    certificate={CertificateJavaScriptStarting}
                />

                <ModalCourse
                    id="modalBootstrap4"
                    title="Frontend"
                    icon={CourseBootstrap4}
                    course="Bootstrap 4 - Complete, Practical and Responsive + 2 Projects"
                    description="Create Responsive Design for dashboards, product marketing, and applications with this hands-on course."
                    duration="11.5"
                    language="Brazilian Portuguese"
                    conclusion="apr-2019"
                    urlCertificate="https://www.udemy.com/certificate/UC-IJPOB9W1/"
                    urlSchool="https://www.udemy.com/course/bootstrap-4-completo/"
                    certificate={CertificateBootstrap4}
                />

                <ModalCourse
                    id="modalJSNinja"
                    title="Frontend"
                    icon={CourseJavaScriptNinja}
                    course="Javascript Ninja"
                    description="The course to learn REAL JavaScript!"
                    duration="42.5"
                    language="Brazilian Portuguese"
                    conclusion="jul-2020"
                    urlCertificate="https://www.udemy.com/certificate/UC-5bbc35ec-9846-43b8-aba6-ca4b88c91bff/"
                    urlSchool="https://www.udemy.com/course/curso-javascript-ninja/"
                    certificate={CertificateJavaScriptNinja}
                />

                <ModalCourse
                    id="modalNodeJSMongoDB"
                    title="Backend"
                    icon={CourseNodeJSMongoDB}
                    course="NodeJS and MongoDB"
                    description="Learn how to create websites and web systems using the NodeJS platform and the MongoDB database."
                    duration="15.5"
                    language="Brazilian Portuguese"
                    conclusion="feb-2021"
                    urlCertificate="https://www.udemy.com/certificate/UC-112c43d1-b059-4e18-ae02-60ad73a5b0ba/"
                    urlSchool="https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/"
                    certificate={CertificateNodeJSMongoDB}
                />

                <ModalCourse
                    id="modalSpringExperts"
                    title="Backend"
                    icon={CourseSpringExperts}
                    course="Spring Framework Expert"
                    description="Development of a beer sales system with Spring MVC, Spring Boot, Thymeleaf and Bootstrap."
                    duration="120"
                    language="Brazilian Portuguese"
                    conclusion="aug-2019"
                    urlCertificate="https://www.algaworks.com/certs/FW246DZIH2/"
                    urlSchool="https://www.algaworks.com/"
                    certificate={CertificateSpringExperts}
                />

                <ModalCourse
                    id="modalSpring1"
                    title="Backend"
                    icon={CourseSpring1}
                    course="Spring Boot and MVC with Thymeleaf"
                    description="First-step Web development course with Spring-Boot, MVC, JPA, Thymeleaf and Heroku."
                    duration="8.5"
                    language="Brazilian Portuguese"
                    conclusion="may-2019"
                    urlCertificate="https://www.udemy.com/certificate/UC-H0G0QEEF/"
                    urlSchool="https://www.udemy.com/spring-boot-mvc-com-thymeleaf/"
                    certificate={CertificateSpring1}
                />

                <ModalCourse
                    id="modalSpring2"
                    title="Backend"
                    icon={CourseSpring2}
                    course="Spring Framework 5 e Spring Boot 2"
                    description="Learn Spring Framework 5, Spring Boot 2 with Wildfly 11 (Using Datasource), Spring Data with Mongo and MySQL."
                    duration="7.5"
                    language="Brazilian Portuguese"
                    conclusion="may-2019"
                    urlCertificate="https://www.udemy.com/certificate/UC-QTC9JIJ0/"
                    urlSchool="https://www.udemy.com/spring-framework-5-spring-boot-2/"
                    certificate={CertificateSpring2}
                />

                <ModalCourse
                    id="modalJava1"
                    title="Backend"
                    icon={CourseJava1}
                    course="Full Java Object Oriented Programming + Projects"
                    description="Most didactic and complete course of Java and OO. Projects with UML, JDBC, JavaFX, Spring Boot, MySQL, MongoDB and more."
                    duration="41.5"
                    language="Brazilian Portuguese"
                    conclusion="apr-2019"
                    urlCertificate="https://www.udemy.com/certificate/UC-Z9BO5PN9/"
                    urlSchool="https://www.udemy.com/course/java-curso-completo/"
                    certificate={CertificateJava1}
                />

                <ModalCourse
                    id="modalDockerEssentialTool"
                    title="DevOps"
                    icon={CourseDockerEssentialTool}
                    course="Docker: Essential Tool for Developers"
                    description="Learn how to create complete professional environments with Docker, which is the industry's leading container technology!"
                    duration="5.5"
                    language="Brazilian Portuguese"
                    conclusion="oct-2019"
                    urlCertificate="https://www.udemy.com/certificate/UC-QYLSSW9H/"
                    urlSchool="https://www.udemy.com/course/curso-docker/"
                    certificate={CertificateDockerEssentialTool}
                />

                <ModalCourse
                    id="modalGitNinja"
                    title="DevOps"
                    icon={CourseModalGitNinja}
                    course="Git and GitHub Ninja"
                    description="Learn how to use git to version your projects and work as a team!"
                    duration="9"
                    language="Brazilian Portuguese"
                    conclusion="apr-2020"
                    urlCertificate="https://www.udemy.com/certificate/UC-9f4ffc10-ba3c-480c-8ae8-99e483a61dcc/"
                    urlSchool="https://www.udemy.com/course/git-e-github-ninja/"
                    certificate={CertificateModalGitNinja}
                />
            </section>
        )
    }
}

export default Education