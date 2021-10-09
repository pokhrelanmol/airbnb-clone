import React from "react";
import {
  SearchIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 ">
      {/* left */}
      <div className="relative flex h-10 cursor-pointer my-auto   ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* // right */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
          type="text"
          placeholder="what you are searching for ?"
          className="py-1 px-5 rounded-3xl outline-none bg-transparent flex-grow text-gray-400 text-sm  "
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
    </header>
  );
};

export default Header;
