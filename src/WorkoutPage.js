import React from 'react'
import'./WorkoutPage.css'
import Icon from './Icon.js'
import Nav from './Nav.js'
import VideoCard from './VideoCard'
function WorkoutPage() {
    return (
        <div className="workoutpage">
                 <Nav/>
                 <hr></hr>
            <div className="workoutpage__icons">
             <Icon className="active" text="Strength " image="https://www.flaticon.com/svg/static/icons/svg/1468/1468326.svg"/>
             <Icon text="Yoga" image="https://www.flaticon.com/svg/static/icons/svg/2647/2647619.svg"/>
             <Icon text="Meditation" image="https://www.flaticon.com/svg/static/icons/svg/2647/2647603.svg"/>
             <Icon text="Cardio" image="https://www.flaticon.com/svg/static/icons/svg/3043/3043172.svg"/>
             <Icon text="Stretching" image="https://www.flaticon.com/svg/static/icons/svg/2320/2320672.svg"/>
             <Icon text="Cycling" image="https://www.flaticon.com/svg/static/icons/svg/3043/3043168.svg"/>
             <Icon text="Outdoor" image="https://www.flaticon.com/svg/static/icons/svg/2833/2833311.svg"/>
             <Icon text="Running" image="https://www.flaticon.com/svg/static/icons/svg/808/808507.svg"/>
            </div>

            <div className="workoutpage__videos" >
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    )
}

export default WorkoutPage
