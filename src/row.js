import React from 'react'
import WorkoutCard from './WorkoutCard'
import './row.css'
function row() {
    return (
        <div className="row__container">
            <div className="row_options">
            <h5>Live & Upcoming</h5>
            <p>View full schedule  </p>
            </div>
          
        <div className="row_workoutcard">
            <WorkoutCard time="3:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="1:05"/>
            <WorkoutCard time="5:00 pm" title="45 min Power Yoga" coach="Vanessa Plummer" type="Yoga" mins="20:16"/>
            <WorkoutCard time="6:00 pm" title="60 min Intervals Ride" coach="Fabio Mclovell" type="Bike" mins="69:42"/>
        </div>
     </div>
    )
}

export default row
