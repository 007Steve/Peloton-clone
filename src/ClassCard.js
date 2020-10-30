import React from 'react'
import './ClassCard.css'
import { Link} from 'react-router-dom'
function ClassCard({title,id,backgroundImage}) {

    const divStyle = {
        color: 'blue',
        backgroundImage: 
        `url(${backgroundImage})`,
      };
      
    return (
        <div className="classCard__container" style={divStyle}>
            <Link to={`/workout/${id}`} style={{ textDecoration: 'none' }}>
                <div className="classCard__card">
                    <img id="image" src="" alt=""/>
                    <h2 id="title__text">{title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default ClassCard
