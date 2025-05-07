import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between pt-5 pb-5 pl-15 pr-15 shadow-sm">
        <h2 className="font-extrabold text-2xl roboto">Where in the world?</h2>
        <button className="flex gap-2 items-center cursor-pointer">
          <IoMoonOutline />
          Dark Mode
        </button>
      </header>
    </>
  );
};

export default Header;
