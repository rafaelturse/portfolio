import React from 'react';

import logoMainTop from '../../art/logo/rafaelturse-logo-gear-light.svg'

class Header extends React.Component {
    render() {
        return (
            <section>
                <div className="background-dark-main-header">
                    <div className="container-fluid py-5">
                        <a href="/">
                            <img className="img-fluid mx-auto d-block" src={logoMainTop} width="500px" alt="logo-rafaelturse-horizontal-light" /></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header