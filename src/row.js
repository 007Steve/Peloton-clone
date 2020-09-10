import React from 'react'
import WorkoutCard from './WorkoutCard'
import './row.css'
function row() {
    return (
        <div>
          <h5>Live & Upcoming</h5>
        <div className="row_container">
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
            <WorkoutCard time="5:00 pm" title="30 min HIIT Ride" coach="Stephen Plummer" type="Bike" mins="23:34"/>
        </div>
        <hr/>
     </div>
    )
}

export default row
