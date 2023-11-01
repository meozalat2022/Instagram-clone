import React from "react";
import Image from "next/image";

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
      <div className="relative mt-1">
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

      {/* right  side */}
      <div className="flex items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden lg:inline-block w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="cursor-pointer h-16 w-16 relative">
          <Image
            layout="fill"
            className="object-contain"
            alt="User profile image"
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=360"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
