import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

export const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};
export default Body;
