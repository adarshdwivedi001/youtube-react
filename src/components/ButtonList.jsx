import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "JavaScript",
  "Web Development",
  "Street food",
  "Mixes",
  "Algorithms",
  "Computer",
  "News",
  "Fast food",
  "Paneer",
  "Shark tank",
  "Indian pop music",
  "Live",
  "Watched",
  "NCR",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn, idx) => (
        <Button key={idx} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
