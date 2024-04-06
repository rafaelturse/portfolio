import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

function GoToPage({ ...props }) {
    return (
        <Link to={`${props.to}`}>
            <span className={props.className}>
                {props.icon}
                {props.title}
            </span>
        </Link>
    )
}

export default GoToPage