import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-5">
      <div className="flex col-span-1 gap-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-14 mt-7 cursor-pointer hover:scale-110 transition-transform"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-28 m-0 "
          alt="youtube logo"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
        />
      </div>
      <div className="mt-10 col-span-10 ml-96">
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 p-2 px-6 rounded-r-full t">
          🔍
        </button>
      </div>
      <div className="mt-10 col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
