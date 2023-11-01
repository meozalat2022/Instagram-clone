import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* left side */}
      <div className="hidden cursor-pointer lg:inline-grid h-24 w-24 relative">
        <Image
          className="object-contain"
          layout="fill"
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
        ></Image>
      </div>
      <div className="cursor-pointer lg:hidden h-24 w-10 relative">
        <Image
          className="object-contain"
          layout="fill"
          src="https://logos-world.net/wp-content/uploads/2020/06/Instagram-Logo.png"
        ></Image>
      </div>
      {/* middle side */}
      <div className="relative">
        <div className="absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black"
        />
      </div>
      <h1>Right Side</h1>
      {/* right  side */}
    </div>
  );
};

export default Header;
