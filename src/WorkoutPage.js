import React, { useEffect, useState } from "react";
import "./WorkoutPage.css";
import Icon from "./Icon.js";
import Nav from "./Nav.js";
import { useParams } from "react-router-dom";
import ClassData from "./classData.js";
import TuneIcon from "@material-ui/icons/Tune";

function WorkoutPage() {
  const { id } = useParams();
  const classDataInfo = ClassData.find((data) => data.id === id);
  const query = "workouts";
  const [videos, setVideos] = useState([]);
  const apiKey = "AIzaSyDtJjWW6ktLwEq2yr5bEtWz5WaVTwcDHmQ";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${classDataInfo.title}${query}&maxResults=12`;

  useEffect(() => {
    async function fetchVideos() {
      fetch(url)
        .then((response) => response.json())
        .then((dataVideo) => setVideos(dataVideo.items));
    }
    fetchVideos();
  }, [url]);

  return (
    <div className="workoutpage">
      <Nav />
      <div className="workoutpage__icons">
        <Icon
          className="active"
          text="Strength "
          image="https://www.flaticon.com/svg/static/icons/svg/1468/1468326.svg"
        />
        <Icon
          text="Yoga"
          image="https://www.flaticon.com/svg/static/icons/svg/2647/2647619.svg"
        />
        <Icon
          text="Meditation"
          image="https://www.flaticon.com/svg/static/icons/svg/2647/2647603.svg"
        />
        <Icon
          text="Cardio"
          image="https://www.flaticon.com/svg/static/icons/svg/3043/3043172.svg"
        />
        <Icon
          text="Stretching"
          image="https://www.flaticon.com/svg/static/icons/svg/2320/2320672.svg"
        />
        <Icon
          text="Cycling"
          image="https://www.flaticon.com/svg/static/icons/svg/3043/3043168.svg"
        />
        <Icon
          text="Outdoor"
          image="https://www.flaticon.com/svg/static/icons/svg/2833/2833311.svg"
        />
        <Icon
          text="Running"
          image="https://www.flaticon.com/svg/static/icons/svg/808/808507.svg"
        />
      </div>
      <div className="workoutpage__videos">
        <div className="workoutpage__info">
          <p>{classDataInfo.title}</p>
          <div className="workoutpage__icon">
            <TuneIcon />
            <p>Filter</p>
          </div>
        </div>

        <div className="workoutpage__videosContainer">
          {videos.map((video) => (
            <iframe
            title="youtube"
              width="450"
              height="300"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;
