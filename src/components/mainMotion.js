import React from 'react';

class MainMotion extends React.Component {
    render() {
        return (
            <section>
                <div className="container px-5">
                    <div id="motionCarousel" className="carousel carousel-dark slide carousel-fade mt-2 mb-5" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li className="active" data-bs-target="#motionCarousel" data-bs-slide-to="0"></li>
                            <li data-bs-target="#motionCarousel" data-bs-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container mb-5">
                                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/NGx7c1io3kc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <p className="font-text text-muted lh-sm">
                                        Logo animation and sound design with the professional Adobe After Effects
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container mb-5">
                                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/AA_dD6EelgY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <p className="text-muted lh-sm">
                                        Process of creating a logo using Adobe After Effects, where the project is
                                        extremely organized and developed with professional and modern techniques of
                                        animation and sound design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div><a href="#"><span className='d-flex justify-content-end fw-bold lh-sm px-3'>more</span></a></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainMotion;