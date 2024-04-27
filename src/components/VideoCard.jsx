import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info ?? {};
  const { channelTitle, title, thumbnails } = snippet ?? {};

  return (
    <div className="m-2 w-80 hover:shadow-lg hover:rounded-xl transition-all duration-500">
      <img
        className="rounded-xl transition-all duration-300 hover:rounded-none"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <ul className="m-1">
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
