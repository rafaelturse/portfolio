import React from 'react';

function LandscapeItem({ ...props }) {
    return (
        <div className="img-fluid image-zoon-icon d-flex justify-content-center m-2"><img className="image-main-icon" src={props.path} alt="..." /></div>
    )
}

export default LandscapeItem