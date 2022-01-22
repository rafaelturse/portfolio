import React from 'react';

function pickBar(i) {
    switch (i.props.bar) {
        case 'success':
            return 'bg-success w-100';
        case 'info':
            return 'bg-info w-75';
        case 'warning':
                return 'bg-warning w-50';
        case 'danger':
            return 'bg-danger w-25';
        default:
            return 'bg-success w-0';
    }
}

function EducationTableItemProgress({ ...props }) {
    return (
        (
            <tr class="cursor-link" data-bs-toggle="modal" data-bs-target={`#${props.target}`}>
                <td><span className="text-skill mx-1">{props.title}</span></td>
                <td><div className="progress"><div className={`progress-bar ${pickBar({ props })}`} role="progressbar"></div></div></td>
            </tr>
        )
    )
}

export default EducationTableItemProgress