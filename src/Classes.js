import React from 'react'
import ClassCard  from './ClassCard'
import './Classes.css'
import data from './classData'

function Classes() {
    return (
        <div className="classes">
                {data.map(data =>(
                <ClassCard title={data.title} id={data.id} backgroundImage={data.backgroundPic}/>
                ))}
        </div>
    )
}

export default Classes
