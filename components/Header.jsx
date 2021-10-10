import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import {
  SearchIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
const Header = ({ placeholder }) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("");
  //   helper function to validate the noof guest
  const validateNoOfGuest = () => {
    if (noOfGuests < 1) {
      setNoOfGuests(1);
    }
  };
  validateNoOfGuest();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests.toString(),
      },
    });
  };

  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* // right */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder={placeholder || "what are you  searching for ?"}
          className="py-1 px-5 rounded-3xl outline-none bg-transparent flex-grow text-gray-600 text-sm  "
        />
        <SearchIcon className=" hidden lg:inline-flex h-7 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2 " />
      </div>
      {/* // middle */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer hover:text-gray-400 hidden md:inline-block">
          Become a host
        </p>
        <GlobeAltIcon className=" h-6 lg:h-8 cursor-pointer hover:text-gray-400" />
        <div className="flex space-x-2 border rounded-full p-2 ">
          <MenuIcon className="h-6 cursor-pointer hover:text-gray-400" />
          <UserCircleIcon className="h-6 cursor-pointer hover:text-gray-400" />
        </div>
      </div>
      {/* CALANDER */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b-2 ">
            <h1 className=" font-medium text-2xl flex-grow">
              Number of Guests
            </h1>
            <UsersIcon className="h-4" />
            <input
              type="number"
              value={noOfGuests}
              min="1"
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="border border-gray-400 w-12 rounded-sm ml-2 pl-2 outline-none text-red-400"
            />
          </div>
          <div className="flex ">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-lg font-medium text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSearch}
              className="flex-grow text-red-400 hover:text-red-600 text-lg font-medium"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
