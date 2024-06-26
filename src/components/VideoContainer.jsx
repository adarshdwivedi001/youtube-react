import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap gap-4 mx-2 justify-center">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
