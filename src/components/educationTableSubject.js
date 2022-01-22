import React from 'react';

function EducationTableSubject({ ...props }) {
    return (
        <tr className="table-subject"><td colspan="2"><span className="text-skill text-center"><div className="fs-5">{props.title}</div></span></td></tr>
    )
}

export default EducationTableSubject