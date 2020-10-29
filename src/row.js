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
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
        </div>
     </div>
    )
}

export default row
