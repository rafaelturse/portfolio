import React from 'react';
import LocalStorageService from '../service/localStorageService'
import EducationTableHead from './educationTableHead'
import PageTitle from './pageTitle'
import EducationTableSubject from './educationTableSubject'
import EducationTableItem from './educationTableItem'
import EducationTableItemProgress from './educationTableItemProgress'

import CourseSaojudas from '../art/course/course-saojudas.png'
import LanguagePortuguese from '../art/icon/language/language-portuguese.svg'
import LanguageEnglish from '../art/icon/language/language-english.svg'
import LanguageFrench from '../art/icon/language/language-french.svg'
import LanguageSpanish from '../art/icon/language/language-spanish.svg'

import ModalCollege from './modal/modalCollege'
import ModalLanguage from './modal/modalLanguage'

class Education extends React.Component {
    doClick(doClickComponent) { document.getElementById(doClickComponent).click(); }

    componentDidMount() {
        var doClickComponent = LocalStorageService.getItem('doClickComponent')

        if (doClickComponent) { this.doClick(doClickComponent) }
    }

    render() {
        return (
            <section id="data" className="my-5">
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
                                <EducationTableItem title="Starting with TypeScript" duration="8 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Starting with JavasSript" duration="6 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Bootstrap 4" duration="11.5 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Javascript Ninja" duration="42.5 Hours" target="modalInformationSystems" />

                                <EducationTableSubject title="Backend" />
                                <EducationTableItem title="NodeJS and MongoDB" duration="15.5 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Spring Framework Expert" duration="120 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Spring Boot and MVC with Thymeleaf" duration="8.5 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Spring Framework 5 and Spring Boot 2" duration="7.5 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Full Java 2019" duration="41.5 Hours" target="modalInformationSystems" />

                                <EducationTableSubject title="DevOps" />
                                <EducationTableItem title="Docker: Essential Tool for Developers" duration="5.5 Hours" target="modalInformationSystems" />
                                <EducationTableItem title="Git and GitHub Ninja" duration="9 Hours" target="modalInformationSystems" />
                            </tbody>
                        </table>
                    </div>
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
                
            </section>
        )
    }
}

export default Education