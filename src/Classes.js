import React from 'react'
import ClassCard  from './ClassCard'
import './Classes.css'
import { Link} from 'react-router-dom'
function Classes() {
    return (
        <div className="classes">
            <Link to="/workout">
            <ClassCard title="Strength"/>
            </Link>
           
            <ClassCard title="Yoga"/>
            <ClassCard title="Meditation"/>
            <ClassCard title="Cardio"/>
            <ClassCard title="Stretching"/>
            <ClassCard title="Cycling"/>
            <ClassCard title="Outdoor"/>
            <ClassCard title="Running"/>
            <ClassCard title="Walking"/>
            <ClassCard title="Bootcamp"/>
        </div>
    )
}

export default Classes
