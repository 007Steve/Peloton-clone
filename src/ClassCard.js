import React from 'react'
import './ClassCard.css'
function ClassCard({title}) {
    return (
        <div className="classCard__container">
            <div className="classCard__card">
                <img id="image" src="" alt=""/>
                <h2 id="title__text">{title}</h2>
            </div>
        </div>
    )
}

export default ClassCard
