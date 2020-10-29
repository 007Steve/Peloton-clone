import React from 'react'
import './ClassCard.css'
import { Link} from 'react-router-dom'
function ClassCard({title,id}) {
    return (
        <div className="classCard__container">
            <div className="classCard__card">
            <Link to={`/workout/${id}`}>
                <img id="image" src="" alt=""/>
                <h2 id="title__text">{title}</h2>
                </Link>
            </div>
        </div>
    )
}

export default ClassCard
