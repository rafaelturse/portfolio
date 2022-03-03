import React from 'react';
import LocalStorageService from '../../service/localStorageService'

import {ReactComponent as IconAddressBook} from '../../art/icon/pack/address-book.svg'
import {ReactComponent as IconTrophy} from '../../art/icon/pack/trophy.svg'
import {ReactComponent as IconGear} from '../../art/icon/pack/gear.svg'

class HeadlineMainSubjects extends React.Component {

    setDoClickComponent(component) { LocalStorageService.setItem('doClickComponent', component) }

    componentDidMount() { LocalStorageService.setItem('doClickComponent', '') }

    render() {
        const faSecondary = {opacity:.4};

        return (
            <section>
                <div className="row my-5">
                    <div className="col card-link text-center p-5">
                        <a href="#/technical" onClick={() => this.setDoClickComponent('resume')}>
                            <IconAddressBook />
                            <div className='fs-2'>Resume</div>
                            <p>short description about my journey, education and career, ready to download</p>
                        </a>
                    </div>
                    <div className="col card-link text-center p-5">
                        <a href="#/professional">
                            <IconTrophy />
                            <div className='fs-2'>Professional</div>
                            <p>contact information, education, career, profile and some curiosities about me</p>
                        </a>
                    </div>
                    <div className="col card-link text-center p-5">
                        <a href="#/technical">                            
                            <IconGear />
                            <div className='fs-2'>Technical</div>
                            <p>information about development skills and programming languages</p>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default HeadlineMainSubjects