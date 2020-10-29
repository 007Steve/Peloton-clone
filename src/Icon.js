import React from 'react'
import './Icon.css'

function Icon({text,image}) {
    return (
        <div className="icon">
            <img  id="icon__image"src={image} alt="" />
             <p id="icon__text">{text}</p>
        </div>
    )
}

export default Icon
