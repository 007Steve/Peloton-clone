import React from 'react'
import './VideoCard.css'
import ReactPlayer from "react-player";
function VideoCard() {
    return (
        <div className="videocard">
           <ReactPlayer
                    id="player"
                    url="https://www.youtube.com/watch?v=CBWQGb4LyAM"
                    width="350px"
                    height="200px"
                    loop="true"
                    muted="true"/>
        </div>
    )
}

export default VideoCard
