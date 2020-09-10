import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className="nav__container">
            <div className="nav__logo">
                <img className="nav__image" src="data:image/png;base64,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" alt=""/>
            </div>

            <div className="nav__options">
                <div className="nav__options-texts">  
                     <p className="nav__option-text">Classes</p>
                     <p className="nav__option-text">Schedule</p>
                     <p className="nav__option-text">Challenges</p>
                     <p className="nav__option-text">Profile</p>
                </div>
                
            </div>

            <div className="nav__profile">
                <img className="nav__image" id="nav__profilePic" src="https://media-exp1.licdn.com/dms/image/C4E03AQFPwqjsZFiBAg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=DYH-G8U6OJkNUYi-PFJQKWOSSNgwcqJABjbpYybkC2c" alt=""/>
              
            </div>
        </div>
    )
}

export default Nav
