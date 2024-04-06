import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

function pickType(i) {
    switch (i.props.type) {
        case 'light':
            return 'arrow-light';
        case 'dark':
            return 'arrow-dark';
        default:
            return 'light';
    }
}

function GoTo({ ...props }) {
    return (
        <div className="d-flex justify-content-end">
            <Link className={`${pickType({ props })} ${props.className}`} to={`#${props.to}`}>
                <svg className="bi bi-caret-up-fill" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
            </Link>
        </div>
    )
}

export default GoTo