import React from 'react'

function TechnologyTableSubject({ ...props }) {
    return (
        <tr className="table-subject"><td colspan="2"><span className="text-skill text-center"><div className="fs-5">{props.title}</div></span></td></tr>
    )
}

export default TechnologyTableSubject