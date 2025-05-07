import React from "react";
import { CiSearch } from "react-icons/ci";

const Nav = ({ setValue, setFilter }) => {
  return (
    <>
      <nav className="flex justify-between pt-10 pl-20 pr-20">
        <label
          htmlFor="input"
          className="shadow-sm rounded flex items-center p-3 pl-6 w-[400px] gap-4"
        >
          <CiSearch className="text-2xl" />
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search for a country..."
            className="outline-0 border-none"
            id="input"
          />
        </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="shadow-sm pl-5 pr-5 pt-3 pb-3 rounded"
          defaultValue="all"
        >
          <option value="all">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </nav>
    </>
  );
};

export default Nav;
