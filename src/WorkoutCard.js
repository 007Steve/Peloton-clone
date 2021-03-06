import React from 'react'
import './WorkoutCard.css'
function WorkoutCard({time,title,coach,type, mins}) {
    return (
        <div className="WorkoutCard__conatainer">
            <div className="WorkoutCard__card">
                <p id="time">{time}</p>
                <div className="WorkoutCard__title">
                    <p className="WorkoutCard__title-texts">{title}</p>
                </div>
                <div  className="WorkoutCard__info">
                    <div className="WorkoutCard__info-coach">{coach} - {type}
                        <div className="WorkoutCard__info-container">
                            <button>Count Me In</button>
                            <div>
                                <p className="WorkoutCard__info-mins">{mins}</p>
                                <p className="WorkoutCard__info-tilStart">till Start</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
    )
}

export default WorkoutCard
