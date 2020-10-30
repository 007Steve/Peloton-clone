import React from 'react'
import './VideoCard.css'
import ReactPlayer from "react-player";

function VideoCard({video,id}) {

    return (
        <div className="videocard">
           <ReactPlayer
                key={id}
                id="player"
                controls="true"
                url={`https://www.youtube.com/watch?v=${video}`}
                width="350px"
                height="200px"
                loop="true"
                muted="true"/>
        </div>
    )
}

export default VideoCard
