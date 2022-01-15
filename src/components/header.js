import React from 'react';

import logoMainTop from '../art/logo/logo-rafaelturse-horizontal-light.svg'

class Header extends React.Component {
    render() {
        return (
            <section>
                <div className="background-dark-main-header">
                    <div className="container-fluid">
                        <div className="container py-5">
                            <a
                                href="https://rafaelturse.ca">
                                <img
                                    className="img-fluid"
                                    src={logoMainTop}
                                    width="400px"
                                    alt="logo-rafaelturse-horizontal-light"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;