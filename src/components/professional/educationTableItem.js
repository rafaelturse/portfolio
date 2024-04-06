import React from 'react';

function EducationTableItem({ ...props }) {
    return (
        <tr class="cursor-link" data-bs-toggle="modal" data-bs-target={`#${props.target}`}>
            <td><span className="text-skill mx-1">{props.title}</span></td>
            <td><span className="text-skill d-flex justify-content-center mx-1">{props.duration}</span></td>
        </tr>
    )
}

export default EducationTableItem